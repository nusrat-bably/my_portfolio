'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ViewCounter() {
  const [data, setData] = useState<{ show: boolean; views?: number } | null>(null);

  useEffect(() => {
    fetch('/api/views', { method: 'POST', cache: 'no-store' })
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data || !data.show) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[11px] sm:text-xs font-medium text-[#a0a0a0] backdrop-blur-md transition-all duration-300 hover:bg-white/[0.08] hover:text-white hover:border-white/20 shadow-sm"
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/50 opacity-75"></span>
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white/80"></span>
      </span>
      {data.views?.toLocaleString()} Views
    </motion.div>
  );
}