import React from "react";

export const useToogle = () => {
  const [isOpen, setIsopen] = React.useState(false);
  const open = () => setIsopen(true);
  const close = () => setIsopen(false);
  const toogle = () => setIsopen(!isOpen);
  return { isOpen, open, close, toogle };
};
