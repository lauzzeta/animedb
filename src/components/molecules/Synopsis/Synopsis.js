import React from "react";
import {
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CustomizedAccordion } from "../../../styles";

export default function Synopsis({ synopsis }) {
  return (
    synopsis && (
      <Grid item xs={12}>
        <CustomizedAccordion square={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#300350" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              color="#300350"
              sx={{
                fontWeight: 500,
                fontSize: { xs: 18, sm: 15, md: 18, xl: 18 },
                textDecoration: "underline",
                textDecorationColor: "#5C2C6D",
              }}
            >
              Synopsis
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              color="#300350"
              sx={{
                fontWeight: 500,
                fontSize: { xs: 11, sm: 10, md: 11, xl: 11 },
              }}
            >
              {synopsis.replace(" [Written by MAL Rewrite]", "")}
            </Typography>
          </AccordionDetails>
        </CustomizedAccordion>
      </Grid>
    )
  );
}
