(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{576:function(t,e,n){"use strict";n.r(e);var a=n(0),d=n.n(a),o={template:'<section class="markdown"><h2 id="api">API</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>autoFocus</td><td>自动获取焦点</td><td>boolean</td><td>false</td></tr><tr><td>defaultValue</td><td>初始值</td><td>number</td><td>-</td></tr><tr><td>disabled</td><td>禁用</td><td>boolean</td><td>false</td></tr><tr><td>formatter</td><td>指定输入框展示值的格式</td><td>function(value: number | string): string</td><td>-</td></tr><tr><td>max</td><td>最大值</td><td>number</td><td>-</td></tr><tr><td>min</td><td>最小值</td><td>number</td><td>-</td></tr><tr><td>parser</td><td>指定从 formatter 里转换回数字的方式，和 formatter 搭配使用</td><td>function( string): number</td><td></td></tr><tr><td>precision</td><td>数值精度</td><td>number</td><td>-</td></tr><tr><td>decimalSeparator</td><td>小数点</td><td>string</td><td>-</td></tr><tr><td>size</td><td>输入框大小</td><td>string</td><td>-</td></tr><tr><td>step</td><td>每次改变步数，可以为小数</td><td>number | string</td><td>1</td></tr><tr><td>value</td><td>当前值</td><td>number</td><td>-</td></tr><tr><td>on-change</td><td>当input中的数值发生变化时触发</td><td>function(value: number | string)</td><td></td></tr></tbody></table><h3 id="方法">方法</h3><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td>blur()</td><td>移除焦点</td></tr><tr><td>focus()</td><td>获取焦点</td></tr></tbody></table></section>'},s={template:'<section class="markdown"><h1 id="inputnumber-数字输入框">InputNumber 数字输入框</h1><p>通过鼠标或键盘，输入范围内的数值。</p><h2 id="何时使用">何时使用</h2><p>当需要获取标准数值时。</p><h2 id="代码演示">代码演示</h2></section>'},i=n(109),p={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-input-number min="1" max="10" defaultValue="3" on-change="onChange">&lt;/s-input-number>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport InputNumber from \'santd/input-number\';\n\nexport default {\n    components: {\n        \'s-input-number\': InputNumber\n    },\n    onChange(value) {\n        console.log(\'changed: \', value);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="基本">基本</h4>\n<p>数字输入框。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-input-number":i.a},onChange(t){console.log("changed: ",t)},template:'<div><s-input-number min="1" max="10" defaultValue="3" on-change="onChange"></s-input-number></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576721815958"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},c=n(10),r={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-input-number min="1" max="10" defaultValue="3" disabled="{{disabled}}">&lt;/s-input-number>\n        &lt;br/>&lt;br/>\n        &lt;s-button type="primary" on-click="toggle">Toggle disabled&lt;/s-button>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport InputNumber from \'santd/input-number\';\nimport Button from \'santd/button\';\n\nexport default {\n    components: {\n        \'s-input-number\': InputNumber,\n        \'s-button\': Button\n    },\n    initData() {\n        return {\n            disabled: true\n        }\n    },\n    toggle() {\n        this.data.set(\'disabled\', !this.data.get(\'disabled\'));\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="不可用">不可用</h4>\n<p>点击按钮切换可用状态。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-input-number":i.a,"s-button":c.a},initData:()=>({disabled:!0}),toggle(){this.data.set("disabled",!this.data.get("disabled"))},template:'<div><s-input-number min="1" max="10" defaultValue="3" disabled="{{disabled}}"></s-input-number><br><br><s-button type="primary" on-click="toggle">Toggle disabled</s-button></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576721815967"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},l={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-input-number min="1" max="10" defaultValue="3" on-change="onChange" size="large">&lt;/s-input-number>\n        &lt;s-input-number min="1" max="10" defaultValue="3" on-change="onChange">&lt;/s-input-number>\n        &lt;s-input-number min="1" max="10" defaultValue="3" on-change="onChange" size="small">&lt;/s-input-number>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport InputNumber from \'santd/input-number\';\n\nexport default {\n    components: {\n        \'s-input-number\': InputNumber\n    },\n    onChange(value) {\n        console.log(\'changed: \', value);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="size">size</h4>\n<p>三种大小的数字输入框，当 size 分别为 <code>large</code> 和 <code>small</code> 时，输入框高度为 <code>40px</code> 和 <code>24px</code> ，默认高度为 <code>32px</code>。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-input-number":i.a},onChange(t){console.log("changed: ",t)},template:'<div><s-input-number min="1" max="10" defaultValue="3" on-change="onChange" size="large"></s-input-number><s-input-number min="1" max="10" defaultValue="3" on-change="onChange"></s-input-number><s-input-number min="1" max="10" defaultValue="3" on-change="onChange" size="small"></s-input-number></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576721815919"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},m={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n  &lt;div>\n    &lt;s-input-number min="0" max="10" step="0.1" on-change="onChange">&lt;/s-input-number>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport InputNumber from \'santd/input-number\';\n\nexport default {\n    components: {\n        \'s-input-number\': InputNumber\n    },\n    onChange(value) {\n        console.log(\'changed: \', value);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="小数">小数</h4>\n<p>和原生的数字输入框一样，value 的精度由 step 的小数位数决定。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-input-number":i.a},onChange(t){console.log("changed: ",t)},template:'<div><s-input-number min="0" max="10" step="0.1" on-change="onChange"></s-input-number></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576721815906"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},u={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-input-number\n            defaultValue="{{1000}}"\n            formatter="{{formatterTwo}}"\n            parser="{{parserTwo}}"\n            on-change="onChange"\n        />\n        &lt;s-input-number\n            defaultValue="{{100}}"\n            min="{{0}}"\n            max="{{100}}"\n            formatter="{{formatter}}"\n            parser="{{parser}}"\n            on-change="onChange"\n        />\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport InputNumber from \'santd/input-number\';\n\nexport default {\n    components: {\n        \'s-input-number\': InputNumber\n    },\n    initData() {\n        return {\n            formatter(value) {\n                return &#96;&#36;&#123;value}%&#96;;\n            },\n            parser(value) {\n                return value.replace(\'%\', \'\');\n            },\n            formatterTwo(value) {\n                return &#96;$ &#36;&#123;value}&#96;.replace(/B(?=(d{3})+(?!d))/g, \',\');\n            },\n            parserTwo(value) {\n                return value.replace(/$s?|(,*)/g, \'\');\n            }\n        }\n    },\n    onChange(value) {\n        console.log(\'changed: \', value);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="格式化展示">格式化展示</h4>\n<p>通过 <code>formatter</code> 格式化数字，以展示具有具体含义的数据，往往需要配合 <code>parser</code> 一起使用。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-input-number":i.a},initData:()=>({formatter:t=>`${t}%`,parser:t=>t.replace("%",""),formatterTwo:t=>`$ ${t}`.replace(/\B(?=(\d{3})+(?!\d))/g,","),parserTwo:t=>t.replace(/\$\s?|(,*)/g,"")}),onChange(t){console.log("changed: ",t)},template:'<div><s-input-number defaultValue="{{1000}}" formatter="{{formatterTwo}}" parser="{{parserTwo}}" on-change="onChange"></s-input-number><s-input-number defaultValue="{{100}}" min="{{0}}" max="{{100}}" formatter="{{formatter}}" parser="{{parser}}" on-change="onChange"></s-input-number></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576721815849"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};e.default=d.a.defineComponent({components:{readme:o,head:s,basic:p,disable:r,size:l,number:m,format:u},template:"\n        <div>\n            <head/>\n            <basic/>\n            <disable/>\n            <size/>\n            <number/>\n            <format/>\n            <readme/>\n        </div>\n    "})}}]);