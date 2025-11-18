# 个人介绍 Landing Page

一个现代化、美观的个人介绍页面,使用 Next.js 15 和 shadcn/ui 构建。

## ✨ 特性

### 🎨 现代化设计
- **渐变背景** - 柔和的渐变色彩和动态背景装饰
- **粒子效果** - Canvas 动态粒子背景,增强视觉层次
- **玻璃态效果** - 导航栏使用毛玻璃效果
- **流畅动画** - 页面元素淡入、悬停效果和过渡动画
- **响应式布局** - 完美适配桌面端和移动端

### 🎯 核心功能
- **导航栏** - 固定顶部导航,支持平滑滚动到各个区块
- **滚动进度条** - 顶部渐变进度条,实时显示页面滚动进度
- **返回顶部** - 滚动时自动显示的返回顶部按钮
- **主题切换** - 支持亮色/暗色主题切换
- **Hero 区块** - 个人头像、简介和社交媒体链接
- **统计数据** - 动态数字计数动画展示成就
- **技能展示** - 带进度条的技能展示,分类清晰
- **项目作品** - 项目卡片展示,带渐变背景和悬停动画
- **联系方式** - 多种联系方式展示,带彩色图标

### 🚀 技术栈
- **Next.js 15** - React 框架
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式框架
- **shadcn/ui** - UI 组件库
- **Lucide React** - 图标库
- **Canvas API** - 粒子效果

### ⚡ 性能优化
- **字体优化** - 使用 next/font 优化字体加载
- **SEO 优化** - 完整的 metadata 和 Open Graph 标签
- **懒加载** - 组件按需加载
- **Intersection Observer** - 滚动动画优化

## 📦 安装

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm run start
```

## 🎨 UI 优化亮点

### Hero 区块
- ✅ 头像带发光效果和悬停动画
- ✅ 渐变文字标题
- ✅ 装饰性背景光晕
- ✅ 社交按钮带图标缩放动画
- ✅ 全屏居中布局

### 统计数据区块
- ✅ 数字动态计数动画
- ✅ 彩色图标和卡片
- ✅ 滚动触发动画
- ✅ 响应式网格布局

### Skills 区块
- ✅ 技能进度条动画
- ✅ 三列卡片布局
- ✅ 彩色图标(前端蓝色、后端绿色、工具橙色)
- ✅ 卡片悬停上浮效果
- ✅ 百分比显示

### Projects 区块
- ✅ 项目卡片带彩色渐变背景
- ✅ 悬停时显示渐变背景
- ✅ 按钮图标旋转和位移动画
- ✅ 卡片上浮和阴影增强效果

### Contact 区块
- ✅ 联系方式卡片带品牌色图标
- ✅ 图标悬停旋转效果
- ✅ 渐变分隔线
- ✅ 页脚带心形动画

### 交互增强
- ✅ 顶部滚动进度条
- ✅ 返回顶部按钮(滚动时显示)
- ✅ 粒子背景效果
- ✅ 平滑滚动导航
- ✅ 主题切换动画

## 📝 自定义

### 修改个人信息
编辑以下文件来自定义内容:

- `components/sections/hero.tsx` - 个人信息和社交链接
- `components/sections/stats.tsx` - 统计数据
- `components/sections/skills.tsx` - 技能列表和进度
- `components/sections/projects.tsx` - 项目信息
- `components/sections/contact.tsx` - 联系方式
- `components/navbar.tsx` - 导航栏名称

### 修改主题颜色
编辑 `app/globals.css` 中的 CSS 变量来自定义主题颜色。

### 调整粒子效果
编辑 `components/particles-background.tsx` 中的参数:
- `particleCount` - 粒子数量
- `size` - 粒子大小
- `speed` - 移动速度
- `opacity` - 透明度

## 🌐 访问地址

开发服务器: http://localhost:3001

## 📊 SEO 优化

- ✅ 完整的 metadata 配置
- ✅ Open Graph 标签
- ✅ Twitter Card 支持
- ✅ 语义化 HTML
- ✅ 响应式 viewport
- ✅ 字体优化加载

## 📄 许可证

MIT License
