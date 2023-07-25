import Head from 'next/head'
import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { Videos } from '@/components'
import { fetchFromAPI } from '../../utils/fetchFromAPI'
import { useRouter } from 'next/router'



export default function Search() {
  const [videos, setVideos] = useState([]);
  const router = useRouter();
  const { slug } = router.query;
  const searchTerm = slug
  ;
  console.log('page: ' + searchTerm);
  
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).
    then((data) => {
      setVideos(data.items)});
  }, [searchTerm]);
  return (
    <div>
      <Head>
        <title>Search</title>
      </Head>
      <Box p={2} sx={{overflow: 'auto', height: '90vh', flex: 2}}>
          <Typography variant='h4' fontWeight='bold' mb={2} sx={{color: 'white'}}>
            Search Results for: <span style={{color: '#F31503'}}>{searchTerm}</span>
          </Typography>
          <Videos videos={videos} />
        </Box>
    </div>
    )
}
