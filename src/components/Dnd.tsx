"use client"

import PriorityList from "@/components/PriorityList"; 
import dynamic from 'next/dynamic';
import { useState } from "react";

const list = {
  id: "priority-list",
  title: "Sort",
  priorityIds: ["Crime", "Price", "Convenience"]
}

const DragDropContext = dynamic(
  async () => {
    const mod = await import('react-beautiful-dnd');
    return mod.DragDropContext;
  },
  { ssr: false },
);


const Dnd = () => {
  const [priorityList, setPriorityList] = useState(list);
  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) return;

    const newPriorityIds = Array.from(priorityList.priorityIds);
    newPriorityIds.splice(source.index, 1);
    newPriorityIds.splice(destination.index, 0, draggableId);

    const newPriorityList = {
      ...priorityList,
      priorityIds: newPriorityIds
    }
    setPriorityList(newPriorityList);
  }
  
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <PriorityList title={priorityList.title} priorityIds={priorityList.priorityIds}/>
    </DragDropContext>
  );
}

export default Dnd
