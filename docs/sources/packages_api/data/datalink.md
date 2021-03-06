+++
# -----------------------------------------------------------------------
# Do not edit this file. It is automatically generated by API Documenter.
# -----------------------------------------------------------------------
title = "DataLink"
keywords = ["grafana","documentation","sdk","@grafana/data"]
type = "docs"
draft = true
+++

## DataLink interface

Link configuration. The values may contain variables that need to be processed before running

<b>Signature</b>

```typescript
export interface DataLink 
```
<b>Import</b>

```typescript
import { DataLink } from '@grafana/data';
```
<b>Properties</b>

|  Property | Type | Description |
|  --- | --- | --- |
|  [onBuildUrl](#onbuildurl-property) | <code>(event: DataLinkClickEvent) =&gt; string</code> |  |
|  [onClick](#onclick-property) | <code>(event: DataLinkClickEvent) =&gt; void</code> |  |
|  [targetBlank](#targetblank-property) | <code>boolean</code> |  |
|  [title](#title-property) | <code>string</code> |  |
|  [url](#url-property) | <code>string</code> |  |

### onBuildUrl property

<b>Signature</b>

```typescript
onBuildUrl?: (event: DataLinkClickEvent) => string;
```

### onClick property

<b>Signature</b>

```typescript
onClick?: (event: DataLinkClickEvent) => void;
```

### targetBlank property

<b>Signature</b>

```typescript
targetBlank?: boolean;
```

### title property

<b>Signature</b>

```typescript
title: string;
```

### url property

<b>Signature</b>

```typescript
url: string;
```
