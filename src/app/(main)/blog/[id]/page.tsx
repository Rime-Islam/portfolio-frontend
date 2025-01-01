
import BlogDetails from '@/components/home/BlogDetails';
import React from 'react';


const page =  async ({ params }: { params: any }) => {
    const { id } =  await params;
    return <BlogDetails id={id}/>
};

export default page;