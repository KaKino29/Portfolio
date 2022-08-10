import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

export const isDarkAtom = atom({
  key: "isDark",
  default: true,
});

const { persistAtom } = recoilPersist();

export interface ICategory {
  name: string;
  id: number;
}

export const categories = atom<ICategory[]>({
  key: "Category",
  default: [
    { name: "TO DO", id: 0 },
    { name: "DOING", id: 1 },
    { name: "DONE", id: 2 },
  ],
  effects_UNSTABLE: [persistAtom],
});

export const categoryState = atom({
  key: "ccategory",
  default: "TO DO",
});

export interface IToDo {
  text: string;
  id: number;
  category: string;
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
