import { TRADING_HUBS } from '@/lib/constants';

export function HubsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {TRADING_HUBS.map((hub) => (
        <div key={hub} className="flex items-center">
          <span className="w-2 h-2 bg-accent-green rounded-full mr-3"></span>
          <span className="text-white">{hub}</span>
        </div>
      ))}
    </div>
  );
}
