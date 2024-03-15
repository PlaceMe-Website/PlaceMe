import React from 'react'
import styled from '@emotion/styled'
import { Typography, Button, alpha, Stack, IconButton, Tooltip } from '@mui/material'
import Priority from './Priority'
import dynamic from 'next/dynamic'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import HelpIcon from '@mui/icons-material/Help';

const Container = styled(Stack)(() => ({
  border: "2px solid lightgrey",
  borderRadius: "2px",
  maxWidth: "600px",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#D2691E",
}))



// const Container = styled.div`
//   border: 2px solid lightgrey;
//   border-radius: 2px;
//   max-width: 600px;
// `;

const List = styled.div`
  padding: 9px;
  font-weight: bold;
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
      <Tooltip title="Drag and Drop to meet your preferences!" placement="right">
        <IconButton sx={{color: "#5cb85c", px: "1px"}}>
          <HelpIcon />
        </IconButton>
      </Tooltip>
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
      <Button 
        variant='contained' 
        sx={{
          minWidth: "unset", 
          p: "8px 14px", 
          minHeight: "unset",
          backgroundColor: "#5cb85c",
          color: "white",
          "&:hover": {backgroundColor: alpha("#5cb85c", 0.75)}
        }}
        onClick={(e) => {console.log(props.priorityIds)}}
        
      >
        <DoneAllIcon />
      </Button>
    </Container>
  )
}

export default PrioritiesList
