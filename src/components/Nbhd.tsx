import { ItemType } from "@/app/dashboard/search/page";
import { Item } from "@/theme";
import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {
  item: ItemType;
};

const Nbhd = ({ item }: Props) => {
  return (
    <Item>
      <Typography variant="h3">
        {item.title}
      </Typography>

      <Box
        component="img"
        sx={{
          margin: "auto",
        }}
        display="flex"
        justifyContent="flex-end"
        alt="NBHD Image"
        src={
          item.link
        }
        width={800}
        height={"auto"}
      />
      <Typography variant="body2">{item.body}</Typography>
      <hr></hr>
      <Typography variant="body2">Avg. House Price: ${item.price}k</Typography>
      <Typography variant="body2">Crimes last year: {item.crime}</Typography>
      <Typography variant="body2">Convenience Score: {item.conv}</Typography>
    </Item>
  );
};

export default Nbhd;
