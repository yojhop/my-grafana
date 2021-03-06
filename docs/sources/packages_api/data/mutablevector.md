+++
# -----------------------------------------------------------------------
# Do not edit this file. It is automatically generated by API Documenter.
# -----------------------------------------------------------------------
title = "MutableVector"
keywords = ["grafana","documentation","sdk","@grafana/data"]
type = "docs"
draft = true
+++

## MutableVector interface

Vector with standard manipulation functions

<b>Signature</b>

```typescript
export interface MutableVector<T = any> extends ReadWriteVector<T> 
```
<b>Import</b>

```typescript
import { MutableVector } from '@grafana/data';
```
<b>Properties</b>

|  Property | Type | Description |
|  --- | --- | --- |
|  [add](#add-property) | <code>(value: T) =&gt; void</code> | Adds the value to the vector |
|  [reverse](#reverse-property) | <code>() =&gt; void</code> | modifies the vector so it is now the opposite order |

### add property

Adds the value to the vector

<b>Signature</b>

```typescript
add: (value: T) => void;
```

### reverse property

modifies the vector so it is now the opposite order

<b>Signature</b>

```typescript
reverse: () => void;
```
