import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

/**
 * 
 * @param {object} props
 * @returns 
 */
const SearchSelectBox = (props) => {
  const { className, sx, options, onSelectChange, selectedValue } = props;
  const [focused, setFocused] = useState(false);

  const [inputValue, setInputValue] = useState(selectedValue ? selectedValue : "");

  const handleInputChange = (event, newInputValue) => {
    // console.log(document.querySelector(".MuiAutocomplete-popper")) // Debug the element on console to find the noOptions class, as using the browser inspect element it is deactivating the autocomplete element when clicked elsewhere
    setInputValue(newInputValue);
  };

  

  return (
    <Autocomplete
      sx={{
        "width": "100%",
        "maxWidth": "517px",
        "backgroundColor": "bg.4",
        "borderRadius": "13px",
        '& .MuiInputBase-input': {
          borderRadius: '20px',
          color: "textColors.primary"
        },
        "color": "textColors.primary",
        "& .MuiAutocomplete-popupIndicator svg": { color: "textColors.primary" },
        '& .MuiAutocomplete-clearIndicator': { color: "#ff8593" },
        "& .MuiSelect-icon": { color: "textColors.primary" },
        // If focused then set the border
        ...(focused ? {"border": "2px solid #ab5cd7"} : {})
      }}
      autoComplete
      className={className}
      slotProps={{
        paper: {
        sx: {
          marginTop: '20px',
          color: "textColors.primary",
          maxHeight: 300,
          backgroundColor: "#1e1d25",
          // No option label color
          '& .MuiAutocomplete-noOptions': {
            color: 'textColors.primary',
          }
        }
      }}}
 
      options={options}
      onFocus={()=> setFocused(true)}
      onBlur={()=> setFocused(false)}
      onChange={onSelectChange}
      inputValue={inputValue}
      //InputLabelProps={{ shrink: false }}
      onInputChange={handleInputChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label={"Search"}
          variant="outlined"
          InputLabelProps={{
            sx: {
              "width": "100%",
              // On focused, set the label color
              '&.Mui-focused': {
                color: 'textColors.primary',
              }
            },
          }}
          sx={{
            color: "white",
            // Label color
            '& label': {color: "textColors.primary"},
            '& fieldset': {
              border: "none"
            },
            '&:hover fieldset': {
              border: 'none',
            },
            '&.Mui-focused': {
              color: 'textColors.primary',
            },
            
          }}
        />
      )}
    />
  );
};

export default SearchSelectBox;
