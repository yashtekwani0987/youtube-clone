import React from "react";
import { Box, Typography } from "@mui/material";
import Videos from "./Videos";
import { fetchApi } from "../utils/fetchfromApi";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setvideos] = useState([]);
  const {searchTerm} = useParams()
  useEffect(() => {
    fetchApi(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setvideos(data.items);
    });
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
       Seacrh Result for :{searchTerm}
        <span style={{ color: "#F31503" }}> Videos </span>
      </Typography> 
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
