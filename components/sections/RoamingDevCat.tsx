'use client';

import { useState, useEffect, useRef } from 'react';
import {
  motion,
  animate,
  useMotionValue,
  AnimatePresence,
} from 'framer-motion';

export default function RoamingDevCat() {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [catState, setCatState] = useState<'docked' | 'walking' | 'idle'>(
    'docked'
  );
  const [facingRight, setFacingRight] = useState(true);
  const [isFrustrated, setIsFrustrated] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const homePos = useRef({ x: 0, y: 0 });
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  /*
   * ----------------------------------------------------------
   * CAT / WORKSTATION GEOMETRY
   * ----------------------------------------------------------
   *
   * Workstation SVG:
   *   viewBox = 120 x 40
   *   rendered height = 36px
   *   baseline ≈ y 36
   *
   * Cat SVG:
   *   viewBox = 140 x 100
   *   rendered height = 85px
   *   tail/body baseline ≈ y 95
   *
   * We therefore align the cat's baseline with the
   * workstation's actual baseline rather than guessing
   * a mobile top/left coordinate.
   */

  const CAT_WIDTH = 140;
  const CAT_HEIGHT = 85;

  const calculateHomePosition = () => {
    const anchor = document.getElementById('workstation-anchor');

    if (!anchor) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);

    const rect = anchor.getBoundingClientRect();

    /*
     * The workstation SVG fills the anchor:
     *
     * SVG viewBox: 120 x 40
     * Anchor height: 36px
     *
     * Laptop baseline is around SVG y=36.
     */
    const workstationBaseline =
      rect.top + (36 / 40) * rect.height;

    /*
     * Cat baseline:
     *
     * SVG viewBox: 140 x 100
     * Rendered height: 85px
     *
     * The tail/body reaches approximately y=95.
     */
    const catBaselineOffset =
      (95 / 100) * CAT_HEIGHT;

    /*
     * Center the cat over the workstation.
     *
     * This is more robust than using rect.left + 5,
     * especially on mobile.
     */
    const targetX =
      rect.left + rect.width / 2 - CAT_WIDTH / 2;

    /*
     * Put the cat's paws/body exactly around the
     * workstation baseline.
     */
    const targetY =
      workstationBaseline - catBaselineOffset;

    homePos.current = {
      x: targetX,
      y: targetY,
    };

    /*
     * Only reposition immediately while docked.
     * When the user is scrolling, the roaming animation
     * remains untouched.
     */
    if (window.scrollY < 50 && catState === 'docked') {
      x.set(targetX);
      y.set(targetY);
    }
  };

  // ---------------------------------------------------------
  // INITIAL POSITION + RESPONSIVE POSITIONING
  // ---------------------------------------------------------
  useEffect(() => {
    setIsMounted(true);

    const initialTimer = window.setTimeout(() => {
      calculateHomePosition();
    }, 100);

    const handleResize = () => {
      calculateHomePosition();
    };

    window.addEventListener('resize', handleResize);

    /*
     * ResizeObserver is important here because the mobile
     * navbar can change its rendered geometry without a
     * traditional window resize.
     */
    let resizeObserver: ResizeObserver | null = null;

    const anchor = document.getElementById('workstation-anchor');

    if (anchor && typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        calculateHomePosition();
      });

      resizeObserver.observe(anchor);
    }

    /*
     * Also observe the header itself because mobile layout
     * changes can affect the anchor's position.
     */
    const header = anchor?.closest('header');

    if (
      header &&
      typeof ResizeObserver !== 'undefined'
    ) {
      if (!resizeObserver) {
        resizeObserver = new ResizeObserver(() => {
          calculateHomePosition();
        });
      }

      resizeObserver.observe(header);
    }

    return () => {
      window.clearTimeout(initialTimer);
      window.removeEventListener('resize', handleResize);
      resizeObserver?.disconnect();
    };
  }, [x, y, catState]);

  // ---------------------------------------------------------
  // SCROLL / ROAMING ENGINE
  // ---------------------------------------------------------
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      /*
       * BACK HOME
       */
      if (currentScroll < 50) {
        setCatState('docked');
        setFacingRight(true);

        animate(x, homePos.current.x, {
          duration: 0.5,
          ease: 'easeOut',
        });

        animate(y, homePos.current.y, {
          duration: 0.5,
          ease: 'easeOut',
        });

        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }

        return;
      }

      /*
       * ROAMING
       */
      setCatState('walking');
      setIsFrustrated(false);

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      const maxScroll = Math.max(
        document.body.scrollHeight - window.innerHeight,
        1
      );

      const scrollPercent = Math.min(
        Math.max(currentScroll / maxScroll, 0),
        1
      );

      const targetY =
        window.innerHeight * 0.15 +
        scrollPercent * window.innerHeight * 0.7;

      const wanderX =
        Math.sin(scrollPercent * 12) *
          (window.innerWidth * 0.35) +
        window.innerWidth / 2;

      setFacingRight(wanderX > x.get());

      animate(y, targetY, {
        duration: 0.2,
        ease: 'linear',
      });

      animate(x, wanderX, {
        duration: 0.2,
        ease: 'linear',
      });

      /*
       * STOP AFTER SCROLL
       */
      scrollTimeout.current = setTimeout(() => {
        setCatState('idle');

        const isRightSide =
          x.get() > window.innerWidth / 2;

        const safeMarginX = isRightSide
          ? window.innerWidth - 90
          : 10;

        animate(x, safeMarginX, {
          duration: 0.7,
          ease: 'easeInOut',
        });

        setFacingRight(!isRightSide);
      }, 350);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [x, y]);

  // ---------------------------------------------------------
  // FRUSTRATION ENGINE
  // ---------------------------------------------------------
  useEffect(() => {
    let frustrationTimer: NodeJS.Timeout;
    let calmTimer: NodeJS.Timeout;

    if (catState === 'docked') {
      const scheduleFrustration = () => {
        frustrationTimer = setTimeout(() => {
          setIsFrustrated(true);

          calmTimer = setTimeout(() => {
            setIsFrustrated(false);
            scheduleFrustration();
          }, 600);
        }, 2000);
      };

      scheduleFrustration();
    } else {
      setIsFrustrated(false);
    }

    return () => {
      clearTimeout(frustrationTimer);
      clearTimeout(calmTimer);
    };
  }, [catState]);

  if (!isMounted || !isVisible) {
    return null;
  }

  return (
    <motion.div
      className="
        pointer-events-none
        fixed
        z-50
        will-change-transform
        will-change-opacity
        overflow-visible
      "
      style={{
        left: x,
        top: y,
      }}
    >
      <motion.div
        className="
          relative
          h-[85px]
          w-[140px]
          drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]
          overflow-visible
        "
        animate={{
          scaleX: facingRight ? 1 : -1,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        {/* Glow */}
        <div
          className="
            absolute
            top-1/2
            left-1/2
            h-[100px]
            w-[100px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-teal-500/10
            blur-[40px]
            pointer-events-none
          "
        />

        {/* ==================================================
            DOCKED CAT
        ================================================== */}
        {catState === 'docked' ? (
          <svg
            viewBox="0 0 140 100"
            className="
              relative
              z-10
              h-full
              w-full
              overflow-visible
            "
          >
            <AnimatePresence>
              {isFrustrated && (
                <motion.text
                  initial={{
                    opacity: 0,
                    y: 40,
                    x: 72,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 25,
                    x: 75,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: 15,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: 'easeOut',
                  }}
                  fill="#2dd4bf"
                  fontSize="12"
                  fontWeight="900"
                  className="drop-shadow-lg"
                >
                  Ughhhh...
                </motion.text>
              )}
            </AnimatePresence>

            {/* Body */}
            <path
              d="M 35 85 C 20 85, 20 45, 45 45 C 55 45, 60 70, 55 85 Z"
              fill="#f8fafc"
            />

            {/* Tail */}
            <path
              d="M 35 80 C 10 80, 5 95, 25 95 C 35 95, 45 90, 45 85"
              fill="none"
              stroke="#f8fafc"
              strokeWidth="6"
              strokeLinecap="round"
            />

            {/* Head */}
            <motion.g
              animate={
                isFrustrated
                  ? {
                      y: 6,
                      rotate: -5,
                    }
                  : {
                      y: 0,
                      rotate: 0,
                    }
              }
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 15,
              }}
              style={{
                transformOrigin: '50px 65px',
              }}
            >
              <ellipse
                cx="50"
                cy="40"
                rx="18"
                ry="15"
                fill="#f8fafc"
              />

              <path
                d="M 38 28 L 42 12 L 50 26 Z"
                fill="#f8fafc"
              />

              <path
                d="M 52 25 L 60 12 L 64 28 Z"
                fill="#f8fafc"
              />

              {isFrustrated ? (
                <g>
                  <path
                    d="M 46 36 L 51 39 L 46 42"
                    stroke="#0a0a0a"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M 64 36 L 59 39 L 64 42"
                    stroke="#0a0a0a"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M 52 46 Q 55 43, 58 46"
                    stroke="#0a0a0a"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </g>
              ) : (
                <g>
                  <circle
                    cx="56"
                    cy="38"
                    r="2.5"
                    fill="#0a0a0a"
                  />

                  <circle
                    cx="66"
                    cy="38"
                    r="2.5"
                    fill="#0a0a0a"
                  />

                  <path
                    d="M 60 43 L 61 45 L 62 43"
                    stroke="#0a0a0a"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </g>
              )}
            </motion.g>

            {/* Frustrated paws */}
            {isFrustrated ? (
              <g>
                <motion.path
                  d="M 35 60 Q 30 38 46 36"
                  stroke="#f8fafc"
                  strokeWidth="6"
                  strokeLinecap="round"
                  fill="none"
                  animate={{
                    y: [0, 1.5, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.5,
                    ease: 'easeInOut',
                  }}
                />

                <motion.path
                  d="M 50 65 Q 68 40 64 36"
                  stroke="#e2e8f0"
                  strokeWidth="6"
                  strokeLinecap="round"
                  fill="none"
                  animate={{
                    y: [0, 1.5, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.5,
                    delay: 0.1,
                    ease: 'easeInOut',
                  }}
                />
              </g>
            ) : (
              /* Typing paws */
              <g>
                <motion.path
                  d="M 45 60 L 76 81"
                  stroke="#f8fafc"
                  strokeWidth="6"
                  strokeLinecap="round"
                  style={{
                    transformOrigin: '45px 60px',
                  }}
                  animate={{
                    rotate: [
                      0,
                      -6,
                      -2,
                      -8,
                      0,
                      -5,
                      -1,
                      0,
                      0,
                    ],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.35,
                    times: [
                      0,
                      0.15,
                      0.3,
                      0.45,
                      0.6,
                      0.75,
                      0.85,
                      0.9,
                      1,
                    ],
                    ease: 'linear',
                  }}
                />

                <motion.path
                  d="M 50 66 L 82 83"
                  stroke="#e2e8f0"
                  strokeWidth="6"
                  strokeLinecap="round"
                  style={{
                    transformOrigin: '50px 66px',
                  }}
                  animate={{
                    rotate: [
                      -5,
                      0,
                      -7,
                      -1,
                      -6,
                      0,
                      -3,
                      0,
                      -5,
                    ],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.38,
                    times: [
                      0,
                      0.1,
                      0.25,
                      0.4,
                      0.55,
                      0.7,
                      0.8,
                      0.9,
                      1,
                    ],
                    ease: 'linear',
                  }}
                />
              </g>
            )}
          </svg>
        ) : catState === 'walking' ? (
          /* ==================================================
             WALKING CAT
          ================================================== */
          <svg
            viewBox="0 0 100 100"
            className="
              relative
              z-10
              h-full
              w-full
              overflow-visible
            "
          >
            <motion.path
              d="M 28 60 Q 15 30, 30 20"
              fill="none"
              stroke="#f8fafc"
              strokeWidth="6"
              strokeLinecap="round"
              animate={{
                rotate: [-5, 5, -5],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.6,
              }}
              style={{
                transformOrigin: '28px 60px',
              }}
            />

            <path
              d="M 25 65 C 25 45, 70 45, 75 65 Z"
              fill="#f8fafc"
            />

            <motion.line
              x1="35"
              y1="60"
              x2="35"
              y2="78"
              stroke="#f8fafc"
              strokeWidth="6"
              strokeLinecap="round"
              animate={{
                rotate: [-20, 20, -20],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.3,
              }}
              style={{
                transformOrigin: '35px 60px',
              }}
            />

            <motion.line
              x1="65"
              y1="60"
              x2="65"
              y2="78"
              stroke="#f8fafc"
              strokeWidth="6"
              strokeLinecap="round"
              animate={{
                rotate: [20, -20, 20],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.3,
              }}
              style={{
                transformOrigin: '65px 60px',
              }}
            />

            <ellipse
              cx="75"
              cy="50"
              rx="14"
              ry="12"
              fill="#f8fafc"
            />

            <path
              d="M 66 40 L 68 28 L 74 38 Z"
              fill="#f8fafc"
            />

            <path
              d="M 76 38 L 82 28 L 84 40 Z"
              fill="#f8fafc"
            />

            <circle
              cx="78"
              cy="48"
              r="2.5"
              fill="#0a0a0a"
            />

            <circle
              cx="86"
              cy="48"
              r="2.5"
              fill="#0a0a0a"
            />
          </svg>
        ) : (
          /* ==================================================
             IDLE CAT
          ================================================== */
          <svg
            viewBox="0 0 100 100"
            className="
              relative
              z-10
              h-full
              w-full
              overflow-visible
            "
          >
            <motion.text
              x="50"
              y="25"
              fill="#a0a0a0"
              fontSize="14"
              fontWeight="bold"
              animate={{
                opacity: [0, 1, 0],
                y: [0, -15, -25],
                x: [0, 5, -5],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
            >
              Z
            </motion.text>

            <motion.text
              x="65"
              y="15"
              fill="#a0a0a0"
              fontSize="10"
              fontWeight="bold"
              animate={{
                opacity: [0, 1, 0],
                y: [0, -10, -20],
                x: [0, -5, 5],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                delay: 1.5,
              }}
            >
              z
            </motion.text>

            <path
              d="M 25 80 C 25 55, 75 55, 80 80 Z"
              fill="#f8fafc"
            />

            <path
              d="M 25 75 C 10 75, 10 85, 25 85"
              fill="#f8fafc"
            />

            <ellipse
              cx="70"
              cy="65"
              rx="15"
              ry="12"
              fill="#f8fafc"
            />

            <path
              d="M 60 55 L 63 42 L 70 53 Z"
              fill="#f8fafc"
            />

            <path
              d="M 72 53 L 79 42 L 82 55 Z"
              fill="#f8fafc"
            />

            <motion.line
              x1="65"
              y1="65"
              x2="70"
              y2="65"
              stroke="#0a0a0a"
              strokeWidth="2.5"
              strokeLinecap="round"
              animate={{
                scaleY: [1, 0.1, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                times: [0, 0.45, 0.5],
              }}
            />

            <motion.line
              x1="76"
              y1="65"
              x2="81"
              y2="65"
              stroke="#0a0a0a"
              strokeWidth="2.5"
              strokeLinecap="round"
              animate={{
                scaleY: [1, 0.1, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                times: [0, 0.45, 0.5],
              }}
            />
          </svg>
        )}
      </motion.div>
    </motion.div>
  );
}