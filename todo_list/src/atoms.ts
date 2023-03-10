import { atom } from "recoil";
import { IGoal, IToDoState } from "./interfaces";

const defaultLocalStroageTodos = JSON.stringify({
  Monday: [],
  Tuesday: [],
  Wednesday: [],
});
const localStorageToDos =
  localStorage.getItem("BOARDS") || defaultLocalStroageTodos;
const parsedLocalStorageToDos = JSON.parse(localStorageToDos);

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: parsedLocalStorageToDos,
});

//goal
const localStorageGoals: string = localStorage.getItem("GOALS") || "[]";
export const parsedLocalStorageGoals = JSON.parse(localStorageGoals);

export const goalState = atom<IGoal[]>({
  key: "goal",
  default: parsedLocalStorageGoals,
});

export const modalState = atom<boolean>({
  key: "isModal",
  default: false,
});
export const isGoalInStorageState = atom<boolean>({
  key: "isGoalInStorage",
  default: parsedLocalStorageGoals.length > 0 ? true : false,
});

//quote
export const quoteState = atom({
  key: "quote",
  default: {
    content: "",
    author: "",
  },
});
