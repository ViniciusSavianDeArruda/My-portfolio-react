import { useEffect, useState } from "react";

export default function useTypewriter(
  text = "Full Stack Developer",
  delay = 80,
  startDelay = 600,
) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setTimeout(function type() {
      i++;
      setDisplayed(text.slice(0, i));
      if (i < text.length) setTimeout(type, delay);
    }, startDelay);
    return () => clearTimeout(timer);
  }, [text, delay, startDelay]);

  return displayed;
}
