"use client"

import React, { useState, useEffect } from 'react'
import { CheckCircle, AlertTriangle, Globe, Server, Smartphone, Mail, MessageSquare, Webhook, Activity, Shield, Zap, Bell } from 'lucide-react'

interface AnimationNode {
  id: string
  x: number
  y: number
  type: 'source' | 'process' | 'notification' | 'central'
  status: 'idle' | 'active' | 'success' | 'error' | 'checking'
  icon: React.ComponentType<any>
  label: string
  category: string
}

const MonitoringAnimation = () => {
  const [activeConnections, setActiveConnections] = useState<string[]>([])
  const [pulsingNodes, setPulsingNodes] = useState<string[]>([])

  // Essential monitoring nodes - clean and focused
  const nodes: AnimationNode[] = [
    // Left side - Core monitoring sources
    { id: 'ssl', x: 150, y: 180, type: 'source', status: 'idle', icon: Shield, label: 'SSL Monitor', category: 'Security' },
    { id: 'metrics', x: 150, y: 280, type: 'source', status: 'idle', icon: Activity, label: 'Site Metrics', category: 'Performance' },
    
    // Center - Processing hub 
    { id: 'bareuptime', x: 400, y: 230, type: 'central', status: 'idle', icon: Zap, label: 'BareUptime', category: 'Core' },
    
    // Right side - Essential alerts
    { id: 'email', x: 650, y: 180, type: 'notification', status: 'idle', icon: Mail, label: 'Email', category: 'Alerts' },
    { id: 'slack', x: 650, y: 230, type: 'notification', status: 'idle', icon: MessageSquare, label: 'Slack', category: 'Teams' },
    { id: 'mobile', x: 650, y: 280, type: 'notification', status: 'idle', icon: Smartphone, label: 'Mobile', category: 'Push' },
  ]

  // Simplified connection paths - cleaner and more focused
  const connections = [
    { from: 'ssl', to: 'bareuptime', path: 'M 150 180 Q 275 180 400 230' },
    { from: 'metrics', to: 'bareuptime', path: 'M 150 280 Q 275 280 400 230' },
    
    { from: 'bareuptime', to: 'email', path: 'M 400 230 Q 525 180 650 180' },
    { from: 'bareuptime', to: 'slack', path: 'M 400 230 Q 525 230 650 230' },
    { from: 'bareuptime', to: 'mobile', path: 'M 400 230 Q 525 280 650 280' },
  ]

  const [nodeStates, setNodeStates] = useState(
    nodes.reduce((acc, node) => ({
      ...acc,
      [node.id]: { ...node, status: 'idle' as const }
    }), {} as Record<string, AnimationNode>)
  )

  useEffect(() => {
    const animationSequence = async () => {
      // Reset everything
      setActiveConnections([])
      setPulsingNodes([])
      setNodeStates(prev => 
        Object.keys(prev).reduce((acc, id) => ({
          ...acc,
          [id]: { ...prev[id], status: 'idle' as const }
        }), {} as Record<string, AnimationNode>)
      )

      await new Promise(resolve => setTimeout(resolve, 500))

      // Step 1: Start monitoring - SSL first, then metrics
      setNodeStates(prev => ({ ...prev, ssl: { ...prev.ssl, status: 'checking' } }))
      setPulsingNodes(['ssl'])
      await new Promise(resolve => setTimeout(resolve, 600))

      setNodeStates(prev => ({ ...prev, metrics: { ...prev.metrics, status: 'checking' } }))
      setPulsingNodes(prev => [...prev, 'metrics'])
      await new Promise(resolve => setTimeout(resolve, 800))

      // Step 2: Connect to BareUptime hub
      setActiveConnections(['ssl-bareuptime', 'metrics-bareuptime'])
      setNodeStates(prev => ({ ...prev, bareuptime: { ...prev.bareuptime, status: 'active' } }))
      setPulsingNodes(prev => [...prev, 'bareuptime'])
      
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Step 3: All systems healthy
      setNodeStates(prev => ({
        ...prev,
        ssl: { ...prev.ssl, status: 'success' },
        metrics: { ...prev.metrics, status: 'success' },
        bareuptime: { ...prev.bareuptime, status: 'success' }
      }))
      setPulsingNodes([])

      await new Promise(resolve => setTimeout(resolve, 1500))

      // Step 4: SSL issue detected!
      setNodeStates(prev => ({
        ...prev,
        ssl: { ...prev.ssl, status: 'error' },
        bareuptime: { ...prev.bareuptime, status: 'error' }
      }))
      setPulsingNodes(['ssl', 'bareuptime'])

      await new Promise(resolve => setTimeout(resolve, 800))

      // Step 5: Fire alerts to all channels
      setActiveConnections(prev => [...prev, 'bareuptime-email', 'bareuptime-slack', 'bareuptime-mobile'])
      
      await new Promise(resolve => setTimeout(resolve, 400))

      // Alert cascade
      setNodeStates(prev => ({ ...prev, email: { ...prev.email, status: 'error' } }))
      await new Promise(resolve => setTimeout(resolve, 200))
      
      setNodeStates(prev => ({ ...prev, slack: { ...prev.slack, status: 'error' } }))
      await new Promise(resolve => setTimeout(resolve, 200))
      
      setNodeStates(prev => ({ ...prev, mobile: { ...prev.mobile, status: 'error' } }))

      setPulsingNodes(['ssl', 'bareuptime', 'email', 'slack', 'mobile'])

      await new Promise(resolve => setTimeout(resolve, 2000))

      // Step 6: Issue resolved - back to green
      setNodeStates(prev => ({
        ...prev,
        ssl: { ...prev.ssl, status: 'success' },
        bareuptime: { ...prev.bareuptime, status: 'success' },
        email: { ...prev.email, status: 'success' },
        slack: { ...prev.slack, status: 'success' },
        mobile: { ...prev.mobile, status: 'success' }
      }))
      setPulsingNodes([])

      await new Promise(resolve => setTimeout(resolve, 2500))
    }

    const interval = setInterval(animationSequence, 12000)
    animationSequence()

    return () => clearInterval(interval)
  }, [])

  const getNodeColor = (status: string, type: string) => {
    // Clean, simple styling like in the image
    switch (status) {
      case 'checking': 
        return 'text-blue-400 bg-blue-500/30 border-blue-500/50'
      case 'active': 
        return 'text-orange-400 bg-orange-500/30 border-orange-500/50'
      case 'success': 
        return 'text-emerald-400 bg-emerald-500/30 border-emerald-500/50'
      case 'error': 
        return 'text-red-400 bg-red-500/30 border-red-500/50'
      default: 
        return 'text-slate-400 bg-slate-700/50 border-slate-600/50'
    }
  }

  const getConnectionColor = (from: string, to: string) => {
    const connectionId = `${from}-${to}`
    if (!activeConnections.includes(connectionId)) return 'stroke-slate-500/30'
    
    const fromNode = nodeStates[from]
    const toNode = nodeStates[to]
    
    if (fromNode?.status === 'error' || toNode?.status === 'error') {
      return 'stroke-red-400'
    }
    if (fromNode?.status === 'success' && toNode?.status === 'success') {
      return 'stroke-emerald-400'
    }
    if (fromNode?.status === 'checking' || toNode?.status === 'checking') {
      return 'stroke-blue-400'
    }
    return 'stroke-orange-400'
  }

  const AnimationPulse = ({ from, to, isActive, color }: { from: string, to: string, isActive: boolean, color: string }) => {
    if (!isActive) return null
    
    const fillColor = color.includes('red') ? '#f87171' : 
                     color.includes('emerald') ? '#34d399' : 
                     color.includes('blue') ? '#60a5fa' : '#22d3ee'
    
    return (
      <>
        <circle 
          r="3" 
          fill={fillColor}
          className="opacity-90"
        >
          <animateMotion
            dur="1.5s"
            repeatCount="indefinite"
            path={connections.find(c => c.from === from && c.to === to)?.path || ''}
          />
        </circle>
        <circle 
          r="6" 
          fill="none"
          stroke={fillColor}
          strokeWidth="1"
          className="opacity-40"
        >
          <animateMotion
            dur="1.5s"
            repeatCount="indefinite"
            path={connections.find(c => c.from === from && c.to === to)?.path || ''}
          />
        </circle>
      </>
    )
  }

  return (
    <div className="relative w-full h-[400px] bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-xl border border-white/20 overflow-hidden">
      {/* Simple background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
      
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400">        
        {/* Connection paths - clean and simple */}
        {connections.map((connection) => {
          const connectionId = `${connection.from}-${connection.to}`
          const isActive = activeConnections.includes(connectionId)
          const color = getConnectionColor(connection.from, connection.to)
          
          return (
            <g key={connectionId}>
              {/* Main path */}
              <path
                d={connection.path}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={color}
                opacity={isActive ? 0.8 : 0.2}
              />
              
              {/* Animated pulses */}
              <AnimationPulse 
                from={connection.from} 
                to={connection.to} 
                isActive={isActive}
                color={color}
              />
            </g>
          )
        })}
      </svg>

      {/* Nodes - clean design like the image */}
      {Object.values(nodeStates).map((node) => {
        const IconComponent = node.icon
        const isPulsing = pulsingNodes.includes(node.id)
        
        return (
          <div
            key={node.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${(node.x / 800) * 100}%`, top: `${(node.y / 400) * 100}%` }}
          >
            {/* Clean node container */}
            <div className={`
              relative w-12 h-12 rounded-xl border-2 flex items-center justify-center transition-all duration-300
              ${getNodeColor(node.status, node.type)}
              ${node.type === 'central' ? 'w-16 h-16' : ''}
              ${isPulsing ? 'animate-pulse' : ''}
            `}>
              <IconComponent className={`${node.type === 'central' ? 'w-8 h-8' : 'w-6 h-6'}`} />
              
              {/* Simple status indicator */}
              {node.status === 'error' && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-400 rounded-full border-2 border-slate-900 flex items-center justify-center">
                  <AlertTriangle className="w-2 h-2 text-slate-900" />
                </div>
              )}
              {node.status === 'success' && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-slate-900 flex items-center justify-center">
                  <CheckCircle className="w-2 h-2 text-slate-900" />
                </div>
              )}
            </div>
            
            {/* Node label - positioned below like in image */}
            <div className="absolute top-14 left-1/2 transform -translate-x-1/2 text-center">
              <div className="text-sm font-medium text-white whitespace-nowrap">
                {node.label}
              </div>
              <div className="text-xs text-slate-400 whitespace-nowrap">
                {node.category}
              </div>
            </div>
          </div>
        )
      })}

      {/* Clean header */}
      {/* Live indicator - clean style */}
      <div className="absolute top-4 right-4 flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 rounded-md px-2 py-1">
        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
        <span className="text-emerald-400 text-sm font-medium">LIVE</span>
      </div>
    </div>
  )
}

export default MonitoringAnimation