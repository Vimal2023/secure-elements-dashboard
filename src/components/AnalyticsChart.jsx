import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';
import { ChevronDown } from 'lucide-react';

export default function AnalyticsChart() {
  const data = [
    { name: 'Jan', value: 5, displayValue: '$5K' },
    { name: 'Feb', value: 9, displayValue: '$9K' },
    { name: 'Mar', value: 3, displayValue: '$3K' },
    { name: 'Apr', value: 12, displayValue: '$12K' },
    { name: 'May', value: 15, displayValue: '$15K' },
    { name: 'Jun', value: 19, displayValue: '$19K' },
    { name: 'Jul', value: 30, displayValue: '$30K' },
    { name: 'Aug', value: 21, displayValue: '$21K' },
    { name: 'Sep', value: 16, displayValue: '$16K' },
    { name: 'Oct', value: 10, displayValue: '$10K' },
    { name: 'Nov', value: 3, displayValue: '$3K' },
    { name: 'Dec', value: 5, displayValue: '$5K' },
  ];

  const getBarColor = (value) => {
    if (value === 30) return '#3B82F6'; // Vivid royal blue for July
    if (value >= 15 && value <= 29) return '#60A5FA'; // Medium blue
    return '#DBEAFE'; // Pale white-blue
  };

  return (
    <div className="bg-linear-to-br from-[#4A5578] via-[#1A1C29] to-[#11131D] shadow-xl border border-white/[0.06] rounded-3xl p-6 flex flex-col h-full min-h-[240px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-white font-semibold text-lg">Analytics</h2>
        <button className="border border-gray-600 rounded-full px-3 py-1 flex items-center gap-2 text-sm text-gray-300 hover:border-gray-400 transition-colors">
          2023
          <ChevronDown size={16} />
        </button>
      </div>

      {/* Chart Container - strictly bounded height to prevent vertical stretching */}
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 25, right: 0, left: 0, bottom: 0 }} barCategoryGap="10%">
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#60A5FA', fontSize: 13, fontWeight: 500 }}
              dy={10}
            />
            <YAxis hide={true} domain={[0, 'dataMax + 5']} />
            <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: '#fff', borderRadius: '8px' }} />
            <Bar
              dataKey="value"
              radius={[12, 12, 12, 12]}
              maxBarSize={45}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getBarColor(entry.value)} />
              ))}
              <LabelList 
                dataKey="displayValue" 
                position="top" 
                fill="#F3F4F6" 
                fontSize={13} 
                fontWeight={600} 
                offset={12} 
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
