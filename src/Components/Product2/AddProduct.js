import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import React from "react";
import { toast } from "react-toastify";
import Category from "./Category";
import { styled } from "@mui/system";
import axios from "axios";
import Layout from "../Products/Layout";

const FormContainer = styled(Container)({
  marginTop: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const FormTypography = styled(Typography)({
  marginTop: "8px",
});

const AddProduct = (props) => {
  const [name, setName] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [manufacturer, setManufacturer] = React.useState("");
  const [availableItems, setAvailableItems] = React.useState(1);
  const [price, setPrice] = React.useState(0);
  const [imageURL, setImageURL] = React.useState("");
  const [description, setDescription] = React.useState("");

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:3001/api/v1/products", {
        name,
        category: category.value,
        manufacturer,
        availableItems: +availableItems,
        price: +price,
        imageURL,
        description,
      });
      toast.success(`Product ${data.name} added successfully`);
      console.log(data);
    } catch (ex) {
      toast.error(ex.response.data);
    }
  };

  return (
    <Layout>
      <FormContainer component="main" maxWidth="xs" style={{backgroundColor: "#F0F0F0"}}>
      <CssBaseline />
      <div
        sx={{
          marginTop: "8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FormTypography variant="h5">Add Product</FormTypography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Category
                value={category}
                onChange={(data) => setCategory(data)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="manufacturer"
                label="Manufacturer"
                name="manufacturer"
                autoComplete="manufacturer"
                value={manufacturer}
                onChange={(event) => setManufacturer(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="available_items"
                label="Available Items"
                name="available_items"
                autoComplete="available_items"
                value={availableItems}
                onChange={(event) => setAvailableItems(+event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="price"
                label="Price"
                name="price"
                autoComplete="price"
                value={price}
                onChange={(event) => setPrice(+event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="image_url"
                label="Image URL"
                name="image_url"
                autoComplete="image_url"
                value={imageURL}
                onChange={(event) => setImageURL(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="description"
                label="Product Description"
                name="description"
                autoComplete="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ margin: "24px 0px 16px" }}
            onClick={submitForm}
          >
            Save Product
          </Button>
        </form>
      </div>
    </FormContainer>
    </Layout>
  );
};

export default AddProduct;

