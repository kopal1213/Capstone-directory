import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import axios from "axios";
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel, FormGroup } from "@mui/material";

export default function Category() {
  const location = useLocation();
  const navigate = useNavigate();
  const [view, setView] = React.useState("All");
  const [categories, setCategories] = React.useState([]);

  useEffect(() => {
    async function getCategories() {
      try {
        const { data } = await axios.get("http://localhost:3001/api/v1/products/categories"); 
        setCategories(["All", ...data]);
      } catch (ex) {
        console.log(ex);
      }
    }

    getCategories();
  }, []);

  const handleChange = (event, nextView) => {
    if (nextView !== null) {
      setView(nextView);
      let searchParams = new URLSearchParams(location.search);
      searchParams.delete("category");
      if (nextView !== "All") {
        searchParams.set("category", nextView);
      }
      navigate({
        pathname: "/products",
        search: searchParams.toString(),
      });
    }
  };

  return (
    <>
    <div position="static">
    <h4>Category</h4>
    <FormGroup value={view} onChange={handleChange}>
      {categories.map((category) => (
        <FormControlLabel
        key={category}
        control={
            <Checkbox
                color="primary"
                inputProps={{ 'aria-label': category }}
                style={{display: 'flex', flexDirection : 'row'}}
            />
        }
        label={category} style={{display: "flex", flexDirection: "row"}} />
      ))}
    </FormGroup>
    </div>
    </>
  );
}

