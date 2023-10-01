'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"


const Logo = () => {
const router = useRouter()

  return (
    <Image
    onClick={() => router.push("/")}
    alt='airbnb logo'
    src='/images/nextbnb.png'
    className='hidden md:block cursor-pointer'
    height='150'
    width='130'
    />
  )
}

export default Logo