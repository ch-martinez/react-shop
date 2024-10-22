import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";

type ThemeProp = {
    children: JSX.Element;
};

export enum themePalette {
    bg = "#222",
    lime ="#C8FA5F",
    font_global = ''
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
