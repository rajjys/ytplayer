import React from 'react'
import {Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import Link from 'next/link'
import { demoProfilePicture } from '@/pages/utils/constants'

const ChannelCard = ( { channelDetail }) => {
  return (
    <Box sx={{width: {md: '320px', xs: '100%'}, boxShadow: 'none', borderRadius:'20px', margin: '10px'}}>
        < Link href={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent 
                sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff'}}>
                <CardMedia 
                    image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                    alt={channelDetail?.snippet?.title}
                    sx={{borderRadius: '30%', width: 180, height: 180, margin: 'auto'}}
                />
            </CardContent>
        </Link>
    </Box>
  )
}

export default ChannelCard