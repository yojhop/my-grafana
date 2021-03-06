+++
# -----------------------------------------------------------------------
# Do not edit this file. It is automatically generated by API Documenter.
# -----------------------------------------------------------------------
title = "DataQueryResponse"
keywords = ["grafana","documentation","sdk","@grafana/data"]
type = "docs"
draft = true
+++

## DataQueryResponse interface

<b>Signature</b>

```typescript
export interface DataQueryResponse 
```
<b>Import</b>

```typescript
import { DataQueryResponse } from '@grafana/data';
```
<b>Properties</b>

|  Property | Type | Description |
|  --- | --- | --- |
|  [data](#data-property) | <code>DataQueryResponseData[]</code> | The response data. When streaming, this may be empty or a partial result set |
|  [error](#error-property) | <code>DataQueryError</code> | Optionally include error info along with the response data |
|  [key](#key-property) | <code>string</code> | When returning multiple partial responses or streams Use this key to inform Grafana how to combine the partial responses Multiple responses with same key are replaced (latest used) |
|  [state](#state-property) | <code>LoadingState</code> | Use this to control which state the response should have Defaults to LoadingState.Done if state is not defined |

### data property

The response data. When streaming, this may be empty or a partial result set

<b>Signature</b>

```typescript
data: DataQueryResponseData[];
```

### error property

Optionally include error info along with the response data

<b>Signature</b>

```typescript
error?: DataQueryError;
```

### key property

When returning multiple partial responses or streams Use this key to inform Grafana how to combine the partial responses Multiple responses with same key are replaced (latest used)

<b>Signature</b>

```typescript
key?: string;
```

### state property

Use this to control which state the response should have Defaults to LoadingState.Done if state is not defined

<b>Signature</b>

```typescript
state?: LoadingState;
```
