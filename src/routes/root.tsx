import * as React from 'react';
import { Outlet } from "react-router-dom";

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import theme from './../theme';
import Home from './../components/Home';

export default function Root() {
    return (
        <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Home />
            <Outlet />

      </ThemeProvider>
    );
}