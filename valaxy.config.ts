import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'
import { addonWaline } from 'valaxy-addon-waline'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '沿途皆是风景',
    },

    // pages: [
    //   {
    //     name: '我的小伙伴们',
    //     url: '/links/',
    //     icon: 'i-ri-genderless-line',
    //     color: 'dodgerblue',
    //   },
    //   {
    //     name: '喜欢的女孩子',
    //     url: '/girls/',
    //     icon: 'i-ri-women-line',
    //     color: 'hotpink',
    //   },
    // ],

    footer: {
      since: 2024,
      beian: {
        enable: false,
        icp: '苏ICP备17038157号',
      },
    },
    
    bg_image: {
      enable: true,
      url: 'https://s21.ax1x.com/2025/07/20/pV8m76g.jpg',
      dark: 'https://s21.ax1x.com/2025/07/23/pVGdu4K.jpg',
      opacity: 0.7, 
    },

    /**
   * [@explosions/fireworks](https://www.npmjs.com/package/@explosions/fireworks)
   * @en - Fireworks when click
   * @zh - 点击时的烟花效果
   */
  fireworks: {
    enable: true,
    /**
     * @en - Fireworks colors
     * @zh - 烟花颜色
     * @default ['#66A7DD', '#3E83E1', '#214EC2']
     */
    colors: ['#66A7DD', '#3E83E1', '#214EC2']
  }
  },

  unocss: { safelist },

  siteConfig: {
    // 启用评论
    comment: {
      enable: true
    },
  },
  // 设置 valaxy-addon-waline 配置项
  addons: [
    addonWaline({
      // Waline 配置项，参考 https://waline.js.org/reference/client/props.html
      serverURL: 'https://hexo-page-waline.vercel.app/',
      dark: 'auto',
    }),
  ],
})
