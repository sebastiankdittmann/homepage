import Sidebar from "@/components/sidebar/sidebar";
import {ReactNode} from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function  SidebarHomepage({ children }: LayoutProps) {
    return (
        <div>
            <Sidebar />
            <div className='pl-4 pr-4 pb-4'>
                {children}
            </div>
        </div>
    );
}