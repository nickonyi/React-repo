import { useState } from 'react';
import AddItem from './AddItem';
import PackingList from './PackingList';

let nextId = 3;
const initialItems = [
  { id: 0, title: 'Warm socks', packed: true },
  { id: 1, title: 'Travel journal', packed: false },
  { id: 2, title: 'Watercolors', packed: false },
];

export default function TravelPlan() {
  const [items, setItems] = useState(initialItems);
  let total = items.length;
  let packed = items.filter((item) => item.packed).length;

  const handleAddItem = (title) => {
    setItems([...items, { id: nextId++, title: title, packed: false }]);
  };
  const handleChangeItem = (nextItem) => {
    console.log(items);

    setItems(
      items.map((item) => {
        if (item.id === nextItem.id) {
          return nextItem;
        } else {
          return item;
        }
      })
    );
  };
  const handleDeleteItem = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  return (
    <>
      <AddItem onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onChangeItem={handleChangeItem}
        onDeleteItem={handleDeleteItem}
      />
      <hr />
      <b>
        {packed} out of {total} packed!
      </b>
    </>
  );
}
