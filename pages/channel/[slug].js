import React from "react";
import { useRouter } from "next/router";

const Channel = () => {
    const router = useRouter();
    const { slug } = router.query;
  return (
    <div>Channel + {slug} </div>
  )
}

export default Channel