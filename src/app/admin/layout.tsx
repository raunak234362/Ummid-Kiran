

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <Sidebar /> */}
      <div className="flex-1 overflow-auto mt-16 md:mt-0">{children}</div>
    </>
  );
}
