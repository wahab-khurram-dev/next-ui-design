// Importing the modules
import React from "react";
import { FormControl, InputLabel, Select, MenuItem, Typography } from "@mui/material";
import { choiceData } from "@/constants";
import SearchSelectBox from "../searchSelectBox/searchSelectBox";
import { Box } from "@mui/system";

/**
 * ContentSelection component for selecting the type of content within a category.
 *
 * @component
 * @param {Object} props - The properties passed to the ContentSelection component.
 * @param {string} props.contentType - The current selected content type.
 * @param {Function} props.setSelectedText - A function to set the selected text.
 * @param {string} props.selectedText - The currently selected text.
 * @returns {JSX.Element} The JSX representation of the ContentSelection component.
 */
const ContentSelection = ({ contentType, setSelectedText, selectedText }) => {
  // MenuProps for custom styling of the dropdown menu
  const MenuProps = {
    slotProps: {
      paper: {
        sx: {
          maxHeight: 300,
          backgroundColor: "#3a3940",
          "&::-webkit-scrollbar": {
            width: "12px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#523fd7",
            borderRadius: "6px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
            borderRadius: "6px",
          },
        },
      },
    },
  };
  // Render the ContentSelection component
  return (
    <Box
    sx={{
      paddingTop: "2rem",
      paddingBottom: "2rem"
    }}
    >
      <Typography
      sx={{
        display: "inline-block",
        color: "textColors.primary",
        paddingBottom: "2rem"
      }}
      >Which type of "{contentType}" content do you want to create?</Typography>
      <Box
      sx={{
        margin: "0 auto"
      }}
      >
       
          <SearchSelectBox
            onChange={(e) => setSelectedText(() => e.target.value)}
            options={choiceData[contentType]}
          />
      </Box>
    </Box>
  );
};

export default ContentSelection;
