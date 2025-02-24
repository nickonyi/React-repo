import { useState } from 'react';
import AddItem from './AddItem';
import PackingList from './PackingList';

let nextId = 3;
const initialItems = [
  { id: 0, title: 'Warm socks', packed: true },
  { id: 1, title: 'Travel journal', packed: false },
  { id: 2, title: 'Watercolors', packed: false },
];

const handleAddItem = () => {};

export default function TravelPlan() {
  const [items, setItems] = useState(initialItems);
  let total = initialItems.length;
  let packed = initialItems.filter((item) => item.packed).length;

  return (
    <>
      <AddItem onAddItem={handleAddItem} />
    </>
  );
}
