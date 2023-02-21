import React from "react";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import styled from "styled-components";
import { SetterOrUpdater, useRecoilState, useSetRecoilState } from "recoil";
import { categoryState, deleteState, IToDoState, toDoState } from "../atom";
import Board from "../components/Board";
import CreateCategory from "../components/CreateCategory";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`;

function ToDoList() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const [categories, setCategories] = useRecoilState(categoryState);
  const setDelete = useSetRecoilState(deleteState);
  const onDragEnd = (
    info: DropResult,
    setCategories: SetterOrUpdater<string[]>,
    setToDos: SetterOrUpdater<IToDoState>,
    setDelete: SetterOrUpdater<boolean>
  ) => {
    console.log(info);
    const { destination, source } = info;
    if (!destination) return;
    setDelete(false);
    if (destination?.droppableId === source.droppableId) {
      // same board movement.
      setToDos((allBoards) => {
        const boardCopy = [...allBoards[source.droppableId]];
        const taskObj = boardCopy[source.index];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination?.index, 0, taskObj);
        return {
          ...allBoards,
          [source.droppableId]: boardCopy,
        };
      });
    }
    if (destination.droppableId !== source.droppableId) {
      // cross board movement
      setToDos((allBoards) => {
        const sourceBoard = [...allBoards[source.droppableId]];
        const taskObj = sourceBoard[source.index];
        const destinationBoard = [...allBoards[destination.droppableId]];
        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination?.index, 0, taskObj);
        return {
          ...allBoards,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard,
        };
      });
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default ToDoList;
