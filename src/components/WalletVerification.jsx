import { Shield } from 'lucide-react';

export default function WalletVerification() {
  return (
    <div className="bg-linear-to-br from-[#4A5578] via-[#1A1C29] to-[#11131D] shadow-xl border border-white/[0.06] rounded-[24px] p-6 h-full flex flex-col justify-content gap-2">
      {/* Icon */}
      <div className="mb-4">
        <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
          <Shield size={28} className="text-purple-400" />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-white mb-2">Wallet Verification</h3>
      <p className="text-sm text-gray-400 mb-6">
        Enable 2-step verification to secure your wallet and protect your account.
      </p>

      {/* Enable Button */}
      <button className="w-full py-3 px-4 bg-linear-to-r from-purple-600 to-purple-500 border-2 border-white text-white font-semibold rounded-lg hover:from-purple-700 hover:to-purple-600 transition-all duration-200 transform hover:scale-105">
        Enable
      </button>
    </div>
  );
}
