'use client';

import Layout from "@/components/layout/layout";

export default function AboutPage() {
    return (
        <Layout>
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
        </Layout>
    );
}