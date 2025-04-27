import React, { useState, useEffect } from 'react';

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // Style for the glow effect div
  const glowStyle = {
    position: 'fixed',
    top: `${position.y}px`,
    left: `${position.x}px`,
    // Center the glow div on the cursor
    transform: 'translate(-50%, -50%)',
    width: '500px', // Size of the glow area
    height: '500px',
    // Soft radial gradient (using accent blue with low opacity)
    background: `radial-gradient(circle, rgba(74, 144, 226, 0.1) 0%, transparent 60%)`,
    borderRadius: '50%',
    pointerEvents: 'none', // Allows clicks to pass through
    zIndex: 9999, // Ensure it's above most content but below modals if needed
    // Increased duration for smoother follow
    transition: 'top 0.1s ease-out, left 0.1s ease-out',
  };

  return <div style={glowStyle} />;
};

export default CursorGlow; 