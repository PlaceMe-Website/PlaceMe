"use client";
import React, { useState } from "react";

import SearchBar from "../../../components/searchBar";
import { Box } from "@mui/material";
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

export default function page({}: Props) {
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<ItemType[]>(data.neighbourhoods);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <SearchBar search={search} setSearch={setSearch} />
      <Box display={"flex"} flexDirection={"row"}>
        {results
          .filter((item) => item.title.startsWith(search))
          .map((item: ItemType) => (
            <SearchCard key={item.id} item={item} />
          ))}
      </Box>
    </Box>
  );
}
