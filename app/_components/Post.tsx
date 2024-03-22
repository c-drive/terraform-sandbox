"use client";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);





export default function Post({ post }: { post: SanityDocument }) {

  console.log(post)
  return (
    <main className="container mx-auto prose prose-lg p-4">
      {post?.title ? <h1 className="dark:text-white">{post.title}</h1> : <h1>Untitled</h1>}
      {post?.mainImage ? (
        <Image
          className="float-left m-0 w-1/3 mr-4 rounded-lg"
          src={builder.image(post.mainImage).width(300).height(300).url()}
          width={300}
          height={300}
          alt={post?.mainImage?.alt}
        />
      ) : null}
      {post?.body ? <div className="dark:text-white"><PortableText value={post.body} /> </div>: null}
    </main>
  );
}