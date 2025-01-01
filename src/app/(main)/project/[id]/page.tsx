

import ProjectDetails from '@/components/home/ProjectDetails';
import React from 'react';


const page =  async ({ params }: { params: any }) => {
    const { id } =  await params;


    return <ProjectDetails id={id} />
};

export default page;