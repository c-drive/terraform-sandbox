
import { getPosts } from "@/lib/get_posts";
import { MyCard } from "../_components/Showpost";
import Link from "next/link";



export default async function Home() {

    const posts = await getPosts() 
        return(
            <div className="lg:mt-10 flex w-full  justify-center ">

            <div className="flex flex-wrap gap-2">
               { posts.map( ( post ) => {
                return  (
                <div key={post._id}> <Link href={post.slug.current}><MyCard  card={post}  /></Link>  </div>  
           )
               })}
            </div>
             
            </div>
        )
         
}