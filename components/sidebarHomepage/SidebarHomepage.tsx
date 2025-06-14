import Sidebar from "@/components/sidebar/sidebar";
import { ReactNode } from "react";

interface SidebarHomepageProps {
    children: ReactNode;
}

export default function SidebarHomepage({ children }: SidebarHomepageProps) {
    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            <Sidebar />
            <div style={{ flex: 1 }}>
                {children}
            </div>
        </div>
    );
}