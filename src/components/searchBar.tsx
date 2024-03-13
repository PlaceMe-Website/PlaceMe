import { Box, IconButton, TextField, Button, Autocomplete } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { ItemType } from "@/app/dashboard/search/page";
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

const SearchBar = ( { items, setSearch }: {items: ItemType[], setSearch: React.Dispatch<React.SetStateAction<string>>}) => {
  const [value, setValue] = useState<string>("")
  return (
    <Autocomplete
      id="neighbourhood-list"
      sx={{ width: 300 }}
      options={items}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <TextField {...params} onChange={(e) => {
          setSearch(e.target.value)
          setValue(e.target.value)
        }} value={value} label="Search Neighbourhoods" margin="normal"/>
      )}
      onChange={(e, value) => {
        value ? setSearch(value.title) : setSearch("")
      }}
      renderOption={(props, option, { inputValue }) => {
        const matches = match(option.title, inputValue, { insideWords: true });
        const parts = parse(option.title, matches);
        return (
          <li {...props}>
            <div>
              {parts.map((part, index) => (
                <span
                  key={index}
                  style={{
                    fontWeight: part.highlight ? 700 : 400,
                  }}
                >
                  {part.text}
                </span>
              ))}
            </div>
          </li>
        );
      }}
    />
  );
}

export default SearchBar
