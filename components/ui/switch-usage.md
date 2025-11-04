# Switch Component Usage Guide

## Import

```tsx
import { Switch } from "@/components/ui/switch"
```

## Basic Usage

### Default Size (Medium - Recommended)
```tsx
<Switch defaultChecked />
<Switch checked={isEnabled} onCheckedChange={setIsEnabled} />
```

### Size Variants

#### Small (Original Size)
```tsx
<Switch size="sm" defaultChecked />
```
- Height: 24px (h-6)
- Width: 44px (w-11)
- Use case: Compact UIs, mobile views

#### Medium (New Default)
```tsx
<Switch size="md" defaultChecked />
// or simply
<Switch defaultChecked />
```
- Height: 32px (h-8)
- Width: 56px (w-14)
- Use case: Tables, forms, general UI (recommended)

#### Large
```tsx
<Switch size="lg" defaultChecked />
```
- Height: 40px (h-10)
- Width: 72px (w-18)
- Use case: Prominent settings, accessibility needs

## Common Patterns

### In a Table
```tsx
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Service Name</td>
      <td>
        <Switch size="md" defaultChecked />
      </td>
    </tr>
  </tbody>
</table>
```

### With Label
```tsx
<div className="flex items-center gap-4">
  <Switch 
    id="notifications" 
    checked={enabled}
    onCheckedChange={setEnabled}
  />
  <label htmlFor="notifications">Enable notifications</label>
</div>
```

### In a Form
```tsx
<div className="space-y-4">
  <div className="flex items-center justify-between">
    <div>
      <h3 className="font-medium">Auto-save</h3>
      <p className="text-sm text-muted-foreground">
        Automatically save changes
      </p>
    </div>
    <Switch checked={autoSave} onCheckedChange={setAutoSave} />
  </div>
</div>
```

### Disabled State
```tsx
<Switch disabled defaultChecked />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Size variant of the switch |
| `checked` | `boolean` | - | Controlled checked state |
| `defaultChecked` | `boolean` | `false` | Default checked state (uncontrolled) |
| `onCheckedChange` | `(checked: boolean) => void` | - | Callback when checked state changes |
| `disabled` | `boolean` | `false` | Whether the switch is disabled |
| `className` | `string` | - | Additional CSS classes |

## Accessibility

- Fully keyboard accessible (Tab to focus, Space to toggle)
- Proper ARIA attributes
- Focus visible ring indicator
- Screen reader compatible

## Migration from Old Switch

If you have existing switches and want to keep the original small size:

```tsx
// Before
<Switch defaultChecked />

// After (to maintain small size)
<Switch size="sm" defaultChecked />

// Or use new default medium size (recommended)
<Switch defaultChecked />
```
