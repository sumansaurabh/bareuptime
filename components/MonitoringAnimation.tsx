"use client"

import React, { useState, useEffect } from 'react'
import { Shield, Activity, Mail, MessageSquare, Smartphone, Zap, AlertTriangle, Check } from 'lucide-react'

const MonitoringAnimation = () => {
  const [activeConnections, setActiveConnections] = useState<Set<string>>(new Set())
  const [nodeStates, setNodeStates] = useState<Record<string, string>>({})

  useEffect(() => {
    const runAnimation = () => {
      // Reset
      setActiveConnections(new Set())
      setNodeStates({})

      const timeline = [
        () => {
          setNodeStates({ ssl: 'monitoring', metrics: 'monitoring' })
        },
        () => {
          setActiveConnections(new Set(['ssl-bareuptime', 'metrics-bareuptime']))
          setNodeStates(prev => ({ ...prev, bareuptime: 'processing' }))
        },
        () => {
          setNodeStates({ 
            ssl: 'success', 
            metrics: 'success', 
            bareuptime: 'success' 
          })
        },
        () => {
          setNodeStates(prev => ({ 
            ...prev, 
            ssl: 'error',
            bareuptime: 'alert'
          }))
        },
        () => {
          setActiveConnections(new Set([
            'ssl-bareuptime',
            'metrics-bareuptime',
            'bareuptime-email',
            'bareuptime-slack',
            'bareuptime-mobile'
          ]))
          setNodeStates(prev => ({ 
            ...prev,
            bareuptime: 'error',
            email: 'sending',
            slack: 'sending',
            mobile: 'sending'
          }))
        },
        () => {
          setNodeStates(prev => ({ 
            ...prev,
            email: 'error',
            slack: 'error',
            mobile: 'error'
          }))
        },
        () => {
          setNodeStates({
            ssl: 'success',
            metrics: 'success',
            bareuptime: 'success',
            email: 'success',
            slack: 'success',
            mobile: 'success'
          })
        },
        () => {
          setActiveConnections(new Set(['ssl-bareuptime', 'metrics-bareuptime']))
          setNodeStates({
            ssl: 'success',
            metrics: 'success',
            bareuptime: 'success'
          })
        }
      ]

      timeline.forEach((phase, index) => {
        setTimeout(phase, index * 1400)
      })
    }

    runAnimation()
    const interval = setInterval(runAnimation, 11200)
    return () => clearInterval(interval)
  }, [])

  // Fixed positions with proper spacing
  const nodes = [
    { id: 'ssl', x: 150, y: 160, icon: Shield, label: 'SSL Monitor', sublabel: 'Security' },
    { id: 'metrics', x: 150, y: 260, icon: Activity, label: 'Site Metrics', sublabel: 'Performance' },
    { id: 'bareuptime', x: 400, y: 210, icon: Zap, label: 'BareUptime', sublabel: 'Core', isCenter: true },
    { id: 'email', x: 650, y: 140, icon: Mail, label: 'Email', sublabel: 'Alerts' },
    { id: 'slack', x: 650, y: 210, icon: MessageSquare, label: 'Slack', sublabel: 'Teams' },
    { id: 'mobile', x: 650, y: 280, icon: Smartphone, label: 'Mobile', sublabel: 'Push' },
  ]

  const getNodeStyle = (state: string) => {
    const base = 'backdrop-blur-md border-2 transition-all duration-700'
    switch (state) {
      case 'monitoring': return `${base} bg-blue-500/20 border-blue-400/60`
      case 'processing': return `${base} bg-orange-500/20 border-orange-400/60`
      case 'success': return `${base} bg-emerald-500/20 border-emerald-400/60`
      case 'error': return `${base} bg-red-500/25 border-red-400/70`
      case 'alert': return `${base} bg-red-600/30 border-red-500/80 animate-pulse`
      case 'sending': return `${base} bg-purple-500/20 border-purple-400/60`
      default: return `${base} bg-slate-800/40 border-slate-600/40`
    }
  }

  const getIconColor = (state: string) => {
    switch (state) {
      case 'monitoring': return 'text-blue-400'
      case 'processing': return 'text-orange-400'
      case 'success': return 'text-emerald-400'
      case 'error': case 'alert': return 'text-red-400'
      case 'sending': return 'text-purple-400'
      default: return 'text-slate-500'
    }
  }

  const getConnectionColor = (id: string) => {
    const isActive = activeConnections.has(id)
    if (!isActive) return '#475569'
    
    const [from, to] = id.split('-')
    if (nodeStates[from] === 'error' || nodeStates[to] === 'error') return '#ef4444'
    if (nodeStates[from] === 'success' && nodeStates[to] === 'success') return '#10b981'
    return '#3b82f6'
  }

  // Proper curved paths for connections
  const connections = [
    { 
      id: 'ssl-bareuptime', 
      path: `M 150 160 Q 275 160 400 210`
    },
    { 
      id: 'metrics-bareuptime', 
      path: `M 150 260 Q 275 235 400 210`
    },
    { 
      id: 'bareuptime-email', 
      path: `M 400 210 Q 525 175 650 140`
    },
    { 
      id: 'bareuptime-slack', 
      path: `M 400 210 L 650 210`
    },
    { 
      id: 'bareuptime-mobile', 
      path: `M 400 210 Q 525 245 650 280`
    },
  ]

  return (
    <div className="relative w-full h-[450px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-xl overflow-hidden border border-slate-800">
      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* SVG for connections - FIXED VIEWBOX */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 800 450"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Connection paths */}
        {connections.map(conn => {
          const isActive = activeConnections.has(conn.id)
          const color = getConnectionColor(conn.id)
          
          return (
            <g key={conn.id}>
              {/* Main path */}
              <path
                d={conn.path}
                fill="none"
                stroke={color}
                strokeWidth={isActive ? 2.5 : 1}
                opacity={isActive ? 0.8 : 0.2}
                filter={isActive ? "url(#glow)" : ""}
                className="transition-all duration-700"
                strokeDasharray={nodeStates[conn.id?.split('-')[0]] === 'error' ? '8 4' : '0'}
              />
              
              {/* Animated dots for active connections */}
              {isActive && (
                <>
                  {[0, 0.5, 1].map((delay, i) => (
                    <circle 
                      key={i} 
                      r="3" 
                      fill={color}
                      opacity="0.9"
                    >
                      <animateMotion
                        dur="2s"
                        repeatCount="indefinite"
                        begin={`${delay}s`}
                        path={conn.path}
                      />
                      <animate
                        attributeName="r"
                        values="2;4;2"
                        dur="2s"
                        begin={`${delay}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                  ))}
                </>
              )}
            </g>
          )
        })}

        {/* Nodes */}
        {nodes.map(node => {
          const state = nodeStates[node.id] || 'idle'
          const Icon = node.icon
          
          return (
            <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
              {/* Node background with glow */}
              <rect
                x={node.isCenter ? -35 : -30}
                y={node.isCenter ? -35 : -30}
                width={node.isCenter ? 70 : 60}
                height={node.isCenter ? 70 : 60}
                rx="16"
                className={getNodeStyle(state)}
                fill="currentColor"
                fillOpacity="0.1"
              />
              
              {/* Icon container */}
              <foreignObject
                x={node.isCenter ? -20 : -16}
                y={node.isCenter ? -20 : -16}
                width={node.isCenter ? 40 : 32}
                height={node.isCenter ? 40 : 32}
              >
                <div className={`w-full h-full flex items-center justify-center ${getIconColor(state)}`}>
                  <Icon size={node.isCenter ? 28 : 24} />
                </div>
              </foreignObject>

              {/* Status indicator */}
              {state === 'error' && (
                <g transform={`translate(${node.isCenter ? 22 : 18}, ${node.isCenter ? -22 : -18})`}>
                  <circle r="10" fill="#ef4444" />
                  <foreignObject x="-6" y="-6" width="12" height="12">
                    <div className="w-full h-full flex items-center justify-center">
                      <AlertTriangle size={8} className="text-white" />
                    </div>
                  </foreignObject>
                </g>
              )}
              
              {state === 'success' && (
                <g transform={`translate(${node.isCenter ? 22 : 18}, ${node.isCenter ? -22 : -18})`}>
                  <circle r="10" fill="#10b981" />
                  <foreignObject x="-6" y="-6" width="12" height="12">
                    <div className="w-full h-full flex items-center justify-center">
                      <Check size={8} className="text-white" />
                    </div>
                  </foreignObject>
                </g>
              )}

              {/* Label below node */}
              <text
                y={node.isCenter ? 55 : 48}
                textAnchor="middle"
                className="fill-white text-sm font-medium"
              >
                {node.label}
              </text>
              <text
                y={node.isCenter ? 70 : 63}
                textAnchor="middle"
                className="fill-slate-500 text-xs"
              >
                {node.sublabel}
              </text>
            </g>
          )
        })}
      </svg>

      {/* Live indicator */}
      <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40">
        <div className="relative">
          <div className="w-2 h-2 bg-emerald-400 rounded-full" />
          <div className="absolute inset-0 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
        </div>
        <span className="text-emerald-400 text-xs font-semibold tracking-wide">LIVE</span>
      </div>
    </div>
  )
}

export default MonitoringAnimation