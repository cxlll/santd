<codebox>
#### 四种样式
共有四种样式 `success`、`info`、`warning`、`error`。

```html
<template>
    <div>
        <s-alert message="Success Text" type="success"/>
        <s-alert message="Info Text" type="info"/>
        <s-alert message="Warning Text" type="warning"/>
        <s-alert message="Error Text" type="error"/>
    </div>
</template>

<script>
import {Alert} from 'santd';

export default {
    components: {
        's-alert': Alert
    }
}
</script>
```
</codebox>
