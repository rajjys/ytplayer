import React from 'react'
import { useRouter } from 'next/router'

const VideoDetail = () => {
    const router = useRouter();
    const { slug } = router.query;
  return (
    <div>VideoDetail
        <h1>{slug}</h1>
    </div>
  )
}

export default VideoDetail