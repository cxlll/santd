(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{585:function(t,e,o){"use strict";o.r(e);var n=o(0),s=o.n(n),p={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>content</td><td>卡片内容</td><td>string | slot</td><td>无</td></tr><tr><td>title</td><td>卡片标题</td><td>string | slot</td><td>无</td></tr></tbody></table><p>更多属性请参考 <a href="https://ecomfe.github.io/santd/#/components/tooltip">Tooltip</a>。</p></section>'},i={template:'<section class="markdown"><h1 id="popover-气泡卡片"><span>Popover 气泡卡片</span><a href="#popover-气泡卡片" class="anchor">#</a></h1><p>点击/鼠标移入元素，弹出气泡式的卡片浮层。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><p>当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。</p><p>和 <code>Tooltip</code> 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。</p><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},l=o(116),a=o(10),c={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-popover title=\"Title\">\n            &lt;template slot=\"content\">\n                &lt;p>Content&lt;/p>\n                &lt;p>Content&lt;/p>\n            &lt;/template>\n            &lt;s-button type=\"primary\">Hover Me&lt;/s-button>\n        &lt;/s-popover>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Popover from 'santd/popover';\nimport Button from 'santd/button';\nexport default {\n    components: {\n        's-popover': Popover,\n        's-button': Button\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="基本"><span>基本</span><a href="#基本" class="anchor">#</a></h4><p>最简单的用法，浮层的大小由内容区域决定。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-popover":l.a,"s-button":a.a},template:'<div><s-popover title="Title"><template slot="content"><p>Content</p><p>Content</p></template><s-button type="primary">Hover Me</s-button></s-popover></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1595558852535"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},d=(o(743),{initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div class="demo">\n        &lt;div style="margin-left: 70px; white-space: nowrap;">\n            &lt;s-popover placement="topLeft" content="content" title="Title">\n                &lt;s-button>TL&lt;/s-button>\n            &lt;/s-popover>\n            &lt;s-popover placement="top" content="content" title="Title">\n                &lt;s-button>Top&lt;/s-button>\n            &lt;/s-popover>\n            &lt;s-popover placement="topRight" content="content" title="Title">\n                &lt;s-button>TR&lt;/s-button>\n            &lt;/s-popover>\n        &lt;/div>\n        &lt;div style="width: 70px; float: left;">\n            &lt;s-popover placement="leftTop" content="content" title="Title">\n                &lt;s-button>LT&lt;/s-button>\n            &lt;/s-popover>\n            &lt;s-popover placement="left" content="content" title="Title">\n                &lt;s-button>Left&lt;/s-button>\n            &lt;/s-popover>\n            &lt;s-popover placement="leftBottom" content="content" title="Title">\n                &lt;s-button>LB&lt;/s-button>\n            &lt;/s-popover>\n        &lt;/div>\n        &lt;div style="width: 70px; margin-left: 304px; ">\n            &lt;s-popover placement="rightTop" content="content" title="Title">\n                &lt;s-button>RT&lt;/s-button>\n            &lt;/s-popover>\n            &lt;s-popover placement="right" content="content" title="Title">\n                &lt;s-button>Right&lt;/s-button>\n            &lt;/s-popover>\n            &lt;s-popover placement="rightBottom" content="content" title="Title">\n                &lt;s-button>RB&lt;/s-button>\n            &lt;/s-popover>\n        &lt;/div>\n        &lt;div style="margin-left: 70px; clear: both; white-space: nowrap">\n            &lt;s-popover placement="bottomLeft" content="content" title="Title">\n                &lt;s-button>BL&lt;/s-button>\n            &lt;/s-popover>\n            &lt;s-popover placement="bottom" content="content" title="Title">\n                &lt;s-button>Bottom&lt;/s-button>\n            &lt;/s-popover>\n            &lt;s-popover placement="bottomRight" content="content" title="Title">\n                &lt;s-button>BR&lt;/s-button>\n            &lt;/s-popover>\n        &lt;/div>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Popover from \'santd/popover\';\nimport Button from \'santd/button\';\nexport default {\n    components: {\n        \'s-popover\': Popover,\n        \'s-button\': Button\n    }\n}\n&lt;/script>\n&lt;style type="text/css">\n    .demo {\n        overflow: hidden;\n    }\n    .demo .san-btn {\n        width: 70px;\n        margin-bottom: 5px;\n    }\n&lt;/style></code></pre>',text:'\n<h4 id="位置"><span>位置</span><a href="#位置" class="anchor">#</a></h4><p>位置有12个方向。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-popover":l.a,"s-button":a.a},template:'<div class="demo"><div style="margin-left: 70px; white-space: nowrap;"><s-popover placement="topLeft" content="content" title="Title"><s-button>TL</s-button></s-popover><s-popover placement="top" content="content" title="Title"><s-button>Top</s-button></s-popover><s-popover placement="topRight" content="content" title="Title"><s-button>TR</s-button></s-popover></div><div style="width: 70px; float: left;"><s-popover placement="leftTop" content="content" title="Title"><s-button>LT</s-button></s-popover><s-popover placement="left" content="content" title="Title"><s-button>Left</s-button></s-popover><s-popover placement="leftBottom" content="content" title="Title"><s-button>LB</s-button></s-popover></div><div style="width: 70px; margin-left: 304px; "><s-popover placement="rightTop" content="content" title="Title"><s-button>RT</s-button></s-popover><s-popover placement="right" content="content" title="Title"><s-button>Right</s-button></s-popover><s-popover placement="rightBottom" content="content" title="Title"><s-button>RB</s-button></s-popover></div><div style="margin-left: 70px; clear: both; white-space: nowrap"><s-popover placement="bottomLeft" content="content" title="Title"><s-button>BL</s-button></s-popover><s-popover placement="bottom" content="content" title="Title"><s-button>Bottom</s-button></s-popover><s-popover placement="bottomRight" content="content" title="Title"><s-button>BR</s-button></s-popover></div></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1595558852545"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'}),r={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-popover title="title" trigger="hover">\n            &lt;template slot="content">\n                &lt;p>Content&lt;/p>\n                &lt;p>Content&lt;/p>\n            &lt;/template>\n            &lt;s-button>Hover Me&lt;/s-button>\n        &lt;/s-popover>\n        &lt;s-popover title="title" trigger="focus">\n            &lt;template slot="content">\n                &lt;p>Content&lt;/p>\n                &lt;p>Content&lt;/p>\n            &lt;/template>\n            &lt;s-button>Focus Me&lt;/s-button>\n        &lt;/s-popover>\n        &lt;s-popover title="title" trigger="click">\n            &lt;template slot="content">\n                &lt;p>Content&lt;/p>\n                &lt;p>Content&lt;/p>\n            &lt;/template>\n            &lt;s-button>Click Me&lt;/s-button>\n        &lt;/s-popover>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Popover from \'santd/popover\';\nimport Button from \'santd/button\';\n\nexport default {\n    components: {\n        \'s-popover\': Popover,\n        \'s-button\': Button\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="三种触发方式"><span>三种触发方式</span><a href="#三种触发方式" class="anchor">#</a></h4><p>鼠标移入、聚集、点击。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-popover":l.a,"s-button":a.a},template:'<div><s-popover title="title" trigger="hover"><template slot="content"><p>Content</p><p>Content</p></template><s-button>Hover Me</s-button></s-popover><s-popover title="title" trigger="focus"><template slot="content"><p>Content</p><p>Content</p></template><s-button>Focus Me</s-button></s-popover><s-popover title="title" trigger="click"><template slot="content"><p>Content</p><p>Content</p></template><s-button>Click Me</s-button></s-popover></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1595558852531"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},v={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-popover title="Title" placement="topLeft">\n            &lt;template slot="content">\n                &lt;p>Content&lt;/p>\n                &lt;p>Content&lt;/p>\n            &lt;/template>\n            &lt;s-button>Align edge / 边缘对齐&lt;/s-button>\n        &lt;/s-popover>\n        &lt;s-popover title="Title" placement="topLeft" arrowPointAtCenter="{{true}}">\n            &lt;template slot="content">\n                &lt;p>Content&lt;/p>\n                &lt;p>Content&lt;/p>\n            &lt;/template>\n            &lt;s-button>Arrow points to center / 箭头指向中心&lt;/s-button>\n        &lt;/s-popover>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Popover from \'santd/popover\';\nimport Button from \'santd/button\';\nexport default {\n    components: {\n        \'s-popover\': Popover,\n        \'s-button\': Button\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="箭头指向"><span>箭头指向</span><a href="#箭头指向" class="anchor">#</a></h4><p>设置了 <code>arrowPointAtCenter</code> 后，箭头将指向目标元素的中心。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-popover":l.a,"s-button":a.a},template:'<div><s-popover title="Title" placement="topLeft"><template slot="content"><p>Content</p><p>Content</p></template><s-button>Align edge / 边缘对齐</s-button></s-popover><s-popover title="Title" placement="topLeft" arrowPointAtCenter="{{true}}"><template slot="content"><p>Content</p><p>Content</p></template><s-button>Arrow points to center / 箭头指向中心</s-button></s-popover></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1595558852559"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},h={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-popover title="title" visible="{{visible}}" trigger="click" on-visibleChange="handleVisibleChange">\n            &lt;a slot="content" href="javascript:void(0);" on-click="hide">Close&lt;/a>\n            &lt;s-button type="primary">Click Me&lt;/s-button>\n        &lt;/s-popover>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport san from \'san\';\nimport Popover from \'santd/popover\';\nimport Button from \'santd/button\';\nexport default {\n    components: {\n        \'s-popover\': Popover,\n        \'s-button\': Button\n    },\n    initData() {\n        return {\n            visible: false\n        }\n    },\n    hide() {\n        this.data.set(\'visible\', false);\n    },\n    handleVisibleChange(visible) {\n        this.data.set(\'visible\', visible);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="从浮层内关闭"><span>从浮层内关闭</span><a href="#从浮层内关闭" class="anchor">#</a></h4><p>使用 <code>visible</code> 属性控制浮层显示。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-popover":l.a,"s-button":a.a},initData:()=>({visible:!1}),hide(){this.data.set("visible",!1)},handleVisibleChange(t){this.data.set("visible",t)},template:'<div><s-popover title="title" visible="{{visible}}" trigger="click" on-visibleChange="handleVisibleChange"><a slot="content" href="javascript:void(0);" on-click="hide">Close</a><s-button type="primary">Click Me</s-button></s-popover></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1595558852524"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},m={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-popover\n            trigger="hover"\n            visible="{{hovered}}"\n            on-visibleChange="handleHoverVisibleChange"\n            title="Hover title"\n            content="This is hover content."\n        >\n            &lt;s-popover\n                title="Click title"\n                trigger="click"\n                visible="{{clicked}}"\n                on-visibleChange="handleClickVisibleChange"\n            >\n                &lt;template slot="content">\n                    &lt;div>This is click content.&lt;/div>&lt;a href="javascript:void(0);" on-click="hide">Close&lt;/a>\n                &lt;/template>\n                &lt;s-button>Hover and click / 悬停并点击&lt;/s-button>\n            &lt;/s-popover>\n        &lt;/s-popover>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Popover from \'santd/popover\';\nimport Button from \'santd/button\';\nexport default {\n    components: {\n        \'s-popover\': Popover,\n        \'s-button\': Button\n    },\n    initData() {\n        return {\n            hovered: false,\n            clicked: false\n        }\n    },\n    hide() {\n        this.data.set(\'clicked\', false);\n        this.data.set(\'hovered\', false);\n    },\n    handleHoverVisibleChange(visible) {\n        this.data.set(\'hovered\', visible);\n        this.data.set(\'clicked\', false);\n    },\n    handleClickVisibleChange(visible) {\n        this.data.set(\'hovered\', false);\n        this.data.set(\'clicked\', visible);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="悬停点击弹出窗口"><span>悬停点击弹出窗口</span><a href="#悬停点击弹出窗口" class="anchor">#</a></h4><p>以下示例显示如何创建可悬停和单击的弹出窗口。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-popover":l.a,"s-button":a.a},initData:()=>({hovered:!1,clicked:!1}),hide(){this.data.set("clicked",!1),this.data.set("hovered",!1)},handleHoverVisibleChange(t){this.data.set("hovered",t),this.data.set("clicked",!1)},handleClickVisibleChange(t){this.data.set("hovered",!1),this.data.set("clicked",t)},template:'<div><s-popover trigger="hover" visible="{{hovered}}" on-visibleChange="handleHoverVisibleChange" title="Hover title" content="This is hover content."><s-popover title="Click title" trigger="click" visible="{{clicked}}" on-visibleChange="handleClickVisibleChange"><template slot="content"><div>This is click content.</div><a href="javascript:void(0);" on-click="hide">Close</a></template><s-button>Hover and click / 悬停并点击</s-button></s-popover></s-popover></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1595558852516"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};e.default=s.a.defineComponent({components:{readme:p,desc:i,basic:c,trigger:r,visible:h,arrow:v,position:d,hover:m},template:"\n        <div>\n            <desc/>\n            <basic/>\n            <trigger/>\n            <position/>\n            <arrow/>\n            <visible/>\n            <hover/>\n            <readme/>\n        </div>\n    "})},743:function(t,e,o){var n=o(4),s=o(744);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var p={insert:"head",singleton:!1};n(s,p);t.exports=s.locals||{}},744:function(t,e,o){(e=o(5)(!1)).push([t.i,"\n    .demo {\n        overflow: hidden;\n    }\n    .demo .san-btn {\n        width: 70px;\n        margin-bottom: 5px;\n    }\n",""]),t.exports=e}}]);