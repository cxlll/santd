<codebox>
#### 位置
位置有 4 个方向

```html
<template>
    <div style="width: 600px">
        <div>
            <s-group style="margin-bottom: 8px" defaultValue="top" on-change="handleChange" name="position">
                <s-button value="top">Top</s-button>
                <s-button value="bottom">Bottom</s-button>
                <s-button value="left">Left</s-button>
                <s-button value="right">Right</s-button>
            </s-group>
        </div>
        <s-carousel dotPosition="{{dotPosition}}" on-afterChange="handleAfter" on-beforeChange="handleBefore">
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
            <div><h3>5</h3></div>
        </s-carousel>
    </div>
</template>
<script>
import {Carousel, Radio} from 'santd';

export default {
    components: {
        's-carousel': Carousel,
        's-group': Radio.Group,
        's-button': Radio.Button
    },
    initData() {
        return {
            dotPosition: 'top'
        };
    },
    handleAfter(current) {
        console.log('afterChange', current);
    },
    handleBefore(param) {
        console.log('beforeChange', param);
    },
    handleChange(e) {
        console.log(`radio checked:${e.target.value}`);
        this.data.set('dotPosition', e.target.value);
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
    margin: 0;
    padding: 0;
}
</style>
```
</codebox>
