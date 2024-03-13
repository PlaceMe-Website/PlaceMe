import { promises } from "fs";
import { Box } from "@mui/material";
import SearchCard from "../../../components/searchCard";
import { ItemType } from "../search/page";


export default async function Results() {
  const file = await promises.readFile(
    process.cwd() + "/src/data/db.json",
    "utf8"
  );
  const db = JSON.parse(file);

  return (
    <Box 
      display="flex" 
      justifyContent={"center"} 
      sx={{flexGrow: 1, gap: '1rem', alignItems: "center"}}
    >
      {db.neighbourhoods.map((item: ItemType) => (
        <SearchCard key={item.id} item={item} />
      ))}
    </Box>
  );
}
