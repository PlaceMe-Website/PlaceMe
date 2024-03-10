import { ItemType } from "@/app/dashboard/search/page";
import { Item } from "@/theme";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

type Props = {
  item: ItemType;
};

const Nbhd = ({ item }: Props) => {
  return (
    <Item>
      <Typography variant="h6">
        {item.title} <span>-&gt;</span>
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
          "https://images.adsttc.com/media/images/5f2b/25d0/b357/6508/c500/03e3/newsletter/Romainville_by_Sergio_Grazia.jpg?1596663236"
        }
        width={"100%"}
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
