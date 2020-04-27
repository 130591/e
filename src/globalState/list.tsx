import { useState, useLayoutEffect } from "react";
import { store } from "./store";

const storeKey = "list";

// DEFINITIONS

const getUniqueId = () =>
  list.length > 0 ? Math.max(...list.map(t => t.id)) + 1 : 1;

const initialState = [
  { id: 1, text: "clean the house" },
  { id: 2, text: "buy milk" }
];

const reducers = {
  addItem: (list, item) => [...list, { ...item, id: getUniqueId(list) }],
  deleteItem: (list, item) => list.filter(todo => todo.id !== item.id)
};

// HELPERS
const getState = () => store.getState();

const subscrite = f => {
  let lastState = getState();
  return store.subscribe(
    () => lastState !== getState() && f((lastState = getState()))
  );
}
