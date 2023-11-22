import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Image from "next/image";
import userImg from "../../public/images/user.png";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";

/**
 * React component for the header section.
 *
 * @component
 * @returns {JSX.Element} Header component
 */
const Header = () => {

  // ------------- Header col style --------------

  const HeadercolCsx = {
    width: "270px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "10px",
    color: "textColors.primary",
    padding: "5px 0",
  }

  // ----------------------------------------------

  return (
    <Box
      sx={{
        width: "100%",
        paddingLeft: 0,
        paddingRight: 0,
        borderBottom: "1px solid white",
        // Responsive
        backgroundColor: {
          zero: "bg.6",
          mobile: "bg.2"
        }
      }
      }>
      <Box
        sx={{
          paddingLeft: 0,
          paddingRight: 0,
          width: "100%",
          maxWidth: "mdLarge",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
           // Responsive
           padding: {
            zero: "0.5rem 0",
            mobile: "1rem 0"
           }
        }}
      >
        {/* Left Column */}
        <Box sx={{
          ...HeadercolCsx,
          // Responsive
          width: {
            zero: "max-content",
            mobile: HeadercolCsx.width
          }
          }}>
          {/* Back Button */}
          <Button variant="contained"
            sx={{
              backgroundColor: "bg.1",
              padding: 0,
              borderRadius: "5px",
              border: "none",
              outline: "none",
              color: "textColors.primary",
              cursor: "pointer",
              padding: "10px",
              transition: "opacity 300ms",
              "&:hover": {
                opacity: 0.8
              }
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                fontSize: "24px"
              }}
            />
          </Button>
          {/* Content Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <Box sx={{ "display": "flex", "justifyContent": "center", "alignItems": "center", "gap": "10px" }}>
              <Box variant="span" sx={{
                fontSize: "1rem",
                fontWeight: "bold",
              }}>Media Management</Box>
              <EditIcon sx={
                { "fontSize": "1rem", "cursor": "pointer" }
              } />
            </Box>

            <Typography sx={{
              display: "inline-block",
              color: "textColors.primary"
            }}>Draft Campaign</Typography>
          </Box>
        </Box>
        {/* Right Column */}
        <Box sx={{
          ...HeadercolCsx,
          width: {
            zero: "max-content",
            mobile: "170px" // On screen greater than 170px
          }
          }}>
          {/* User Information Section */}
          <Box
          sx={{
            display: {
              'zero': "none",
              'mobile':  "block"
            }
          }}
          >
            <Typography variant="h4" sx={{
              fontSize: "1rem",
              fontWeight: "bold"
            }}>Jane Cooper</Typography>
            <Typography variant="p" sx={{
              "color": "textColors.secondary", "fontSize": "0.8rem"
            }}>
              Change Profile
            </Typography>
          </Box>
          {/* User Image */}
          <Image sx={{
            "width": "100%", "maxWidth": "30px", "height": "30px"
          }} src={userImg} alt="user image" />
        </Box>
      </Box>
    </Box>

  );
};

export default Header;
