+++
# -----------------------------------------------------------------------
# Do not edit this file. It is automatically generated by API Documenter.
# -----------------------------------------------------------------------
title = "LogsModel"
keywords = ["grafana","documentation","sdk","@grafana/data"]
type = "docs"
draft = true
+++

## LogsModel interface

<b>Signature</b>

```typescript
export interface LogsModel 
```
<b>Import</b>

```typescript
import { LogsModel } from '@grafana/data';
```
<b>Properties</b>

|  Property | Type | Description |
|  --- | --- | --- |
|  [hasUniqueLabels](#hasuniquelabels-property) | <code>boolean</code> |  |
|  [meta](#meta-property) | <code>LogsMetaItem[]</code> |  |
|  [rows](#rows-property) | <code>LogRowModel[]</code> |  |
|  [series](#series-property) | <code>GraphSeriesXY[]</code> |  |

### hasUniqueLabels property

<b>Signature</b>

```typescript
hasUniqueLabels: boolean;
```

### meta property

<b>Signature</b>

```typescript
meta?: LogsMetaItem[];
```

### rows property

<b>Signature</b>

```typescript
rows: LogRowModel[];
```

### series property

<b>Signature</b>

```typescript
series?: GraphSeriesXY[];
```
