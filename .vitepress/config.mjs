import { defineConfig } from 'vitepress'
import { set_sidebar } from 'D:/soft/Java/vitepress/.vitepress/utils/sidebar.js'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 不配置docs就默认当前目录
  //base: "/wanye-chen/",
  title: "Wanye Chen 的文档站",
  description: "学无止境",
  lastUpdated: true,
  markdown: {
    theme: "github-dark",
    //显示行号
    lineNumbers: true,
  },
  //titleTemplate: "博客",
  themeConfig: {
    outlineTitle:"目录",
    //右边栏目录
    outline:[1,6],

    logo: "/logo-文档.svg",
    //https://vitepress.dev/reference/default-theme-config
    nav: [
      
      { text: 'Home', link: '/' },
      { text: '前端',items: [
          {text: 'HTML', link: '/frontend/HTML/'},
          {text: 'CSS', link: '/frontend/CSS/'},
          {text: 'JS', link: '/frontend/JS/'},
        ]
      
      },

      { text: '后端', link: '/backend/' },
      { text: 'Linux', link: '/linux/' },

      { text: '数据库', items: [
          {text: 'MySQL', link: '/database/mysql/'},
          {text: 'Oracle', link: '/database/oracle/'},
        ]
      }
    ],

sidebar: {
          "/frontend/HTML": set_sidebar("/frontend/HTML"),
          "/database/mysql": set_sidebar("/database/mysql"),
          "/linux": set_sidebar("/linux"),
          "/backend/": set_sidebar("/backend/"),
  },

    // sidebar: [
    //   {
    //     text: '前端',
    //     //是否可以折叠内容
    //     collapsible: true,
    //     //默认折叠还是展开内容
    //     collapsed: false,
    //     items: [
    //       // 前面的text是左边栏目录，link为实际文件
    //       { text: 'HTML基础', link: '/frontend/HTML/index'},
    //       { text: 'HTML高级', link: '/frontend/HTML/HTML高级'},
    //       { text: '标签学习', link: '/frontend/HTML/标签学习' }
    //     ]
    //   }
    // ],




    socialLinks: [
      { logo: '/gitee.svg', link: 'https://gitee.com/chenwanye' }
    ],
    footer: {
      // message: 'Released under the MIT License.',
      copyright: 'Copyright©2019-2014 Wanye Chen'
    }
  }
})
