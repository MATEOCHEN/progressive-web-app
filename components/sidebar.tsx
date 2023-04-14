import Link from "next/link";
import { type } from "os";
import { useState, useEffect } from "react";

function Sidebar({ ...props }: SidebarProperties) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {
    setIsSidebarOpen(props.isOpen);
  }, [props.isOpen]);

  return (
    <div className={`sidebar ${isSidebarOpen ? "show" : "hide"}`}>
      <div className="sidebar-header">
        <h3>Menu</h3>
        <button
          className=""
          aria-label="Toggle Sidebar"
          onClick={() => {
            const nextToggleState = !isSidebarOpen;
            props.toggleOpen(nextToggleState);
          }}
        >
          Close
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <nav className="menu">
        <ul>
          <li>
            <Link href="notifications" onClick={()=>{
              const nextToggleState = !isSidebarOpen;
              props.toggleOpen(nextToggleState);
            }}>Notifications</Link>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
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
