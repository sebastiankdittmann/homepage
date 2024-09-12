import Sidebar from "@/components/sidebar/sidebar";
import {ReactNode} from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div>
            <Sidebar />
            <div>
                {children}
            </div>
        </div>
    );
}