// app/blog/apple-script/layout.tsx
import React from "react";

export default function MarkdownLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          width: "700px", // fixed width for equal line length
          padding: "2rem",
          textAlign: "left",
        }}
      >
        <style>{`
          h1, h2, h3 {
            text-align: center;
          }
        `}</style>
        {children}
      </div>
    </div>
  );
}