import React from 'react'
import {Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import Link from 'next/link'
import { demoProfilePicture } from '@/pages/utils/constants'

const ChannelCard = ( { channelDetail, marginTop }) => {
  return (
    <Box sx={{width: {md: '300px', xs: '356px'},
              height: '326px',
              boxShadow: 'none', 
              borderRadius:'20px', 
              margin: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop}}>
        < Link href={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent 
                sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff'}}>
                <CardMedia 
                    image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                    alt={channelDetail?.snippet?.title}
                    sx={{borderRadius: '40%', width: 180, height: 180, margin: 'auto'}}
                />
                <Typography variant='h6' className='text-yellow-500 text-center'>
                  {channelDetail?.snippet?.title}
                  <CheckCircle sx={{fontSize: 14, color: '#565656', ml: '5px'}}/>
                </Typography>
                {
                  channelDetail?.statistics?.subscriberCount && 
                  <Typography variant='h6'>
                    {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()}
                    Subscribers
                  </Typography>
                }
                
            </CardContent>
        </Link>
    </Box>
  )
}

export default ChannelCard