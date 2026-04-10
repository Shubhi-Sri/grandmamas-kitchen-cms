import { useState, useEffect } from "react";

const LoadingScreen = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 1200);
    const remove = setTimeout(() => setVisible(false), 1700);
    return () => { clearTimeout(timer); clearTimeout(remove); };
  }, []);

  if (!visible) return null;

  return (
    <div className={`fixed inset-0 z-[100] bg-primary flex items-center justify-center ${fadeOut ? "loading-fade-out" : ""}`}>
      <div className="text-center logo-reveal">
        <h1 className="font-heading italic text-4xl md:text-5xl text-gold mb-2">Grandmama's</h1>
        <p className="font-heading text-lg text-primary-foreground/60 tracking-[0.3em]">CAFÉ</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
