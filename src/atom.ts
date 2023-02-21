import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

export const isDarkAtom = atom({
  key: "isDark",
  default: true,
});

const { persistAtom } = recoilPersist();

export interface IToDo {
  text: string;
  id: number;
  /*   category: string; */
}

export interface IToDoState {
  [key: string]: IToDo[];
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    "TO DO": [],
    DOING: [],
    DONE: [],
  },
  // effects_UNSTABLE: [persistAtom],
});

/* export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom],
}); */

/* export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
}); */

/* export interface ICategory {
  text: string;
  id: number;
}

interface ICategoryState {
  [key: string]: ICategory[];
}
 */

export const categoryState = atom<string[]>({
  key: "toCategory",
  default: ["TO DO", "DOING", "DONE"],
  // effects_UNSTABLE: [persistAtom],
});

/* export const categories = atom<ICategory[]>({
  key: "Category",
  default: [
    { name: "TO DO", id: 0 },
    { name: "DOING", id: 1 },
    { name: "DONE", id: 2 },
  ],
  effects_UNSTABLE: [persistAtom],
}); */

export const deleteState = atom<boolean>({
  key: "toDelete",
  default: false,
});
