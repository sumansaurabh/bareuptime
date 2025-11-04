"use client"

import { Switch } from "@/components/ui/switch"
import { useState } from "react"

export default function SwitchDemo() {
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(true)
  const [checked3, setChecked3] = useState(false)

  return (
    <div className="container mx-auto p-8 space-y-12">
      <div>
        <h1 className="text-3xl font-bold mb-2">Switch Component Demo</h1>
        <p className="text-muted-foreground">Updated toggle button sizes for better visibility</p>
      </div>

      {/* Size Variants */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Size Variants</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Switch size="sm" checked={checked1} onCheckedChange={setChecked1} />
            <span className="text-sm">Small (h-6 w-11) - Original size</span>
          </div>
          <div className="flex items-center gap-4">
            <Switch size="md" checked={checked2} onCheckedChange={setChecked2} />
            <span className="text-sm font-semibold">Medium (h-8 w-14) - New default size ✨</span>
          </div>
          <div className="flex items-center gap-4">
            <Switch size="lg" checked={checked3} onCheckedChange={setChecked3} />
            <span className="text-sm">Large (h-10 w-18) - Extra large</span>
          </div>
        </div>
      </div>

      {/* Table Example */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Table Context Example</h2>
        <p className="text-sm text-muted-foreground">
          Similar to the Full Self Coding scheduled tasks page
        </p>
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-4 font-medium">Project / Service</th>
                <th className="text-left p-4 font-medium">Repository</th>
                <th className="text-left p-4 font-medium">Agent / Model</th>
                <th className="text-left p-4 font-medium">Frequency</th>
                <th className="text-left p-4 font-medium">Status</th>
                <th className="text-left p-4 font-medium">Last Run</th>
                <th className="text-left p-4 font-medium">Next Run</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-4">
                  <div className="font-medium">penify-prod</div>
                  <div className="text-sm text-muted-foreground">bb-basic-test</div>
                </td>
                <td className="p-4">
                  <div className="font-medium">sumansaurabh/bb-basic-test</div>
                  <div className="text-sm text-muted-foreground">main</div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xs">B</span>
                    </div>
                    <span className="text-sm">Blackbox</span>
                  </div>
                  <div className="text-sm text-muted-foreground">blackbox.ai/blackbox-pro</div>
                </td>
                <td className="p-4">12x</td>
                <td className="p-4">
                  <Switch size="md" defaultChecked />
                </td>
                <td className="p-4">01/11/2025, 17:30:11</td>
                <td className="p-4">27/10/2025, 09:00:00</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">
                  <div className="font-medium">api-service</div>
                  <div className="text-sm text-muted-foreground">production</div>
                </td>
                <td className="p-4">
                  <div className="font-medium">company/api-service</div>
                  <div className="text-sm text-muted-foreground">main</div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xs">C</span>
                    </div>
                    <span className="text-sm">Claude</span>
                  </div>
                  <div className="text-sm text-muted-foreground">claude-sonnet-4.5</div>
                </td>
                <td className="p-4">24x</td>
                <td className="p-4">
                  <Switch size="md" />
                </td>
                <td className="p-4">02/11/2025, 08:15:22</td>
                <td className="p-4">28/10/2025, 10:30:00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Comparison */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Before & After Comparison</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="font-semibold text-red-600">Before (Small)</h3>
            <div className="flex items-center justify-center py-8 bg-muted/30 rounded">
              <Switch size="sm" defaultChecked />
            </div>
            <p className="text-sm text-muted-foreground">
              Original size: 24px × 44px - Too small for table context
            </p>
          </div>
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="font-semibold text-green-600">After (Medium - Default)</h3>
            <div className="flex items-center justify-center py-8 bg-muted/30 rounded">
              <Switch size="md" defaultChecked />
            </div>
            <p className="text-sm text-muted-foreground">
              New default: 32px × 56px - Better proportions and visibility
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
