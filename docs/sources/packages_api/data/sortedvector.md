+++
# -----------------------------------------------------------------------
# Do not edit this file. It is automatically generated by API Documenter.
# -----------------------------------------------------------------------
title = "SortedVector"
keywords = ["grafana","documentation","sdk","@grafana/data"]
type = "docs"
draft = true
+++

## SortedVector class

Values are returned in the order defined by the input parameter

<b>Signature</b>

```typescript
export declare class SortedVector<T = any> implements Vector<T> 
```
<b>Import</b>

```typescript
import { SortedVector } from '@grafana/data';
```
<b>Constructors</b>

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [constructor(source, order)](#constructor-sourceorder) |  | Constructs a new instance of the <code>SortedVector</code> class |

<b>Properties</b>

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [length](#length-property) |  | <code>number</code> |  |

<b>Methods</b>

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [get(index)](#get-method) |  |  |
|  [toArray()](#toarray-method) |  |  |
|  [toJSON()](#tojson-method) |  |  |

### constructor(source, order)

Constructs a new instance of the `SortedVector` class

<b>Signature</b>

```typescript
constructor(source: Vector<T>, order: number[]);
```
<b>Parameters</b>

|  Parameter | Type | Description |
|  --- | --- | --- |
|  source | <code>Vector&lt;T&gt;</code> |  |
|  order | <code>number[]</code> |  |

### length property

<b>Signature</b>

```typescript
get length(): number;
```

### get method

<b>Signature</b>

```typescript
get(index: number): T;
```
<b>Parameters</b>

|  Parameter | Type | Description |
|  --- | --- | --- |
|  index | <code>number</code> |  |

<b>Returns:</b>

`T`

### toArray method

<b>Signature</b>

```typescript
toArray(): T[];
```
<b>Returns:</b>

`T[]`

### toJSON method

<b>Signature</b>

```typescript
toJSON(): T[];
```
<b>Returns:</b>

`T[]`

