import { useState, useEffect } from 'react';

export default function useFlatChildren(children) {
  const [items, setItems] = useState(children);

  useEffect(() => {
    if (Array.isArray(children)) {
      setItems(children.flat(Infinity));
    }
  }, [children]);

  return items;
}
