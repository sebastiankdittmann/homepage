'use client';

import  SidebarHomepage from "@/components/sidebarHomepage/SidebarHomepage";

export default function AboutPage() {
    return (
        <SidebarHomepage>
            <div className='flex flex-col items-center'>
                <div className='max-w-screen-md w-full mx-auto'>
                    <div className="flex items-center justify-center mt-52">
                        <h1 className="text-2xl font-bold">About</h1>
                    </div>
                    <div className='mt-10'>
                        <p className="text-center">I am a passionate software engineer from Denmark. I love experimenting with new
                        concepts and technologies, and this is my space to experiment and learn.</p>
                    </div>
                </div>
            </div>
        </SidebarHomepage>
    );
}