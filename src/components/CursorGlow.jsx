import React, { useState, useEffect } from 'react';

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const glowStyle = {
    position: 'fixed',
    top: `${position.y}px`,
    left: `${position.x}px`,
    transform: 'translate(-50%, -50%)',
    width: '500px',
    height: '500px',
    background: `radial-gradient(circle, rgba(74, 144, 226, 0.1) 0%, transparent 60%)`,
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 9999,
    transition: 'top 0.1s ease-out, left 0.1s ease-out',
  };

  return <div style={glowStyle} />;
};

export default CursorGlow; 