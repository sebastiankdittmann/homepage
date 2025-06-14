'use client';

import CvHeader from "@/app/components/cv-header/cv-header";
import Experiences from "@/app/components/experiences/experiences";
import Layout from "@/components/layout/layout";
import { StrictMode } from "react";

export default function Home() {
    return (
        <div>
            <StrictMode>
                <Layout>
                    <div className='flex flex-col items-center'>
                        <div className='max-w-screen-md w-full mx-auto'>
                            <CvHeader />
                            <Experiences />
                        </div>
                    </div>
                </Layout>
            </StrictMode>
        </div>
    );
}
