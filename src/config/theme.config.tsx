import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";

type ThemeProp = {
    children: JSX.Element;
};

export enum themePalette {
    bg = "#222",
    lime ="#5FC8FA",
    font_global = 'JetBrains Mono'
}

const theme = createTheme({
    palette:{
        mode:"dark",
        background:{
            default: themePalette.bg
        },
        primary: {
            main: themePalette.lime
        }
    },
    typography:{
        fontFamily: themePalette.font_global
    },
    components:{
        MuiButton:{
            defaultProps:{
                style:{
                    textTransform: "none",
                    boxShadow: "none"
                }
            }
        }
    }
});

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    )
};
