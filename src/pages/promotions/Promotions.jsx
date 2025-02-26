import { useEffect, useState } from "react"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import { Switch } from "../../components/ui/switch"
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { useDispatch } from "react-redux"
import { resetPageInfo, setPageInfo } from "../../redux/slices/pageSlice"


export default function PromotionDashboard() {
  const dispatch = useDispatch();
  const [view, setView] = useState("advertising")


  useEffect(() => {
    dispatch(
      setPageInfo({
        title: 'Manage Promotions',
        breadcrumbs: [
          { label: 'Home', link: '/dashboard' },
          { label: 'Manage Promotions' },
        ],
      })
    );

    return () => {
      dispatch(resetPageInfo());
    };
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-background">
      {/* View Toggle */}
      <div className="container px-4 py-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className={`${view === "plans" ? "text-darkBlueText" : "text-muted-foreground"} font-bold text-base`}>Plans</span>
            <Switch
              checked={view === "plans"}
              onCheckedChange={(checked) => setView(checked ? "plans" : "advertising")}
            />
          </div>
          <div className="flex items-center gap-2">
            <span className={`${view === "advertising" ? "text-darkBlueText" : "text-muted-foreground"} font-bold text-base`}>Advertising</span>
            <Switch
              checked={view === "advertising"}
              onCheckedChange={(checked) => setView(checked ? "advertising" : "plans")}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container px-4 py-4">{view === "advertising" ? <AdvertisingView /> : <PlansView />}</div>
    </div>
  )
}

function AdvertisingView() {
  return (
    <div className="space-y-8">
      {/* Metrics */}
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { title: "Main Page Banners", price: "$3.5 M", users: "40,689" },
          { title: "Banner in Category 1", price: "$3.5 M", users: "1565k" },
          { title: "Banner in Listing Page", price: "$3.5 M", users: "3,422" },
        ]?.map((metric, i) => (
          <div className="flex flex-col border-r border-dashed last:border-r-0">
          <div className="flex items-center gap-2 px-4">
            <span className="text-sm mutedBlue font-semibold">{metric.title}</span>
            <span className="rounded bg-blue-50 px-2 font-bold py-0.5 text-sm text-blue-500">{metric.price}</span>
          </div>
          <div className="px-4 py-2 text-2xl font-bold text-darkBlueText">{metric.users}</div>
        </div>
          
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1month">1 Month</SelectItem>
            <SelectItem value="3months">3 Months</SelectItem>
            <SelectItem value="6months">6 Months</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Position" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="top">Top</SelectItem>
            <SelectItem value="bottom">Bottom</SelectItem>
            <SelectItem value="sidebar">Sidebar</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="auto">Auto</SelectItem>
            <SelectItem value="property">Property</SelectItem>
            <SelectItem value="jobs">Jobs</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="SubCategory" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cars">Cars</SelectItem>
            <SelectItem value="parts">Parts</SelectItem>
            <SelectItem value="services">Services</SelectItem>
          </SelectContent>
        </Select>
        <div className="ml-auto flex gap-2">
          <Button variant="outline">Add Section</Button>
          <Button>View Billing History</Button>
        </div>
      </div>

      {/* Promotion Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { title: "Main Page Banners", price: "$100" },
          { title: "Banner in Category 1", price: "$999" },
          { title: "Banner in Listing Page", price: "$100" },
        ].map((card, i) => (
          <div key={i} className="rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">{card.title}</span>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <span className="sr-only">Delete</span>
                  🗑️
                </Button>
                <Switch />
              </div>
            </div>
            <div className="mt-4 text-3xl font-bold">{card.price}</div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">✓</span>
                <span>Valid till 1 Year</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">✓</span>
                <span>Position: Bottom</span>
              </div>
            </div>
            <Button className="mt-4 w-full">Update Plan</Button>
          </div>
        ))}
      </div>
    </div>
  )
}

function PlansView() {
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
          <div className="flex flex-col border-r last:border-r-0">
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
        <Tabs defaultValue="monthly">
          <TabsList>
            <TabsTrigger value="weekly">Weekly Plans</TabsTrigger>
            <TabsTrigger value="monthly">Monthly Plan</TabsTrigger>
            <TabsTrigger value="semi">Semi-Annual Plan</TabsTrigger>
            <TabsTrigger value="annual">Annual Plan</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex items-center gap-2">
          <Input className="w-[300px]" placeholder="Search" />
          <Button>View Billing History</Button>
        </div>
      </div>

      {/* Plans Table */}
      <div className="rounded-lg border">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left">FEATURES</th>
              <th className="p-4 text-left">
                <div>Personal</div>
                <div className="text-sm text-muted-foreground">$0.00/month</div>
              </th>
              <th className="p-4 text-left">
                <div>Personal Plus</div>
                <div className="text-sm text-muted-foreground">$50/month</div>
              </th>
              <th className="p-4 text-left">
                <div>Business</div>
                <div className="text-sm text-muted-foreground">$100/month</div>
              </th>
              <th className="p-4 text-left">
                <div>Individual Plan</div>
                <div className="text-sm text-muted-foreground">$200/month</div>
              </th>
              <th className="p-4 text-left">
                <div>Business Plan</div>
                <div className="text-sm text-muted-foreground">$200/month</div>
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
                <td className="p-4">{row.feature}</td>
                {row.values.map((value, j) => (
                  <td key={j} className="p-4">
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
            .map((_, i) => (
              <Button key={i} className="w-full">
                Update Plan
              </Button>
            ))}
        </div>
      </div>
    </div>
  )
}

