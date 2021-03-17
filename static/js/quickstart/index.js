!function(n){function s(s){for(var t,o,c=s[0],l=s[1],u=s[2],i=0,k=[];i<c.length;i++)o=c[i],Object.prototype.hasOwnProperty.call(p,o)&&p[o]&&k.push(p[o][0]),p[o]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(n[t]=l[t]);for(r&&r(s);k.length;)k.shift()();return e.push.apply(e,u||[]),a()}function a(){for(var n,s=0;s<e.length;s++){for(var a=e[s],t=!0,c=1;c<a.length;c++){var l=a[c];0!==p[l]&&(t=!1)}t&&(e.splice(s--,1),n=o(o.s=a[0]))}return n}var t={},p={68:0,133:0},e=[];function o(s){if(t[s])return t[s].exports;var a=t[s]={i:s,l:!1,exports:{}};return n[s].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(){return Promise.resolve()},o.m=n,o.c=t,o.d=function(n,s,a){o.o(n,s)||Object.defineProperty(n,s,{enumerable:!0,get:a})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,s){if(1&s&&(n=o(n)),8&s)return n;if(4&s&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&s&&"string"!=typeof n)for(var t in n)o.d(a,t,function(s){return n[s]}.bind(null,t));return a},o.n=function(n){var s=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(s,"a",s),s},o.o=function(n,s){return Object.prototype.hasOwnProperty.call(n,s)},o.p="/santd/";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=s,c=c.slice();for(var u=0;u<c.length;u++)s(c[u]);var r=l;e.push([3422,0]),a()}({2199:function(n,s){n.exports=' <div class="content"><div class="markdown"><h1 id="%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B">快速上手</h1> <p>Ant Design San 致力于提供给程序员愉悦的开发体验。</p> <blockquote> <p>在开始之前，推荐先学习 San 和 ES2015，并正确安装和配置了 Node.js v8 或以上。官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识，并且已经完全掌握了 San 全家桶的正确开发方式。如果你刚开始学习前端或者 San，将 UI 框架作为你的第一步可能不是最好的主意。</p> </blockquote> <h2 id="%E7%AC%AC%E4%B8%80%E4%B8%AA%E4%BE%8B%E5%AD%90">第一个例子</h2> <p>最简单的使用方式参照以下 CodeSandbox 演示。</p> <p><a href="https://codesandbox.io/s/adoring-sutherland-p4ol9" target="_blank"><img src="https://codesandbox.io/static/img/play-codesandbox.svg" alt=""/></a></p> <h3 id="1.-%E4%BD%BF%E7%94%A8%E7%BB%84%E4%BB%B6">1. 使用组件</h3> <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> san <span class="token keyword">from</span> <span class="token string">\'san\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>DatePicker<span class="token punctuation">,</span> message<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'santd\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> dayjs <span class="token keyword">from</span> <span class="token string">\'dayjs\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'dayjs/locale/zh-cn\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'santd/dist/santd.css\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'./index.css\'</span><span class="token punctuation">;</span>\n\ndayjs<span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span><span class="token string">\'zh-cn\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> App <span class="token operator">=</span> san<span class="token punctuation">.</span><span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token function">initData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            date<span class="token operator">:</span> <span class="token keyword">null</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token string">\'s-datepicker\'</span><span class="token operator">:</span> DatePicker\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>date<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">您选择的日期是: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>date <span class="token operator">?</span> date<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">\'YYYY-MM-DD\'</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">\'未选择\'</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">\'date\'</span><span class="token punctuation">,</span> date<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">getDate</span><span class="token punctuation">(</span><span class="token parameter">date</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> date <span class="token operator">?</span> date<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">\'YYYY-MM-DD\'</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">\'未选择\'</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div style="width: 400px; margin: 100px auto;">\n        &lt;s-datepicker on-change="handleChange" />\n        &lt;div style="margin-top: 20px;">\n            当前日期：&#123;&#123;getDate(date)}}\n        &lt;/div>\n    &lt;/div></span><span class="token template-punctuation string">`</span></span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\napp<span class="token punctuation">.</span><span class="token function">attach</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <h3 id="2.-%E6%8E%A2%E7%B4%A2%E6%9B%B4%E5%A4%9A%E7%BB%84%E4%BB%B6%E7%94%A8%E6%B3%95">2. 探索更多组件用法</h3> <p>你可以在左侧菜单查看组件列表，比如 <a href="/#/components/alert">Alert</a> 组件，组件文档中提供了各类演示，最下方有组件 API 文档可以查阅。在代码演示部分找到第一个例子，点击右下角的图标展开代码。</p> <p>然后依照演示代码的写法，在之前的代码里修改 index.js，首先在 import 内引入 Alert 组件：</p> <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">{</span>DatePicker<span class="token punctuation">,</span> message<span class="token punctuation">,</span> Alert<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'santd\'</span><span class="token punctuation">;</span></code></pre> <p>然后添加相应的代码：</p> <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> App <span class="token operator">=</span> san<span class="token punctuation">.</span><span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token function">initData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            date<span class="token operator">:</span> <span class="token keyword">null</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token string">\'s-datepicker\'</span><span class="token operator">:</span> DatePicker<span class="token punctuation">,</span>\n        <span class="token string">\'s-alert\'</span><span class="token operator">:</span> Alert\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>date<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">您选择的日期是: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>date <span class="token operator">?</span> date<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">\'YYYY-MM-DD\'</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">\'未选择\'</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">\'date\'</span><span class="token punctuation">,</span> date<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">getDate</span><span class="token punctuation">(</span><span class="token parameter">date</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> date <span class="token operator">?</span> date<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">\'YYYY-MM-DD\'</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">\'未选择\'</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div style="width: 400px; margin: 100px auto;">\n        &lt;s-datepicker on-change="handleChange" />\n        &lt;div style="margin-top: 20px;">\n            &lt;s-alert message="当前日期：&#123;&#123;getDate(date)}}" type="success" />\n        &lt;/div>\n    &lt;/div></span><span class="token template-punctuation string">`</span></span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <p>在右侧预览区就可以看到如图的效果。</p> <p><img src="https://gw.alipayobjects.com/zos/antfincdn/Up3%24VYhN0S/134614ee-7440-46f1-a797-fa6f6b3e300f.png" alt="avatar"/></p> <p>好的，现在你已经会使用基本的 santd 组件了，你可以在这个例子中继续探索其他组件的用法。如果你遇到组件的 bug，也推荐建一个可重现的 codesandbox 来报告 bug。</p> <h2 id="%E5%85%BC%E5%AE%B9%E6%80%A7">兼容性</h2> <p>Ant Design San 支持所有的现代浏览器和 IE9+。</p> <table> <thead> <tr> <th><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE"/> <br/> IE \\ Edge</th> <th><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox"/> <br/> Firefox</th> <th><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome"/> <br/> Chrome</th> <th><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari"/> <br/> Safari</th> <th><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera"/> <br/> Opera</th> </tr> </thead> <tbody> <tr> <td>IE9, IE10, IE11, Edge</td> <td>last 2 versions</td> <td>last 2 versions</td> <td>last 2 versions</td> <td>last 2 versions</td> </tr> </tbody> </table> <p>我们对 IE9/10 提供有限度的支持，部分样式和动画在 IE9/10 下的表现会比较裸。少数组件使用到了 Flex 布局，在 IE9/10 下也会有问题。</p> <p>对于 IE 系列浏览器，需要提供相应的 Polyfill 支持，建议使用 <a href="https://babeljs.io/docs/en/babel-preset-env" target="_blank">babel-preset-env</a> 来解决浏览器兼容问题。</p> <h2 id="%E8%87%AA%E8%A1%8C%E6%9E%84%E5%BB%BA">自行构建</h2> <p>如果想自己维护工作流，我们推荐使用 webpack 进行构建和调试。理论上你可以利用 San 生态圈中的 各种脚手架 进行开发。</p> <h2 id="%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD">按需加载</h2> <p>可以通过以下的写法来按需加载组件。</p> <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">\'santd/es/button\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'santd/es/button/style\'</span></code></pre> <p>如果你使用了 babel，那么可以使用 <a href="https://github.com/ant-design/babel-plugin-import" target="_blank">babel-plugin-import</a> 来进行按需加载，加入这个插件后。你可以仍然这么写：</p> <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'santd\'</span><span class="token punctuation">;</span></code></pre> <p>插件会帮你转换成 santd/es/xxx 的写法。另外此插件配合 style 属性可以做到模块样式的按需自动加载。</p> </div></div> '},3422:function(n,s,a){var t=a(3),p=a(2199),e=a(78).default;n.exports=a(78),n.exports.default=t(e,p,[])},78:function(n,s,a){"use strict";a.r(s),function(n){a.d(s,"default",(function(){return c}));var t,p,e,o=a(2);class c extends o.a{inited(){n.hub&&n.hub.fire&&n.hub.fire("changed",{level:0,children:[{level:2,title:"第一个例子",hash:"%E7%AC%AC%E4%B8%80%E4%B8%AA%E4%BE%8B%E5%AD%90",children:[{level:3,title:"1. 使用组件",hash:"1.-%E4%BD%BF%E7%94%A8%E7%BB%84%E4%BB%B6"},{level:3,title:"2. 探索更多组件用法",hash:"2.-%E6%8E%A2%E7%B4%A2%E6%9B%B4%E5%A4%9A%E7%BB%84%E4%BB%B6%E7%94%A8%E6%B3%95"}]},{level:2,title:"兼容性",hash:"%E5%85%BC%E5%AE%B9%E6%80%A7"},{level:2,title:"自行构建",hash:"%E8%87%AA%E8%A1%8C%E6%9E%84%E5%BB%BA"},{level:2,title:"按需加载",hash:"%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD"}]})}}e={},(p="components")in(t=c)?Object.defineProperty(t,p,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[p]=e}.call(this,a(4))}});