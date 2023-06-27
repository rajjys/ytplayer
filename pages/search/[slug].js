import React from 'react'
import { useRouter } from 'next/router';

const Search = () => {
    const router = useRouter();
    const { slug } = router.query;
  return (
    <div>Search + { slug }</div>
  )
}

export default Search