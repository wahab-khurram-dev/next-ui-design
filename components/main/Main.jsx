"use client";
import ContentTabs from "./contentTabs/ContentTabs";
import ContentSelection from "./contentSelection/ContentSelection";
import RangeBar from "./rangeBar/RangeBar";
import { useState } from "react";
import { Box, Container, useTheme } from "@mui/system";
import { Divider, Typography } from "@mui/material";


/**
 * React component for the main content area.
 * @component
 * @returns {JSX.Element} The JSX representation of the Main component.
 */
const Main = () => {
  // State variables to manage component state
  const [contentType, setContentType] = useState("Fun");
  const [selectedText, setSelectedText] = useState("");
  const [range, setRange] = useState(100);

  const theme = useTheme();

  // Render the Main component
  return (
    <Box
    sx={{
      width: "100%",
      backgroundColor: "bg.5",
      paddingLeft: "15px",
      paddingRight: "15px",
      paddingBottom: "2rem"
    }}
    >
      {/* Main container for content */}
      // classname: main, container
      <Container
        sx={{
          width: "100%",
          maxWidth: "mdLarge",
          margin: "0 auto",
          [theme.breakpoints.down("mdLarge")]: {
            width: "95%",

          }
        }}
      >
        <Typography variant="h2"
          sx={{
            fontSize: "1.5rem",
            color: "textColors.primary",
            marginBottom: "1rem",
            [theme.breakpoints.down("mobile")]: {
              fontSize: "1.25rem",
              marginBottom: "0.5rem"
            }
          }}
        >Content Type</Typography>
        <Typography variant="p"
          sx={{
            display: "inline-block",
            fontSize: "1rem",
            color: "textColors.primary",
            marginBottom: "1rem"
          }}
        >Choose a content type that best fits your needs</Typography>
        <Divider sx={{ borderBottomWidth: 1, borderColor: "borders.1" }} />
        {/* Component for content tabs */}
        <ContentTabs
          setContentType={setContentType}
          contentType={contentType}
          setSelectedText={setSelectedText}
        />
        {/* Component for content selection */}
        <ContentSelection
          contentType={contentType}
          selectedText={selectedText}
          setSelectedText={setSelectedText}
        />
        {/* Component for range bar */}
        <RangeBar range={range} setRange={setRange} />
      </Container>
    </Box>
  );
};

export default Main;
