/* theme.ts */
import { extendTheme } from "@chakra-ui/react";
import { fonts } from "./app/font";

export const theme = extendTheme({
  fonts: {
    heading: "var(--font-montserrat)",
    body: "var(--font-montserrat)",
  },
});
