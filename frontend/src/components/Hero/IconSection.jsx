import { useTheme } from "@emotion/react";
import {
  AccessAlarmOutlined,
  CreditScoreOutlined,
  ElectricBolt,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

const IconSection = () => {
  const theme = useTheme();
  return (
    <Container
      sx={{ bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff", mt: 3 }}
    >
      <Stack
        direction={"row"}
        divider={
          useMediaQuery("(min-width:600px)") ? (
            <Divider orientation="vertical" flexItem />
          ) : null
        }
        alignItems={"center"}
        sx={{ flexWrap: "wrap" }}
        
      >
        <MyBox
          icon={<ElectricBolt fontSize="large" />}
          title={"Fast Delivery"}
          subTitle={"Start from $10"}
        />
        <MyBox
          icon={<WorkspacePremiumOutlined fontSize="large" />}
          title={"Money Guarantee"}
          subTitle={"7 Days Back"}
        />
        <MyBox
          icon={<AccessAlarmOutlined fontSize="large" />}
          title={"365 Days"}
          subTitle={"For free return"}
        />
        <MyBox
          icon={<CreditScoreOutlined fontSize="large" />}
          title={"Payment"}
          subTitle={"Secure system"}
        />
      </Stack>
    </Container>
  );
};
export default IconSection;

// eslint-disable-next-line react/prop-types
const MyBox = ({ icon, title, subTitle }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: 250,
        display: "flex",
        alignItems: "center",
        py: 1.6,
        flexGrow: 1,
        gap: 3,
        justifyContent: useMediaQuery("(min-width:600px)") ? "center" : "left",
      }}
    >
      {icon}
      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography
          sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
          variant="body1"
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};
