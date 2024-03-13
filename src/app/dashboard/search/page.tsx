"use client";
import React, { useState } from "react";

import SearchBar from "../../../components/searchBar";
import { Box, Grid } from "@mui/material";
import data from "../../../data/db.json"
import SearchCard from "../../../components/searchCard";


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
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <SearchBar items={results} setSearch={setSearch}/>
      <Box 
        sx={{flexGrow: 1, gap: '1rem', alignItems: "center"}}
      >
        <Grid container spacing={2} justifyContent={"center"}>
          {results.filter((item) => {return item.title.toLowerCase().includes(search.toLowerCase())}).sort((item1, item2) => {return item1.title.localeCompare(item2.title)}).map((item: ItemType) => (
              <SearchCard key={item.id} item={item} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
