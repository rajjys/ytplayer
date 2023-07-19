import React from 'react'
import Link from 'next/link'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoChannelTitle, demoThumbnailUrl,demoVideoTitle, demoChannelUrl,demoVideoUrl } from '@/pages/utils/constants'

const VideoCard = ( { video: { id: { videoId }, snippet } }) => {
  return (
    <Card sx={{ width: {md: '300px', xs: '356px'}, boxShadow: 'none', borderRadius: '5px', margin: '10px'}}>
        <Link href={videoId? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia 
                image={snippet?.thumbnails?.high?.url}
                alt={snippet?.title} 
                sx={{width: 358, height: 180}} />
        </Link>
        <CardContent sx={{ background: '#1e1e1e', height: '106px' }}>
            <Link href={videoId? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant='subtitle1' fontWeight='bold' color='#FFF'>
                    {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0,60)}
                </Typography>
            </Link>
            <Link href={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography variant='subtitle2' fontWeight='bold' color='#AAA'>
                    {snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle sx={{ fontSize: 12, color: '#DDD', ml: '10px'}} />
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard