
import { sanityFetch, token } from "@/sanity/lib/sanityFetch";
import { postsQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";


// get posts 
export async  function getPosts() : Promise<SanityDocument[]> {

  const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });

  return posts ;
}