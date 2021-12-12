import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props {
  children: ReactNode
}

function Layout({ children }: Props) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="container flex-grow px-4 pt-6">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout