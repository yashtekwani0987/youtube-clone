import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box , CardMedia } from "@mui/material";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { fetchApi } from "../utils/fetchfromApi";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchApi(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data.items[0]);
    });

    fetchApi(`search?channelId=${id}&part=snippet&order=date`).then((data) => {
      setVideos(data.items);
    });
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <CardMedia
        image={channelDetail?.brandingSettings?.image?.bannerExternalUrl}
          style={{
            height: "300px",
            zIndex:10
            // background:
            //   "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(120,9,121,1) 100%)",
          }}
        />
        <ChannelCard marginTop='-110px' channelDetail={channelDetail}/>
      </Box>
      <Box display='flex' p='2'>
            <Box/>
            <Videos videos={videos}/>        
      </Box>
    </Box>
  );
};

export default ChannelDetail;
