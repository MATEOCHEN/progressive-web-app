import Link from "next/link";
import { type } from "os";
import { useState, useEffect } from "react";

function Sidebar({ ...props }: SidebarProperties) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {
    setIsSidebarOpen(props.isOpen);
  }, [props.isOpen]);
  const toggleMenu = () => {
    const nextToggleState = !isSidebarOpen;
    props.toggleOpen(nextToggleState);
  };
  return (
    <div className={`sidebar ${isSidebarOpen ? "show" : "hide"}`}>
      <div className="sidebar-header">
        <Link
          href={"/"}
          style={{ textDecoration: "none" }}
          onClick={toggleMenu}
        >
          <h3>Apple Shop</h3>
        </Link>
        <button className="" aria-label="Toggle Sidebar" onClick={toggleMenu}>
          Close
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <nav className="menu">
        <ul>
          <li>
            <Link href="install" onClick={toggleMenu}>
              Install APP
            </Link>
          </li>
          <li>
            <Link href="cart" onClick={toggleMenu}>
              Shop Now
            </Link>
          </li>
          <li>
            <Link href="service" onClick={toggleMenu}>
              Service
            </Link>
          </li>
          <li>
            <Link href="about" onClick={toggleMenu}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
type SidebarProperties = {
  isOpen: boolean;
  toggleOpen: (isOpen: boolean) => void;
};
export default Sidebar;
