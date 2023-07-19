import React from 'react'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import {Videos, ChannelCard} from '@/components'

const Search = () => {
    const router = useRouter();
    const { slug } = router.query;
  return (
    <div>Search + { slug }</div>
  )
}

export default Search