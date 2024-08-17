import React from "react";
// Type is generic not hardcoded
type ListProps<T> = {
  items: T[];
  getKey: (item: T) => React.Key;
  renderItem: (item: T) => React.ReactNode;
};

//Function is generic function, not hardcoded
export default function List<T>({ items, getKey, renderItem }: ListProps<T>) {
  return (
    <div>
      {items.map((item) => (
        <div key={getKey(item)}>{renderItem(item)}</div>
      ))}
    </div>
  );
}
