(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{556:function(t,e,s){"use strict";s.r(e);var n=s(0),o=s.n(n),a={template:'<section class="markdown"><h2 id="api">API</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>title 文字</td><td>string</td><td>-</td></tr><tr><td>subTitle</td><td>subTitle 文字</td><td>string</td><td>-</td></tr><tr><td>status</td><td>结果的状态,决定图标和颜色</td><td>&#39;success&#39; | &#39;error&#39; | &#39;info&#39; | &#39;warning&#39;| &#39;404&#39; | &#39;403&#39; | &#39;500&#39;</td><td>&#39;info&#39;</td></tr><tr><td>icon</td><td>自定义icon</td><td>slot</td><td>-</td></tr><tr><td>extra</td><td>操作区</td><td>slot</td><td>-</td></tr></tbody></table></section>'},i={template:'<section class="markdown"><h1 id="result-结果">Result 结果</h1><p>用于反馈一系列操作任务的处理结果。</p><h2 id="何时使用">何时使用</h2><p>当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。</p><h2 id="代码演示">代码演示</h2></section>'},p=s(114),c=s(10),l={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-result\n            status="success"\n            title="Successfully Purchased Cloud Server ECS!"\n            subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."\n        >\n            &lt;template slot="extra">\n                &lt;s-button type="primary" key="console">Go Console&lt;/s-button>\n                &lt;s-button key="buy">Buy Again&lt;/s-button>\n            &lt;/template>\n        &lt;/s-result>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Result from \'santd/result\';\nimport Button from \'santd/button\';\n\nexport default {\n    components: {\n        \'s-result\': Result,\n        \'s-button\': Button\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="success">Success</h4>\n<p>成功的结果。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-result":p.a,"s-button":c.a},template:'<div><s-result status="success" title="Successfully Purchased Cloud Server ECS!" subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."><template slot="extra"><s-button type="primary" key="console">Go Console</s-button><s-button key="buy">Buy Again</s-button></template></s-result></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576721812335"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},d={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-result\n            status="warning"\n            title="There are some problems with your operation."\n        >\n            &lt;s-button type="primary" key="console" slot="extra">Go Console&lt;/s-button>\n        &lt;/s-result>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Result from \'santd/result\';\nimport Button from \'santd/button\';\n\nexport default {\n    components: {\n        \'s-result\': Result,\n        \'s-button\': Button\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="warning">Warning</h4>\n<p>警告类型的结果。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-result":p.a,"s-button":c.a},template:'<div><s-result status="warning" title="There are some problems with your operation."><s-button type="primary" key="console" slot="extra">Go Console</s-button></s-result></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576721812212"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},r={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-result\n            status="403"\n            title="403"\n            subTitle="Sorry, you are not authorized to access this page."\n        >\n            &lt;s-button type="primary" slot="extra">Back Home&lt;/s-button>\n        &lt;/s-result>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Result from \'santd/result\';\nimport Button from \'santd/button\';\n\nexport default {\n    components: {\n        \'s-result\': Result,\n        \'s-button\': Button\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="403">403</h4>\n<p>你没有此页面的访问权限。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-result":p.a,"s-button":c.a},template:'<div><s-result status="403" title="403" subTitle="Sorry, you are not authorized to access this page."><s-button type="primary" slot="extra">Back Home</s-button></s-result></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576721812223"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},u={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-result\n            status="404"\n            title="404"\n            subTitle="\'Sorry, the page you visited does not exist."\n        >\n            &lt;s-button type="primary" slot="extra">Back Home&lt;/s-button>\n        &lt;/s-result>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Result from \'santd/result\';\nimport Button from \'santd/button\';\n\nexport default {\n    components: {\n        \'s-result\': Result,\n        \'s-button\': Button\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="404">404</h4>\n<p>此页面未找到。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-result":p.a,"s-button":c.a},template:'<div><s-result status="404" title="404" subTitle="\'Sorry, the page you visited does not exist."><s-button type="primary" slot="extra">Back Home</s-button></s-result></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576721812197"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},m={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-result title="Your operation has been executed">\n            &lt;s-button type="primary" key="console" slot="extra">Go Console&lt;/s-button>\n        &lt;/s-result>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Result from \'santd/result\';\nimport Button from \'santd/button\';\n\nexport default {\n    components: {\n        \'s-result\': Result,\n        \'s-button\': Button\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="info">Info</h4>\n<p>展示处理结果。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-result":p.a,"s-button":c.a},template:'<div><s-result title="Your operation has been executed"><s-button type="primary" key="console" slot="extra">Go Console</s-button></s-result></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576721812189"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},x={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-result\n            status="500"\n            title="500"\n            subTitle="Sorry, the server is wrong."\n        >\n            &lt;s-button type="primary" slot="extra">Back Home&lt;/s-button>\n        &lt;/s-result>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Result from \'santd/result\';\nimport Button from \'santd/button\';\n\nexport default {\n    components: {\n        \'s-result\': Result,\n        \'s-button\': Button\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="500">500</h4>\n<p>服务器发生了错误。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-result":p.a,"s-button":c.a},template:'<div><s-result status="500" title="500" subTitle="Sorry, the server is wrong."><s-button type="primary" slot="extra">Back Home</s-button></s-result></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576721812168"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},h=s(3),g=s(116),b={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-result\n            status="error"\n            title="Submission Failed"\n            subTitle="Please check and modify the following information before resubmitting."\n        >\n            &lt;template slot="extra">\n                &lt;s-button type="primary" key="console">Go Console&lt;/s-button>\n                &lt;s-button key="buy">Buy Again&lt;/s-button>\n            &lt;/template>\n            &lt;div class="desc">\n                &lt;s-paragraph>\n                    &lt;s-text strong style="font-size: 16px;">The content you submitted has the following error:&lt;/s-text>\n                &lt;/s-paragraph>\n                &lt;s-paragraph>\n                    &lt;s-icon style="color: red;" type="close-circle" />\n                    Your account has been frozen &lt;a>Thaw immediately &gt;&lt;/a>\n                &lt;/s-paragraph>\n                &lt;s-paragraph>\n                    &lt;s-icon style="color: red;" type="close-circle" />\n                    Your account is not yet eligible to apply &lt;a>Apply Unlock &gt;&lt;/a>\n                &lt;/s-paragraph>\n            &lt;/div>\n        &lt;/s-result>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Result from \'santd/result\';\nimport Button from \'santd/button\';\nimport Icon from \'santd/icon\';\nimport Typography from \'santd/typography\';\n\nexport default {\n    components: {\n        \'s-result\': Result,\n        \'s-paragraph\': Typography.Paragraph,\n        \'s-text\': Typography.Text,\n        \'s-icon\': Icon,\n        \'s-button\': Button\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="error">Error</h4>\n<p>复杂的错误反馈。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-result":p.a,"s-paragraph":g.a.Paragraph,"s-text":g.a.Text,"s-icon":h.a,"s-button":c.a},template:'<div><s-result status="error" title="Submission Failed" subTitle="Please check and modify the following information before resubmitting."><template slot="extra"><s-button type="primary" key="console">Go Console</s-button><s-button key="buy">Buy Again</s-button></template><div class="desc"><s-paragraph><s-text strong="" style="font-size: 16px;">The content you submitted has the following error:</s-text></s-paragraph><s-paragraph><s-icon style="color: red;" type="close-circle"></s-icon>Your account has been frozen <a>Thaw immediately &gt;</a></s-paragraph><s-paragraph><s-icon style="color: red;" type="close-circle"></s-icon>Your account is not yet eligible to apply <a>Apply Unlock &gt;</a></s-paragraph></div></s-result></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576721812178"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},w={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-result title=\"Great, we have done all the operations!\">\n            &lt;s-icon type=\"smile\" theme=\"twoTone\" slot=\"icon\" />\n            &lt;s-button type=\"primary\" slot=\"extra\">Next&lt;/s-button>\n        &lt;/s-result>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Result from 'santd/result';\nimport Button from 'santd/button';\nimport Icon from 'santd/icon';\nimport san from 'san';\n\nexport default {\n    components: {\n        's-result': Result,\n        's-icon': Icon,\n        's-button': Button\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="自定义-icon">自定义 icon</h4>\n<p>自定义 icon。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-result":p.a,"s-icon":h.a,"s-button":c.a},template:'<div><s-result title="Great, we have done all the operations!"><s-icon type="smile" theme="twoTone" slot="icon"></s-icon><s-button type="primary" slot="extra">Next</s-button></s-result></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576721812161"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};e.default=o.a.defineComponent({components:{desc:i,success:l,warning:d,readme:a,info:m,access:r,notfound:u,wrong:x,icon:w,custom:b},template:"\n        <div>\n            <desc/>\n            <success/>\n            <info/>\n            <warning/>\n            <access/>\n            <notfound/>\n            <wrong/>\n            <custom/>\n            <icon/>\n            <readme/>\n        </div>\n    "})}}]);