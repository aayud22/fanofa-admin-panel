import { useState } from 'react';
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useNavigate } from "react-router-dom";
import UpdatePlanModal from './UpdatePlanModal';
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs"
import { APP_ROUTES } from "../../constants/routeConstants";
import { User, Users, Briefcase, CircleDollarSign, Building } from "lucide-react"

export default function PlansView() {
  const navigate = useNavigate()
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  return (
    <div className="space-y-8">
      {/* Metrics */}
      <div className="grid gap-4 md:grid-cols-5">
        {[
          { title: "Personal", price: "$3.5 M", users: "40,689" },
          { title: "Personal Plus", price: "$3.5 M", users: "1565k" },
          { title: "Business", price: "$3.5 M", users: "3,422" },
          { title: "Individual Plan", price: "$3.5 M", users: "3,422" },
          { title: "Business Plus Plan", price: "$3.5 M", users: "2276" },
        ].map((metric, i) => (
          <div key={i} className="flex flex-col border-r last:border-r-0">
            <div className="flex items-center gap-2 px-4">
              <span className="text-sm mutedBlue font-semibold">{metric.title}</span>
              <span className="rounded bg-blue-50 px-2 py-0.5 font-bold text-sm text-blue-500">{metric.price}</span>
            </div>
            <div className="px-4 py-2 text-2xl font-bold text-darkBlueText">{metric.users}</div>
          </div>
        ))}
      </div>

      {/* Plan Duration Tabs */}
      <div className="flex items-center justify-between">
        <Tabs defaultValue="monthly" className="w-fit">
          <TabsList className="!bg-white !border !rounded-[10px] !p-6 gap-2">
            <TabsTrigger 
              value="weekly" 
              className="data-[state=active]:!bg-primary-gradient data-[state=active]:!text-white px-4 py-2 rounded-md transition-colors"
            >
              Weekly Plans
            </TabsTrigger>
            <TabsTrigger 
              value="monthly" 
              className="data-[state=active]:!bg-primary-gradient data-[state=active]:!text-white px-4 py-2 rounded-md transition-colors"
            >
              Monthly Plan
            </TabsTrigger>
            <TabsTrigger 
              value="semi" 
              className="data-[state=active]:!bg-primary-gradient data-[state=active]:!text-white px-4 py-2 rounded-md transition-colors"
            >
              Semi-Annual Plan
            </TabsTrigger>
            <TabsTrigger 
              value="annual" 
              className="data-[state=active]:!bg-primary-gradient data-[state=active]:!text-white px-4 py-2 rounded-md transition-colors"
            >
              Annual Plan
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex items-center gap-2">
          <Input className="w-[200px]" placeholder="Search" />
          <Button onClick={() => navigate(APP_ROUTES?.PROMOTIONS?.BILLING_HISTORY)} className="!bg-primary-gradient">View Billing History</Button>
        </div>
      </div>

      {/* Plans Table */}
      <div className="rounded-lg border">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-gray-50">
              <th className="p-4 text-left text-darkBlueText font-bold text-base">FEATURES</th>
              <th className="p-4 text-center">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <User className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-blue-600 text-left">Personal</div>
                    <div className="flex items-center gap-1">
                      <span className="text-deepSlate font-bold text-lg">$0.00</span>
                      <span className="text-deepSlate text-xs font-normal">/ month</span>
                    </div>
                  </div>
                </div>
              </th>
              <th className="p-4 text-center">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-purple-600 text-left">Personal Plus</div>
                    <div className="flex items-center gap-1">
                      <span className="text-deepSlate font-bold text-lg">$50</span>
                      <span className="text-deepSlate text-xs font-normal">/ month</span>
                    </div>
                  </div>
                </div>
              </th>
              <th className="p-4 text-center">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Briefcase className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-green-600 text-left">Business</div>
                    <div className="flex items-center gap-1">
                      <span className="text-deepSlate font-bold text-lg">$100</span>
                      <span className="text-deepSlate text-xs font-normal">/ month</span>
                    </div>
                  </div>
                </div>
              </th>
              <th className="p-4 text-center">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <CircleDollarSign className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-orange-600 text-left">Individual Plan</div>
                    <div className="flex items-center gap-1">
                      <span className="text-deepSlate font-bold text-lg">$200</span>
                      <span className="text-deepSlate text-xs font-normal">/ month</span>
                    </div>
                  </div>
                </div>
              </th>
              <th className="p-4 text-center">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    <Building className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-red-600 text-left">Business Plan</div>
                    <div className="flex items-center gap-1">
                      <span className="text-deepSlate font-bold text-lg">$200</span>
                      <span className="text-deepSlate text-xs font-normal">/ month</span>
                    </div>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              { feature: "Free ad Per month", values: ["02", "02", "03", "--", "02"] },
              { feature: "Free offer of week", values: ["01", "03", "02", "--", "02"] },
              { feature: "Social media & Website link", values: ["", "✓", "✓", "✓", "✓"] },
              { feature: "Top ads for one month", values: ["", "✓", "✓", "✓", "✓"] },
              { feature: "Offer on other states", values: ["", "", "✓", "✓", "✓"] },
              { feature: "Offer on other countries", values: ["", "", "✓", "✓", "✓"] },
              { feature: "Send the ads to subscriber", values: ["", "", "", "✓", "✓"] },
              { feature: "Top ads for oen month", values: ["", "", "", "", "✓"] },
              { feature: "Ads on gallery page", values: ["", "", "", "", "✓"] },
              { feature: "Banner on main page", values: ["", "", "", "✓", ""] },
            ].map((row, i) => (
              <tr key={i} className="border-b">
                <td className="p-4 text-darkBlueText font-semibold text-base">{row.feature}</td>
                {row.values.map((value, j) => (
                  <td key={j} className="p-4 text-darkBlueText font-bold">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
            <tr className="border-b">
              <td className="p-4">No. of Uses Purchased</td>
              <td className="p-4">1265 USERS</td>
              <td className="p-4">2321 USERS</td>
              <td className="p-4">43243 USERS</td>
              <td className="p-4">6543 USERS</td>
              <td className="p-4">3423 USERS</td>
            </tr>
          </tbody>
        </table>
        <div className="grid grid-cols-5 gap-4 p-4">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <div key={index}>
                {index !== 0 && (
                  <Button 
                    className="w-full bg-primary-gradient text-white"
                    onClick={() => setIsUpdateModalOpen(true)}
                  >
                    Update Plan
                  </Button>
                )}
              </div>
            ))}
        </div>
      </div>

      {/* Update Plan Modal */}
      <UpdatePlanModal 
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
      />
    </div>
  )
}
