import { useCallback, useEffect, useState } from 'react';

function useDisplayChildren(parentRef: React.RefObject<HTMLDivElement>, open: boolean = false) {
  const [displayChildren, setDisplayChildren] = useState(open);

  const handleDisplayChildren = useCallback(() => {
    setDisplayChildren(true);
  }, []);

  const handleHideChildren = useCallback(() => {
    setDisplayChildren(false);
  }, []);

  const handleToggleChildren = useCallback(() => {
    setDisplayChildren((prevState) => !prevState);
  }, []);

  const keyboardDisplayManager = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Enter') {
        handleToggleChildren();
      } else if (event.key === 'Escape' && displayChildren) {
        handleHideChildren();
      }
    },
    [handleToggleChildren, handleHideChildren, displayChildren],
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (parentRef.current && !parentRef.current.contains(event.target as Node)) {
        setDisplayChildren(false);
      }
    }

    if (displayChildren) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [parentRef, displayChildren]);

  return {
    displayChildren,
    handleDisplayChildren,
    handleHideChildren,
    handleToggleChildren,
    keyboardDisplayManager,
  };
}

export default useDisplayChildren;
