import React from 'react';

const plans = [
  {
    name: 'Personal Plus',
    users: '43254',
    earning: '$1189',
    countries: ['US', 'VE', 'SV', 'RU'],
  },
  {
    name: 'Business Plus',
    users: '43254',
    earning: '$1189',
    countries: ['US', 'VE', 'SV', 'RU2'],
  },
  {
    name: 'Individual',
    users: '43254',
    earning: '$1189',
    countries: ['US', 'VE', 'SV', 'RU'],
  },
  {
    name: 'Personal',
    users: '43254',
    earning: '$1189',
    countries: ['US', 'VE', 'SV', 'RU'],
  },
];

const ValuedPlans = () => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-soft-xl">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold text-darkBlueText">Valued Plans</h2>
          <span className="text-xs font-medium text-mutedBlue">
            (This Week)
          </span>
        </div>
        <select className="rounded-md border px-2 py-1 text-sm">
          <option>This Week</option>
        </select>
      </div>
      <div className="grid gap-6 md:grid-cols-[300px_1fr]">
        <div className="relative">
          <div className="flex items-center justify-center">
            <svg className="h-[200px] w-[200px] -rotate-90 transform">
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="20"
              />
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="20"
                strokeDasharray={`${2 * Math.PI * 90 * 0.75} ${2 * Math.PI * 90}`}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-sm text-gray-500">Sales</span>
              <span className="text-3xl font-bold text-blue-900">$2,579</span>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900">Top Purchasing Plans</h3>
          <div className="grid gap-4">
            <div className="grid grid-cols-4 gap-4 text-sm text-purple-300">
              <div>Plans</div>
              <div>No. of Users</div>
              <div>Earning</div>
              <div>Countries</div>
            </div>
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="grid grid-cols-4 items-center gap-4"
              >
                <div className="flex items-center gap-2">
                  <div className="h-8 w-2 rounded-sm bg-blue-500" />
                  <span className="font-medium text-gray-900">{plan.name}</span>
                </div>
                <div className="text-gray-600">{plan.users}</div>
                <div className="text-gray-600">{plan.earning}</div>
                <div className="flex gap-1">
                  {plan.countries.map((country, i) => (
                    <span
                      key={i}
                      className={`flag-icon flag-icon-${country.toLowerCase()}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ValuedPlans;
