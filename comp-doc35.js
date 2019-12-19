(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{560:function(t,n,o){"use strict";o.r(n);var e=o(0),i=o.n(e),c={template:'<section class="markdown"><h1 id="notification-通知提醒框">Notification 通知提醒框</h1><p>全局展示通知提醒信息。</p><h2 id="何时使用">何时使用</h2><p>在系统四个角显示通知提醒信息。经常用于以下情况：</p><ul><li>较为复杂的通知内容。</li><li>带有交互的通知，给出用户下一步的行动点。</li><li>系统主动推送。</li></ul><h2 id="代码演示">代码演示</h2></section>'},s=o(10),a=o(113),d={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-button type=\"primary\" on-click=\"clickHandler\">Open the notification box&lt;/s-button>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport button from 'santd/button';\nimport notification from 'santd/notification';\n\nexport default {\n    components: {\n        's-button': button\n    },\n    clickHandler() {\n        notification.open({\n            message: 'Notification Title',\n            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',\n            onClick() {\n                console.log('Notification Clicked!');\n            }\n        });\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="基本">基本</h4>\n<p>最简单的用法，4.5 秒后自动关闭。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-button":s.a},clickHandler(){a.a.open({message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification.",onClick(){console.log("Notification Clicked!")}})},template:'<div><s-button type="primary" on-click="clickHandler">Open the notification box</s-button></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576721814529"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},p={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-button type=\"primary\" on-click=\"clickHandler\">Open the notification box&lt;/s-button>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport button from 'santd/button';\nimport notification from 'santd/notification';\n\nexport default {\n    components: {\n        's-button': button\n    },\n    clickHandler() {\n        notification.open({\n            message: 'Notification Title',\n            description: 'I will never close automatically. I will be close manually. I will never close automatically.',\n            duration: 0\n        });\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="自动关闭的延时">自动关闭的延时</h4>\n<p>自定义通知框自动关闭的延时，默认<code>4.5s</code>，取消自动关闭只要将该值设为 <code>0</code> 即可。<code>注：鼠标经过时会重新计时</code></p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-button":s.a},clickHandler(){a.a.open({message:"Notification Title",description:"I will never close automatically. I will be close manually. I will never close automatically.",duration:0})},template:'<div><s-button type="primary" on-click="clickHandler">Open the notification box</s-button></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576721814521"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},l=(o(718),{initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-button on-click=\"openNotificationWithIcon('success')\">Success&lt;/s-button>\n        &lt;s-button on-click=\"openNotificationWithIcon('info')\">Info&lt;/s-button>\n        &lt;s-button on-click=\"openNotificationWithIcon('warning')\">Warning&lt;/s-button>\n        &lt;s-button on-click=\"openNotificationWithIcon('error')\">Error&lt;/s-button>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport button from 'santd/button';\nimport notification from 'santd/notification';\n\nexport default {\n    components: {\n        's-button': button\n    },\n    openNotificationWithIcon(type) {\n        notification[type]({\n            message: 'Notification Title',\n            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'\n        });\n    }\n}\n&lt;/script>\n\n&lt;style>\n.code-box-demo .san-btn {\n    margin-right: 1em;\n}\n&lt;/style></code></pre>",text:'\n<h4 id="带有图标的通知提醒框">带有图标的通知提醒框</h4>\n<p>通知提醒框左侧有图标。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-button":s.a},openNotificationWithIcon(t){a.a[t]({message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification."})},template:"<div><s-button on-click=\"openNotificationWithIcon('success')\">Success</s-button><s-button on-click=\"openNotificationWithIcon('info')\">Info</s-button><s-button on-click=\"openNotificationWithIcon('warning')\">Warning</s-button><s-button on-click=\"openNotificationWithIcon('error')\">Error</s-button></div>"}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576721814245"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'}),r={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-button type=\"primary\" on-click=\"clickHandler\">Open the notification box&lt;/s-button>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport button from 'santd/button';\nimport notification from 'santd/notification';\n\nexport default {\n    components: {\n        's-button': button\n    },\n    clickHandler() {\n        notification.open({\n            message: 'Notification Title',\n            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',\n            icon: '&lt;s-icon type=\"smile\" style=\"color:#108ee9\"/>'\n        });\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="自定义图标">自定义图标</h4>\n<p>图标可以被自定义。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-button":s.a},clickHandler(){a.a.open({message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification.",icon:'<s-icon type="smile" style="color:#108ee9"/>'})},template:'<div><s-button type="primary" on-click="clickHandler">Open the notification box</s-button></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576721814154"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};const h=()=>{console.log("Notification was closed. Either the close button was clicked or duration time elapsed.")};var m={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-button type=\"primary\" on-click=\"clickHandler\">Open the notification box&lt;/s-button>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport button from 'santd/button';\nimport notification from 'santd/notification';\n\nconst close = () => {\n    console.log('Notification was closed. Either the close button was clicked or duration time elapsed.');\n};\n\nexport default {\n    components: {\n        's-button': button\n    },\n    clickHandler() {\n        const key = 'open' + Date.now();\n        const btn = &#96;&lt;s-button type=\"primary\" size=\"small\" on-click=\"btnClick\">\n            Confirm\n        &lt;/s-button>&#96;;\n\n        notification.open({\n            message: 'Notification Title',\n            description: 'A function will be called after the notification is closed (automatically after the \"duration\" time of manually).',\n            btn,\n            btnClick: () => {\n                notification.close(key);\n            },\n            key,\n            onClose: close\n        });\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="自定义按钮">自定义按钮</h4>\n<p>自定义关闭按钮（模板标签需使用<code>s-button</code>）的样式和文字。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-button":s.a},clickHandler(){const t="open"+Date.now();a.a.open({message:"Notification Title",description:'A function will be called after the notification is closed (automatically after the "duration" time of manually).',btn:'<s-button type="primary" size="small" on-click="btnClick">\n            Confirm\n        </s-button>',btnClick:()=>{a.a.close(t)},key:t,onClose:h})},template:'<div><s-button type="primary" on-click="clickHandler">Open the notification box</s-button></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576721814146"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},x=o(15);const g=["topLeft","topRight","bottomLeft","bottomRight"];var f={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-select value=\"{=placement=}\" on-change=\"changeHandler\" style=\"width: 150px;\">\n            &lt;s-option s-for=\"option in options\" value=\"{{option}}\">{{option}}&lt;/s-option>\n        &lt;/s-select>\n        &lt;s-button type=\"primary\" on-click=\"clickHandler\">Open the notification box&lt;/s-button>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport button from 'santd/button';\nimport select from 'santd/select';\nimport notification from 'santd/notification';\n\nconst options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];\n\nexport default {\n    components: {\n        's-button': button,\n        's-select': select,\n        's-option': select.Option\n    },\n    clickHandler() {\n        notification.open({\n            message: 'Notification Title',\n            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'\n        });\n    },\n    changeHandler(placement) {\n        notification.config({placement});\n    },\n    initData() {\n        return {\n            options,\n            placement: 'topRight'\n        };\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="位置">位置</h4>\n<p>可以设置通知从右上角、右下角、左下角、左上角弹出。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-button":s.a,"s-select":x.a,"s-option":x.a.Option},clickHandler(){a.a.open({message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification."})},changeHandler(t){a.a.config({placement:t})},initData:()=>({options:g,placement:"topRight"}),template:'<div><s-select value="{=placement=}" on-change="changeHandler" style="width: 150px;"><s-option s-for="option in options" value="{{option}}">{{option}}</s-option></s-select><s-button type="primary" on-click="clickHandler">Open the notification box</s-button></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576721814113"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},b={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-button type=\"primary\" on-click=\"clickHandler\">Open the notification box&lt;/s-button>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport button from 'santd/button';\nimport notification from 'santd/notification';\n\nexport default {\n    components: {\n        's-button': button\n    },\n    clickHandler() {\n        notification.open({\n            message: 'Notification Title',\n            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',\n            style: {\n                width: '300px',\n                marginLeft: (335 - 600) + 'px',\n            }\n        });\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="自定义样式">自定义样式</h4>\n<p>使用 style 和 className 来定义样式。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-button":s.a},clickHandler(){a.a.open({message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification.",style:{width:"300px",marginLeft:"-265px"}})},template:'<div><s-button type="primary" on-click="clickHandler">Open the notification box</s-button></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576721814127"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};var u={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-button type=\"primary\" on-click=\"clickHandler\">Open the notification box&lt;/s-button>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport button from 'santd/button';\nimport notification from 'santd/notification';\n\nconst key = 'updatable';\n\nexport default {\n    components: {\n        's-button': button\n    },\n    clickHandler() {\n        const options = {\n            key,\n            message: 'Notification Title',\n            description: 'description.'\n        };\n        notification.open(options);\n\n        // 更新内容\n        const newOptions = Object.assign({}, options, {\n            message: 'New Title',\n            description: 'New description.'\n        });\n        setTimeout(() => {\n            notification.open(newOptions);\n        }, 1000);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="更新消息内容">更新消息内容</h4>\n<p>可以通过唯一的 key 来更新内容。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-button":s.a},clickHandler(){const t={key:"updatable",message:"Notification Title",description:"description."};a.a.open(t);const n=Object.assign({},t,{message:"New Title",description:"New description."});setTimeout(()=>{a.a.open(n)},1e3)},template:'<div><s-button type="primary" on-click="clickHandler">Open the notification box</s-button></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576721814134"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},w={template:'<section class="markdown"><h2 id="api">API</h2><ul><li><code>notification.success(config)</code></li><li><code>notification.error(config)</code></li><li><code>notification.info(config)</code></li><li><code>notification.warning(config)</code></li><li><code>notification.warn(config)</code></li><li><code>notification.open(config)</code></li><li><code>notification.close(key: String)</code></li><li><code>notification.destroy()</code></li></ul><p>config 参数如下：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>btn</td><td>自定义关闭按钮(模板HTML标签请使用<code>&lt;ui-button/&gt;</code>)</td><td>string <a href="./button">button docs</a></td><td>-</td></tr><tr><td>btnClick</td><td>自定义关闭按钮点击事件</td><td>Function</td><td>-</td></tr><tr><td>className</td><td>自定义 CSS class</td><td>string</td><td>-</td></tr><tr><td>description</td><td>通知提醒内容，必选</td><td>string|SanComponent</td><td>-</td></tr><tr><td>duration</td><td>默认 4.5 秒后自动关闭，配置为 null 则不自动关闭</td><td>number</td><td>4.5</td></tr><tr><td>icon</td><td>自定义图标(模板HTML标签请使用<code>&lt;ui-icon/&gt;</code>)</td><td>string <a href="./icon">icon docs</a></td><td>-</td></tr><tr><td>key</td><td>当前通知唯一标志</td><td>string</td><td>-</td></tr><tr><td>message</td><td>通知提醒标题，必选</td><td>string|SanComponent</td><td>-</td></tr><tr><td>placement</td><td>弹出位置，可选 <code>topLeft</code> <code>topRight</code> <code>bottomLeft</code> <code>bottomRight</code></td><td>string</td><td>topRight</td></tr><tr><td>style</td><td>自定义内联样式</td><td>string|object</td><td>-</td></tr><tr><td>onClick</td><td>点击通知时触发的回调函数</td><td>Function</td><td>-</td></tr><tr><td>onClose</td><td>点击默认关闭按钮时触发的回调函数</td><td>Function</td><td>-</td></tr></tbody></table><p>还提供了一个全局配置方法，在调用前提前配置，全局一次生效。</p><ul><li><code>notification.config(options)</code></li></ul><pre><code class="language-js">notification.config({placement: &#39;bottomRight&#39;,bottom: 50,duration: 3});</code></pre><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>bottom</td><td>消息从底部弹出时，距离底部的位置，单位像素。</td><td>number</td><td>24</td></tr><tr><td>duration</td><td>默认自动关闭延时，单位秒</td><td>number</td><td>4.5</td></tr><tr><td>getContainer</td><td>配置渲染节点的输出位置</td><td>() =&gt; HTMLNode</td><td>() =&gt; document.body</td></tr><tr><td>placement</td><td>弹出位置，可选 <code>topLeft</code> <code>topRight</code> <code>bottomLeft</code> <code>bottomRight</code></td><td>string</td><td>topRight</td></tr><tr><td>top</td><td>消息从顶部弹出时，距离顶部的位置，单位像素。</td><td>number</td><td>24</td></tr></tbody></table></section>'};n.default=i.a.defineComponent({template:"\n        <div>\n            <head/>\n            <basic/>\n            <duration/>\n            <icon1/>\n            <icon2/>\n            <button/>\n            <placement/>\n            <style/>\n            <update/>\n            <readme/>\n        </div>\n    ",components:{head:c,basic:d,duration:p,icon1:l,icon2:r,button:m,placement:f,style:b,update:u,readme:w}})},718:function(t,n,o){var e=o(719);"string"==typeof e&&(e=[[t.i,e,""]]);var i={insert:"head",singleton:!1};o(5)(e,i);e.locals&&(t.exports=e.locals)},719:function(t,n,o){(t.exports=o(4)(!1)).push([t.i,"\n.code-box-demo .san-btn {\n    margin-right: 1em;\n}\n",""])}}]);