/* eslint-disable react/prop-types */
import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";

const ProductDetails = ({ clickedProduct }) => {
  const [selectedImg, setselectedImg] = useState(0);
  

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box sx={{ display: "flex", width: { xs: "250px", sm: "360px" } }}>
        <img
          // @ts-ignore
          src={`${clickedProduct.attributes.productImg.data[selectedImg].attributes.url}`}
          alt=""
          width={"100%"}
        />
      </Box>

      <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">
          {clickedProduct.attributes.productTitle}
        </Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          ${clickedProduct.attributes.productPrice}
        </Typography>
        <Typography variant="body1">
          {clickedProduct.attributes.productDescription}
        </Typography>

        <Stack
          direction={"row"}
          gap={1}
          my={2}
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
        >
          <ToggleButtonGroup
            value={selectedImg}
            exclusive
            sx={{
              ".Mui-selected": {
                border: "1px solid royalblue !important",
                borderRadius: "5px !important",
                opacity: "1",
                backgroundColor: "initial",
              },
            }}
          >
            {clickedProduct.attributes.productImg.data.map((item, index) => {
              console.log(item);
              return (
                <ToggleButton
                  key={item}
                  value={index}
                  sx={{
                    width: "110px",
                    height: "110px",
                    mx: 1,
                    p: "0",
                    opacity: "0.5",
                  }}
                >
                  <img
                    onClick={() => {
                      setselectedImg(index);
                    }}
                    src={`${item.attributes.url}`}
                    style={{ borderRadius: 3 }}
                    height={"100%"}
                    width={"100%"}
                    alt=""
                  />
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
        </Stack>

        <Button
          variant="contained"
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy Now
        </Button>
      </Box>
    </Box>
  );
};
export default ProductDetails;
