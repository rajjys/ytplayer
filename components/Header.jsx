import React from 'react'
import { Stack } from '@mui/material'
import Link from 'next/link'
import { logo } from '@/pages/utils/constants'
import Image from 'next/image'
import { SearchBar } from '.'

const Header = () => (
    <Stack direction="row" alignItems="center" p={2} 
    sx={{position: "sticky", background: "#000", top: 0, justifyContent: "space-between"}}>
      <Link href="/">
        <Image src={logo} alt='logo' height={45} width={45} unoptimized style={{display: 'flex', alignItems: 'center'}}/>
      </Link>
      <SearchBar />
    </Stack>
  )

export default Header