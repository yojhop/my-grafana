+++
# -----------------------------------------------------------------------
# Do not edit this file. It is automatically generated by API Documenter.
# -----------------------------------------------------------------------
title = "EchoBackend"
keywords = ["grafana","documentation","sdk","@grafana/runtime"]
type = "docs"
draft = true
+++

## EchoBackend interface

<b>Signature</b>

```typescript
export interface EchoBackend<T extends EchoEvent = any, O = any> 
```
<b>Import</b>

```typescript
import { EchoBackend } from '@grafana/runtime';
```
<b>Properties</b>

|  Property | Type | Description |
|  --- | --- | --- |
|  [addEvent](#addevent-property) | <code>(event: T) =&gt; void</code> |  |
|  [flush](#flush-property) | <code>() =&gt; void</code> |  |
|  [options](#options-property) | <code>O</code> |  |
|  [supportedEvents](#supportedevents-property) | <code>EchoEventType[]</code> |  |

### addEvent property

<b>Signature</b>

```typescript
addEvent: (event: T) => void;
```

### flush property

<b>Signature</b>

```typescript
flush: () => void;
```

### options property

<b>Signature</b>

```typescript
options: O;
```

### supportedEvents property

<b>Signature</b>

```typescript
supportedEvents: EchoEventType[];
```
