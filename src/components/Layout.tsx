import { useEffect } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { profile } from "../data/profile";

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

const link = "text-sm text-mist transition-colors hover:text-paper";
const active = ({ isActive }: { isActive: boolean }) => `${link} ${isActive ? "!text-paper" : ""}`;

export default function Layout() {
  return (
    <>
      <ScrollManager />
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-ink/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Main">
          <Link to="/" className="font-display text-lg font-semibold tracking-tight">{profile.name}</Link>
          <div className="flex gap-6">
            <NavLink to="/projects" className={active}>Projects</NavLink>
            <NavLink to="/about" className={active}>About</NavLink>
            <Link to="/#contact" className={link}>Contact</Link>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="border-t border-white/10 bg-ink py-8 text-sm text-mist">
        <div className="mx-auto max-w-6xl px-6">© {new Date().getFullYear()} {profile.name}</div>
      </footer>
    </>
  );
}
