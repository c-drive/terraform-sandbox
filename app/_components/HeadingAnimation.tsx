"use client"

import { motion } from 'framer-motion'
import { Fragment } from 'react'

export default function headingAnimation() {
  return (
    <Fragment>
            <motion.h1  className="text-l font-bold text-5xl leading-normal">Hi I am <span className="text-pink-600">Inderjot Singh</span> <br/> Full-Stack Developer with Experience in Cloud and Devops. 
            I love <span className="text-purple-400">Next JS</span>   and <span className="text-purple-400">Kubernetes</span>     </motion.h1>
    </Fragment>
  )
}
