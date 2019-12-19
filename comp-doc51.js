(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{578:function(t,e,n){"use strict";n.r(e);var d=n(0),s=n.n(d),c={template:'<section class="markdown"><h2 id="api">API</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>autoFocus</td><td>组件自动获取焦点</td><td>boolean</td><td>false</td></tr><tr><td>checked</td><td>指定当前是否选中</td><td>boolean</td><td>false</td></tr><tr><td>checkedChildren</td><td>选中时的内容</td><td>string|slot</td><td></td></tr><tr><td>defaultChecked</td><td>初始是否选中</td><td>boolean</td><td>false</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>false</td></tr><tr><td>loading</td><td>加载中的开关</td><td>boolean</td><td>false</td></tr><tr><td>size</td><td>开关大小，可选值：<code>default</code> <code>small</code></td><td>string</td><td>default</td></tr><tr><td>unCheckedChildren</td><td>非选中时的内容</td><td>string|slot</td><td></td></tr><tr><td>on-change</td><td>变化时回调函数</td><td>Function(checked:Boolean)</td><td></td></tr></tbody></table><h2 id="方法">方法</h2><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td>blur()</td><td>移除焦点</td></tr><tr><td>focus()</td><td>获取焦点</td></tr></tbody></table></section>'},o={template:'<section class="markdown"><h1 id="switch">switch</h1><p>开关选择器</p><h2 id="何时使用">何时使用</h2><ul><li>需要表示开关状态/两种状态之间的切换时；</li><li>和 <code>checkbox</code>的区别是，切换 <code>switch</code> 会直接触发状态改变，而 <code>checkbox</code> 一般用于状态标记，需要和提交操作配合。<h2 id="代码演示">代码演示</h2></li></ul></section>'},a=n(96),i={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-switch on-change='onChange' defaultChecked=\"{{true}}\" />\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Switch from 'santd/switch';\nexport default {\n    components: {\n        's-switch': Switch\n    },\n    initData() {\n        return {\n            checked: true,\n        }\n    },\n    onChange(checked) {\n        console.log(checked);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="基本">基本</h4>\n<p>最简单的用法</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-switch":a.a},initData:()=>({checked:!0}),onChange(t){console.log(t)},template:'<div><s-switch on-change="onChange" defaultChecked="{{true}}"></s-switch></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576721811780"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},l=n(10),p={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-switch disabled=\"{{disabled}}\" defaultChecked=\"{{true}}\"/>\n        &lt;br />&lt;br />\n        &lt;s-button type=\"primary\" on-click=\"handleToggle\">Toggle disabled&lt;/s-button>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Switch from 'santd/switch';\nimport Button from 'santd/button';\n\nexport default {\n    components: {\n        's-switch': Switch,\n        's-button': Button\n    },\n    initData() {\n        return {\n            disabled: true\n        }\n    },\n    handleToggle() {\n        this.data.set('disabled', !this.data.get('disabled'));\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="不可用">不可用</h4>\n<p>Switch 失效状态</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-switch":a.a,"s-button":l.a},initData:()=>({disabled:!0}),handleToggle(){this.data.set("disabled",!this.data.get("disabled"))},template:'<div><s-switch disabled="{{disabled}}" defaultChecked="{{true}}"></s-switch><br><br><s-button type="primary" on-click="handleToggle">Toggle disabled</s-button></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576721811770"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},h={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-switch defaultChecked="{{true}}" />\n        &lt;br />\n        &lt;s-switch defaultChecked="{{true}}" size="small" />\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Switch from \'santd/switch\';\nexport default {\n    components: {\n        \'s-switch\': Switch\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="两种大小">两种大小</h4>\n<p><code>size=&quot;small&quot;</code> 表示小号开关。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-switch":a.a},template:'<div><s-switch defaultChecked="{{true}}"></s-switch><br><s-switch defaultChecked="{{true}}" size="small"></s-switch></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576721811760"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},r=n(3),m={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-switch defaultChecked=\"{{true}}\" on-change='onChange'>\n            &lt;template slot='checkedChildren'>N&lt;/template>\n            &lt;template slot='unCheckedChildren'>Y&lt;/template>\n        &lt;/s-switch>&lt;br />\n         &lt;s-switch defaultChecked=\"{{true}}\" disabled=\"{{true}}\" on-change='onChange' checkedChildren=\"1\" unCheckedChildren=\"0\" />&lt;br />\n         &lt;s-switch defaultChecked=\"{{true}}\" on-change='onChange'>&lt;br />\n            &lt;s-icon slot='checkedChildren' type=\"check\" />\n            &lt;s-icon slot='unCheckedChildren' type=\"login\" />\n        &lt;/s-switch>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Switch from 'santd/switch';\nimport Icon from 'santd/icon';\nexport default {\n    components: {\n        's-switch': Switch,\n        's-icon': Icon,\n    },\n    initData() {\n        return {\n            checked: true,\n        }\n    },\n    onChange(checked) {\n        console.log(checked);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="文字和图标">文字和图标</h4>\n<p>带有文字和图标。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-switch":a.a,"s-icon":r.a},initData:()=>({checked:!0}),onChange(t){console.log(t)},template:'<div><s-switch defaultChecked="{{true}}" on-change="onChange"><template slot="checkedChildren">N</template><template slot="unCheckedChildren">Y</template></s-switch><br><s-switch defaultChecked="{{true}}" disabled="{{true}}" on-change="onChange" checkedChildren="1" unCheckedChildren="0"></s-switch><br><s-switch defaultChecked="{{true}}" on-change="onChange"><br><s-icon slot="checkedChildren" type="check"></s-icon><s-icon slot="unCheckedChildren" type="login"></s-icon></s-switch></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576721811751"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},g={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-switch loading="{{true}}" defaultChecked="{{true}}" />&lt;br />\n        &lt;s-switch loading="{{true}}" size="small"/>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Switch from \'santd/switch\';\nexport default {\n    components: {\n        \'s-switch\': Switch\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="加载中">加载中</h4>\n<p>标识开关操作仍在执行中。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-switch":a.a},template:'<div><s-switch loading="{{true}}" defaultChecked="{{true}}"></s-switch><br><s-switch loading="{{true}}" size="small"></s-switch></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576721811738"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};e.default=s.a.defineComponent({components:{readme:c,basic:i,disabled:p,size:h,text:m,loading:g,description:o},template:'\n    <div class="form">\n        <description />\n        <basic />\n        <disabled />\n        <size />\n        <text />\n        <loading />\n        <readme />\n    </div>\n    '})}}]);