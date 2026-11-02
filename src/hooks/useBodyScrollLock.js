import { useEffect } from 'react';

export default function useBodyScrollLock(locked) {
  useEffect(() => {
    if (!locked) {
      document.body.style.removeProperty('overflow');
      document.body.style.removeProperty('touch-action');
      document.documentElement.style.removeProperty('overflow');
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      if (previousOverflow && previousOverflow !== 'hidden') {
        document.body.style.overflow = previousOverflow;
      } else {
        document.body.style.removeProperty('overflow');
      }
      document.body.style.removeProperty('touch-action');
      document.documentElement.style.removeProperty('overflow');
    };
  }, [locked]);
}
