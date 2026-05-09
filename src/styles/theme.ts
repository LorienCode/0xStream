import type { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {

    colors: {
        body: "#191919",
        footer: "#181818",

        title: "#FFFFFF",
        subtitle: "#FFFFFF",
        paragraph: "#858585",

        primary: "#00FF3E",
    },

    typography: {
        font: "'Poppins', sans-serif",

        size: {
            sm: "14px",
            md: "16px",
            lg: "20px",
            xl: "32px",
        },

        weight:{
            regular: 400,
            medium: 500,
            semiBold: 600,
        },
    },
};
