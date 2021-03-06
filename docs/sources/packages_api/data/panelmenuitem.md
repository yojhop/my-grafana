+++
# -----------------------------------------------------------------------
# Do not edit this file. It is automatically generated by API Documenter.
# -----------------------------------------------------------------------
title = "PanelMenuItem"
keywords = ["grafana","documentation","sdk","@grafana/data"]
type = "docs"
draft = true
+++

## PanelMenuItem interface

<b>Signature</b>

```typescript
export interface PanelMenuItem 
```
<b>Import</b>

```typescript
import { PanelMenuItem } from '@grafana/data';
```
<b>Properties</b>

|  Property | Type | Description |
|  --- | --- | --- |
|  [href](#href-property) | <code>string</code> |  |
|  [iconClassName](#iconclassname-property) | <code>string</code> |  |
|  [onClick](#onclick-property) | <code>(event: React.MouseEvent&lt;any&gt;) =&gt; void</code> |  |
|  [shortcut](#shortcut-property) | <code>string</code> |  |
|  [subMenu](#submenu-property) | <code>PanelMenuItem[]</code> |  |
|  [text](#text-property) | <code>string</code> |  |
|  [type](#type-property) | <code>'submenu' &#124; 'divider'</code> |  |

### href property

<b>Signature</b>

```typescript
href?: string;
```

### iconClassName property

<b>Signature</b>

```typescript
iconClassName?: string;
```

### onClick property

<b>Signature</b>

```typescript
onClick?: (event: React.MouseEvent<any>) => void;
```

### shortcut property

<b>Signature</b>

```typescript
shortcut?: string;
```

### subMenu property

<b>Signature</b>

```typescript
subMenu?: PanelMenuItem[];
```

### text property

<b>Signature</b>

```typescript
text?: string;
```

### type property

<b>Signature</b>

```typescript
type?: 'submenu' | 'divider';
```
