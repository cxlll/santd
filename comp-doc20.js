(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{584:function(t,e,o){"use strict";o.r(e);var n=o(0),s=o.n(n),a={template:'<section class="markdown"><h1 id="drawer-抽屉">Drawer 抽屉</h1><p>抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到到原任务。</p><h2 id="何时使用">何时使用</h2><ul><li>当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容。</li><li>当需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象。</li></ul><h2 id="代码演示">代码演示</h2></section>'},l=o(10),r=o(129),i={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-button type="primary" on-click="showDrawer">Open&lt;/s-button>\n        &lt;s-drawer\n            title="Basic Drawer"\n            placement="right"\n            closable="{{false}}"\n            visible="{=visible=}"\n            on-close="onClose"\n        >\n            &lt;p>Some contents...&lt;/p>\n            &lt;p>Some contents...&lt;/p>\n            &lt;p>Some contents...&lt;/p>\n        &lt;/s-drawer>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport button from \'santd/button\';\nimport drawer from \'santd/drawer\';\n\nexport default {\n    components: {\n        \'s-button\': button,\n        \'s-drawer\': drawer\n    },\n    initData() {\n        return {\n            visible: false\n        };\n    },\n    showDrawer() {\n        this.data.set(\'visible\', true);\n    },\n    onClose(e) {\n        console.log(e, \'I was closed.\');\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="基础抽屉">基础抽屉</h4>\n<p>基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-button":l.a,"s-drawer":r.a},initData:()=>({visible:!1}),showDrawer(){this.data.set("visible",!0)},onClose(t){console.log(t,"I was closed.")},template:'<div><s-button type="primary" on-click="showDrawer">Open</s-button><s-drawer title="Basic Drawer" placement="right" closable="{{false}}" visible="{=visible=}" on-close="onClose"><p>Some contents...</p><p>Some contents...</p><p>Some contents...</p></s-drawer></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576721818295"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},c=o(28);const d=c.a.Group;var p={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-radio-group style="margin-right: 8px" value="{{placement}}" on-change="onChange($event)" name="position">\n            &lt;s-radio value="top">top&lt;/s-radio>\n            &lt;s-radio value="right">right&lt;/s-radio>\n            &lt;s-radio value="bottom">bottom&lt;/s-radio>\n            &lt;s-radio value="left">left&lt;/s-radio>\n        &lt;/s-radio-group>\n        &lt;s-button type="primary" on-click="showDrawer">Open&lt;/s-button>\n        &lt;s-drawer\n            title="Basic Drawer"\n            placement="{{placement}}"\n            closable="{{false}}"\n            visible="{=visible=}"\n            on-close="onClose"\n        >\n            &lt;p>Some contents...&lt;/p>\n            &lt;p>Some contents...&lt;/p>\n            &lt;p>Some contents...&lt;/p>\n        &lt;/s-drawer>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport button from \'santd/button\';\nimport drawer from \'santd/drawer\';\nimport radio from \'santd/radio\';\nconst group = radio.Group;\n\nexport default {\n    components: {\n        \'s-button\': button,\n        \'s-drawer\': drawer,\n        \'s-radio\': radio,\n        \'s-radio-group\': group\n    },\n    initData() {\n        return {\n            visible: false,\n            placement: \'right\'\n        };\n    },\n    showDrawer() {\n        this.data.set(\'visible\', true);\n    },\n    onClose(e) {\n        console.log(e, \'I was closed.\');\n    },\n    onChange(e) {\n        this.data.set(\'placement\', e.target.value);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="自定义位置">自定义位置</h4>\n<p>自定义位置，点击触发按钮抽屉从相应的位置滑出，点击遮罩区关闭</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-button":l.a,"s-drawer":r.a,"s-radio":c.a,"s-radio-group":d},initData:()=>({visible:!1,placement:"right"}),showDrawer(){this.data.set("visible",!0)},onClose(t){console.log(t,"I was closed.")},onChange(t){this.data.set("placement",t.target.value)},template:'<div><s-radio-group style="margin-right: 8px" value="{{placement}}" on-change="onChange($event)" name="position"><s-radio value="top">top</s-radio><s-radio value="right">right</s-radio><s-radio value="bottom">bottom</s-radio><s-radio value="left">left</s-radio></s-radio-group><s-button type="primary" on-click="showDrawer">Open</s-button><s-drawer title="Basic Drawer" placement="{{placement}}" closable="{{false}}" visible="{=visible=}" on-close="onClose"><p>Some contents...</p><p>Some contents...</p><p>Some contents...</p></s-drawer></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576721818286"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},m=(o(637),o(3)),h=o(95),u=o(19),g=o(27),w=o(15),b=o(97),x={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-button type="primary" on-click="toggleDrawer">&lt;s-icon type="plus"/> New account&lt;/s-button>\n        &lt;s-drawer\n            title="Create a new account"\n            visible="{=visible=}"\n            width="{{720}}"\n            on-close="onClose"\n        >\n            &lt;s-form layout="vertical" hideRequiredMark="{{true}}">\n                &lt;s-row gutter="16">\n                    &lt;s-col span="12">\n                        &lt;s-item label="Name">\n                            &lt;s-input decorator="{{nameDecorator}}" placeholder="Please enter user name">&lt;/s-input>\n                        &lt;/s-item>\n                    &lt;/s-col>\n                    &lt;s-col span="12">\n                        &lt;s-item label="Url">\n                            &lt;s-input decorator="{{urlDecorator}}" placeholder="Please enter url" addonBefore="http://" addonAfter=".com">&lt;/s-input>\n                        &lt;/s-item>\n                    &lt;/s-col>\n                &lt;/s-row>\n                &lt;s-row gutter="16">\n                    &lt;s-col span="12">\n                        &lt;s-item label="Owner">\n                            &lt;s-select placeholder="Please choose the Owner" decorator="{{ownerDecorator}}">\n                                &lt;s-option value="xiao">Xiaoxiao&lt;/s-option>\n                                &lt;s-option value="mao">Maomao&lt;/s-option>\n                            &lt;/s-select>\n                        &lt;/s-item>\n                    &lt;/s-col>\n                    &lt;s-col span="12">\n                        &lt;s-item label="Type">\n                            &lt;s-select placeholder="Please choose the type" decorator="{{typeDecorator}}">\n                                &lt;s-option value="private">Private&lt;/s-option>\n                                &lt;s-option value="public">Public&lt;/s-option>\n                            &lt;/s-select>\n                        &lt;/s-item>\n                    &lt;/s-col>\n                &lt;/s-row>\n                &lt;s-row gutter="16">\n                    &lt;s-col span="12">\n                        &lt;s-item label="Approver">\n                            &lt;s-select placeholder="Please choose the approver" decorator="{{approverDecorator}}">\n                                &lt;s-option value="jack">Jack Ma&lt;/s-option>\n                                &lt;s-option value="tom">Tom Liu&lt;/s-option>\n                            &lt;/s-select>\n                        &lt;/s-item>\n                    &lt;/s-col>\n                    &lt;s-col span="12">\n                        &lt;s-item label="DateTime">\n                            &lt;s-rangepicker decorator="{{datetimeDecorator}}">&lt;/s-rangepicker>\n                        &lt;/s-item>\n                    &lt;/s-col>\n                &lt;/s-row>\n                &lt;s-row gutter="16">\n                    &lt;s-col span="24">\n                        &lt;s-item label="Description">\n                            &lt;s-textarea rows="4" placeholder="Please enter url description" decorator="{{descriptionDecorator}}">&lt;/s-textarea>\n                        &lt;/s-item>\n                    &lt;/s-col>\n                &lt;/s-row>\n            &lt;/s-form>\n            &lt;div class="form-button-wrap">\n                &lt;s-button on-click="toggleDrawer" type="default">Cancel&lt;/s-button>\n                &lt;s-button on-click="toggleDrawer" type="primary">Submit&lt;/s-button>\n            &lt;/div>\n        &lt;/s-drawer>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport button from \'santd/button\';\nimport drawer from \'santd/drawer\';\nimport icon from \'santd/icon\';\nimport form from \'santd/form\';\nimport grid from \'santd/grid\';\nimport input from \'santd/input\';\nimport select from \'santd/select\';\nimport datepicker from \'santd/date-picker\';\n\nexport default form.create({})({\n    components: {\n        \'s-button\': button,\n        \'s-drawer\': drawer,\n        \'s-icon\': icon,\n        \'s-row\': grid.Row,\n        \'s-col\': grid.Col,\n        \'s-form\': form,\n        \'s-item\': form.FormItem,\n        \'s-input\': input,\n        \'s-select\': select,\n        \'s-option\': select.Option,\n        \'s-textarea\': input.TextArea,\n        \'s-rangepicker\': datepicker.RangePicker\n    },\n    initData() {\n        return {\n            visible: false,\n            nameDecorator: {\n                name: \'name\',\n                rules: [{required: true, message: \'Please enter user name\'}]\n            },\n            urlDecorator: {\n                name: \'url\',\n                rules: [{required: true, message: \'Please enter url\'}]\n            },\n            ownerDecorator: {\n                name: \'owner\',\n                rules: [{required: true, message: \'Please choose the owner\'}]\n            },\n            typeDecorator: {\n                name: \'type\',\n                rules: [{required: true, message: \'Please choose the type\'}]\n            },\n            approverDecorator: {\n                name: \'approver\',\n                rules: [{required: true, message: \'Please choose the approver\'}]\n            },\n            datetimeDecorator: {\n                name: \'datetime\',\n                rules: [{required: true, message: \'Please choose the date time\'}]\n            },\n            descriptionDecorator: {\n                name: \'description\',\n                rules: [{required: true, message: \'Please enter url description\'}]\n            }\n        };\n    },\n    toggleDrawer() {\n        const visible = this.data.get(\'visible\');\n        this.data.set(\'visible\', !visible);\n    },\n    onClose(e) {\n        console.log(e, \'I was closed.\');\n    }\n})\n&lt;/script>\n\n&lt;style>\n.form-button-wrap {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    border-top: 1px solid #e8e8e8;\n    padding: 10px 16px;\n    text-align: right;\n    left: 0;\n    background: #fff;\n    border-radius: 0 0 4px 4px;\n}\n&lt;/style></code></pre>',text:'\n<h4 id="抽屉表单">抽屉表单</h4>\n<p>在抽屉中使用表单。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":h.a.create({})({components:{"s-button":l.a,"s-drawer":r.a,"s-icon":m.a,"s-row":u.c.Row,"s-col":u.c.Col,"s-form":h.a,"s-item":h.a.FormItem,"s-input":g.a,"s-select":w.a,"s-option":w.a.Option,"s-textarea":g.a.TextArea,"s-rangepicker":b.a.RangePicker},initData:()=>({visible:!1,nameDecorator:{name:"name",rules:[{required:!0,message:"Please enter user name"}]},urlDecorator:{name:"url",rules:[{required:!0,message:"Please enter url"}]},ownerDecorator:{name:"owner",rules:[{required:!0,message:"Please choose the owner"}]},typeDecorator:{name:"type",rules:[{required:!0,message:"Please choose the type"}]},approverDecorator:{name:"approver",rules:[{required:!0,message:"Please choose the approver"}]},datetimeDecorator:{name:"datetime",rules:[{required:!0,message:"Please choose the date time"}]},descriptionDecorator:{name:"description",rules:[{required:!0,message:"Please enter url description"}]}}),toggleDrawer(){const t=this.data.get("visible");this.data.set("visible",!t)},onClose(t){console.log(t,"I was closed.")},template:'<div><s-button type="primary" on-click="toggleDrawer"><s-icon type="plus"></s-icon> New account</s-button><s-drawer title="Create a new account" visible="{=visible=}" width="{{720}}" on-close="onClose"><s-form layout="vertical" hideRequiredMark="{{true}}"><s-row gutter="16"><s-col span="12"><s-item label="Name"><s-input decorator="{{nameDecorator}}" placeholder="Please enter user name"></s-input></s-item></s-col><s-col span="12"><s-item label="Url"><s-input decorator="{{urlDecorator}}" placeholder="Please enter url" addonBefore="http://" addonAfter=".com"></s-input></s-item></s-col></s-row><s-row gutter="16"><s-col span="12"><s-item label="Owner"><s-select placeholder="Please choose the Owner" decorator="{{ownerDecorator}}"><s-option value="xiao">Xiaoxiao</s-option><s-option value="mao">Maomao</s-option></s-select></s-item></s-col><s-col span="12"><s-item label="Type"><s-select placeholder="Please choose the type" decorator="{{typeDecorator}}"><s-option value="private">Private</s-option><s-option value="public">Public</s-option></s-select></s-item></s-col></s-row><s-row gutter="16"><s-col span="12"><s-item label="Approver"><s-select placeholder="Please choose the approver" decorator="{{approverDecorator}}"><s-option value="jack">Jack Ma</s-option><s-option value="tom">Tom Liu</s-option></s-select></s-item></s-col><s-col span="12"><s-item label="DateTime"><s-rangepicker decorator="{{datetimeDecorator}}"></s-rangepicker></s-item></s-col></s-row><s-row gutter="16"><s-col span="24"><s-item label="Description"><s-textarea rows="4" placeholder="Please enter url description" decorator="{{descriptionDecorator}}"></s-textarea></s-item></s-col></s-row></s-form><div class="form-button-wrap"><s-button on-click="toggleDrawer" type="default">Cancel</s-button><s-button on-click="toggleDrawer" type="primary">Submit</s-button></div></s-drawer></div>'})},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576721818273"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},v=o(54),f=o(110),y=o(57),D=o(58),k=o(112);const P=s.a.defineComponent({template:'\n        <div style="font-size: 14px; line-height: 22px; margin-bottom: 7px; color: rgba(0, 0, 0, 0.65)">\n            <p style="margin-right: 8px; margin-bottom: 0; display: inline-block; color: rgba(0, 0, 0, 0.85)">{{title}}:</p>\n            <slot name="contet">{{content}}</slot>\n        </div>\n    '});var C={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-list bordered="{{true}}" itemLayout="horizontal" dataSource="{{listData}}">\n            &lt;s-list-item slot="renderItem" actions="{{[\'profile\']}}">\n                &lt;ul class="{{prefixCls}}-item-action" slot="profile">\n                    &lt;li>&lt;a href="javascript:;" on-click="showDrawer">View Profile&lt;/a>&lt;/li>\n                &lt;/ul>\n                &lt;s-list-item-meta description="Progresser AFX">\n                    &lt;s-avatar slot="avatar" src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"/>\n                    &lt;a href="javascript:;" slot="title">{{item.name}}&lt;/a>\n                &lt;/s-list-item-meta>\n            &lt;/s-list-item>\n        &lt;/s-list>\n        &lt;s-drawer\n            placement="right"\n            closable="{{false}}"\n            visible="{=visible=}"\n            width="{{640}}"\n            on-close="onClose"\n        >\n            &lt;p style="margin-bottom: 16px; font-size: 16px; line-height: 24px; color: rgba(0,0,0, 0.85);">User Profile&lt;/p>\n            &lt;p style="margin-bottom: 16px; font-size: 16px; line-height: 24px; color: rgba(0,0,0, 0.85);">Personal&lt;/p>\n            &lt;s-row>\n                &lt;s-col span="{{12}}">\n                    &lt;s-item title="Full Name" content="Lily"/>\n                &lt;/s-col>\n                &lt;s-col span="{{12}}">\n                    &lt;s-item title="Account" content="AntDesign@example.com"/>\n                &lt;/s-col>\n            &lt;/s-row>\n            &lt;s-row>\n                &lt;s-col span="{{12}}">\n                    &lt;s-item title="City" content="HangZhou"/>\n                &lt;/s-col>\n                &lt;s-col span="{{12}}">\n                    &lt;s-item title="Country" content="China🇨🇳"/>\n                &lt;/s-col>\n            &lt;/s-row>\n            &lt;s-row>\n                &lt;s-col span="{{12}}">\n                    &lt;s-item title="Birthday" content="February 2,1900"/>\n                &lt;/s-col>\n                &lt;s-col span="{{12}}">\n                    &lt;s-item title="Website" content="-"/>\n                &lt;/s-col>\n            &lt;/s-row>\n            &lt;s-row>\n                &lt;s-col span="{{24}}">\n                    &lt;s-item title="Message" content="Make things as simple as possible but no simpler."/>\n                &lt;/s-col>\n            &lt;/s-row>\n\n            &lt;s-divider/>\n            &lt;p style="margin-bottom: 16px; font-size: 16px; line-height: 24px; color: rgba(0,0,0, 0.85);">Company&lt;/p>\n\n            &lt;s-row>\n                &lt;s-col span="{{12}}">\n                    &lt;s-item title="Position" content="Programmer"/>\n                &lt;/s-col>\n                &lt;s-col span="{{12}}">\n                    &lt;s-item title="Responsibilities" content="Coding"/>\n                &lt;/s-col>\n            &lt;/s-row>\n            &lt;s-row>\n                &lt;s-col span="{{12}}">\n                    &lt;s-item title="Department" content="AFX"/>\n                &lt;/s-col>\n                &lt;s-col span="{{12}}">\n                    &lt;s-item title="Supervisor">\n                        &lt;a slot="contet">Lin&lt;/a>\n                    &lt;/s-item>\n                &lt;/s-col>\n            &lt;/s-row>\n            &lt;s-row>\n                &lt;s-col span="{{24}}">\n                    &lt;s-item title="Skills" content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."/>\n                &lt;/s-col>\n            &lt;/s-row>\n\n            &lt;s-divider/>\n            &lt;p style="margin-bottom: 16px; font-size: 16px; line-height: 24px; color: rgba(0,0,0, 0.85);">Contacts&lt;/p>\n\n            &lt;s-row>\n                &lt;s-col span="{{12}}">\n                    &lt;s-item title="Email" content="AntDesign@example.com"/>\n                &lt;/s-col>\n                &lt;s-col span="{{12}}">\n                    &lt;s-item title="Phone Number" content="+86 181 0000 0000"/>\n                &lt;/s-col>\n            &lt;/s-row>\n            &lt;s-row>\n                &lt;s-col span="{{24}}">\n                    &lt;s-item title="Github">\n                        &lt;a slot="contet" href="http://github.com/ant-design/ant-design/">github.com/ant-design/ant-design/&lt;/a>\n                    &lt;/s-item>\n                &lt;/s-col>\n            &lt;/s-row>\n        &lt;/s-drawer>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport avatar from \'santd/avatar\';\nimport button from \'santd/button\';\nimport drawer from \'santd/drawer\';\nimport divider from \'santd/divider\';\nimport col from \'santd/col\';\nimport row from \'santd/row\';\nimport list from \'santd/list\';\nimport san from \'san\';\n\nconst uiItem = san.defineComponent({\n    template: &#96;\n        &lt;div style="font-size: 14px; line-height: 22px; margin-bottom: 7px; color: rgba(0, 0, 0, 0.65)">\n            &lt;p style="margin-right: 8px; margin-bottom: 0; display: inline-block; color: rgba(0, 0, 0, 0.85)">{{title}}:&lt;/p>\n            &lt;slot name="contet">{{content}}&lt;/slot>\n        &lt;/div>\n    &#96;\n});\n\nexport default {\n    components: {\n        \'s-avatar\': avatar,\n        \'s-button\': button,\n        \'s-drawer\': drawer,\n        \'s-divider\': divider,\n        \'s-col\': col,\n        \'s-row\': row,\n        \'s-item\': uiItem,\n        \'s-list\': list,\n        \'s-list-item\': list.Item,\n        \'s-list-item-meta\': list.Item.Meta\n    },\n    filters:  {\n        css: drawer.prototype.filters.css\n    },\n    initData() {\n        return {\n            visible: false,\n            placement: \'right\',\n            listData: [{\n                name: \'Lily\'\n            }, {\n                name: \'Lily\'\n            }]\n        };\n    },\n    showDrawer() {\n        this.data.set(\'visible\', true);\n    },\n    onClose(e) {\n        console.log(e, \'I was closed.\');\n        this.data.set(\'visible\', false);\n    },\n    onChange(e) {\n        this.data.set(\'placement\', e.target.value);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="信息预览抽屉">信息预览抽屉</h4>\n<p>需要快速预览对象概要时使用，点击遮罩区关闭。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-avatar":v.a,"s-button":l.a,"s-drawer":r.a,"s-divider":f.a,"s-col":y.a,"s-row":D.a,"s-item":P,"s-list":k.a,"s-list-item":k.a.Item,"s-list-item-meta":k.a.Item.Meta},filters:{css:r.a.prototype.filters.css},initData:()=>({visible:!1,placement:"right",listData:[{name:"Lily"},{name:"Lily"}]}),showDrawer(){this.data.set("visible",!0)},onClose(t){console.log(t,"I was closed."),this.data.set("visible",!1)},onChange(t){this.data.set("placement",t.target.value)},template:'<div><s-list bordered="{{true}}" itemLayout="horizontal" dataSource="{{listData}}"><s-list-item slot="renderItem" actions="{{[\'profile\']}}"><ul class="{{prefixCls}}-item-action" slot="profile"><li><a href="javascript:;" on-click="showDrawer">View Profile</a></li></ul><s-list-item-meta description="Progresser AFX"><s-avatar slot="avatar" src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"></s-avatar><a href="javascript:;" slot="title">{{item.name}}</a></s-list-item-meta></s-list-item></s-list><s-drawer placement="right" closable="{{false}}" visible="{=visible=}" width="{{640}}" on-close="onClose"><p style="margin-bottom: 16px; font-size: 16px; line-height: 24px; color: rgba(0,0,0, 0.85);">User Profile</p><p style="margin-bottom: 16px; font-size: 16px; line-height: 24px; color: rgba(0,0,0, 0.85);">Personal</p><s-row><s-col span="{{12}}"><s-item title="Full Name" content="Lily"></s-item></s-col><s-col span="{{12}}"><s-item title="Account" content="AntDesign@example.com"></s-item></s-col></s-row><s-row><s-col span="{{12}}"><s-item title="City" content="HangZhou"></s-item></s-col><s-col span="{{12}}"><s-item title="Country" content="China🇨🇳"></s-item></s-col></s-row><s-row><s-col span="{{12}}"><s-item title="Birthday" content="February 2,1900"></s-item></s-col><s-col span="{{12}}"><s-item title="Website" content="-"></s-item></s-col></s-row><s-row><s-col span="{{24}}"><s-item title="Message" content="Make things as simple as possible but no simpler."></s-item></s-col></s-row><s-divider></s-divider><p style="margin-bottom: 16px; font-size: 16px; line-height: 24px; color: rgba(0,0,0, 0.85);">Company</p><s-row><s-col span="{{12}}"><s-item title="Position" content="Programmer"></s-item></s-col><s-col span="{{12}}"><s-item title="Responsibilities" content="Coding"></s-item></s-col></s-row><s-row><s-col span="{{12}}"><s-item title="Department" content="AFX"></s-item></s-col><s-col span="{{12}}"><s-item title="Supervisor"><a slot="contet">Lin</a></s-item></s-col></s-row><s-row><s-col span="{{24}}"><s-item title="Skills" content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."></s-item></s-col></s-row><s-divider></s-divider><p style="margin-bottom: 16px; font-size: 16px; line-height: 24px; color: rgba(0,0,0, 0.85);">Contacts</p><s-row><s-col span="{{12}}"><s-item title="Email" content="AntDesign@example.com"></s-item></s-col><s-col span="{{12}}"><s-item title="Phone Number" content="+86 181 0000 0000"></s-item></s-col></s-row><s-row><s-col span="{{24}}"><s-item title="Github"><a slot="contet" href="http://github.com/ant-design/ant-design/">github.com/ant-design/ant-design/</a></s-item></s-col></s-row></s-drawer></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1576721818105"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},E={template:'<section class="markdown"><h2 id="api">API</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>bodyStyle</td><td>可用于设置 Drawer 的样式，调整浮层位置等</td><td>string | object</td><td>-</td></tr><tr><td>closable</td><td>是否显示右上角的关闭按钮</td><td>boolean</td><td>true</td></tr><tr><td>destroyOnClose</td><td>(todo) 关闭时销毁 Drawer 里的子元素</td><td>boolean</td><td>false</td></tr><tr><td>getContainer</td><td>(todo) 指定 Drawer 挂载的 HTML 节点</td><td>HTMLElement | <code>() =&gt; HTMLElement</code> | selectors</td><td>&#39;body&#39;</td></tr><tr><td>mask</td><td>是否展示遮罩</td><td>boolean</td><td>true</td></tr><tr><td>maskClosable</td><td>点击蒙层是否允许关闭</td><td>boolean</td><td>true</td></tr><tr><td>maskStyle</td><td>遮罩样式</td><td>string | object</td><td>{}</td></tr><tr><td>width</td><td>宽度</td><td>string | number</td><td>256</td></tr><tr><td>height</td><td>高度, 在 <code>placement</code> 为 <code>top</code> 或 <code>bottom</code> 时使用</td><td>string | number</td><td>256</td></tr><tr><td>placement</td><td>抽屉的方向</td><td>&#39;top&#39;  | &#39;right&#39; | &#39;bottom&#39; | &#39;left&#39;</td><td>&#39;right&#39;</td></tr><tr><td>title</td><td>标题</td><td>string</td><td>-</td></tr><tr><td>visible</td><td>Drawer 是否可见</td><td>boolean</td><td>-</td></tr><tr><td>zIndex</td><td>设置 Drawer 的 <code>z-index</code></td><td>number</td><td>1000</td></tr></tbody></table><h2 id="回调--事件">回调 &amp;&amp; 事件</h2><table><thead><tr><th>名称</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>on-close</td><td>点击遮罩层或右上角叉或取消按钮的回调</td><td>function(e)</td><td>无</td></tr></tbody></table><h2 id="插槽">插槽</h2><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>(default) 默认插槽</td><td>主体内容</td></tr></tbody></table></section>'};e.default=s.a.defineComponent({template:"\n        <div>\n            <head/>\n            <basic/>\n            <placement/>\n            <form/>\n            <profile/>\n            <readme/>\n        </div>\n    ",components:{head:a,basic:i,placement:p,form:x,profile:C,readme:E}})},637:function(t,e,o){var n=o(638);"string"==typeof n&&(n=[[t.i,n,""]]);var s={insert:"head",singleton:!1};o(5)(n,s);n.locals&&(t.exports=n.locals)},638:function(t,e,o){(t.exports=o(4)(!1)).push([t.i,"\n.form-button-wrap {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    border-top: 1px solid #e8e8e8;\n    padding: 10px 16px;\n    text-align: right;\n    left: 0;\n    background: #fff;\n    border-radius: 0 0 4px 4px;\n}\n",""])}}]);