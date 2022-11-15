import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme/theme";
import {FC} from "react";


interface ProgressProps {
    progress: number;
    size: any;
}


const ProgressCircle:FC<ProgressProps> = ({ progress, size }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const angle = progress * 360;
    return (
        <Box
            sx={{
                background: `radial-gradient(${colors.grey[700]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
            ${colors.greenAccent[500]}`,
                borderRadius: "50%",
                width: `${size}px`,
                height: `${size}px`,
            }}
        />
    );
};

export default ProgressCircle;