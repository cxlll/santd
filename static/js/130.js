(window.webpackJsonp=window.webpackJsonp||[]).push([[130,11],{1132:function(n,s,a){"use strict";a.r(s),function(n){a.d(s,"default",(function(){return c}));var t,p,o,e=a(2);class c extends e.a{inited(){n.hub&&n.hub.fire&&n.hub.fire("changed",{level:0,children:[{level:2,title:"API",hash:"api"}]})}}o={},(p="components")in(t=c)?Object.defineProperty(t,p,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[p]=o}.call(this,a(4))},1133:function(n,s,a){"use strict";a.r(s),function(n){a.d(s,"default",(function(){return c}));var t,p,o,e=a(2);class c extends e.a{inited(){n.hub&&n.hub.fire&&n.hub.fire("changed",{level:0,children:[{level:2,title:"何时使用",hash:"%E4%BD%95%E6%97%B6%E4%BD%BF%E7%94%A8"},{level:2,title:"代码演示",hash:"%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA"}]})}}o={},(p="components")in(t=c)?Object.defineProperty(t,p,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[p]=o}.call(this,a(4))},1134:function(n,s,a){"use strict";a.r(s),function(n){a.d(s,"default",(function(){return u}));var t,p,o,e=a(2),c=a(2171),l=a.n(c);class u extends e.a{inited(){n.hub&&n.hub.fire&&n.hub.fire("changed",{level:0})}}t=u,p="components",o={"code-preview-0":l.a},p in t?Object.defineProperty(t,p,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[p]=o}.call(this,a(4))},1135:function(n,s,a){"use strict";a.r(s);var t=a(0);s.default={components:{"s-backtop":t.f}}},1136:function(n,s,a){"use strict";a.r(s),function(n){a.d(s,"default",(function(){return u}));var t,p,o,e=a(2),c=a(2173),l=a.n(c);class u extends e.a{inited(){n.hub&&n.hub.fire&&n.hub.fire("changed",{level:0})}}t=u,p="components",o={"code-preview-0":l.a},p in t?Object.defineProperty(t,p,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[p]=o}.call(this,a(4))},1137:function(n,s,a){"use strict";a.r(s);var t=a(0);s.default={components:{"s-back-top":t.f}}},2168:function(n,s,a){var t=a(3),p=a(3405),o=a(1132).default;n.exports=a(1132),n.exports.default=t(o,p,[])},2169:function(n,s,a){var t=a(3),p=a(3406),o=a(1133).default;n.exports=a(1133),n.exports.default=t(o,p,[])},2170:function(n,s,a){var t=a(3),p=a(3407),o=a(1134).default;n.exports=a(1134),n.exports.default=t(o,p,[])},2171:function(n,s,a){var t=a(3),p=a(3408),o=a(1135).default;n.exports=a(1135),n.exports.default=t(o,p,[])},2172:function(n,s,a){var t=a(3),p=a(3409),o=a(1136).default;n.exports=a(1136),n.exports.default=t(o,p,[])},2173:function(n,s,a){var t=a(3);a(3410);var p=a(3411),o=a(1137).default;n.exports=a(1137),n.exports.default=t(o,p,[])},3405:function(n,s){n.exports=' <div class="content"><div class="markdown"><h2 id="api">API</h2> <table> <thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>target</td> <td>设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数</td> <td>Function</td> <td><code>() =&gt; window</code></td> </tr> <tr> <td>visibilityHeight</td> <td>滚动高度达到此参数值才出现 backtop</td> <td>number</td> <td>400</td> </tr> <tr> <td>on-click</td> <td>点击按钮的回调函数</td> <td>Function</td> <td>-</td> </tr> </tbody> </table> </div></div> '},3406:function(n,s){n.exports=' <div class="content"><div class="markdown"><h1 id="backtop-%E5%9B%9E%E5%88%B0%E9%A1%B6%E9%83%A8">BackTop 回到顶部</h1> <p>返回页面顶部的操作按钮。</p> <h2 id="%E4%BD%95%E6%97%B6%E4%BD%BF%E7%94%A8">何时使用</h2> <ul> <li>当页面内容区域比较长时；</li> <li>当用户需要频繁返回顶部查看相关内容时。</li> </ul> <h2 id="%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA">代码演示</h2> </div></div> '},3407:function(n,s){n.exports=' <div class="content"><codebox> <code-preview-0 slot="code-preview"></code-preview-0> <section slot="text-place-holder"><h4 id="%E5%9F%BA%E6%9C%AC">基本</h4> <p>最简单的用法。</p> </section> <div slot="code-place-holder"> <div class="markdown"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-backtop</span> <span class="token punctuation">/></span></span>\n        Scroll down to see the bottom-right<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token style language-css"><span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>64<span class="token punctuation">,</span> 64<span class="token punctuation">,</span> 64<span class="token punctuation">,</span> 0.6<span class="token punctuation">)</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span> gray <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">></span></span>button.\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span>BackTop<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'santd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token string">\'s-backtop\'</span><span class="token operator">:</span> BackTop\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code></pre> </div> </div> </codebox> </div> '},3408:function(n,s){n.exports=' <div> <s-backtop/> Scroll down to see the bottom-right<strong style="color:rgba(64,64,64,.6)"> gray </strong>button. </div> '},3409:function(n,s){n.exports=' <div class="content"><codebox> <code-preview-0 slot="code-preview"></code-preview-0> <section slot="text-place-holder"><h4 id="%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F">自定义样式</h4> <p>可以自定义回到顶部按钮的样式，限制宽高：<code>40px * 40px</code>。</p> </section> <div slot="code-place-holder"> <div class="markdown"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>s-back-top</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>santd-back-top-inner<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>UP<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>s-back-top</span><span class="token punctuation">></span></span>\n        Scroll down to see the bottom-right<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token style language-css"><span class="token property">color</span><span class="token punctuation">:</span> #1088e9<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span> blue <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">></span></span>button.\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span>BackTop<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'santd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token string">\'s-back-top\'</span><span class="token operator">:</span> BackTop\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">\n    <span class="token selector">#custom .santd-back-top</span> <span class="token punctuation">{</span>\n      <span class="token property">bottom</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token selector">#custom .santd-back-top-inner</span> <span class="token punctuation">{</span>\n      <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>\n      <span class="token property">width</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>\n      <span class="token property">line-height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>\n      <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>\n      <span class="token property">background-color</span><span class="token punctuation">:</span> #1088e9<span class="token punctuation">;</span>\n      <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>\n      <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n      <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code></pre> </div> </div> </codebox> </div> '},3410:function(n,s,a){"use strict";a.r(s)},3411:function(n,s){n.exports=' <div id="custom"> <s-back-top> <div class="santd-back-top-inner">UP</div> </s-back-top> Scroll down to see the bottom-right<strong style="color:#1088e9"> blue </strong>button. </div> '},3482:function(n,s,a){"use strict";a.r(s);var t=a(1),p=a.n(t),o=a(2168),e=a.n(o),c=a(2169),l=a.n(c),u=a(2170),i=a.n(u),k=a(2172),r=a.n(k);s.default=p.a.defineComponent({components:{readme:e.a,desc:l.a,basic:i.a,self:r.a},template:"\n        <div>\n            <desc/>\n            <basic/>\n            <self/>\n            <readme/>\n        </div>\n    "})}}]);