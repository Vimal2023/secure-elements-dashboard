import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export default function ExpensesCard() {
  const data = [
    { name: 'A', value: 45, color: '#3B82F6' },
    { name: 'B', value: 30, color: '#93C5FD' },
    { name: 'C', value: 25, color: '#E0E7FF' },
  ];

  return (
    <div className="bg-linear-to-br from-[#4A5578] via-[#1A1C29] to-[#11131D] shadow-xl border border-white/[0.06] rounded-3xl p-6 h-full flex flex-col">
      {/* Header */}
      <h3 className="text-lg font-semibold text-white mb-6">Expenses</h3>

      {/* Chart Wrapper with Center Text Overlay */}
      <div className="relative flex-1 flex items-center justify-center min-h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            {/* Background track - scaled down */}
            <Pie 
              data={[{ value: 100 }]} 
              dataKey="value" 
              innerRadius={58} 
              outerRadius={59} 
              fill="rgba(255, 255, 255, 0.25)" 
              stroke="none" 
              isAnimationActive={false} 
            />
            {/* Foreground Blue Data Pie - scaled down */}
            <Pie 
              data={data} 
              dataKey="value" 
              innerRadius={63} 
              outerRadius={75} 
              cornerRadius={20} 
              paddingAngle={8} 
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Center Text Overlay - Absolute Positioning */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center flex flex-col items-center gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
            <p className="text-3xl font-bold text-white">27%</p>
            <p className="text-sm text-gray-300">Rent</p>
          </div>
        </div>
      </div>

      {/* Details Button */}
      <button className="w-full mt-6 py-2.5 px-4 bg-linear-to-r from-blue-600 to-blue-500 border-2 border-white text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all">
        Details
      </button>
    </div>
  );
}
