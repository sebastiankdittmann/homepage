'use client';

import CvHeader from "@/components/cv-header/cv-header";
import Experiences from "@/components/experiences/experiences";

export default function Home() {

    return (
        <div className='flex flex-col items-center'>
            <div className='max-w-screen-md w-full mx-auto'>
                <CvHeader/>
                <Experiences/>
            </div>
        </div>
    );
}
