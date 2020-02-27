import React from 'react';
import { debounce } from 'lodash-es';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = React.useState(value);
  React.useEffect(() => {
    const handler = debounce(() => {
      setDebouncedValue(value);
    }, delay);
    handler();
    return handler.cancel;
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
