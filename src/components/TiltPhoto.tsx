import React, { useRef } from "react";

interface TiltPhotoProps {
  src: string;
  alt?: string;
  extraClass?: string;
}

const TiltPhoto: React.FC<TiltPhotoProps> = ({ src, alt = "", extraClass = "" }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rx = (y - 0.5) * -10;
    const ry = (x - 0.5) * 12;
    el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
  };

  const handleLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0)";
  };

  return (
    <div
      ref={cardRef}
      className={`photo-card ${extraClass}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      role="img"
      aria-label={alt}
    >
      <div className="tilt-inner">
        <img src={src} alt={alt} className="profile-photo" />
      </div>
    </div>
  );
};

export default TiltPhoto;
