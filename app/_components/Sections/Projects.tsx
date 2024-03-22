import React from 'react'
import Heading from '../Heading'
import ProjectCard from '../ProjectCard'

const data = [
    { "title" : "", "image" : "", "description" : ""},
    {},
]


export default function Projects() {
  return (
    <div className='w-full'>
        <Heading title='Projects' />
         < ProjectCard />
    </div>
  )
}
