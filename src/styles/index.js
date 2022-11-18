import { styled } from "@mui/material/styles";
import { TextField, Button, Card } from "@mui/material";
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
  backgroundColor: "#3d0042",
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
}));

export const CustomCard = styled(Card)`
  ${({ theme }) => `

  &:hover {

    transform: scale(1.04);
    cursor: pointer;
  }
  `}
`;
