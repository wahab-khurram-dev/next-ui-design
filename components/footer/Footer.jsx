// Importing modules
import React from "react";
import rightArrow from "../../public/images/rightArrow.png";
import Image from "next/image";
import Button from "@mui/material/Button";
import { maxWidth } from "@mui/system";
import { Box } from "@mui/material";
/**
 * Footer component.
 *
 * @returns {JSX.Element} JSX representation of the Footer component
 */
const Footer = () => {

  const buttonSx = {
    "backgroundColor":"transparent","border":"1px solid #616066","borderRadius":"30px","fontSize":"0.9rem","color":"textColors.primary","cursor":"pointer","transition":"all 400ms","letterSpacing":"1px",
    padding: {
      zero: "3px 28px !important",
      mobile: "10px 28px !important"
    }
  }

  return (
    <Box
      sx={{
        backgroundColor: "bg.2",
        width: "100%"
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "1rem 0",
          paddingLeft: "15px",
          paddingRight: "15px",
          display: "flex",
          justifyContent: "space-between",
          // Responsive
          flexDirection: {
            zero: "column",
            mobile: "inherit"

          },
          gap: {
            zero: "10px",
            mobile: "inherit"
          },
          width: {
            zero: "95%",
            mobile: "100%"
          },
          margin: {
            zero: "0 auto",
            mobile: "0 auto" 
          }
        }}
      >
        <Button variant="outlines"
        sx={{
          ...buttonSx,
          "width": {
            zero: "100%",
            mobile: "100px"
           }
        }}
        >Back</Button>
        <Button variant="outlines"
        sx={{
         ...buttonSx,
         "width": {
          zero: "100%",
          mobile: "150px"
         },
         "backgroundColor":"textColors.primary","color":"textColors.secondary","display":"flex",
         "justifyContent": {zero: "justify-content: center", mobile: "space-between"}
        }}
        >
          <span>Next</span>
          <Image src={rightArrow} alt="arrow"
          sx={{
            width: "100%",
            maxWidth: "20px",
            display: {
              zero: "none",
              mobile: "inherit"
            }
          }}
          />
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
