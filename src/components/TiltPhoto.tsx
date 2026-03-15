import React, { useRef, ReactNode } from "react";

interface TiltPhotoProps {
  src?: string;
  alt?: string;
  extraClass?: string;
  children?: ReactNode;
}

const TiltPhoto: React.FC<TiltPhotoProps> = ({ src, alt = "", extraClass = "", children }) => {
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
      role={src ? "img" : "group"}
      aria-label={src ? alt : undefined}
    >
      <div className="tilt-inner">
        {src ? <img src={src} alt={alt} className="profile-photo" /> : children}
      </div>
    </div>
  );
};

export default TiltPhoto;
