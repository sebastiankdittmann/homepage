import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/blog/components/header";
import Header from "@/app/blog/components/header";
import {PostHeader} from "@/app/blog/components/post-header";
import {PostBody} from "@/app/blog/components/post-body";

export default async function Post(props: Params) {
    const params = await props.params;
    console.log(params)
    const post = await getPostBySlug(params.slug);

    if (!post) {
        return notFound();
    }

    const content = await markdownToHtml(post.content || "");

    return (
        <main>
            <Container>
                <Header />
                <article className="mb-32">
                    <PostHeader
                        title={post.title}
                        date={post.date}
                    />
                    <PostBody content={content} />
                </article>
            </Container>
        </main>
    );
}

type Params = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
    const params = await props.params;
    const post = await getPostBySlug(params.slug);

    if (!post) {
        return notFound();
    }

    const title = post.title;

    return {
        title,
        openGraph: {
            title,
        },
    };
}

export async function generateStaticParams() {
    const posts = await getAllPosts();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}