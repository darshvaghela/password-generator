import { createGlobalStyle } from "styled-components";

export const theme = {
  primary: "#22D3EE",
  secondary: "#2DD4BF",
  secondaryDark: "#14b8a6",
  black: "#000000",
  green: "#16DB65",
  grey: "rgba(0, 0, 0, 0.06)",
  white: "#ffffff",
  textGrey: "rgba(0, 0, 0, 0.45)",
  darkBlue: "#1890ff",
  orange: "#ED7014",
  red: "#801818",
  borderRadius: 8,
  textSmall: 12,
  fontFamily: `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto`,
};

//put all theme variables in global style as well to use in index.css or any other css file as variable
export const GlobalStyles = createGlobalStyle`html {
    --primary: ${theme.primary};
    --secondary: ${theme.secondary};
    --black: ${theme.black};
    --grey: ${theme.grey};
    --text-grey:r ${theme.textGrey};
    --white: ${theme.white};
    --dark-blue: #1890ff;
    --green: ${theme.green};
    --orange: ${theme.orange};
    --red:${theme.red}
  }`;
