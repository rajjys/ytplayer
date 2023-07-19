import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Box } from "@mui/material";
import { ChannelCard } from "@/components";
import { Videos } from "@/components";

const Channel = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [channelDetails, setChannelDetails] = useState(null);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
      fetchFromAPI(`channels?part=snippet&id=${slug}`)
      .then((data) => setChannelDetails(data?.items[0]));
      fetchFromAPI(`search?channelId=${slug}&part=snippet&order=date`)
      .then((data)=>setVideos(data?.items))
    }, [slug])
    console.log("Channel: " + channelDetails);
    console.log("Videos: " + videos);
  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{background: 'linear-gradient(90deg, rgba(36,16,0,0.8642915784477854) 0%, rgba(21,121,9,0.7438433991760767) 35%, rgba(148,0,255,0.5505660882517069) 100%)',
                    zIndex: 10, height: '300px'}}>
          </div>
          <ChannelCard channelDetail={channelDetails} marginTop='-93px' style={{marginLeft: '50%'}} />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" }}} />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default Channel