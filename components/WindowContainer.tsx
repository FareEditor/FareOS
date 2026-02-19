import React, { ReactNode, useState, useEffect, useLayoutEffect, useRef } from 'react';

interface WindowContainerProps {
  children: ReactNode;
  title: string;
  onClose: () => void;
  isClosing?: boolean;
}

const WindowContainer: React.FC<WindowContainerProps> = ({ children, title, onClose, isClosing = false }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  
  // Track initial mouse/touch positions and window offset
  const dragStart = useRef({ mouseX: 0, mouseY: 0, windowX: 0, windowY: 0 });

  // Handle position resetting cleanly before the browser paints
  useLayoutEffect(() => {
    if (isClosing) {
      // If it starts closing, just cancel dragging but keep it exactly where it was dragged
      setIsDragging(false);
    } else {
      // Once it finishes closing and re-opens (or initially mounts), abruptly center it
      setPosition({ x: 0, y: 0 });
      setIsDragging(false);
    }
  }, [title, isClosing]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const deltaX = clientX - dragStart.current.mouseX;
      const deltaY = clientY - dragStart.current.mouseY;

      setPosition({
        x: dragStart.current.windowX + deltaX,
        y: dragStart.current.windowY + deltaY,
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleMouseMove, { passive: false });
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    // Prevent dragging if interacting with the window control buttons
    if ((e.target as HTMLElement).tagName.toLowerCase() === 'button' || (e.target as HTMLElement).closest('button')) {
      return;
    }

    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    dragStart.current = {
      mouseX: clientX,
      mouseY: clientY,
      windowX: position.x,
      windowY: position.y,
    };
  };

  return (
    <div className={`w-full max-w-7xl mx-auto h-[65vh] ${isClosing ? 'animate-slide-down' : 'animate-slide-up'}`}>
      <div 
        className={`w-full h-full flex flex-col bg-windowBg backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden ring-1 ring-white/5 will-change-transform ${isDragging ? 'shadow-[0_30px_80px_-10px_rgba(0,0,0,0.8)]' : ''}`}
        style={{ 
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          // Removed 'transform' from transition to prevent gliding when resetting position
          transition: isDragging ? 'none' : 'box-shadow 0.2s ease-in-out'
        }}
      >
        {/* Window Title Bar - Drag Handle */}
        <div 
          className="h-10 bg-white/5 border-b border-white/10 flex items-center justify-between px-4 shrink-0 cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <div className="flex space-x-2">
            {/* Hooked up onClose to the red close button */}
            <button 
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 shadow-inner flex items-center justify-center group transition-colors focus:outline-none cursor-pointer"
              title="Close Window"
            >
              <span className="opacity-0 group-hover:opacity-100 text-[8px] text-black font-bold leading-none select-none pointer-events-none">×</span>
            </button>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 cursor-pointer shadow-inner"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 cursor-pointer shadow-inner"></div>
          </div>
          <div className="font-mono text-xs text-slate-400 tracking-wider">
            {title}
          </div>
          <div className="w-16"></div> {/* Spacer to balance title */}
        </div>
        
        {/* Window Content */}
        <div className="flex-1 overflow-hidden relative p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default WindowContainer;