import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const VideoDetail = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [videoDetail, setVideoDetail] = useState(null);
    const { snippet, statistics } = VideoDetail;
    useEffect(() => {
      fetchFromAPI(`videos?part=snippet,statistics&id=${slug}`)
      .then((data) => {
        setVideoDetail(data.items[0]);
        console.log(data);
      });
    }, []);
    if(!videoDetail?.snippet) return "Loading";
  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row'}}>
        <Box flex={1}>
          <Box sx={{width: '100%', position: 'sticky', top: '86px'}}>
            <Typography variant='h5' color='#fff' fontWeight='bold' p={2}>
              { snippet?.title }
            </Typography>
          </Box>
        </Box>

      </Stack>
    </Box>
  )
}

export default VideoDetail