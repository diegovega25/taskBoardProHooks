import { NavLink } from "react-router-dom"
import { HTML_TAGS } from "@/shared/constants/html-tags.constants"
import { NAVBAR_LINKS } from "@/shared/constants/navbar.constants"

export function Navbar() {
  const NavTag = HTML_TAGS.NAV
  const ListTag = HTML_TAGS.UL
  const ListItemTag = HTML_TAGS.LI

  return (
    <NavTag aria-label="Main navigation">
      <ListTag>
        {NAVBAR_LINKS.map((link) => (
          <ListItemTag key={link.id}>
            <NavLink 
                to={link.path}
                className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              {link.label}
            </NavLink>
          </ListItemTag>
        ))}
      </ListTag>
    </NavTag>
  )
}