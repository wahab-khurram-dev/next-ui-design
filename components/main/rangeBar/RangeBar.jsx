// Importing modules
import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
/**
 * RangeBar component for selecting the number of words for output text.
 *
 * @component
 * @param {Object} props - The properties passed to the RangeBar component.
 * @param {number} props.range - The current selected range value.
 * @param {Function} props.setRange - A function to set the range value.
 * @returns {JSX.Element} The JSX representation of the RangeBar component.
 */
const RangeBar = ({ range, setRange }) => {

  const theme = useTheme();


  // ------- Range Data Element styling ---------
  const RageElemData = {
    sx: {
      position: "absolute",
      color: "textColors.primary",
      fontSize: "1rem",
      top: "50%",
      transform: "translateY(-50%)"
    },
    margin: "15px"
  }
  // ---------------------------------------------

  // Rendering the JSX here
  return (
    <Box
      sx={{
        paddingTop: "2rem",
      }}
    >
      <Typography variant="p"
        sx={{
          display: "inline-block",
          fontSize: "1.2rem",
          paddingBottom: "1.2rem",
          color: "textColors.primary",
          // Responsive
          [theme.breakpoints.down("mobile")]: {
            fontSize: "1.2rem",
            paddingBottom: "1.2rem"
          }
        }}>Select the number of words for output text</Typography>
      <Box
        sx={{
          "position": "relative",
          "padding": "1rem 4rem",
          "backgroundColor": "bg.2",
          "width": "max-content",
          "borderRadius": " 10px",
          // Responsive
          [theme.breakpoints.down("mobile")]: {
            margin: "0 auto",
            width: "100%",
            padding: "1rem 2rem"
          }
        }}
      >
        <Box variant="span"
          sx={{
            ...RageElemData.sx,
            left: RageElemData.margin,
          }}
        >100</Box>
        <Box
        sx={{
          width: 300, 
          margin: "0 auto",
          // Responsive
          [theme.breakpoints.down("mobile")]: {
            width: "calc(100% - 60px)"
          }
        }}
        >
          <Slider
            value={range}
            onChange={(e, newValue) => setRange(newValue)}
            aria-label="Default"
            valueLabelDisplay="on"
            min={100}
            max={1000}
            sx={{
              "& .MuiSlider-thumb": {
                color: "transparent",
                width: 20,
                height: 20,
                "&:before": {
                  content: '""',
                  display: "block",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  backgroundImage: theme.palette.gradient.primary,
                },
              },
              "& .MuiSlider-track": {
                height: 8,
                borderRadius: 4,
                backgroundImage: theme.palette.gradient.primary,
              },
              "& .MuiSlider-valueLabel": {
                backgroundColor: "#523fd7",
                borderRadius: 10,
              },
              [theme.breakpoints.down("mobile")]: {
                marginBottom: "-6px"
              }
            }}
          />
        </Box>
        <Box variant="span"
          sx={{
            ...RageElemData.sx,
            right: RageElemData.margin,
          }}>1000</Box>
      </Box>
    </Box>
  );
};

export default RangeBar;
