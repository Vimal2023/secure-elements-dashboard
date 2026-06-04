import { Info } from "lucide-react";

// ── Geographical halo markers ─────────────────────────────────────────────────
const MARKERS = [
  { id: "m-north-america", top: "40%", left: "25%" },
  { id: "m-south-america", top: "65%", left: "32%" },
  { id: "m-europe",        top: "35%", left: "52%" },
  { id: "m-africa",        top: "55%", left: "55%" },
  { id: "m-asia",          top: "42%", left: "75%" },
];

export default function StoreStaticsCard() {
  return (
    <div
      id="card-store-statics"
      className="bg-[#D6E2FB] rounded-[24px] p-6 h-full flex flex-col justify-between relative overflow-hidden"
    >
      {/* ── Map background image ── */}
      <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none opacity-70">
        <img
          src="/world-map.svg"
          alt="World Map"
          className="w-full h-full object-contain"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>

      {/* ── Geographic markers overlaid above the map ── */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {MARKERS.map((m) => (
          <div
            key={m.id}
            className="absolute w-2.5 h-2.5 bg-[#2563EB] rounded-full shadow-[0_0_0_6px_rgba(37,99,235,0.2)]"
            style={{ top: m.top, left: m.left }}
          />
        ))}
      </div>

      {/* ── Header ── */}
      <h2 className="text-[#2563EB] font-bold text-lg relative z-20">
        Store Statics
      </h2>

      {/* ── Footer ── */}
      <div className="flex justify-between items-end relative z-20 mt-auto">
        <div className="flex items-center gap-1.5 text-[#3B82F6] text-sm font-medium">
          <Info size={16} />
          Last 24 hrs
        </div>
        <button
          id="btn-store-details"
          className="bg-[#2563EB] text-white px-6 py-2 rounded-xl font-medium text-sm flex items-center justify-center hover:bg-blue-700 transition-colors"
        >
          Details
        </button>
      </div>
    </div>
  );
}
