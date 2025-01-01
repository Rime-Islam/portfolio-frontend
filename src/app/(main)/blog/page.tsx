"use client"
import Image from "next/image";
import { useGetAllBlog } from "@/hooks/blogs/blog.hook";
import Link from "next/link";

const Blog = () => {
      const {data} = useGetAllBlog();
            const blog = data?.data;
            console.log(blog)
    
    return (
        <div className="mt-[5vh]">
               <div className="">
                <p className="text-gray-400">NEWS</p>
                <h1 className="text-5xl font-bold text-white mt-2"><span className="border-b-4 border-yellow-500">Get</span> News Feed</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  justify-items-center mt-[5vh]">
   {
    blog?.map((item: any) => (
        <div key={item._id} className="w-full  sm:max-w-md p-4 bg-base-200 rounded-lg hover:-translate-y-1 duration-500">
      <Link href={`blog/${item._id}`}>  <Image
        src={item?.photo}
        alt='picture'
        width={400}
        height={400}
        className=" w-full"
      /></Link>
<div className="mt-8">
<Link href={`blog/${item._id}`}>
<h4 className="mb-3 font-bold text-white text-xl">{item.name}</h4></Link>
<div
  className="text-gray-300 mb-6"
  style={{
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'normal', 
  }}
>
  <div dangerouslySetInnerHTML={{ __html: item.description }} />
</div>
<div className="mt-5">
  <Link href={`blog/${item._id}`}
    className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
  >
    Read More
  </Link>
</div>
</div>
</div>
    ))
   }
</div>
        </div>
    )
};
export default Blog;