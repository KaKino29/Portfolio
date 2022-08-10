import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { categories, categoryState, toDoSelector } from "../atom";

interface IForm {
  toCategory: string;
  id: number;
}

function ToDoList() {
  const categoryList = useRecoilValue(categories);
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  const setCategories = useSetRecoilState(categories);
  const { setValue } = useForm<IForm>();
  const onDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCategories((oldCategories) => {
      const {
        currentTarget: { name },
      } = event;
      const newCategory = oldCategories?.filter(
        (category) => category.name === name
      );
      return newCategory;
    });
    setCategories((oldCategories) => [
      { name: "TO DO", id: 0 },
      { name: "DOING", id: 1 },
      { name: "DONE", id: 2 },
      ...oldCategories,
    ]);
    setValue("toCategory", "");
  };
  return null;
}

export default ToDoList;
