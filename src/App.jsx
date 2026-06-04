import "./index.css";
import Sidebar from "./components/Sidebar";
import SalesActivityCard from "./components/SalesActivityCard";
import StoreStaticsCard from "./components/StoreStaticsCard";
import ActiveBookingsCard from "./components/ActiveBookingsCard";
import AnalyticsChart from "./components/AnalyticsChart";
import ProductSalesTable from "./components/ProductSalesTable";
import WalletVerification from "./components/WalletVerification";
import ExpensesCard from "./components/ExpensesCard";
import GoPremium from "./components/GoPremium";
import { Bell, Settings, Search } from "lucide-react";

// ─── Header bar ───────────────────────────────────────────────────────────────
function Header() {
  return (
    <header
      id="main-header"
      className="flex items-center justify-between px-6 py-3 border-b border-white/5 shrink-0"
    >
      {/* Search */}
      <div className="flex items-center gap-2.5 bg-white/5 border border-white/8 rounded-xl px-3.5 py-2 w-64 group focus-within:border-blue-500/50 transition-colors duration-200">
        <Search size={14} strokeWidth={1.8} className="text-slate-500" />
        <input
          id="header-search"
          type="text"
          placeholder="Search anything here"
          className="bg-transparent text-sm text-slate-300 placeholder:text-slate-500 outline-none w-full"
        />
      </div>

      {/* Right controls */}
      <div className="flex items-center gap-3">
        {/* Notification bell */}
        <button
          id="btn-notifications"
          className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 border border-white/8 text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-150"
          aria-label="Notifications"
        >
          <Bell size={16} strokeWidth={1.8} />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-blue-500" />
        </button>

        {/* Settings */}
        <button
          id="btn-settings"
          className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 border border-white/8 text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-150"
          aria-label="Settings"
        >
          <Settings size={16} strokeWidth={1.8} />
        </button>

        {/* Avatar */}
        <div className="flex items-center gap-2.5 pl-2 border-l border-white/8">
          <div
            id="user-avatar"
            className="w-8 h-8 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-md"
          >
            S
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-white text-xs font-semibold">Seda Şen</span>
            <span className="text-slate-500 text-[10px]">UI/UX Designer</span>
          </div>
        </div>
      </div>
    </header>
  );
}

// ─── Main content area ────────────────────────────────────────────────────────
function MainContent() {
  return (
    <main
      id="main-content"
      className="flex-1 h-full overflow-hidden flex flex-col min-w-0"
    >
      <Header />

      {/* Unified 3-column grid with direct card placement */}
      <div
        id="dashboard-grid"
        className="flex-1 overflow-y-auto px-5 py-5 grid gap-4"
        style={{
          gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 3fr) minmax(0, 1fr)",
          gridTemplateRows: "auto auto auto",
          alignContent: "start",
        }}
      >
        {/* Row 1 */}
        <div className="col-span-1 row-span-1 h-full">
          <SalesActivityCard />
        </div>
        <div className="col-span-1 row-span-1 h-full">
          <AnalyticsChart />
        </div>
        <div className="col-span-1 row-span-1 h-full">
          <WalletVerification />
        </div>

        {/* Row 2 */}
        <div className="col-span-1 row-span-1 h-full">
          <StoreStaticsCard />
        </div>
        <div className="col-span-1 row-span-2 h-full">
          <ProductSalesTable />
        </div>
        <div className="col-span-1 row-span-1 h-full">
          <ExpensesCard />
        </div>

        {/* Row 3 */}
        <div className="col-span-1 row-span-1 h-full">
          <ActiveBookingsCard />
        </div>
        <div className="col-span-1 row-span-1 h-full">
          <GoPremium />
        </div>
      </div>
    </main>
  );
}

// ─── Root layout ─────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div
      id="app-root"
      className="w-screen h-screen overflow-hidden flex bg-[#0A0D14]"
    >
      <Sidebar />
      <MainContent />
   </div>
  );
}
