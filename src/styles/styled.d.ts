import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            body: string;
            footer: string;

            title: string;
            subtitle: string;
            paragraph: string;

            primary: string;
        };

        typography: {
            font: string;

            size: {
                sm: string;
                md: string;
                lg: string;
                xl: string;
            };
            
            weight: {
                regular: number;
                medium: number;
                semiBold: number;
            };
        };

    }
}