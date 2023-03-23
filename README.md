# Uni vue2速开项目

Uniapp + vue2 + vuex + uniui + tailwinCSS

[uniapp - 官方模板](https://github.com/dcloudio/uni-preset-vue) 
[uniapp - 模板文档](https://uniapp.dcloud.net.cn/quickstart-cli.html) 
[uni-ui](https://uniapp.dcloud.net.cn/component/uniui/uni-ui.html) 
[Vue2](https://v2.cn.vuejs.org/v2/guide/) 
[Vuex](https://v3.vuex.vuejs.org/zh/) 
[Tailwindcss](https://www.tailwindcss.cn/docs) 
[Tailwindcss支持小程序](https://blog.csdn.net/TIAN20121221/article/details/117301282?spm=1001.2014.3001.5502) 

多平台条件编译
vue2

启动 H5 项目
```shell
npm run dev:h5
```

启动 Android 项目
```shell
npm run dev:app-android
```

启动 微信小程序 项目
```shell
npm run dev:mp-weixin
```

# 使用 Iconfont 

登录 [iconfont](https://www.iconfont.cn/) 选择图标后，下载至本地。 得到的是一个压缩包，将里面的 `iconfont.css` 和  `iconfont.ttf` 替换到 `src/static` 目录下。

页面中类似使用如下方式引用
```html
    <view class="iconfont icon-bofang_huaban text-red-500"></view>
```