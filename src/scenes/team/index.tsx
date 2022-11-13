import React from 'react';
import {Box, Typography, useTheme} from "@mui/material";
import {tokens} from "../../theme/theme";
import {DataGrid} from "@mui/x-data-grid";
import {mockDataTeam} from "../../data/mockData";


const Team: React.FC = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {field: 'id', headerName: 'ID', width: 70},
        {field: 'firstName', headerName: 'First name', width: 130},
        {field: 'lastName', headerName: 'Last name', width: 130},
        {field: 'age', headerName: 'Age', type: 'number', width: 90},
        {field: 'fullName', headerName: 'Full name', description: 'This column has a value getter and is not sortable.', sortable: false, width: 160},
    ];

    return (
        <Box>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "0 0 5px 0" }}
                >
                    TEAM
                </Typography>
            </Box>
            <Box height="500px" width="100%">
                <DataGrid rows={mockDataTeam} columns={columns} pageSize={5} checkboxSelection />
            </Box>
        </Box>
    );
}

export default Team;