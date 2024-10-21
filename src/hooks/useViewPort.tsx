import { useState, useEffect, useCallback } from 'react';
import { MOBILE_WIDTH } from '../Statics';

const useViewport = () => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < MOBILE_WIDTH); // Initial check

  const handleResize = useCallback(() => {
    const mobileCheck = window.innerWidth < 768;
    // Update state only if there is a change
    if (mobileCheck !== isMobile) {
      setIsMobile(mobileCheck);
    }
  }, [isMobile]); // Only runs when isMobile changes

  useEffect(() => {
    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]); // Run effect when handleResize changes

  return { isMobile };
};

export default useViewport;
