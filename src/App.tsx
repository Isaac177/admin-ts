import React, {FC} from 'react';
import {ColorModeContext, useMode} from "./theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Sidebar from './scenes/global/Sidebar';


const App:FC = () => {
    const {theme, colorMode} = useMode();
    return (
    <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="app">
                <Sidebar />
                <main className="content">
                    <Topbar />
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                    </Routes>
                </main>
            </div>
        </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
