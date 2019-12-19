(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{596:function(t,o,n){"use strict";n.r(o);var e=n(0),a=n.n(e),s={template:'<section class="markdown"><h1 id="affix固钉">Affix固钉</h1><p>将页面元素钉在可视范围。</p><h2 id="何时使用">何时使用</h2><p>当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。</p><p>页面可视范围过小时，慎用此功能以免遮挡页面内容。</p><h2 id="代码演示">代码演示</h2></section>'},i={template:'<section class="markdown"><h2 id="api">API</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>offsetBottom</td><td>距离窗口底部达到指定偏移量后触发</td><td>number</td><td>-</td></tr><tr><td>offsetTop</td><td>距离窗口顶部达到指定偏移量后触发</td><td>number</td><td>-</td></tr><tr><td>on-change</td><td>固定状态改变时触发的回调函数</td><td>Function(affixed)</td><td>-</td></tr></tbody></table><blockquote><p>注意：Affix 内的元素不要使用绝对定位.如需要绝对定位的效果，可以直接设置 Affix 为绝对定位：</p></blockquote><pre><code class="language-html">&lt;s-affix style=&quot;position: &#39;absolute&#39;; top: y; left: x&quot;&gt;...&lt;/s-affix&gt;</code></pre></section>'},d=n(60),p=n(10),c={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-affix offsetTop=\"{{top}}\">\n            &lt;s-button type=\"primary\" on-click=\"handleTopClick\">Affix Top&lt;/s-button>\n        &lt;/s-affix>\n        &lt;br />&lt;br />\n        &lt;s-affix offsetBottom=\"{{bottom}}\">\n            &lt;s-button type=\"primary\" on-click=\"handleBottomClick\">Affix Bottom&lt;/s-button>\n        &lt;/s-affix>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Affix from 'santd/affix';\nimport Button from 'santd/button';\n\nexport default {\n    components: {\n        's-affix': Affix,\n        's-button': Button\n    },\n    initData() {\n        return {\n            top: 10,\n            bottom: 10\n        }\n    },\n    handleTopClick() {\n        this.data.set('top', this.data.get('top') + 10);\n    },\n    handleBottomClick() {\n        this.data.set('bottom', this.data.get('bottom') + 10);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="基本">基本</h4>\n<p>最简单的用法</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-affix":d.a,"s-button":p.a},initData:()=>({top:10,bottom:10}),handleTopClick(){this.data.set("top",this.data.get("top")+10)},handleBottomClick(){this.data.set("bottom",this.data.get("bottom")+10)},template:'<div><s-affix offsetTop="{{top}}"><s-button type="primary" on-click="handleTopClick">Affix Top</s-button></s-affix><br><br><s-affix offsetBottom="{{bottom}}"><s-button type="primary" on-click="handleBottomClick">Affix Bottom</s-button></s-affix></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576721820589"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},l={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-affix offsetTop=\"{{120}}\" on-change=\"handleChange\">\n            &lt;s-button>120px to affix top&lt;/s-button>\n        &lt;/s-affix>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Affix from 'santd/affix';\nimport Button from 'santd/button';\n\nexport default {\n    components: {\n        's-affix': Affix,\n        's-button': Button\n    },\n    handleChange(affix) {\n        console.log('affix: ', affix);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="固定状态改变的回调">固定状态改变的回调</h4>\n<p>可以获得是否固定的状态。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-affix":d.a,"s-button":p.a},handleChange(t){console.log("affix: ",t)},template:'<div><s-affix offsetTop="{{120}}" on-change="handleChange"><s-button>120px to affix top</s-button></s-affix></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576721820639"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};o.default=a.a.defineComponent({components:{head:s,basic:c,readme:i,offset:l},template:"\n        <div>\n            <head/>\n            <basic/>\n            <offset/>\n            <readme/>\n        </div>\n    "})}}]);