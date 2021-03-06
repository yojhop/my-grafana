+++
# -----------------------------------------------------------------------
# Do not edit this file. It is automatically generated by API Documenter.
# -----------------------------------------------------------------------
title = "DataFrameView"
keywords = ["grafana","documentation","sdk","@grafana/data"]
type = "docs"
draft = true
+++

## DataFrameView class

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

This abstraction will present the contents of a DataFrame as if it were a well typed javascript object Vector.

<b>Signature</b>

```typescript
export declare class DataFrameView<T = any> implements Vector<T> 
```
<b>Import</b>

```typescript
import { DataFrameView } from '@grafana/data';
```

## Remarks

The [DataFrameView.get()](./data/dataframeview/get.md) is optimized for use in a loop and will return same object. See function for more details.

<b>Constructors</b>

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [constructor(data)](#constructor-data) |  | <b><i>(BETA)</i></b> Constructs a new instance of the <code>DataFrameView</code> class |

<b>Properties</b>

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [dataFrame](#dataframe-property) |  | <code>DataFrame</code> | <b><i>(BETA)</i></b> |
|  [length](#length-property) |  | <code>number</code> | <b><i>(BETA)</i></b> |

<b>Methods</b>

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [forEachRow(iterator)](#foreachrow-method) |  | <b><i>(BETA)</i></b> |
|  [get(idx)](#get-method) |  | <b><i>(BETA)</i></b> The contents of the object returned from this function are optimized for use in a loop. All calls return the same object but the index has changed. |
|  [getFieldDisplayProcessor(colIndex)](#getfielddisplayprocessor-method) |  | <b><i>(BETA)</i></b> Helper function to return the [DisplayProcessor](./data/displayprocessor.md) for a given field column. |
|  [map(iterator)](#map-method) |  | <b><i>(BETA)</i></b> |
|  [toArray()](#toarray-method) |  | <b><i>(BETA)</i></b> |
|  [toJSON()](#tojson-method) |  | <b><i>(BETA)</i></b> |

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

### constructor(data)

Constructs a new instance of the `DataFrameView` class

<b>Signature</b>

```typescript
constructor(data: DataFrame);
```
<b>Parameters</b>

|  Parameter | Type | Description |
|  --- | --- | --- |
|  data | <code>DataFrame</code> |  |

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

### dataFrame property

<b>Signature</b>

```typescript
get dataFrame(): DataFrame;
```
> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

### length property

<b>Signature</b>

```typescript
get length(): number;
```
> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

### forEachRow method

<b>Signature</b>

```typescript
forEachRow(iterator: (row: T) => void): void;
```
<b>Parameters</b>

|  Parameter | Type | Description |
|  --- | --- | --- |
|  iterator | <code>(row: T) =&gt; void</code> |  |

<b>Returns:</b>

`void`

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

### get method

The contents of the object returned from this function are optimized for use in a loop. All calls return the same object but the index has changed.

<b>Signature</b>

```typescript
get(idx: number): T;
```
<b>Parameters</b>

|  Parameter | Type | Description |
|  --- | --- | --- |
|  idx | <code>number</code> | The index of the object you currently are inspecting |

<b>Returns:</b>

`T`

## Example


```typescript
  // `first`, `second` and `third` will all point to the same contents at index 2:
  const first = view.get(0);
  const second = view.get(1);
  const third = view.get(2);

  // If you need three different objects, consider something like:
  const first = { ...view.get(0) };
  const second = { ...view.get(1) };
  const third = { ...view.get(2) };

```

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

### getFieldDisplayProcessor method

Helper function to return the [DisplayProcessor](./data/displayprocessor.md) for a given field column.

<b>Signature</b>

```typescript
getFieldDisplayProcessor(colIndex: number): DisplayProcessor | null;
```
<b>Parameters</b>

|  Parameter | Type | Description |
|  --- | --- | --- |
|  colIndex | <code>number</code> | the field column index for the data frame. |

<b>Returns:</b>

`DisplayProcessor | null`

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

### map method

<b>Signature</b>

```typescript
map<V>(iterator: (item: T, index: number) => V): V[];
```
<b>Parameters</b>

|  Parameter | Type | Description |
|  --- | --- | --- |
|  iterator | <code>(item: T, index: number) =&gt; V</code> |  |

<b>Returns:</b>

`V[]`

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

### toArray method

<b>Signature</b>

```typescript
toArray(): T[];
```
<b>Returns:</b>

`T[]`

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

### toJSON method

<b>Signature</b>

```typescript
toJSON(): T[];
```
<b>Returns:</b>

`T[]`

