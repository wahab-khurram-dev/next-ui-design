// Importing the modules      
import React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';


/**
 * ContentTabs component for selecting the type of content.
 *
 * @component
 * @param {Object} props - The properties passed to the ContentTabs component.
 * @param {Function} props.setContentType - A function to set the content type.
 * @param {string} props.contentType - The current selected content type.
 * @param {Function} props.setSelectedText - A function to set the selected text.
 * @returns {JSX.Element} The JSX representation of the ContentTabs component.
 */
const ContentTabs = ({ setContentType, contentType, setSelectedText }) => {

  const theme = useTheme();

  const contentTypes = [
    "Fun",
    "Education",
    "Sports",
    "News",
    "Investment",
    "Facts"
  ]

  return (
    <Box
      sx={{
        paddingTop: "2.5rem"
      }}
    >
      <Typography variant="p"
        sx={{
          display: "inline-block",
          paddingBottom: "1.5rem",
          fontSize: { mobile: "1rem", tablet: "1.2rem" },
          color: "white"
        }}>What type of content are you creating?</Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          gap: "10px"
        }}
      >

        {
          contentTypes.map((content) =>

            <Button key={content}
              sx={{
                "backgroundColor": contentType === content ? "cSecondary" : "transparent",
                "border": "1px solid #616066",
                "padding": "14px 28px",
                "borderRadius": "30px",
                "fontSize": "0.9rem",
                "color": "textColors.primary",
                "cursor": "pointer",
                "transition": "all 400ms",
                "letterSpacing": "1px",
                // Hover css
                "&:hover": { backgroundColor: "cSecondary" },
                // Responsive css
                [theme.breakpoints.down('mobile')]: {
                  padding: "10px 20px",
                  borderRadius: "30px",
                },
              }}
              variant="outlines"
              onClick={() => {
                setSelectedText(() => "");
                setContentType(() => content);
              }}
            >
              {content}
            </Button>)
        }
      </Box>
    </Box>
  );
};

export default ContentTabs;
