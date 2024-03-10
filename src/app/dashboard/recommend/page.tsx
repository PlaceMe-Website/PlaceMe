import { promises } from "fs";
import { Emoji } from "emoji-type";
// import Image from 'next/image'
import Typography from "@mui/material/Typography";

import { Item } from "@/theme";
import { Box, Grid, Stack } from "@mui/material";
import theme from "@/theme";
import SearchCard from "../search/components/searchCard";
import { ItemType } from "../search/page";

const icon: Emoji = "⭐" as Emoji;

export default async function Results() {
  const file = await promises.readFile(
    process.cwd() + "/src/app/dashboard/recommend/db.json",
    "utf8"
  );
  const db = JSON.parse(file);

  return (
    <Box display="flex" justifyContent="right" alignItems="right">
      <Typography variant="h4" justifyContent="center">
        Here are your search results:
      </Typography>
      <Grid
        item
        container
        spacing={3}
        alignItems="center"
        columns={2}
        padding={5}
        width={500}
      >
        {db.neighbourhoods.map((item: ItemType) => (
          <SearchCard key={item.id} item={item} />
        ))}
      </Grid>
    </Box>
  );
}
