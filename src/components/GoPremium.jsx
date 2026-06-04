import { Gem } from "lucide-react";

export default function GoPremium() {
  return (
    <div className="bg-linear-to-br from-[#4A5578] via-[#1A1C29] to-[#11131D] shadow-xl border border-white/[0.06] rounded-[24px] p-6 h-full flex flex-col justify-between">
      {/* ── Top content ── */}
      <div>
        <Gem className="text-white mb-4" size={28} strokeWidth={1.5} />
        <h2 className="text-white font-semibold text-lg mb-2">Go Premium</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Receive a 10% discount!<br />
          Tap into enhanced<br />
          capabilities.
        </p>
      </div>

      {/* ── CTA button — pinned to bottom by justify-between ── */}
      <button
        id="btn-go-premium"
        className="w-full mt-6 py-2.5 rounded-xl bg-linear-to-r from-[#e87a5d] to-[#e36944] text-white font-medium border border-white hover:opacity-90 transition-opacity"
      >
        Go Premium
      </button>
    </div>
  );
}
