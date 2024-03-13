import React from "react";

// import Image from 'next/image'
import Typography from "@mui/material/Typography";

import { Item } from "@/theme";
import { Box, Grid, Stack } from "@mui/material";
import theme from "@/theme";
import { ItemType } from "../page";
import Link from "next/link";

type Props = {
  item: ItemType;
};

const SearchCard = ({ item }: Props) => {
  return (
    <Link href={`nbhd/${item.id}`}>
      <Grid item xs={2} key={item.id}>
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
            width={200}
            height={200}
          />
          <Typography variant="body2">
            {item.body.length > 150
              ? item.body.substring(0, 50) + "..."
              : item.body}
          </Typography>
          <hr></hr>
          <Typography variant="body2">
            Avg. House Price: ${item.price}k
          </Typography>
          <Typography variant="body2">
            Crimes last year: {item.crime}
          </Typography>
          <Typography variant="body2">
            Convenience Score: {item.conv}
          </Typography>
        </Item>
      </Grid>
    </Link>
  );
};

export default SearchCard;
