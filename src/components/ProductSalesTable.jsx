import { ChevronDown, Star } from 'lucide-react';

export default function ProductSalesTable() {
  const products = [
    { id: 1, name: 'Vanilla Sprinkled Round', desc: 'Vanilla cream, sprinkles', price: '$1.57', rating: '4.2', sales: '15410', color: 'bg-orange-100', emoji: '🍩' },
    { id: 2, name: 'Double Chocolate Filled', desc: 'Chocolate chips, melted chocolate', price: '$1.99', rating: '5.0', sales: '22687', color: 'bg-amber-900', emoji: '🍫' },
    { id: 3, name: 'Nutella Glazed Round', desc: 'Chocolate cream, Nutella sauce', price: '$1.57', rating: '4.8', sales: '1541', color: 'bg-orange-800', emoji: '🍩' },
    { id: 4, name: 'Strawberry Filled', desc: 'Strawberry cream, sprinkles, strawberry puree', price: '$1.99', rating: '5.0', sales: '9753', color: 'bg-pink-200', emoji: '🍓' },
    { id: 5, name: 'Caramel Round', desc: 'Caramel cream, caramel sauce', price: '$1.57', rating: '5.0', sales: '12591', color: 'bg-orange-300', emoji: '🍩' },
    { id: 6, name: 'Pistachios Round', desc: 'Pistachios cream, powdered pistachios', price: '$1.57', rating: '4.5', sales: '1051', color: 'bg-green-200', emoji: '🍩' },
    { id: 7, name: 'Raspberry Filled', desc: 'Raspberry cream, raspberry puree', price: '$1.99', rating: '4.9', sales: '6587', color: 'bg-pink-500', emoji: '💝' },
  ];

  return (
    <div className="bg-linear-to-br from-[#4A5578] via-[#1A1C29] to-[#11131D] shadow-xl border border-white/[0.06] rounded-3xl p-6 h-full flex flex-col justify-between gap-2">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white font-semibold text-lg">Product Sales</h2>
        <button className="border border-gray-600 rounded-full px-3 py-1 flex items-center gap-2 text-sm text-gray-300 hover:border-gray-400 transition-colors">
          Last 30 days
          <ChevronDown size={16} />
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-gray-400 font-medium text-sm text-left pb-4">Product</th>
              <th className="text-gray-400 font-medium text-sm text-left pb-4">Price</th>
              <th className="text-gray-400 font-medium text-sm text-left pb-4">Rating</th>
              <th className="text-gray-400 font-medium text-sm text-right pb-4">Total Sales</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item.id}>
                {/* Product Cell */}
                <td className="py-3 text-left">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full  flex items-center justify-center text-3xl`}>
                      {item.emoji}
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{item.name}</p>
                      <p className="text-gray-400 text-xs">{item.desc}</p>
                    </div>
                  </div>
                </td>

                {/* Price Cell */}
                <td className="py-3 text-left">
                  <p className="text-white font-medium text-sm">{item.price}</p>
                </td>

                {/* Rating Cell */}
                <td className="py-3 text-left">
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                    <p className="text-white font-medium text-sm">{item.rating}</p>
                  </div>
                </td>

                {/* Total Sales Cell */}
                <td className="py-3 text-right">
                  <p className="text-white font-medium text-sm">{item.sales}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
