import {createContext, useState, useMemo} from "react";
import {createTheme} from "@mui/material";


export const tokens = (mode: string) => ({
    ...(mode === "dark" ? {
        grey: {
            50: "#f9fafb",
            100: "#f3f4f6",
            200: "#e5e7eb",
            300: "#d1d5db",
            400: "#9ca3af",
            500: "#6b7280",
            600: "#4b5563",
            700: "#374151",
            800: "#1f2937",
            900: "#111827",
        },
        primary: {
            50: "#eef2ff",
            100: "#e0e7ff",
            200: "#c7d2fe",
            300: "#a5b4fc",
            400: "#818cf8",
            500: "#6366f1",
            600: "#4f46e5",
            700: "#4338ca",
            800: "#3730a3",
            900: "#312e81",
        },
        redAccent: {
            50: "#fdf2f2",
            100: "#fce7e7",
            200: "#fbcfcd",
            300: "#f9a8a8",
            400: "#f47272",
            500: "#ec4899",
            600: "#db2777",
            700: "#be185d",
            800: "#9d174d",
            900: "#831843",
        },
        greenAccent: {
            50: "#f0fdf4",
            100: "#dcfce7",
            200: "#bbf7d0",
            300: "#86efac",
            400: "#4ade80",
            500: "#22c55e",
            600: "#16a34a",
            700: "#15803d",
            800: "#166534",
            900: "#14532d",
        },
        blueAccent: {
            50: "#eff6ff",
            100: "#dbeafe",
            200: "#bfdbfe",
            300: "#93c5fd",
            400: "#60a5fa",
            500: "#3b82f6",
            600: "#2563eb",
            700: "#1d4ed8",
            800: "#1e40af",
            900: "#1e3a8a",
        }
        } : {
        grey: {
            50: "#111827",
            100: "#1f2937",
            200: "#374151",
            300: "#4b5563",
            400: "#6b7280",
            500: "#9ca3af",
            600: "#d1d5db",
            700: "#e5e7eb",
            800: "#f3f4f6",
            900: "#f9fafb",
        },
        primary: {
            50: "#312e81",
            100: "#3730a3",
            200: "#4338ca",
            300: "#4f46e5",
            400: "#6366f1",
            500: "#818cf8",
            600: "#a5b4fc",
            700: "#c7d2fe",
            800: "#e0e7ff",
            900: "#eef2ff",
        },
        redAccent: {
            50: "#831843",
            100: "#9d174d",
            200: "#be185d",
            300: "#db2777",
            400: "#ec4899",
            500: "#f47272",
            600: "#f9a8a8",
            700: "#fbcfcd",
            800: "#fce7e7",
            900: "#fdf2f2",
        },
        greenAccent: {
            50: "#14532d",
            100: "#166534",
            200: "#15803d",
            300: "#16a34a",
            400: "#22c55e",
            500: "#4ade80",
            600: "#86efac",
            700: "#bbf7d0",
            800: "#dcfce7",
            900: "#f0fdf4",
        },
        blueAccent: {
            50: "#0d2e4e",
            100: "#0e3a5e",
            200: "#0e4a7b",
            300: "#0e5a94",
            400: "#0e6ba8",
            500: "#0e7bc0",
            600: "#0e8bc9",
            700: "#0e9bd3",
            800: "#0ea9db",
            900: "#0eb9e6",
        }
    })
});

export const themeSettings = (mode: string) => {

    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === "dark" ? {
                primary: {
                    main: colors.primary[500]
                },
                secondary: {
                    main: colors.greenAccent[500]
                },
                neutral: {
                    dark: colors.grey[900],
                    main: colors.grey[500],
                    light: colors.grey[300]
                },
                background: {
                    default: colors.grey[900],
                }
            }:{
                primary: {
                    main: colors.primary[100]
                },
                secondary: {
                    main: colors.greenAccent[500]
                },
                neutral: {
                    dark: colors.grey[700],
                    main: colors.grey[500],
                    light: colors.grey[300]
                },
                background: {
                    default: '#fcfcfc',
                }
            })
        },
        typography: {
            fontFamily: "Inter, sans-serif",
            fontSize: 12,
            h1: {
                fontFamily: "Inter, sans-serif",
                fontSize: "2.5rem",
            },
            h2: {
                fontFamily: "Inter, sans-serif",
                fontSize: "2rem",
            },
            h3: {
                fontFamily: "Inter, sans-serif",
                fontSize: "1.75rem",
            },
            h4: {
                fontFamily: "Inter, sans-serif",
                fontSize: "1.5rem",
            },
            h5: {
                fontFamily: "Inter, sans-serif",
                fontSize: "1.25rem",
            },
            h6: {
                fontFamily: "Inter, sans-serif",
                fontSize: "1rem",
            }
        }
    }
};


export const ColorModeContext = createContext({
    toggleColorMode:() => {}
});


export const useMode: () => { colorMode: { toggleColorMode: () => void }; theme: any } = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
            }
        }),
        []);
    // @ts-ignore
    const theme = createTheme(themeSettings(mode));
    return { theme, colorMode };
}


