import { styled } from "@mui/material/styles";
import { TextField, Button, Card, Accordion } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1d87e4",
      light: "#f69d21",
      dark: "#f69d21",
    },
    secondary: {
      main: "#cf6915",
      light: "#cf6915",
      dark: "#cf6915",
    },
    common: {
      main: "rgba(255, 255, 255, 0.1)",
      light: "#f48225",
      dark: "#f69d21",
    },
    text: {
      main: "#ffffff",
      white: "#ffffff",
      dark: "#f69d21",
    },
  },
  typography: {
    fontFamily: ["Roboto Mono"].join(","), //Roboto Condensed
  },
});

export const CustomTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: theme.palette.secondary.main,
  },
  "& input": {
    letterSpacing: ".15rem",
    color: "#3d0042",
  },
  "& label": {
    color: theme.palette.primary.main,
  },
  "& placeholder": {
    color: theme.palette.primary.main,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: theme.palette.primary.main,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.primary.main,
      backgroundColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: theme.palette.secondary.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },
});

export const ColorButton = styled(Button)(() => ({
  color: theme.palette.getContrastText(theme.palette.primary.main),

  "&:hover": {
    backgroundColor: "#457b9d66",
  },
}));

export const CustomCard = styled(Card)`
  //se quito el transform: scale(1.04)
  ${({ theme }) => `
  &:hover {
    background-color: #457b9d66;
    cursor: pointer;
  }
  `}
`;

export const CustomizedAccordion = styled(Accordion)(() => ({
  border: "0px solid #300350",
  borderTop: "2px solid #300350",
  borderRight: "2px solid #300350",
  borderLeft: "2px solid #300350",
  borderBottom: "2px solid #300350",
  boxShadow: "none",
}));
