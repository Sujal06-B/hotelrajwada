import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function Lightbox({ photo, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!photo) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-5 right-5 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors cursor-pointer"
        aria-label="Close Preview"
      >
        <X className="w-6 h-6" />
      </button>

      <div 
        className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={photo.url} 
          alt={photo.title} 
          className="w-full max-h-[75vh] object-contain bg-stone-900"
        />
        <div className="p-4 bg-white flex items-center justify-between border-t border-stone-200">
          <div>
            <p className="text-sm font-bold text-[#1e293b]">{photo.title}</p>
            <span className="text-xs text-[#520122] font-semibold">{photo.category}</span>
          </div>
          <span className="text-xs text-[#64748b]">Yes Rajvada Gadhinglaj</span>
        </div>
      </div>
    </div>
  );
}
