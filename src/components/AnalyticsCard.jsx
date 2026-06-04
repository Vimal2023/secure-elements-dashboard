import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ChevronDown } from 'lucide-react';

export default function AnalyticsCard() {
  const data = [
    { month: 'Jan', revenue: 12 },
    { month: 'Feb', revenue: 15 },
    { month: 'Mar', revenue: 18 },
    { month: 'Apr', revenue: 22 },
    { month: 'May', revenue: 25 },
    { month: 'Jun', revenue: 28 },
    { month: 'Jul', revenue: 30 },
    { month: 'Aug', revenue: 27 },
    { month: 'Sep', revenue: 24 },
    { month: 'Oct', revenue: 20 },
    { month: 'Nov', revenue: 16 },
    { month: 'Dec', revenue: 18 },
  ];

  const getBarColor = (month) => (month === 'Jul' ? '#3B82F6' : '#9CA3AF');

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Analytics</h2>
        <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-700 text-gray-200 text-sm rounded-md hover:bg-gray-600 transition-colors">
          2023
          <ChevronDown size={16} />
        </button>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="month" stroke="#9CA3AF" tick={{ fill: '#9CA3AF' }} />
          <YAxis stroke="#9CA3AF" tick={{ fill: '#9CA3AF' }} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1F2937',
              border: '1px solid #374151',
              borderRadius: '8px',
              color: '#F3F4F6',
            }}
            formatter={(value) => `$${value}K`}
            labelStyle={{ color: '#F3F4F6' }}
          />
          <Bar dataKey="revenue" radius={[8, 8, 0, 0]} isAnimationActive={true}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getBarColor(entry.month)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
