import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant-TW"
      className="scrollbar-track-transparent scrollbar-thumb-foreground/10"
    >
      <body>{children}</body>
    </html>
  );
}
