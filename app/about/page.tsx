'use client';

import { Box, Text } from "@chakra-ui/react";

export default function AboutPage() {
    return (
        <Box className='flex flex-col items-center'>
            <Box className='max-w-screen-md w-full mx-auto'>
                <Box className="flex items-center justify-center mt-20">
                    <Text className="text-2xl font-bold h1">About</Text>
                </Box>
                <Box className='mt-10 text-center'>
                    <Text>I am a passionate software engineer from Denmark. I love experimenting with new
                        concepts and technologies, and this is my space to experiment and learn.</Text>
                    <Text className="mt-4">
                        You can find the source code for this blog on <a href="https://github.com/sebastiankdittmann/homepage" className="dark:text-gray-400 text-amber-600 hover:text-blue-300">Github</a>!
                    </Text>
                </Box>
            </Box>
        </Box>
    );
}