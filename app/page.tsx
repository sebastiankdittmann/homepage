"use client";

import CvHeader from "@/app/components/cv-header/cv-header";
import Experiences from "@/app/components/experiences/experiences";
import SidebarHomepage from "@/components/sidebarHomepage/SidebarHomepage";
import { StrictMode } from "react";

export default function Home() {
    return (
        <div>
            <StrictMode>
                <SidebarHomepage>
                    <div className='flex flex-col items-center'>
                        <div className='max-w-screen-md w-full mx-auto'>
                            <CvHeader />
                            <Experiences />
                        </div>
                    </div>
                </SidebarHomepage>
            </StrictMode>
        </div>
    );
}
