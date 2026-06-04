import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ArrowUpRight } from "lucide-react";

const data = [
  { v: 3200 },
  { v: 4100 },
  { v: 3800 },
  { v: 5200 },
  { v: 4700 },
  { v: 6100 },
  { v: 5800 },
  { v: 7400 },
  { v: 6900 },
  { v: 8954 },
];

// Custom tooltip — minimal, dark pill
function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-2.5 py-1 text-xs text-white font-semibold">
      ${payload[0].value.toLocaleString()}
    </div>
  );
}

export default function SalesActivityCard() {
  return (
    <div
      id="card-sales-activity"
      className="relative flex flex-col h-full rounded-2xl overflow-hidden bg-linear-to-br from-blue-500 to-blue-700 shadow-xl shadow-blue-700/30"
      style={{ minHeight: "200px" }}
    >
      {/* ── Decorative circle blobs ── */}
      <div
        aria-hidden="true"
        className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10 blur-2xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-4 left-4 w-16 h-16 rounded-full bg-blue-400/20 blur-xl pointer-events-none"
      />

      {/* ── Top info section ── */}
      <div className="relative z-10 flex flex-col gap-2 px-5 pt-5 pb-3">
        <p className="text-blue-100 text-sm font-medium tracking-wide">
          Sales Activity
        </p>

        <p className="text-white text-3xl font-bold tracking-tight leading-none">
          $8,954.57
        </p>

        {/* Uplift badge */}
        <div className="flex items-center gap-1 self-start">
          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white/20">
            <ArrowUpRight size={12} strokeWidth={2.5} className="text-white" />
          </div>
          <span className="text-white/90 text-xs font-semibold">15%</span>
          <span className="text-blue-200/70 text-xs">vs last month</span>
        </div>
      </div>

      {/* ── Chart — zero bottom padding so it bleeds to card edge ── */}
      <div className="relative z-10 flex-1 w-full" style={{ minHeight: "90px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 8, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="lineGlow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#93c5fd" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
            </defs>
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: "rgba(255,255,255,0.2)", strokeWidth: 1, strokeDasharray: "4 2" }}
            />
            <Line
              type="monotone"
              dataKey="v"
              stroke="url(#lineGlow)"
              strokeWidth={2.5}
              dot={false}
              activeDot={{
                r: 4,
                fill: "#fff",
                stroke: "#3b82f6",
                strokeWidth: 2,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
