import Image from 'next/image'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Videos, SideBar } from '@/components'
import { fetchFromAPI } from './utils/fetchFromAPI'



export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).
    then((data) => {
      setVideos(data.items)});
  }, [selectedCategory]);
  return (
    <div>
      <Head>
        <title>Youtube Player</title>
      </Head>
      <Stack sx={{flexDirection: { sx: "column", md: "row"}}}>
        <Box sx={{height: {sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2}}}>
          <SideBar selectedCategory={selectedCategory} 
                   setSelectedCategory={setSelectedCategory}/>
          <Typography className='copyright' variant='body2' sx={{mt: 1.5, color: '#fff' }}>
            Copyright 2023 Rajjys Media
          </Typography>
        </Box>
        <Box p={2} sx={{overflow: 'auto', height: '90vh', flex: 2}}>
          <Typography variant='h4' fontWeight='bold' mb={2} sx={{color: 'white'}}>
            {selectedCategory} <span style={{color: '#F31503'}}>Videos</span>
          </Typography>
          <Videos videos={videos} />
        </Box>
      </Stack>
    </div>
    )
}
