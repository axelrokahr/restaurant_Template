import { useState, useEffect } from 'react';

export default function RotateVideo({ src, width = '50vh', height = '50vh', borderRadius = '50%', rotationDirection = 'clockwise' }) {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const directionMultiplier = rotationDirection === 'clockwise' ? 1 : -1; // Determine rotation direction
    const rotateInterval = setInterval(() => {
      setRotation((prevRotation) => (prevRotation + directionMultiplier * 1) % 360); // Increase rotation continuously
    }, 16); // Rotate every 16ms (~60fps)

    return () => clearInterval(rotateInterval); // Clean up the interval on unmount
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
          transform: `rotate(${rotation}deg)`,  // Continuously rotate video
        }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

