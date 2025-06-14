'use client';

import  SidebarHomepage from "@/components/sidebarHomepage/SidebarHomepage";
import TextLink from "./components/TextLink/TextLink";

export default function Blog() {
    return (
        < SidebarHomepage>
            <div className='flex flex-col items-center'>
                <div className='max-w-screen-md w-full mx-auto'>
                    <div className="flex items-center justify-center mt-4">
                        <h1 className="text-2xl font-bold">Welcome!</h1>
                    </div>
                    <div className='mt-10'>
                        <p className="text-center">
                            Welcome to my blog. Here I will share my experiences and learnings from my work as a
                            software engineer. Maybe you will find some of it useful. Enjoy!
                        </p>
                        <ul className="text-center mt-4">
                            <TextLink
                            href={`/blog/apple-script`}
                            header="14.06.2025"
                            text="Automating environment setup with AppleScript"/>
                        </ul>
                    </div>
                </div>
            </div>
        </ SidebarHomepage>
    );
}