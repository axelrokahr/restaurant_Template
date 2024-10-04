import { useState, useEffect } from 'react';

export default function ScrollVideo({ src, width = '50vh', height = '50vh', borderRadius = '50%', rotationDirection = 'clockwise' }) {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const directionMultiplier = rotationDirection === 'clockwise' ? 1 : -1; // Determine rotation direction
      const newRotation = (scrollTop / 6 * directionMultiplier) % 360; // Continuous rotation in the chosen direction
      setRotation(newRotation);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [rotationDirection]);

  return (
    <div className="relative h-screen flex items-center justify-center">
      <video
        className="object-cover"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture  // Disables Picture-in-Picture mode
        style={{
          width: width,   // Customizable width
          height: height, // Customizable height
          borderRadius: borderRadius, // Customizable border-radius
          transform: `rotate(${rotation}deg)`,  // Apply rotation
        }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
