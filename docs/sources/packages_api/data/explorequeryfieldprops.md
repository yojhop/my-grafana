+++
# -----------------------------------------------------------------------
# Do not edit this file. It is automatically generated by API Documenter.
# -----------------------------------------------------------------------
title = "ExploreQueryFieldProps"
keywords = ["grafana","documentation","sdk","@grafana/data"]
type = "docs"
draft = true
+++

## ExploreQueryFieldProps interface

<b>Signature</b>

```typescript
export interface ExploreQueryFieldProps<DSType extends DataSourceApi<TQuery, TOptions>, TQuery extends DataQuery = DataQuery, TOptions extends DataSourceJsonData = DataSourceJsonData> extends QueryEditorProps<DSType, TQuery, TOptions> 
```
<b>Import</b>

```typescript
import { ExploreQueryFieldProps } from '@grafana/data';
```
<b>Properties</b>

|  Property | Type | Description |
|  --- | --- | --- |
|  [absoluteRange](#absoluterange-property) | <code>AbsoluteTimeRange</code> |  |
|  [exploreMode](#exploremode-property) | <code>ExploreMode</code> |  |
|  [history](#history-property) | <code>any[]</code> |  |
|  [onBlur](#onblur-property) | <code>() =&gt; void</code> |  |

### absoluteRange property

<b>Signature</b>

```typescript
absoluteRange?: AbsoluteTimeRange;
```

### exploreMode property

<b>Signature</b>

```typescript
exploreMode?: ExploreMode;
```

### history property

<b>Signature</b>

```typescript
history: any[];
```

### onBlur property

<b>Signature</b>

```typescript
onBlur?: () => void;
```
