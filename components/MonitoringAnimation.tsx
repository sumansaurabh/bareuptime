"use client"

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { useSpring, animated, config } from '@react-spring/web'
import { Shield, Activity, Mail, Smartphone, Zap, AlertTriangle, Check, Lock, TrendingUp } from 'lucide-react'
// import Particles from "@tsparticles/react"
// import { loadSlim } from "tsparticles"

// Custom Slack Icon component - matches lucide-react icon signature
const SlackIcon: React.FC<{ size?: number; strokeWidth?: number; className?: string }> = ({ size = 22, strokeWidth = 1.5, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M6.527 14.514A1.973 1.973 0 0 1 4.56 16.48a1.973 1.973 0 0 1-1.967-1.967c0-1.083.884-1.966 1.967-1.966h1.967v1.967Zm.992 0c0-1.083.883-1.966 1.966-1.966s1.967.883 1.967 1.966v4.927a1.973 1.973 0 0 1-1.967 1.966 1.973 1.973 0 0 1-1.966-1.966v-4.927ZM9.485 6.527A1.973 1.973 0 0 1 7.518 4.56a1.973 1.973 0 0 1 1.967-1.967c1.083 0 1.966.884 1.966 1.967v1.967H9.485Zm0 .992c1.083 0 1.966.883 1.966 1.966s-.883 1.967-1.966 1.967H4.558a1.973 1.973 0 0 1-1.966-1.967c0-1.083.883-1.966 1.966-1.966h4.927ZM17.473 9.485a1.973 1.973 0 0 1 1.966-1.966 1.973 1.973 0 0 1 1.967 1.966 1.973 1.973 0 0 1-1.967 1.967h-1.966V9.485Zm-.992 0a1.973 1.973 0 0 1-1.967 1.967 1.973 1.973 0 0 1-1.966-1.967V4.558c0-1.083.883-1.966 1.966-1.966s1.967.883 1.967 1.966v4.927ZM14.514 17.473a1.973 1.973 0 0 1 1.967 1.966 1.973 1.973 0 0 1-1.967 1.967 1.973 1.973 0 0 1-1.966-1.967v-1.966h1.966Zm0-.992a1.973 1.973 0 0 1-1.966-1.967c0-1.083.883-1.966 1.966-1.966h4.927a1.973 1.973 0 0 1 1.966 1.966 1.973 1.973 0 0 1-1.966 1.967h-4.927Z"/>
  </svg>
)

const MonitoringAnimation = () => {
  const [activeConnections, setActiveConnections] = useState<Set<string>>(new Set())
  const [nodeStates, setNodeStates] = useState<Record<string, string>>({})
  const [metrics, setMetrics] = useState({
    uptime: 99.9,
    responseTime: 45
  })
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  // Floating background elements with more variety
  const floatingElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 8 + Math.random() * 6,
    size: 20 + Math.random() * 40,
    opacity: 0.1 + Math.random() * 0.2,
    shape: i % 3 === 0 ? 'circle' : i % 3 === 1 ? 'square' : 'hexagon'
  }))

  // Advanced spring animation for metrics
  const metricsSpring = useSpring({
    uptime: metrics.uptime,
    responseTime: metrics.responseTime,
    config: config.gentle
  })

  useEffect(() => {
    const runAnimation = () => {
      // Reset
      setActiveConnections(new Set())
      setNodeStates({})

      const timeline = [
        () => {
          setNodeStates({ ssl: 'monitoring', metrics: 'monitoring' })
          setMetrics({ uptime: 99.9, responseTime: 45 })
        },
        () => {
          setActiveConnections(new Set(['ssl-bareuptime', 'metrics-bareuptime']))
          setNodeStates(prev => ({ ...prev, bareuptime: 'processing' }))
          setMetrics({ uptime: 99.9, responseTime: 52 })
        },
        () => {
          setNodeStates({ 
            ssl: 'success', 
            metrics: 'success', 
            bareuptime: 'success' 
          })
          setMetrics({ uptime: 99.95, responseTime: 38 })
        },
        () => {
          setNodeStates(prev => ({ 
            ...prev, 
            ssl: 'error',
            bareuptime: 'alert'
          }))
          setMetrics({ uptime: 99.2, responseTime: 125 })
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
          setMetrics({ uptime: 98.8, responseTime: 245 })
        },
        () => {
          setNodeStates(prev => ({ 
            ...prev,
            email: 'success',
            slack: 'success',
            mobile: 'success'
          }))
          setMetrics({ uptime: 99.1, responseTime: 89 })
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
          setMetrics({ uptime: 99.95, responseTime: 42 })
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
        setTimeout(phase, index * 2000)
      })
    }

    runAnimation()
    const interval = setInterval(runAnimation, 16000)
    return () => clearInterval(interval)
  }, [])

  // Properly aligned nodes with consistent spacing
  const nodes = [
    { id: 'ssl', x: 60, y: 150, icon: Lock, label: 'SSL Monitor', color: 'emerald', size: 'normal' },
    { id: 'metrics', x: 60, y: 300, icon: Activity, label: 'Site Metrics', color: 'blue', size: 'normal' },
    { id: 'bareuptime', x: 270, y: 225, icon: Activity, label: 'BareUptime', isCenter: true, color: 'purple', size: 'large' },
    { id: 'email', x: 520, y: 90, icon: Mail, label: 'Email', color: 'orange', size: 'normal' },
    { id: 'slack', x: 520, y: 205, icon: SlackIcon, label: 'Slack', color: 'green', size: 'normal' },
    { id: 'mobile', x: 520, y: 320, icon: Smartphone, label: 'Mobile', color: 'pink', size: 'normal' },
  ]

  const getNodeVariants = (color: string, state: string) => {
    const colors = {
      emerald: { bg: 'from-emerald-500/20 to-emerald-600/30', border: 'border-emerald-400/60', glow: 'shadow-emerald-500/20' },
      blue: { bg: 'from-blue-500/20 to-blue-600/30', border: 'border-blue-400/60', glow: 'shadow-blue-500/20' },
      purple: { bg: 'from-purple-500/20 to-purple-600/30', border: 'border-purple-400/60', glow: 'shadow-purple-500/20' },
      orange: { bg: 'from-orange-500/20 to-orange-600/30', border: 'border-orange-400/60', glow: 'shadow-orange-500/20' },
      green: { bg: 'from-green-500/20 to-green-600/30', border: 'border-green-400/60', glow: 'shadow-green-500/20' },
      pink: { bg: 'from-pink-500/20 to-pink-600/30', border: 'border-pink-400/60', glow: 'shadow-pink-500/20' },
    }

    const baseStyle = colors[color as keyof typeof colors] || colors.blue
    
    if (state === 'error' || state === 'alert') {
      return { bg: 'from-red-500/30 to-red-600/50', border: 'border-red-400/90', glow: 'shadow-red-500/50' }
    }
    
    return baseStyle
  }

  const getIconColor = (state: string, defaultColor: string) => {
    switch (state) {
      case 'monitoring': return 'text-blue-400'
      case 'processing': return 'text-orange-400'
      case 'success': return `text-${defaultColor}-400`
      case 'error': case 'alert': return 'text-red-400'
      case 'sending': return 'text-purple-400'
      default: return 'text-slate-400'
    }
  }

  // Create custom shapes for background elements
  const renderShape = (shape: string, size: number) => {
    switch (shape) {
      case 'circle':
        return <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl" />
      case 'square':
        return <div className="w-full h-full rotate-45 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 blur-lg" />
      case 'hexagon':
        return <div className="w-full h-full bg-gradient-to-r from-violet-500/10 to-pink-500/10 blur-lg" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
      default:
        return <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl" />
    }
  }

  return (
    <div ref={containerRef} className="relative w-full h-[400px] bg-gradient-to-br from-slate-950 via-indigo-950/60 to-slate-950 rounded-2xl overflow-hidden border border-slate-800/60 shadow-2xl">
      {/* Complex animated background elements */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute"
          style={{
            width: element.size,
            height: element.size,
            left: `${element.x}%`,
            top: `${element.y}%`,
            opacity: element.opacity,
          }}
          animate={{
            x: [0, 20, -15, 10, 0],
            y: [0, -15, 20, -10, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 0.8, 1.1, 1],
            opacity: [element.opacity, element.opacity * 1.2, element.opacity * 0.7, element.opacity],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {renderShape(element.shape, element.size)}
        </motion.div>
      ))}

      {/* Animated grid background with depth */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, #3b82f6 1px, transparent 1px),
            radial-gradient(circle at 80% 80%, #8b5cf6 1px, transparent 1px),
            radial-gradient(circle at 60% 40%, #06b6d4 1px, transparent 1px),
            linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px, 90px 90px, 150px 150px, 60px 60px, 60px 60px'
        }}
      />

      {/* Main content */}
      <div className="relative h-full p-6">
        {/* Enhanced metrics dashboard */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-6 left-6 flex gap-4"
        >
          {[
            { label: 'Uptime', value: metricsSpring.uptime, suffix: '%', color: 'text-emerald-400', icon: TrendingUp },
            { label: 'Response', value: metricsSpring.responseTime, suffix: 'ms', color: 'text-blue-400', icon: Activity },
          ].map((metric, i) => {
            const MetricIcon = metric.icon
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl px-4 py-2 min-w-[90px] hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <MetricIcon size={12} className="text-slate-400" />
                  <div className="text-xs text-slate-400">{metric.label}</div>
                </div>
                <animated.div className={`text-lg font-bold ${metric.color}`}>
                  {metric.value.to((val: number) => `${Math.round(val)}${metric.suffix}`)}
                </animated.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Enhanced nodes with better animations */}
        <AnimatePresence>
          {nodes.map((node) => {
            const state = nodeStates[node.id] || 'idle'
            const Icon = node.icon
            const nodeStyle = getNodeVariants(node.color, state)
            const size = node.size === 'large' ? 75 : 65
            
            return (
              <motion.div
                key={node.id}
                className={`absolute backdrop-blur-lg bg-gradient-to-br ${nodeStyle.bg} border-2 ${nodeStyle.border} rounded-3xl shadow-2xl transition-all duration-700`}
                style={{
                  left: node.x - size / 2,
                  top: node.y - size / 2,
                  width: size,
                  height: size,
                }}
                initial={{ scale: 0, opacity: 0, rotate: -180 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  rotate: 0,
                  boxShadow: state === 'error' ? '0 0 60px rgba(239, 68, 68, 0.6)' : 
                             state === 'processing' ? '0 0 40px rgba(139, 92, 246, 0.4)' :
                             '0 0 30px rgba(0, 0, 0, 0.3)'
                }}
                whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                {/* Multiple pulse effects for different states */}
                {(state === 'processing' || state === 'sending') && (
                  <>
                    <motion.div
                      className="absolute inset-0 rounded-3xl border-2 border-purple-400/60"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-3xl border-2 border-blue-400/40"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                    />
                  </>
                )}

                {state === 'error' && (
                  <motion.div
                    className="absolute inset-0 rounded-3xl border-2 border-red-400/80"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.8, 0.3, 0.8] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}

                {/* Icon with enhanced animations */}
                <div className={`w-full h-full flex items-center justify-center ${getIconColor(state, node.color)}`}>
                  <motion.div
                    animate={{ 
                      rotate: state === 'processing' ? [0, 360] : 0,
                      scale: state === 'error' ? [1, 1.3, 1] : 
                             state === 'success' ? [1, 1.1, 1] : 1
                    }}
                    transition={{ 
                      rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                      scale: { duration: 0.6, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    <Icon size={node.size === 'large' ? 28 : 22} strokeWidth={1.5} />
                  </motion.div>
                </div>

                {/* Enhanced status indicators */}
                <AnimatePresence>
                  {state === 'error' && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 180 }}
                      className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center border-2 border-white/30 shadow-lg"
                      whileHover={{ scale: 1.2 }}
                    >
                      <AlertTriangle size={16} className="text-white" />
                    </motion.div>
                  )}
                  
                  {state === 'success' && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 180 }}
                      className="absolute -top-3 -right-3 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center border-2 border-white/30 shadow-lg"
                      whileHover={{ scale: 1.2 }}
                    >
                      <Check size={16} className="text-white" />
                    </motion.div>
                  )}

                  {(state === 'processing' || state === 'sending') && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-3 -right-3 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center border-2 border-white/30 shadow-lg"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Enhanced labels */}
                <div className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 text-center">
                  <motion.div 
                    className="text-white text-sm font-semibold whitespace-nowrap drop-shadow-lg"
                    animate={{ y: state === 'error' ? [0, -2, 0] : 0 }}
                    transition={{ duration: 0.5, repeat: state === 'error' ? Infinity : 0 }}
                  >
                    {node.label}
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>

        {/* Ultra-enhanced connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
              <stop offset="25%" stopColor="#8b5cf6" stopOpacity="1" />
              <stop offset="75%" stopColor="#06b6d4" stopOpacity="1" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="errorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="1" />
              <stop offset="50%" stopColor="#f97316" stopOpacity="1" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="1" />
            </linearGradient>
            <filter id="strongGlow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Enhanced connection paths */}
          {[
            { from: nodes[0], to: nodes[2], id: 'ssl-bareuptime', curve: 'concave' },
            { from: nodes[1], to: nodes[2], id: 'metrics-bareuptime', curve: 'convex' },
            { from: nodes[2], to: nodes[3], id: 'bareuptime-email', curve: 'concave' },
            { from: nodes[2], to: nodes[4], id: 'bareuptime-slack', curve: 'straight' },
            { from: nodes[2], to: nodes[5], id: 'bareuptime-mobile', curve: 'convex' },
          ].map((conn, index) => {
            const isActive = activeConnections.has(conn.id)
            const [fromId, toId] = conn.id.split('-')
            const hasError = nodeStates[fromId] === 'error' || nodeStates[toId] === 'error'
            const pathId = `path-${conn.id}`
            
            // Create different curve directions - convex curves up, concave curves down
            const curveOffset = conn.curve === 'convex' ? -25 : (conn.curve === 'straight' ? 0 : 25)
            const pathData = `M ${conn.from.x} ${conn.from.y} Q ${(conn.from.x + conn.to.x) / 2} ${(conn.from.y + conn.to.y) / 2 + curveOffset} ${conn.to.x} ${conn.to.y}`
            
            return (
              <g key={conn.id}>
                {/* Background path for glow effect */}
                <motion.path
                  id={pathId}
                  d={pathData}
                  fill="none"
                  stroke={hasError ? "url(#errorGradient)" : "url(#connectionGradient)"}
                  strokeWidth={isActive ? 6 : 2}
                  opacity={isActive ? 0.3 : 0.1}
                  filter="url(#strongGlow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: isActive ? 1 : 0,
                    opacity: isActive ? 0.3 : 0
                  }}
                  transition={{ duration: 2, ease: "easeInOut", delay: index * 0.2 }}
                />
                
                {/* Main path */}
                <motion.path
                  d={pathData}
                  fill="none"
                  stroke={hasError ? "url(#errorGradient)" : "url(#connectionGradient)"}
                  strokeWidth={isActive ? 4 : 1.5}
                  opacity={isActive ? 1 : 0}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: isActive ? 1 : 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut", delay: index * 0.1 }}
                  strokeDasharray={hasError ? "12 6" : ""}
                />
                
                {/* Enhanced animated particles */}
                <AnimatePresence>
                  {isActive && (
                    <>
                      {[0, 0.2, 0.4, 0.6, 0.8].map((delay, i) => (
                        <motion.circle
                          key={i}
                          r="4"
                          fill={hasError ? "#ef4444" : "#3b82f6"}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 1, 0.5, 1, 0] }}
                          transition={{
                            duration: 3,
                            delay: delay * 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          filter="url(#strongGlow)"
                        >
                          <animateMotion
                            dur="3s"
                            repeatCount="indefinite"
                            begin={`${delay * 3}s`}
                            path={pathData}
                          />
                          <animate
                            attributeName="r"
                            values="2;6;3;5;2"
                            dur="3s"
                            begin={`${delay * 3}s`}
                            repeatCount="indefinite"
                          />
                        </motion.circle>
                      ))}
                    </>
                  )}
                </AnimatePresence>
              </g>
            )
          })}
        </svg>

        {/* Ultra-enhanced live indicator
        <motion.div 
          initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-3 px-4 py-2 rounded-full backdrop-blur-lg bg-emerald-500/20 border border-emerald-400/50 shadow-xl"
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(16, 185, 129, 0.4)" }}
        >
          <div className="relative">
            <motion.div 
              className="w-3 h-3 bg-emerald-400 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="absolute inset-0 w-3 h-3 bg-emerald-400 rounded-full"
              animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <span className="text-emerald-400 text-sm font-bold tracking-wider">LIVE</span>
        </motion.div> */}
      </div>
    </div>
  )
}

export default MonitoringAnimation
