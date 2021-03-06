+++
# -----------------------------------------------------------------------
# Do not edit this file. It is automatically generated by API Documenter.
# -----------------------------------------------------------------------
title = "LanguageProvider"
keywords = ["grafana","documentation","sdk","@grafana/data"]
type = "docs"
draft = true
+++

## LanguageProvider class

<b>Signature</b>

```typescript
export declare abstract class LanguageProvider 
```
<b>Import</b>

```typescript
import { LanguageProvider } from '@grafana/data';
```
<b>Properties</b>

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [datasource](#datasource-property) |  | <code>DataSourceApi&lt;any, any&gt;</code> |  |
|  [request](#request-property) |  | <code>(url: string, params?: any) =&gt; Promise&lt;any&gt;</code> |  |
|  [start](#start-property) |  | <code>() =&gt; Promise&lt;any[]&gt;</code> | Returns startTask that resolves with a task list when main syntax is loaded. Task list consists of secondary promises that load more detailed language features. |
|  [startTask](#starttask-property) |  | <code>Promise&lt;any[]&gt;</code> |  |

### datasource property

<b>Signature</b>

```typescript
abstract datasource: DataSourceApi<any, any>;
```

### request property

<b>Signature</b>

```typescript
abstract request: (url: string, params?: any) => Promise<any>;
```

### start property

Returns startTask that resolves with a task list when main syntax is loaded. Task list consists of secondary promises that load more detailed language features.

<b>Signature</b>

```typescript
abstract start: () => Promise<any[]>;
```

### startTask property

<b>Signature</b>

```typescript
startTask?: Promise<any[]>;
```
