export const metadata = {
  title: "Raelee’s Portfolio Assistant",
  description: "Interactive portfolio where visitors can ask about Raelee’s UX/UI work."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial" }}>
        {children}
      </body>
    </html>
  );
}
