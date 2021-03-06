+++
# -----------------------------------------------------------------------
# Do not edit this file. It is automatically generated by API Documenter.
# -----------------------------------------------------------------------
title = "CascaderOption"
keywords = ["grafana","documentation","sdk","@grafana/ui"]
type = "docs"
draft = true
+++

## CascaderOption interface

<b>Signature</b>

```typescript
export interface CascaderOption 
```
<b>Import</b>

```typescript
import { CascaderOption } from '@grafana/ui';
```
<b>Properties</b>

|  Property | Type | Description |
|  --- | --- | --- |
|  [children](#children-property) | <code>CascaderOption[]</code> | Children will be shown in a submenu. Use 'items' instead, as 'children' exist to ensure backwards compatibility. |
|  [disabled](#disabled-property) | <code>boolean</code> |  |
|  [items](#items-property) | <code>CascaderOption[]</code> | Items will be just flattened into the main list of items recursively. |
|  [label](#label-property) | <code>string</code> |  |
|  [title](#title-property) | <code>string</code> |  |
|  [value](#value-property) | <code>any</code> |  |

### children property

Children will be shown in a submenu. Use 'items' instead, as 'children' exist to ensure backwards compatibility.

<b>Signature</b>

```typescript
children?: CascaderOption[];
```

### disabled property

<b>Signature</b>

```typescript
disabled?: boolean;
```

### items property

Items will be just flattened into the main list of items recursively.

<b>Signature</b>

```typescript
items?: CascaderOption[];
```

### label property

<b>Signature</b>

```typescript
label: string;
```

### title property

<b>Signature</b>

```typescript
title?: string;
```

### value property

<b>Signature</b>

```typescript
value: any;
```
