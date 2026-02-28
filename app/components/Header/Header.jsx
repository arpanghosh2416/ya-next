"use client";
import { useRef } from "react";
import { Container } from "../shared";
import { Navbar, MobileSidebar } from "./Navbar";

const Header = () => {
  const sidebarRef = useRef(null);

  return (
    <header className="bg-black">
      <Container>
        <MobileSidebar ref={sidebarRef} />
        <Navbar toggleSidebar={() => sidebarRef.current?.toggle()} />
      </Container>
    </header>
  );
};

export default Header;
