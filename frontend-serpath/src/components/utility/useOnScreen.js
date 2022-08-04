import React from "react";

export default function useOnScreen(ref) {
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  const observer = new IntersectionObserver(([entry]) =>
    setIsIntersecting(entry.isIntersecting)
  );

  React.useEffect(() => {
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);
  return isIntersecting;
}
