"use client";

import TextLink from "@/components/textLink/TextLink";
import { Box } from "@chakra-ui/react";
import { StrictMode } from "react";

export default function Home() {
    return (
        <div>
            <StrictMode>
                    <Box className='flex flex-col items-center'>
                        <Box className='max-w-screen-md w-full mx-auto'>
                            <Box className="flex items-center justify-center mt-20">
                                <h1 className="text-2xl font-bold">Welcome!</h1>
                            </Box>
                            <Box className='mt-10' justifyContent={'center'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
                                <p className="text-center">
                                    Welcome to my blog. Here I will share my experiences and learnings from my work as a
                                    software engineer. Maybe you will find some of it useful. Enjoy!
                                </p>
                                <p className="text-center">
                                    P.S.: You can find the source code for this blog on <a href="https://github.com/sebastiankdittmann/homepage" className="dark:text-gray-400 text-amber-600 hover:text-blue-300">Github</a>!
                                </p>
                                <ul className="text-center pt-6">
                                    <TextLink
                                        href={`/blog/apple-script`}
                                        header="14.06.2025"
                                        text="Automating environment setup with AppleScript" />
                                </ul>
                            </Box>
                        </Box>
                    </Box>
            </StrictMode>
        </div>
    );
}
