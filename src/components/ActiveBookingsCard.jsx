import { useState } from "react";

const BOOKINGS = [
  {
    id: "booking-award",
    title: "Award Ceremony",
    time: "13:00 - 15:15",
    activeColor: "bg-purple-500",
    ringColor: "shadow-purple-400/40",
    defaultOn: true,
  },
  {
    id: "booking-flavor",
    title: "Flavor Discussion",
    time: "16:30 - 20:00",
    activeColor: "bg-orange-500",
    ringColor: "shadow-orange-400/40",
    defaultOn: true,
  },
];

// ── Pill toggle switch ────────────────────────────────────────────────────────
function Toggle({ id, checked, onChange, activeColor, ringColor }) {
  return (
    <button
      id={id}
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={[
        "relative shrink-0 w-10 h-5 rounded-full transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
        checked
          ? `${activeColor} shadow-md ${ringColor}`
          : "bg-slate-200",
      ].join(" ")}
    >
      <span
        className={[
          "absolute top-[2px] w-4 h-4 rounded-full bg-white shadow-sm transition-all duration-300",
          checked ? "left-[22px]" : "left-[2px]",
        ].join(" ")}
      />
    </button>
  );
}

// ── Booking row ───────────────────────────────────────────────────────────────
function BookingRow({ booking }) {
  const [on, setOn] = useState(booking.defaultOn);

  return (
    <div
      id={`row-${booking.id}`}
      className="flex items-center justify-between gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-slate-100"
    >
      <div className="flex flex-col gap-0.5 min-w-0">
        <p
          className={[
            "text-sm font-semibold truncate leading-tight",
            booking.activeColor === "bg-purple-500"
              ? "text-purple-600"
              : "text-orange-500",
          ].join(" ")}
        >
          {booking.title}
        </p>
        <p className="text-slate-400 text-xs">{booking.time}</p>
      </div>
      <Toggle
        id={`toggle-${booking.id}`}
        checked={on}
        onChange={setOn}
        activeColor={booking.activeColor}
        ringColor={booking.ringColor}
      />
    </div>
  );
}

// ── Active Bookings Card ──────────────────────────────────────────────────────
export default function ActiveBookingsCard() {
  return (
    <div
      id="card-active-bookings"
      className="flex flex-col h-full rounded-2xl overflow-hidden bg-[#f1f5f9] border border-slate-200/60 shadow-xl"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-4 pb-3">
        <h2 className="text-slate-800 font-semibold text-sm tracking-wide">
          Active Bookings
        </h2>
        <div className="flex items-center gap-1.5">
          <span className="text-blue-600 text-xs font-semibold cursor-pointer hover:underline">
            All
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-blue-500"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      </div>

      {/* Booking rows */}
      <div className="flex flex-col gap-2.5 px-3 pb-4">
        {BOOKINGS.map((b) => (
          <BookingRow key={b.id} booking={b} />
        ))}
      </div>
    </div>
  );
}
