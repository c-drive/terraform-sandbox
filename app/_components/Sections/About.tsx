import Container from '@/components/Container'
import React from 'react'
import Heading from '../Heading'

export default function About() {
  return (
            <Container >
                < Heading title="About Me" /> 
                <div className='flex  justify-center p-10 '>
                    <div className='w-2/5'>
                        <p className=' text-center'>
                        After graduating with a degree in Accounting, I decided to pursue my passion for programming. I enrolled in a coding bootcamp and learned full-stack web development. My favorite part of programming is the problem-solving aspect. I love the feeling of finally figuring out a solution to a problem. My core stack is React, Next.js, Node.js, and MongoDB. I am also familiar with TypeScript and Prisma. I am always looking to learn new technologies. I am currently looking for a full-time position as a software developer.
                        </p>
                        <br />
                        <p className=' text-center'>
                        When Im not coding, I enjoy playing video games, watching movies, and playing with my dog. I also enjoy learning new things. I am currently learning about history and philosophy. Im also learning how to play the guitar.    
                        </p>
                    </div>
                </div>             
            </Container>
  )
}


