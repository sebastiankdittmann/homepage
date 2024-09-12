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
                        <p className="text-lg">I am a software engineer with a passion for creating high-quality
                            software. I
                            have experience in a wide range of technologies, including web development, mobile
                            development, and
                            cloud computing. I am always looking for new challenges and opportunities to learn and grow
                            as a
                            developer.</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}