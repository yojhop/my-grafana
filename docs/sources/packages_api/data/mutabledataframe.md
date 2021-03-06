+++
# -----------------------------------------------------------------------
# Do not edit this file. It is automatically generated by API Documenter.
# -----------------------------------------------------------------------
title = "MutableDataFrame"
keywords = ["grafana","documentation","sdk","@grafana/data"]
type = "docs"
draft = true
+++

## MutableDataFrame class

<b>Signature</b>

```typescript
export declare class MutableDataFrame<T = any> implements DataFrame, MutableVector<T> 
```
<b>Import</b>

```typescript
import { MutableDataFrame } from '@grafana/data';
```
<b>Constructors</b>

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [constructor(source, creator)](#constructor-sourcecreator) |  | Constructs a new instance of the <code>MutableDataFrame</code> class |

<b>Properties</b>

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [fields](#fields-property) |  | <code>MutableField[]</code> |  |
|  [length](#length-property) |  | <code>number</code> |  |
|  [meta](#meta-property) |  | <code>QueryResultMeta</code> |  |
|  [name](#name-property) |  | <code>string</code> |  |
|  [refId](#refid-property) |  | <code>string</code> |  |
|  [values](#values-property) |  | <code>KeyValue&lt;MutableVector&gt;</code> |  |

<b>Methods</b>

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [add(value, addMissingFields)](#add-method) |  | Add all properties of the value as fields on the frame |
|  [addField(f, startLength)](#addfield-method) |  |  |
|  [addFieldFor(value, name)](#addfieldfor-method) |  |  |
|  [appendRow(row)](#appendrow-method) |  | This will add each value to the corresponding column |
|  [get(idx)](#get-method) |  | Get an object with a property for each field in the DataFrame |
|  [reverse()](#reverse-method) |  | Reverse all values |
|  [set(index, value, addMissingFields)](#set-method) |  |  |
|  [toArray()](#toarray-method) |  |  |
|  [toJSON()](#tojson-method) |  | The simplified JSON values used in JSON.stringify() |
|  [validate()](#validate-method) |  |  |

### constructor(source, creator)

Constructs a new instance of the `MutableDataFrame` class

<b>Signature</b>

```typescript
constructor(source?: DataFrame | DataFrameDTO, creator?: MutableVectorCreator);
```
<b>Parameters</b>

|  Parameter | Type | Description |
|  --- | --- | --- |
|  source | <code>DataFrame &#124; DataFrameDTO</code> |  |
|  creator | <code>MutableVectorCreator</code> |  |

### fields property

<b>Signature</b>

```typescript
fields: MutableField[];
```

### length property

<b>Signature</b>

```typescript
get length(): number;
```

### meta property

<b>Signature</b>

```typescript
meta?: QueryResultMeta;
```

### name property

<b>Signature</b>

```typescript
name?: string;
```

### refId property

<b>Signature</b>

```typescript
refId?: string;
```

### values property

<b>Signature</b>

```typescript
values: KeyValue<MutableVector>;
```

### add method

Add all properties of the value as fields on the frame

<b>Signature</b>

```typescript
add(value: T, addMissingFields?: boolean): void;
```
<b>Parameters</b>

|  Parameter | Type | Description |
|  --- | --- | --- |
|  value | <code>T</code> |  |
|  addMissingFields | <code>boolean</code> |  |

<b>Returns:</b>

`void`

### addField method

<b>Signature</b>

```typescript
addField(f: Field | FieldDTO, startLength?: number): MutableField;
```
<b>Parameters</b>

|  Parameter | Type | Description |
|  --- | --- | --- |
|  f | <code>Field &#124; FieldDTO</code> |  |
|  startLength | <code>number</code> |  |

<b>Returns:</b>

`MutableField`

### addFieldFor method

<b>Signature</b>

```typescript
addFieldFor(value: any, name?: string): MutableField;
```
<b>Parameters</b>

|  Parameter | Type | Description |
|  --- | --- | --- |
|  value | <code>any</code> |  |
|  name | <code>string</code> |  |

<b>Returns:</b>

`MutableField`

### appendRow method

This will add each value to the corresponding column

<b>Signature</b>

```typescript
appendRow(row: any[]): void;
```
<b>Parameters</b>

|  Parameter | Type | Description |
|  --- | --- | --- |
|  row | <code>any[]</code> |  |

<b>Returns:</b>

`void`

### get method

Get an object with a property for each field in the DataFrame

<b>Signature</b>

```typescript
get(idx: number): T;
```
<b>Parameters</b>

|  Parameter | Type | Description |
|  --- | --- | --- |
|  idx | <code>number</code> |  |

<b>Returns:</b>

`T`

### reverse method

Reverse all values

<b>Signature</b>

```typescript
reverse(): void;
```
<b>Returns:</b>

`void`

### set method

<b>Signature</b>

```typescript
set(index: number, value: T, addMissingFields?: boolean): void;
```
<b>Parameters</b>

|  Parameter | Type | Description |
|  --- | --- | --- |
|  index | <code>number</code> |  |
|  value | <code>T</code> |  |
|  addMissingFields | <code>boolean</code> |  |

<b>Returns:</b>

`void`

### toArray method

<b>Signature</b>

```typescript
toArray(): T[];
```
<b>Returns:</b>

`T[]`

### toJSON method

The simplified JSON values used in JSON.stringify()

<b>Signature</b>

```typescript
toJSON(): DataFrameDTO;
```
<b>Returns:</b>

`DataFrameDTO`

### validate method

<b>Signature</b>

```typescript
validate(): void;
```
<b>Returns:</b>

`void`

