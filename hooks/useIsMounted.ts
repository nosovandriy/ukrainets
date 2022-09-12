import { useEffect, useRef, useState } from 'react';

function useForceUpdate() {
  const [, setValue] = useState(0);

  return () => setValue((value) => ++value);
}

export function useIsMounted(): boolean {
  const isMounted = useRef(false);
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    isMounted.current = true;

    forceUpdate();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted.current;
}
