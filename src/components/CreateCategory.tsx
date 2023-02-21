import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { categories, categoryState, ICategory } from "../atom";

const Wrapper = styled.form`
  display: flex;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
`;

/* interface IForm {
  toCategory: string;
  id: number;
}

function CreateCategory() {
  const setCategories = useSetRecoilState(categories);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toCategory }: IForm) => {
    setCategories((oldCategories) => [
      { name: toCategory, id: Date.now() },
      ...oldCategories,
    ]);
    setValue("toCategory", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toCategory", { required: "Please write a category" })}
        placeholder="Write a category"
      />
      <button>ADD</button>
    </form>
  );
}
 */

interface ICategoryProps {
  toCategories: ICategory[];
  categoryId: string;
}

interface IForm {
  toCategory: string;
}

function CreateCategory({ toCategories, categoryId }: ICategoryProps) {
  const setCategories = useSetRecoilState(categoryState);
  const { register, setValue, handleSubmit } = useForm<IForm>();
  const onValid = ({ toCategory }: IForm) => {
    const newCategory = {
      id: Date.now(),
      text: toCategory,
    };
    setCategories((allCategories) => {
      return {
        ...allCategories,
        [categoryId]: [...allCategories[categoryId], newCategory],
      };
    });
    setValue("toCategory", "");
  };
  return (
    <Wrapper onSubmit={handleSubmit(onValid)}>
      <input
        {...register("toCategory", { required: true })}
        type="text"
        placeholder="Add your category"
      />
      <button>ADD</button>
    </Wrapper>
  );
}

export default React.memo(CreateCategory);
