+++
# -----------------------------------------------------------------------
# Do not edit this file. It is automatically generated by API Documenter.
# -----------------------------------------------------------------------
title = "RefreshPicker"
keywords = ["grafana","documentation","sdk","@grafana/ui"]
type = "docs"
draft = true
+++

## RefreshPicker variable

### RefreshPicker variable

<b>Signature</b>

```typescript
RefreshPicker: React.FunctionComponent<Pick<Props, "value" | "tooltip" | "intervals" | "onRefresh" | "onIntervalChanged" | "hasLiveOption" | "refreshButton" | "buttonSelectClassName">> & {
    offOption: {
        label: string;
        value: string;
    };
    liveOption: {
        label: string;
        value: string;
    };
    isLive: (refreshInterval?: string | undefined) => boolean;
}
```
<b>Import</b>

```typescript
import { RefreshPicker } from '@grafana/ui';
```
