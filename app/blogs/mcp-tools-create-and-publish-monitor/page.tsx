'use client'

import { ArrowLeft, Clock, Zap, Monitor, Globe, Code2, CheckCircle, Layers } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function MCPToolsBlog() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
        </div>
      </header>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-16">
          <div className="text-center mb-12">
            <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30 mb-6">Technical Deep Dive</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              MCP Tools: Streamlining Monitor Creation with create_and_publish_monitor
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Explore how BareUptime's Model Context Protocol (MCP) integration simplifies monitor creation and status page publishing in a single, powerful operation.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                6 min read
              </div>
              <span>September 23, 2025</span>
              <span>By BareUptime Team</span>
            </div>
          </div>
        </header>

        {/* What is MCP Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">What is Model Context Protocol (MCP)?</h2>
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              Model Context Protocol (MCP) is an innovative framework that enables AI models to interact directly with external services through standardized tools. Think of it as a bridge between AI assistants and real-world applications, allowing for seamless automation and integration.
            </p>

            <p className="text-slate-300 leading-relaxed">
              BareUptime's MCP integration exposes a comprehensive set of tools that allow AI models to manage your uptime monitoring infrastructure programmatically. From creating monitors to publishing status pages, everything can be automated through natural language instructions.
            </p>
          </div>

          <div className="mt-8 bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-4">Available MCP Tools</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-slate-300">list_monitors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-slate-300">create_monitor</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400 font-semibold" />
                  <span className="text-white font-semibold">create_and_publish_monitor</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-slate-300">update_monitor</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-slate-300">delete_monitor</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-slate-300">list_status_pages</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-slate-300">create_status_page</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-slate-300">get_status_data</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-slate-300">add_monitor_to_status_page</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-slate-300">remove_monitor_from_status_page</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Spotlight */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-blue-500/10 text-blue-400 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-blue-500/20 backdrop-blur-sm shadow-lg">
              <Zap className="w-4 h-4" />
              Feature Spotlight
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">create_and_publish_monitor: The Power Tool</h2>
            <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
              While all MCP tools are powerful, <code className="bg-slate-800 px-2 py-1 rounded text-blue-400">create_and_publish_monitor</code> stands out as the ultimate automation tool. It combines monitor creation with automatic status page publishing, turning what used to be a multi-step process into a single operation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <Monitor className="w-6 h-6 text-blue-400" />
                Traditional Workflow
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                  <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center text-red-400 font-bold text-sm mt-1">1</div>
                  <div>
                    <p className="text-white font-medium">Create a monitor</p>
                    <p className="text-slate-400 text-sm">Configure URL, intervals, and alert settings</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-orange-500/10 rounded-lg border border-orange-500/20">
                  <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-400 font-bold text-sm mt-1">2</div>
                  <div>
                    <p className="text-white font-medium">Create a status page</p>
                    <p className="text-slate-400 text-sm">Set up page name, description, and visibility</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center text-yellow-400 font-bold text-sm mt-1">3</div>
                  <div>
                    <p className="text-white font-medium">Link monitor to status page</p>
                    <p className="text-slate-400 text-sm">Add the monitor to the status page manually</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <Zap className="w-6 h-6 text-green-400" />
                MCP Workflow
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-6 bg-green-500/10 rounded-lg border border-green-500/20">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 font-bold text-sm mt-1">1</div>
                  <div>
                    <p className="text-white font-medium">Use create_and_publish_monitor</p>
                    <p className="text-slate-400 text-sm">Everything automated in a single operation</p>
                  </div>
                </div>
                <div className="p-4 bg-green-500/5 rounded-lg border border-green-500/10 text-center">
                  <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <p className="text-green-400 font-medium">Done!</p>
                  <p className="text-slate-400 text-sm">Monitor created and status page published automatically</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Technical Deep Dive</h2>

          <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-3xl p-8 border border-white/10 backdrop-blur-sm mb-8">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
              <Code2 className="w-5 h-5 text-blue-400" />
              Function Parameters
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-white mb-3">Required Parameters</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-black/40 rounded-lg p-4 border border-white/10">
                    <code className="text-blue-400 font-semibold">name</code>
                    <p className="text-slate-300 text-sm mt-1">Monitor name for identification</p>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4 border border-white/10">
                    <code className="text-blue-400 font-semibold">url</code>
                    <p className="text-slate-300 text-sm mt-1">URL to monitor for uptime</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium text-white mb-3">Optional Configuration</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-black/40 rounded-lg p-4 border border-white/10">
                    <code className="text-green-400 font-semibold">check_interval</code>
                    <p className="text-slate-300 text-sm mt-1">Frequency of checks (default: 5min)</p>
                    <p className="text-slate-400 text-xs mt-2">Options: 1min, 5min, 10min, 20min, 30min, 1hr</p>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4 border border-white/10">
                    <code className="text-green-400 font-semibold">timeout</code>
                    <p className="text-slate-300 text-sm mt-1">Request timeout in seconds (default: 5)</p>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4 border border-white/10">
                    <code className="text-green-400 font-semibold">type</code>
                    <p className="text-slate-300 text-sm mt-1">HTTP method (default: get)</p>
                    <p className="text-slate-400 text-xs mt-2">Options: get, post, put, patch, delete</p>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4 border border-white/10">
                    <code className="text-green-400 font-semibold">request_headers</code>
                    <p className="text-slate-300 text-sm mt-1">Custom headers for requests</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium text-white mb-3">Auto-Publishing Options</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-black/40 rounded-lg p-4 border border-white/10">
                    <code className="text-purple-400 font-semibold">publish</code>
                    <p className="text-slate-300 text-sm mt-1">Enable automatic status page creation (default: false)</p>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4 border border-white/10">
                    <code className="text-purple-400 font-semibold">status_page_name</code>
                    <p className="text-slate-300 text-sm mt-1">Custom name for the status page</p>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4 border border-white/10">
                    <code className="text-purple-400 font-semibold">status_page_key</code>
                    <p className="text-slate-300 text-sm mt-1">Unique URL key for the status page</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/30 rounded-2xl p-6 border border-white/10">
            <h4 className="text-lg font-medium text-white mb-4">Example Usage</h4>
            <pre className="bg-black/60 rounded-lg p-4 overflow-x-auto text-sm">
              <code className="text-slate-300">
{`{
  "name": "API Production",
  "url": "https://api.myapp.com/health",
  "check_interval": "1min",
  "timeout": 10,
  "type": "get",
  "request_headers": {
    "Authorization": "Bearer token",
    "Content-Type": "application/json"
  },
  "publish": true,
  "status_page_name": "MyApp API Status",
  "status_page_key": "myapp-api-status"
}`}
              </code>
            </pre>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why create_and_publish_monitor Matters</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl opacity-20 blur-lg group-hover:opacity-30 transition-all duration-500"></div>
              <Card className="relative bg-black/60 backdrop-blur-xl border border-white/10 h-full shadow-2xl transition-all duration-500 hover:translate-y-[-4px] rounded-2xl overflow-hidden group-hover:border-blue-500/30">
                <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500 w-full"></div>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-500/30">
                    <Zap className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Instant Deployment</h3>
                  <p className="text-slate-300 leading-relaxed">Deploy complete monitoring infrastructure with a single command. No manual steps, no forgotten configurations.</p>
                </CardContent>
              </Card>
            </div>

            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl opacity-20 blur-lg group-hover:opacity-30 transition-all duration-500"></div>
              <Card className="relative bg-black/60 backdrop-blur-xl border border-white/10 h-full shadow-2xl transition-all duration-500 hover:translate-y-[-4px] rounded-2xl overflow-hidden group-hover:border-green-500/30">
                <div className="h-1 bg-gradient-to-r from-green-500 to-emerald-500 w-full"></div>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-green-500/30">
                    <Layers className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Consistency</h3>
                  <p className="text-slate-300 leading-relaxed">Ensures consistent configuration across monitors and status pages. No human error, no missed settings.</p>
                </CardContent>
              </Card>
            </div>

            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-20 blur-lg group-hover:opacity-30 transition-all duration-500"></div>
              <Card className="relative bg-black/60 backdrop-blur-xl border border-white/10 h-full shadow-2xl transition-all duration-500 hover:translate-y-[-4px] rounded-2xl overflow-hidden group-hover:border-purple-500/30">
                <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 w-full"></div>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-purple-500/30">
                    <Globe className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Public Transparency</h3>
                  <p className="text-slate-300 leading-relaxed">Automatically creates public status pages, building customer trust through transparency from day one.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Real-World Scenarios */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Real-World Use Cases</h2>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl p-6 border border-blue-500/20">
              <h3 className="text-xl font-semibold text-white mb-3">Startup Launch</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                You're launching a new SaaS product and need monitoring + status page setup immediately. Instead of spending time on manual configuration, you can use AI to deploy complete monitoring infrastructure with a simple request: "Monitor my API at https://api.myapp.com and create a public status page."
              </p>
              <div className="bg-black/40 rounded-lg p-4">
                <p className="text-green-400 text-sm font-mono">✓ Monitor created ✓ Status page published ✓ Ready for customers</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-500/20">
              <h3 className="text-xl font-semibold text-white mb-3">Multi-Service Architecture</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                You have multiple microservices that need individual monitoring and a unified status page. The MCP tool can create monitors for each service and automatically add them to a single status page, providing a comprehensive view of your system health.
              </p>
              <div className="bg-black/40 rounded-lg p-4">
                <p className="text-green-400 text-sm font-mono">✓ API Monitor ✓ Database Monitor ✓ CDN Monitor ✓ Unified Status Page</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-semibold text-white mb-3">Client Onboarding</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                As an agency, you can instantly set up monitoring for new clients by simply providing their URLs. The MCP integration creates branded status pages automatically, improving client confidence in your services from the start.
              </p>
              <div className="bg-black/40 rounded-lg p-4">
                <p className="text-green-400 text-sm font-mono">✓ Client monitors ✓ Branded status pages ✓ Professional transparency</p>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Getting Started with MCP</h2>
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              BareUptime's MCP integration is available to all users and works seamlessly with AI assistants that support the Model Context Protocol. The tools are designed to be intuitive and self-documenting, making automation accessible even to non-technical users.
            </p>

            <p className="text-slate-300 leading-relaxed">
              Whether you're a developer looking to automate infrastructure setup, a startup founder who needs monitoring yesterday, or an agency managing multiple client sites, the <code className="bg-slate-800 px-2 py-1 rounded text-blue-400">create_and_publish_monitor</code> tool provides the speed and reliability you need.
            </p>

            <p className="text-slate-300 leading-relaxed">
              The future of infrastructure management is conversational. Instead of clicking through multiple interfaces and remembering complex workflows, you can simply describe what you need and let AI handle the implementation. This is just the beginning of what's possible when monitoring tools embrace intelligent automation.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12 border-t border-white/10">
          <h2 className="text-2xl font-bold text-white mb-4">
            Experience AI-Powered Monitoring
          </h2>
          <p className="text-slate-300 mb-8">
            Try BareUptime's MCP integration and see how AI can transform your monitoring workflow
          </p>
          <Link href="/">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium px-8 py-4 rounded-lg shadow-lg shadow-blue-500/20 transition-all duration-200 text-lg">
              Start Monitoring for Free
            </Button>
          </Link>
        </section>
      </article>
    </div>
  )
}