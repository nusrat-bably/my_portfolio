'use client';

import { useState } from 'react';
import Image from 'next/image';
import { addGuestbookEntry, GuestbookEntry } from '@/actions/guestbook';

interface GuestbookProps {
  initialEntries: GuestbookEntry[];
}

export default function GuestbookSection({ initialEntries }: GuestbookProps) {
  const [entries] = useState<GuestbookEntry[]>(initialEntries);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const res = await addGuestbookEntry(formData);
    setIsSubmitting(false);

    if (res.success) {
      form.reset();
      setStatusMessage('Thank you! Your mark has been left in the scrapbook.');
    } else {
      setStatusMessage(res.error || 'Something went wrong. Please try again.');
    }
  }

  return (
    <section id="guestbook" className="w-full max-w-6xl mx-auto py-8 px-4">
      
      {/* 1. REST POINT HEADER (Reads First) */}
      <div className="flex flex-col items-center justify-center text-center mb-16">
        
        {/* Rest point photo - Enlarged and perfectly centered */}
        <div className="relative w-full max-w-[340px] md:max-w-[480px] aspect-[4/3] mb-8 mx-auto transform rotate-2 hover:-rotate-1 hover:scale-105 transition-all duration-500 cursor-pointer">
          <Image 
            src="/guestbook/2.jpeg" 
            alt="Cat offering refreshments" 
            fill
            className="object-contain drop-shadow-2xl"
          />
        </div>
        
        <h2 className="section-heading font-serif italic text-zinc-200 mb-4">
          Rest Point
        </h2>
        <p className="text-base md:text-lg font-serif text-zinc-300 leading-relaxed max-w-[480px] mx-auto">
          Whew, you scrolled a long way! 
          <span className="inline-block ml-1" style={{ filter: 'grayscale(100%) brightness(200%)' }}>🐾</span>
          <br />
          My furry assistant brought you some refreshments.
          <br /><br />
          <span className="italic text-zinc-400">
            While you cool off, please leave a mark so I know you were here!
          </span>
        </p>
      </div>


      {/* 2. SCRAPBOOK FORM WRAPPER */}
      <div className="relative w-full bg-[#0a0a0a] border-2 border-zinc-800 rounded-[2rem] p-6 lg:p-10 shadow-2xl overflow-hidden mb-12">
        
        {/* Decorative Corner Swirls */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-zinc-700 rounded-tl-xl opacity-50" />
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-zinc-700 rounded-tr-xl opacity-50" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-zinc-700 rounded-bl-xl opacity-50" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-zinc-700 rounded-br-xl opacity-50" />

        <form onSubmit={handleSubmit} className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* COLUMN 1: Main Form & Sign Off (Left on Desktop, Top on Mobile) */}
          <div className="lg:col-span-7 flex flex-col space-y-8 lg:space-y-10 w-full lg:pr-6">
            
            {/* Textarea */}
            <div className="group/input">
              <h3 className="text-[26px] lg:text-[28px] whitespace-nowrap font-serif italic text-zinc-200 mb-2 transition-colors group-focus-within/input:text-teal-400">
                Any advice or feedback?
              </h3>
              <p className="text-xs text-zinc-400 mb-5 font-sans tracking-wide">
                What caught your eye? Or simply, how can I improve this portfolio?
              </p>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="(Write here...)"
                className="w-full bg-transparent border-0 border-b-2 border-zinc-700 focus:ring-0 focus:border-teal-400 text-zinc-200 text-lg resize-none transition-colors py-1 placeholder-zinc-700"
                style={{ lineHeight: '2.5rem', backgroundImage: 'linear-gradient(transparent, transparent calc(2.5rem - 2px), #27272a 0px)', backgroundSize: '100% 2.5rem' }}
              />
            </div>

            {/* Leave Your Mark Container (With Glow & Hover) */}
            <div className="border-2 border-zinc-800 rounded-2xl px-5 py-5 lg:px-6 bg-zinc-900/40 relative hover:shadow-[0_0_30px_rgba(45,212,191,0.15)] hover:border-teal-500/40 hover:bg-zinc-900/60 transition-all duration-500">
              <div className="absolute -top-3 right-4 text-teal-500/60 flex gap-1 text-sm">
                ✦ ✧ ✦
              </div>
              <h4 className="text-xl font-serif italic text-zinc-200 mb-1">
                Leave Your Mark
              </h4>
              <p className="text-[11px] text-zinc-500 mb-4 font-sans leading-snug">
                (Feel free to stay completely anonymous, or sign it so I know who visited!)
              </p>
              
              {/* One Line Input */}
              <div className="flex items-end gap-3 mb-5 w-full">
                <label htmlFor="name" className="whitespace-nowrap text-sm text-zinc-300 font-sans pb-1">
                  Sign your name:
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="(Optional)"
                  className="w-full bg-transparent border-0 border-b border-zinc-700 focus:ring-0 focus:border-teal-400 text-zinc-200 py-1 transition-colors placeholder-zinc-700"
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-zinc-200 text-zinc-900 text-sm font-bold tracking-wide rounded-full hover:bg-teal-400 hover:scale-105 transition-all duration-300 disabled:opacity-50 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(45,212,191,0.4)]"
                >
                  {isSubmitting ? 'Signing...' : 'Seal & Submit'}
                </button>
                
                {statusMessage && (
                  <p className="text-xs text-teal-400 ml-4 animate-pulse font-medium text-right">
                    {statusMessage}
                  </p>
                )}
              </div>
            </div>

          </div>

          {/* COLUMN 2: Big Portrait (Right on Desktop, Bottom on Mobile) */}
          <div className="lg:col-span-5 flex justify-center items-center w-full cursor-pointer mt-6 pt-8 border-t border-zinc-800 lg:mt-0 lg:pt-0 lg:border-t-0 lg:border-l lg:pl-10 h-full">
            <div className="relative w-full max-w-[280px] lg:max-w-[360px] aspect-[4/5] transform rotate-2 hover:-rotate-1 hover:scale-105 transition-all duration-500 group/photo">
              <div className="absolute inset-0 bg-white/90 p-3 pb-12 rounded-xl shadow-2xl group-hover/photo:shadow-teal-500/20 transition-all duration-500 z-10">
                <div className="relative w-full h-full overflow-hidden rounded border border-gray-200 bg-zinc-100">
                  <Image 
                    src="/guestbook/1.jpeg" 
                    alt="Me and my cat" 
                    fill
                    className="object-cover transition-transform duration-700 group-hover/photo:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>

        </form>
      </div>

      {/* 3. DISPLAY APPROVED MESSAGES MASONRY GRID */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="break-inside-avoid p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-teal-500/40 hover:bg-zinc-900/80 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(45,212,191,0.08)] transition-all duration-300 group cursor-default"
          >
            <p className="text-sm text-zinc-300 leading-relaxed whitespace-pre-wrap font-serif italic mb-4">
              "{entry.message}"
            </p>
            <div className="flex items-center justify-between border-t border-zinc-800/50 pt-3 group-hover:border-teal-500/20 transition-colors">
              <span className="text-xs font-bold text-zinc-400 group-hover:text-teal-400 transition-colors">
                — {entry.name}
              </span>
              <span className="text-[10px] text-zinc-600 group-hover:text-teal-500/50 transition-colors">
                {new Date(entry.date).toLocaleDateString(undefined, {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}