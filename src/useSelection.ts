import React from 'react';

//`T extends { id: string }` : Where `T` is generic, can be anything but will surely
// have `id` of type string
function useSelection<T extends { id: string }>(items: Array<T> = []) {
  const [selected, setSelected] = React.useState<T[]>([]);

  function select(checked: boolean, item: T) {
    if (checked) {
      setSelected([...selected, item]);
    } else {
      setSelected(selected.filter(x => x.id !== item.id));
    }
  }

  function selectAll(checked: boolean) {
    if (!items.length) {
      return;
    }

    if (checked) {
      setSelected(items);
    } else {
      setSelected([]);
    }
  }

  function isSelected(id: string) {
    return Boolean(selected.find(item => item.id === id));
  }

  function clear() {
    setSelected([]);
  }

  let status = 'NONE';

  if (selected.length) {
    if (selected.length === items.length) {
      status = 'ALL';
    } else if (selected.length < items.length) {
      status = 'PARTIAL';
    }
  }

  return {
    items: selected,
    select,
    selectAll,
    status,
    isSelected,
    clear,
  };
}

export default useSelection;
