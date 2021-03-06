+++
# -----------------------------------------------------------------------
# Do not edit this file. It is automatically generated by API Documenter.
# -----------------------------------------------------------------------
title = "QueryEditorProps"
keywords = ["grafana","documentation","sdk","@grafana/data"]
type = "docs"
draft = true
+++

## QueryEditorProps interface

<b>Signature</b>

```typescript
export interface QueryEditorProps<DSType extends DataSourceApi<TQuery, TOptions>, TQuery extends DataQuery = DataQuery, TOptions extends DataSourceJsonData = DataSourceJsonData> 
```
<b>Import</b>

```typescript
import { QueryEditorProps } from '@grafana/data';
```
<b>Properties</b>

|  Property | Type | Description |
|  --- | --- | --- |
|  [data](#data-property) | <code>PanelData</code> | Contains query response filtered by refId of QueryResultBase and possible query error |
|  [datasource](#datasource-property) | <code>DSType</code> |  |
|  [onChange](#onchange-property) | <code>(value: TQuery) =&gt; void</code> |  |
|  [onRunQuery](#onrunquery-property) | <code>() =&gt; void</code> |  |
|  [query](#query-property) | <code>TQuery</code> |  |

### data property

Contains query response filtered by refId of QueryResultBase and possible query error

<b>Signature</b>

```typescript
data?: PanelData;
```

### datasource property

<b>Signature</b>

```typescript
datasource: DSType;
```

### onChange property

<b>Signature</b>

```typescript
onChange: (value: TQuery) => void;
```

### onRunQuery property

<b>Signature</b>

```typescript
onRunQuery: () => void;
```

### query property

<b>Signature</b>

```typescript
query: TQuery;
```
