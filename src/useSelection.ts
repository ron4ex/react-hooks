import React from 'react';

function useSelection<ItemType>(items: Array<ItemType> = []) {
  const [selected, setSelected] = React.useState<ItemType[]>([]);

  function select(checked: boolean, item: ItemType) {
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
