import Navbar from "./navbar/Navbar"

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        <Navbar />
        {children}
      </>
    );
  }
  