import { useState } from "react";
import {
  Sparkles,
  Home,
  BarChart2,
  Wallet,
  List,
  MessageSquare,
  Link2,
  Users,
  Heart,
  Bookmark,
} from "lucide-react";

// ─── Nav items config ────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { id: "home",      label: "Home",      Icon: Home },
  { id: "analytics", label: "Analytics", Icon: BarChart2 },
  { id: "wallet",   label: "Wallet",    Icon: Wallet },
  { id: "lists",    label: "Lists",     Icon: List },
  { id: "messages", label: "Messages",  Icon: MessageSquare },
  { id: "links",    label: "Links",     Icon: Link2 },
  { id: "users",    label: "Users",     Icon: Users },
  { id: "favorites",label: "Favorites", Icon: Heart },
  { id: "saved",    label: "Saved",     Icon: Bookmark },
];

// ─── Individual nav button ────────────────────────────────────────────────────
function NavItem({ item, isActive, onClick }) {
  const { id, label, Icon } = item;

  return (
    <button
      id={`nav-${id}`}
      aria-label={label}
      title={label}
      onClick={() => onClick(id)}
      className={[
        "relative flex items-center justify-center w-full h-12 rounded-lg",
        "transition-all duration-200 group outline-none",
        isActive
          ? "text-white bg-white/10"
          : "text-slate-400 hover:text-white hover:bg-white/5",
      ].join(" ")}
    >
      {/* Active indicator — left edge white bar */}
      {isActive && (
        <span
          aria-hidden="true"
          className="absolute left-0 top-1/2 -translate-y-1/2 w-0.75 h-6 rounded-r-full bg-white"
        />
      )}

      <Icon
        size={20}
        strokeWidth={isActive ? 2 : 1.5}
        className="transition-transform duration-200 group-hover:scale-110"
      />
    </button>
  );
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────
export default function Sidebar() {
  const [active, setActive] = useState("home");

  return (
    <aside
      id="sidebar"
      className="flex flex-col items-center gap-3 w-16 h-full bg-[#0B1220] border-r border-white/5 py-4 shrink-0"
    >
      {/* ── Logo tile ── */}
      <div
        id="sidebar-logo"
        className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600 shadow-lg shadow-blue-600/30 mb-2 shrink-0"
      >
        <Sparkles size={18} fill="white" stroke="white" strokeWidth={1.5} />
      </div>

      {/* ── Divider ── */}
      <div className="w-8 h-px bg-white/10 mb-1" aria-hidden="true" />

      {/* ── Navigation icons ── */}
      <nav
        id="sidebar-nav"
        aria-label="Main navigation"
        className="flex flex-col items-center gap-1 w-full px-2 flex-1"
      >
        {NAV_ITEMS.map((item) => (
          <NavItem
            key={item.id}
            item={item}
            isActive={active === item.id}
            onClick={setActive}
          />
        ))}
      </nav>
    </aside>
  );
}
