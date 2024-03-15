import React from 'react'
import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
// import { Draggable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';

const Container = styled.div`
  border: 1px solid light;
  padding: 8px;
  margin-bottom: 8px; 
  borderRadius: 2px;
  background-color: white;
`;

const Draggable = dynamic(
  async () => {
    const mod = await import('react-beautiful-dnd');
    return mod.Draggable;
  },
  { ssr: false },
);

const Priority = (props: {id: string, index: number}) => {
  console.log(props)
  const id = uuidv4();
  return (
    <Draggable key={props.id} draggableId={props.id} index={props.index}>
      {(provided) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {props.id}
        </Container>
      )}
    </Draggable>
    
  )
}

export default Priority
