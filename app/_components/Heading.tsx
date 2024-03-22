import React from 'react'

export default function Heading({ title } : { title : string }) {
  return (
    <div className='flex w-full justify-center items-center text-center '>
        <h1 className='font-bold text-6xl w-full py-9'>{title}</h1>
    </div>
  )
}
