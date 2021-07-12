import { useState } from 'react';

const useModal = () => {

  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing((prevIsShowing) => !prevIsShowing);
    console.log(isShowing);
  }

  return {
    isShowing,
    toggle,
  }
};

export default useModal;