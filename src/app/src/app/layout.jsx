export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'sans-serif', margin: 0, padding: 20 }}>
        {children}
      </body>
    </html>
  );
}
