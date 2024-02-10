import { isMobileOnly } from "react-device-detect";
import { useMediaQuery, useTheme } from "@mui/material";

const useLayout = () => {
	const theme = useTheme();
	const isBigScreen = useMediaQuery(theme.breakpoints.up("sm"));
	const isDesktop = isBigScreen && !isMobileOnly;

	return { isDesktop };
};

export default useLayout;
