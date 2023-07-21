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
    const [VideoDetail, setVideoDetail] = useState(null);
    useEffect(() => {
      fetchFromAPI(`videos?part=snippet,statistics&id=${slug}`)
      .then((data) => setVideoDetail(data.items[0]));
    }, []);
  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row'}}>
        <Box flex={1}>
          <Box sx={{width: '100%', position: 'sticky', top: '86px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${slug}`} className="react-player" controls/>
          </Box>
        </Box>

      </Stack>
    </Box>
  )
}

export default VideoDetail