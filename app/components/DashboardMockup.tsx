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
    <div className="w-full h-full bg-white/5 rounded-2xl p-1 will-change-transform">
      <div className="bg-black/40 backdrop-blur-sm rounded-xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Browser-style header */}
        <div className="flex items-center justify-between p-4 bg-black/30 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-white/20"></div>
            <div className="w-3 h-3 rounded-full bg-white/20"></div>
            <div className="w-3 h-3 rounded-full bg-white/20"></div>
          </div>
          <div className="text-xs text-slate-400 bg-white/5 px-2 py-1 rounded">Dashboard Preview</div>
        </div>

        {/* Dashboard Header */}
        <div className="p-4 bg-white/5 border-b border-white/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#975E08] rounded-lg flex items-center justify-center">
                <ActivityIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">BareUptime</div>
                <div className="text-xs text-slate-400">Dashboard</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="p-4 border-b border-white/5">
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white/5 border border-white/10 rounded-lg p-2 text-center">
              <div className="text-lg font-bold text-white">2</div>
              <div className="text-[10px] text-slate-400">Online</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-2 text-center">
              <div className="text-lg font-bold text-white">1</div>
              <div className="text-[10px] text-slate-400">Down</div>
            </div>
            <div className="bg-[#975E08]/10 border border-[#975E08]/20 rounded-lg p-2 text-center">
              <div className="text-lg font-bold text-[#975E08]">99.2%</div>
              <div className="text-[10px] text-[#975E08]/80">Uptime</div>
            </div>
          </div>
        </div>

        {/* Service List */}
        <div className="p-4 space-y-2">
          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#975E08]"></div>
              <div className="text-sm text-white font-medium">api.example.com</div>
            </div>
            <div className="text-xs text-[#975E08] font-bold">99.9%</div>
          </div>

          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#975E08]"></div>
              <div className="text-sm text-white font-medium">app.example.com</div>
            </div>
            <div className="text-xs text-[#975E08] font-bold">100%</div>
          </div>

          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10 border-dashed">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-slate-600"></div>
              <div className="text-sm text-slate-400 font-medium">db.example.com</div>
            </div>
            <div className="text-xs text-slate-500">Offline</div>
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="p-4 bg-white/5 border-t border-white/10">
          <div className="flex items-center justify-between text-[10px]">
            <span className="text-slate-400">Powered by BareUptime</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-1 bg-[#975E08] rounded-full"></div>
              <div className="w-2 h-1 bg-white/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

DashboardMockup.displayName = 'DashboardMockup'

export default DashboardMockup
