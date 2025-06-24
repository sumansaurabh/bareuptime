import { memo } from 'react'

const ActivityIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>
  </svg>
)

// Memoized dashboard component for better performance
const DashboardMockup = memo(() => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-2xl p-1 will-change-transform">
      <div className="bg-black/40 backdrop-blur-sm rounded-xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Browser-style header */}
        <div className="flex items-center justify-between p-4 bg-black/30 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-xs text-slate-400 bg-white/5 px-2 py-1 rounded">Dashboard Preview</div>
        </div>

        {/* Dashboard Header */}
        <div className="p-4 bg-gradient-to-r from-blue-950/50 to-indigo-950/50 border-b border-white/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <ActivityIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">BareUptime</div>
                <div className="text-xs text-slate-400">Monitoring Dashboard</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="p-4 border-b border-white/5">
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-2 text-center">
              <div className="text-lg font-bold text-green-400">12</div>
              <div className="text-xs text-green-300/80">Online</div>
            </div>
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-2 text-center">
              <div className="text-lg font-bold text-red-400">1</div>
              <div className="text-xs text-red-300/80">Down</div>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-2 text-center">
              <div className="text-lg font-bold text-blue-400">99.2%</div>
              <div className="text-xs text-blue-300/80">Uptime</div>
            </div>
          </div>
        </div>

        {/* Service List */}
        <div className="p-4 space-y-2">
          <div className="text-xs font-medium text-slate-400 mb-3">Your Services</div>
          
          {/* Service Items - Reduced animations for performance */}
          <div className="flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-300 rounded-full"></div>
              </div>
              <div>
                <div className="text-sm font-medium text-white">api.example.com</div>
                <div className="text-xs text-slate-400">Last checked 30s ago</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-xs text-green-400 font-medium">200ms</div>
              <div className="text-xs text-green-400 font-bold">99.9%</div>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-300 rounded-full"></div>
              </div>
              <div>
                <div className="text-sm font-medium text-white">app.example.com</div>
                <div className="text-xs text-slate-400">Last checked 45s ago</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-xs text-green-400 font-medium">150ms</div>
              <div className="text-xs text-green-400 font-bold">100%</div>
            </div>
          </div>

          {/* Service Item 3 - Error State with reduced animations */}
          <div className="flex items-center justify-between p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-300 rounded-full"></div>
              </div>
              <div>
                <div className="text-sm font-medium text-white">db.example.com</div>
                <div className="text-xs text-red-400">Down for 2m 15s</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-xs text-red-400 font-medium">Timeout</div>
              <div className="text-xs text-red-400 font-bold">98.1%</div>
            </div>
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="p-4 bg-gradient-to-r from-blue-950/30 to-indigo-950/30 border-t border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <div className="text-xs text-green-400 font-semibold">50 Monitors are Free</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1 h-3 bg-blue-400 rounded-full"></div>
              <div className="w-1 h-2 bg-blue-400/60 rounded-full"></div>
              <div className="w-1 h-4 bg-blue-400 rounded-full"></div>
              <div className="w-1 h-2 bg-blue-400/60 rounded-full"></div>
              <div className="w-1 h-3 bg-blue-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

DashboardMockup.displayName = 'DashboardMockup'

export default DashboardMockup
