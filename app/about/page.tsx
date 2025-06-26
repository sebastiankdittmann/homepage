'use client';

import { Box } from "@chakra-ui/react";

export default function AboutPage() {
    return (
        <Box className='flex flex-col items-center'>
            <Box className='max-w-screen-md w-full mx-auto'>
                <Box className="flex items-center justify-center mt-20">
                    <h1 className="text-2xl font-bold">About</h1>
                </Box>
                <Box className='mt-10'>
                    <p className="text-center">I am a passionate software engineer from Denmark. I love experimenting with new
                        concepts and technologies, and this is my space to experiment and learn.</p>
                </Box>
            </Box>
        </Box>
    );
}