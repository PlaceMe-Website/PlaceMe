import { TextField, Autocomplete, InputAdornment, IconButton, alpha } from "@mui/material";
import React, { useState } from "react";
import { ItemType } from "@/app/dashboard/search/page";
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import { BorderColor, Search } from "@mui/icons-material";
import { useTheme } from "@mui/material";

const SearchBar = ( { items, setSearch }: {items: ItemType[], setSearch: React.Dispatch<React.SetStateAction<string>>}) => {
  const [value, setValue] = useState<string>("")
  const theme = useTheme()
  return (
    <Autocomplete
      id="neighbourhood-list"
      sx={{ width: 300}}
      options={items}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <TextField 
          {...params} 
          onChange={(e) => {
          setSearch(e.target.value)
          setValue(e.target.value)
          }} 
          value={value}
          sx={{
            '&:hover': {
              backgroundColor: alpha(theme.palette.common.white, 0.25),
            },
          }} 
          margin="normal"
          placeholder="Search Neighbourhoods"
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <IconButton disabled>
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
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
