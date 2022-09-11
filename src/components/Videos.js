import React from "react";
import { Box, Stack } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos , direction }) => {
  console.log(videos);
  if(!videos?.length) return 'Loading...'

  return (
    <Stack
      direction={direction || 'row'}
      flexWrap="wrap"
      gap={2}
      justifyContent='center'
    >
        {videos.map((val,key)=>{
            return(
                <Box key={key} >
                        {val.id.videoId && <VideoCard video={val}/>}
                        {val.id.channelId && <ChannelCard channelDetail={val}/>}
                </Box>
            )
        })}
    </Stack>
  );
};

export default Videos;
