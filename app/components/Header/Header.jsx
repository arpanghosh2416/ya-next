import { useRef } from "react";
import { Container, Navbar, SidebarMaybe } from "../../components";

const Header = () => {
  const sidebarRef = useRef(null);

  return (
    <header className="bg-black">
      <Container>
        <SidebarMaybe ref={sidebarRef} />
        <Navbar toggleSidebar={() => sidebarRef.current?.toggle()} />
      </Container>
    </header>
  );
};

export default Header;
