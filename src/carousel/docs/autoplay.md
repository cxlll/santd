<codebox>
#### 自动切换
定时切换下一张。

```html
<template>
    <div style="width: 600px">
        <s-carousel on-afterChange="handleAfter" on-beforeChange="handleBefore" autoplay="true">
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
            <div><h3>5</h3></div>
        </s-carousel>
    </div>
</template>
<script>
import {Carousel} from 'santd';

export default {
    components: {
        's-carousel': Carousel
    },
    handleAfter(current) {
        console.log('afterChange', current);
    },
    handleBefore(param) {
        console.log('beforeChange', param);
    }
}
</script>
<style>
.santd-carousel .slick-slide {
    text-align: center;
    height: 160px;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
}

.santd-carousel .slick-slide h3 {
    color: #fff;
}
</style>
```
</codebox>
