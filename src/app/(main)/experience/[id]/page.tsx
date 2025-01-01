
import ExperienceDetails from '@/components/home/ExperienceDetails';
import React from 'react';


const page =  async ({ params }: { params: any }) => {
    const { id } =  await params;


    return <ExperienceDetails id={id} />
};

export default page;