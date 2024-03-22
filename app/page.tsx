import Me from "@/app/_components/Me"
import { Fragment } from "react"
import BackColor from "./_components/BackColor"
import Heading from "./_components/Heading"
import About from "./_components/Sections/About"
import Projects from "./_components/Sections/Projects"


export default async function Home() {
  
  return( 
         <Fragment>
             <div>
                
               <Me />
               <BackColor />
               <About />
               <Projects />
             </div>
        </Fragment>
  ) 
  

}