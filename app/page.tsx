"use client";

import TextLink from "@/components/textLink/TextLink";
import { Box, List, Text } from "@chakra-ui/react";
import { StrictMode } from "react";

const blogEntries = [
    {
        href: `/blog/script-commands`,
        publishDate: new Date(2025, 5, 29),
        text: "Mac - Speed up repetitive tasks via script commands",
    },
];

export default function Home() {
    console.log(blogEntries);

    return (
        <div>
            <StrictMode>
                <Box className='flex flex-col items-center'>
                    <Box className='max-w-screen-md w-full mx-auto'>
                        <Box className="flex items-center justify-center mt-20">
                            <Text className="text-2xl font-bold">Welcome!</Text>
                        </Box>
                        <Box className='mt-10' justifyContent={'center'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
                            <Text className="text-center">
                                Welcome to my blog. Here I will share my experiences and learnings from my work as a
                                software engineer. Maybe you will find some of it useful. Enjoy!
                            </Text>
                            <List.Root className="text-center pt-6">
                                {blogEntries.sort((a, b) => a.publishDate.getTime() - b.publishDate.getTime()).map((entry, index) => (
                                    <List.Item key={index}>
                                        <TextLink
                                            href={entry.href}
                                            publishDate={entry.publishDate}
                                            text={entry.text} />
                                    </List.Item>
                                ))}
                            </List.Root>
                        </Box>
                    </Box>
                </Box>
            </StrictMode>
        </div>
    );
}
