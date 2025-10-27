import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raelee’s Portfolio Assistant",
  description: "An interactive portfolio where visitors can ask about Raelee’s UX/UI work."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial" }}>
        {children}
      </body>
    </html>
  );
}
