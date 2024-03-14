"use client"

import { Box } from "@mui/material";
import SearchCard from "../../../components/searchCard";
import { ItemType } from "../search/page";
import { Grid } from "@mui/material";
import data from "../../../data/db.json";
import PriorityList from "@/components/PriorityList"; 
import dynamic from 'next/dynamic';
import { useState } from "react";

const list = {
  id: "priority-list",
  title: "Set NBHD Priorities",
  priorityIds: ["crime", "price", "convenience"]
}

const DragDropContext = dynamic(
  async () => {
    const mod = await import('react-beautiful-dnd');
    return mod.DragDropContext;
  },
  { ssr: false },
);


export default async function Results() {
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
    <Box>
      
        <DragDropContext onDragEnd={onDragEnd}>
          <PriorityList title={priorityList.title} priorityIds={priorityList.priorityIds}/>
        </DragDropContext>
      
      <Box 
        display="flex" 
        justifyContent="right" 
        sx={{flexGrow: 1, gap: '1rem', alignItems: "center  ", marginTop: '1rem', marginRight: '1rem'}}
      >
        <Grid container justifyContent="right" maxWidth={600} sx={{gap: '1rem'}}>
          {data.neighbourhoods.map((item: ItemType) => (
            <SearchCard key={item.id} item={item}/>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
