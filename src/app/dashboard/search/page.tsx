"use client";
import React, { useState } from "react";
import { Box, Grid, Stack } from "@mui/material";
import data from "../../../data/db.json"
import Dnd from "@/components/Dnd";
import SearchCard from "@/components/SearchCard";
import SearchBar from "@/components/SearchBar";



type Props = {};
export type ItemType = {
  id: number;
  title: string;
  rating: number;
  price: number;
  crime: number;
  conv: number;
  link: string;
  body: string;
};

export default function Page({}: Props) {
  const [search, setSearch] = useState<string>("");
  const results = data.neighbourhoods;

  return (
    <Stack display={"flex"} flexDirection={"row"}>
      <Box sx={{mx: 2}}>
        <SearchBar items={results} setSearch={setSearch}/>
        <Dnd />
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"left"}
        alignItems={"center"}
        alignContent={"center"}
      >
        <Box 
          sx={{flexGrow: 1, gap: '1rem', alignItems: "center", m: 4}}
        >
          <Grid container spacing={2} justifyContent={"center"} maxWidth={1200} gap={2}>
            {results.filter((item) => {return item.title.toLowerCase().includes(search.toLowerCase())}).sort((item1, item2) => {return item1.title.localeCompare(item2.title)}).map((item: ItemType) => (
                <SearchCard key={item.id} item={item} />
            ))}
          </Grid>
        </Box>
      </Box>
    </Stack>
  );
}
