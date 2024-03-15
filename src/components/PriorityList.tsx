import React from 'react'
import styled from '@emotion/styled'
import { Typography, Button } from '@mui/material'
import Priority from './Priority'
import dynamic from 'next/dynamic'
// import { Droppable } from 'react-beautiful-dnd'


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
      <Button variant="contained" size="large" onClick={() => console.log(props.priorityIds)}>
          Submit
      </Button>
    </Container>
  )
}

export default PrioritiesList
