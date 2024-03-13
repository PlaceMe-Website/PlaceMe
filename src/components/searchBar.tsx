import { Box, IconButton, TextField } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import React from "react";

type Props = {
  search: string;
  setSearch: React.Dispatch<string>;
};

const SearchBar = ({ search, setSearch }: Props) => {
  return (
    <Box>
      <TextField
        id="search-bar"
        className="text"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        label="Enter a Neighbourhood name"
        variant="outlined"
        placeholder="Search..."
        size="small"
        value={search}
      />
    </Box>
  );
};

export default SearchBar;
