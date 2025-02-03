export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        <div>Inner Layout item</div>
        {children}
      </>
    );
  }
  