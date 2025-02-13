'use client';

import Layout from "@/components/layout/layout";

export default function Blog() {
    return (
        <Layout>
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
                            <li>2025-02-13: <a href="/blog/apple-script">Automating environment setup with
                                AppleScript</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    );
}