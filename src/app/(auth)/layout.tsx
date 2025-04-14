export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1>Auth Layout</h1>
        {children}
        {/* Add a footer or any other layout elements here */}
        <footer>
          <p>Footer content goes here</p>
        </footer>
      </body>
    </html>
  );
}
