import "./globals.css";


export const metadata = {
  title: "Movie",
  description: "Created By Abir Dutta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="flex justify-center items-center h-screen">{children}</body>
    </html>
  );
}
