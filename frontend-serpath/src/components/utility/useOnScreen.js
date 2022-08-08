import React from "react";

const useOnScreen = (ref) => {
  const [intersecting, setIntersecting] = React.useState(false);

  const observer = new IntersectionObserver(([entry]) =>
    setIntersecting(entry.isIntersecting)
  );

  React.useEffect(() => {
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return intersecting;
};

export default useOnScreen;
