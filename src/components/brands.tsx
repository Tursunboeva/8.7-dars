import Image from 'next/image'
import React from 'react'
import brandImg from '../../public/brands.svg'

export default function Brands() {
  return (
    <div className='container py-[100px]'>
        <Image src={brandImg} width={200} height={200} className='w-full' alt="" />
    </div>
  )
}
