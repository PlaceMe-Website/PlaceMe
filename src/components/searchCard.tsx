import React from "react";

// import Image from 'next/image'
import Typography from "@mui/material/Typography";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import { ItemType } from "../app/dashboard/search/page";


type Props = {
  item: ItemType;
};

const SearchCard = ({ item }: Props) => {
  return (
    <Card sx={{ maxWidth: 250 }} key={item.id}>
    <CardActionArea href={`nbhd/${item.id}`} LinkComponent={'a'}>
      <CardMedia
        component="img"
        image={item.link}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="secondary">
          {(item.body.length > 100) ? item.body.substring(0, 100)+"..." : item.body}
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
          </CardContent>
    </CardActionArea>
  </Card>
  );
};

export default SearchCard;
