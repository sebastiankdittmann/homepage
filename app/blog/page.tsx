'use client';

import Layout from "@/components/layout/layout";
import { getAllPosts } from "@/lib/api";
import {useEffect, useState} from "react";
import {Post} from "@/interfaces/post";

export default function Blog() {
    const [allPosts, setAllPosts] = useState<Post[]>([]);

    useEffect(() => {
            getAllPosts().then(posts => setAllPosts(posts));
        }, []);
    
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
                            {
                                allPosts.map((post) => (
                                    <li key={post.slug}>{post.date}: <a href={`/blog/${post.slug}`}>{post.title}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    );
}