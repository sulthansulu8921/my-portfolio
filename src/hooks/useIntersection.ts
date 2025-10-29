import { useEffect, useRef } from "react";

export default function useIntersection(options: {
  threshold?: number;
  once?: boolean;
} = {}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("visible");
            if (options.once !== false) observer.unobserve(el);
          }
        });
      },
      { threshold: options.threshold ?? 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold, options.once]);

  return ref;
}
