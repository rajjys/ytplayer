import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { fetchFromAPI } from '../../utils/fetchFromAPI';
import { Videos } from '@/components';

const VideoDetail = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [videoDetail, setVideoDetail] = useState(null);
    const [ videos, setVideos ] = useState([]);
    ////const { snippet: { title, channelId, channelTitle }, statistics } = VideoDetail;
    useEffect(() => {
      fetchFromAPI(`videos?part=snippet,statistics&id=${slug}`)
      .then((data) => {
        setVideoDetail(data.items[0]); 
      });
      fetchFromAPI(`search?part=snippet&relatedToVideoId=${slug}`).
      then((data)=> setVideos(data.items));
    }, [slug]);
    if(!videoDetail?.snippet) return "Loading";
  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row'}}>
        <Box flex={1}>
          <Box sx={{width: '100%', position: 'sticky', top: '86px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${slug}`} className='react-player' controls />
            <Typography variant='h5' color='white' fontWeight='bold' p={2}>
              { videoDetail.snippet.title } 
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{color: '#1d2d3f'}} py={1} px={2}>
              <Link href={`/channel/${videoDetail.snippet.channelId}`}>
                <Typography variant={{sm: 'subtitle1', md: 'h6'}} color={'#1d2e3f'}>
                  {videoDetail.snippet.channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px'}} />
                </Typography>
              </Link>
              <Stack direction='row' gap="20px" alignItems='center'>
              <Typography variant='body1' sx={{ opacity: '0.7'}}>
                { parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} Views
              </Typography>
              <Typography variant='body1' sx={{ opacity: '0.7'}}>
                { parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} Likes
              </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{md: 1, xs: 5}} justifyContent='center' alignItems='center'>
        <Videos videos={videos} direction='column' />
      </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail