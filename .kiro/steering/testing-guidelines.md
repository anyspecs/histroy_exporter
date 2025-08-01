---
inclusion: manual
---

# 测试指南

## 浏览器扩展测试策略

### 手动测试

1. **开发环境测试**

   - 使用 `npm run dev` 启动开发服务器
   - 在浏览器中加载未打包的扩展
   - 测试各个平台的对话提取功能

2. **跨浏览器测试**

   - Chrome: `npm run dev`
   - Firefox: `npm run dev:firefox`
   - 验证 API 兼容性和 UI 表现

3. **功能测试检查清单**
   - [ ] 扩展图标在支持的网站上激活
   - [ ] Popup 界面正确显示
   - [ ] 各种导出格式功能正常
   - [ ] 文件下载成功
   - [ ] 错误处理和用户反馈

### 平台特定测试

- **ChatGPT**: 测试不同对话长度和格式
- **Claude**: 验证代码块和格式化内容
- **Poe**: 检查多轮对话提取

### DOM 解析测试

- 验证选择器在页面更新后仍然有效
- 测试动态加载内容的处理
- 检查边界情况（空对话、特殊字符）

### 性能测试

- 大量对话内容的处理性能
- 内存使用情况监控
- 文件导出速度测试

## 调试技巧

- 使用浏览器开发者工具的扩展调试功能
- 在 content script 中使用 `console.log` 调试
- 检查 background script 的错误日志
- 使用 WXT 的开发模式热重载功能
