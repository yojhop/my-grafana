+++
# -----------------------------------------------------------------------
# Do not edit this file. It is automatically generated by API Documenter.
# -----------------------------------------------------------------------
title = "QueryResultBase"
keywords = ["grafana","documentation","sdk","@grafana/data"]
type = "docs"
draft = true
+++

## QueryResultBase interface

<b>Signature</b>

```typescript
export interface QueryResultBase 
```
<b>Import</b>

```typescript
import { QueryResultBase } from '@grafana/data';
```
<b>Properties</b>

|  Property | Type | Description |
|  --- | --- | --- |
|  [meta](#meta-property) | <code>QueryResultMeta</code> | Used by some backend data sources to communicate back info about the execution (generated sql, timing) |
|  [refId](#refid-property) | <code>string</code> | Matches the query target refId |

### meta property

Used by some backend data sources to communicate back info about the execution (generated sql, timing)

<b>Signature</b>

```typescript
meta?: QueryResultMeta;
```

### refId property

Matches the query target refId

<b>Signature</b>

```typescript
refId?: string;
```
