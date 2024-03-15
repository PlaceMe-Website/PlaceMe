import React from 'react'
import styled from '@emotion/styled'
import { Typography, Button, alpha } from '@mui/material'
import Priority from './Priority'
import dynamic from 'next/dynamic'
import DoneAllIcon from '@mui/icons-material/DoneAll';




const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  max-width: 600px;
`;

const List = styled.div`
  padding: 8px;
`;

const Droppable = dynamic(
  async () => {
    const mod = await import('react-beautiful-dnd');
    return mod.Droppable;
  },
  { ssr: false },
);

const PrioritiesList = (props: { title: string, priorityIds: Array<string> }) => {
  return (
    <Container>
      <Typography variant='h5' sx={{padding: "8px"}}>{props.title}</Typography>
      <Droppable droppableId={props.title}>
        {(provided) => (
          <List 
            key={props.title}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {props.priorityIds.map((priority, index) => <Priority key={priority} id={priority} index={index} />)}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
      <Button variant='contained' sx={{minWidth: "unset", p: "8px 14px", minHeight: "unset", backgroundColor: "#5cb85c", color: "white", "&:hover": {backgroundColor: alpha("#5cb85c", 0.75)}}}>
        <DoneAllIcon />
      </Button>
    </Container>
  )
}

export default PrioritiesList
