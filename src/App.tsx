import React, {FC} from 'react';
import {ColorModeContext, useMode} from "./theme/theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import { Route, Routes} from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Sidebar from './scenes/global/Sidebar';
import Team from "./scenes/team/index";
import Contacts from "./scenes/contacts/index";
import Invoices from "./scenes/invoices/index";


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
                        <Route path="/team" element={<Team />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/invoices" element={<Invoices />} />
                    </Routes>
                </main>
            </div>
        </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
