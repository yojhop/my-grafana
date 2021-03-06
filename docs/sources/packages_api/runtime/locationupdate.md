+++
# -----------------------------------------------------------------------
# Do not edit this file. It is automatically generated by API Documenter.
# -----------------------------------------------------------------------
title = "LocationUpdate"
keywords = ["grafana","documentation","sdk","@grafana/runtime"]
type = "docs"
draft = true
+++

## LocationUpdate interface

<b>Signature</b>

```typescript
export interface LocationUpdate 
```
<b>Import</b>

```typescript
import { LocationUpdate } from '@grafana/runtime';
```
<b>Properties</b>

|  Property | Type | Description |
|  --- | --- | --- |
|  [partial](#partial-property) | <code>boolean</code> | Add the query argument to the existing URL |
|  [path](#path-property) | <code>string</code> |  |
|  [query](#query-property) | <code>UrlQueryMap</code> |  |
|  [replace](#replace-property) | <code>boolean</code> |  |
|  [routeParams](#routeparams-property) | <code>UrlQueryMap</code> | Do not change this unless you are the angular router |

### partial property

Add the query argument to the existing URL

<b>Signature</b>

```typescript
partial?: boolean;
```

### path property

<b>Signature</b>

```typescript
path?: string;
```

### query property

<b>Signature</b>

```typescript
query?: UrlQueryMap;
```

### replace property

<b>Signature</b>

```typescript
replace?: boolean;
```

### routeParams property

Do not change this unless you are the angular router

<b>Signature</b>

```typescript
routeParams?: UrlQueryMap;
```
