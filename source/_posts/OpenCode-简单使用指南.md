---
title: OpenCode 简单使用指南
tags:
  - AI
  - 编程工具
categories: 工具
abbrlink: 91ad96ae
date: 2026-05-11 11:05:00
---

## 什么是 OpenCode？

OpenCode 是一个开源的 AI 编程助手，支持多种 AI 模型，可以在终端中自主完成代码编写、重构、审查等任务。

## 安装

```bash
# npm 安装
npm i -g opencode-ai@latest

# 或使用 Homebrew (macOS)
brew install anomalyco/tap/opencode
```

## 认证配置

```bash
# 登录认证
opencode auth login

# 或设置环境变量
export OPENROUTER_API_KEY=your_key
```

## 基本用法

### 单次任务

使用 `opencode run` 执行一次性任务：

```bash
# 简单任务
opencode run '为 API 调用添加重试逻辑'

# 附加文件作为上下文
opencode run '检查这个配置文件的安全问题' -f config.yaml -f .env.example

# 指定模型
opencode run '重构认证模块' --model openrouter/anthropic/claude-sonnet-4

# 显示模型思考过程
opencode run '调试 CI 中失败的测试' --thinking
```

### 交互式会话（快捷键）

对于需要多轮交互的任务，直接运行 `opencode` 进入 TUI 界面：

```bash
# 在项目目录启动
cd your-project
opencode
```

**常用快捷键：**

| 快捷键 | 功能 |
|--------|------|
| `Ctrl + U` | 一次性删掉光标到行首的所有内容 |
| `Ctrl + A` | 移动到行首 |
| `Ctrl + E` | 移动到行尾 |
| `Enter` | 发送消息 |
| `Tab` | 切换代理模式（build/plan） |
| `Ctrl+P` | 打开命令面板 |
| `Ctrl+X L` | 切换会话 |
| `Ctrl+X M` | 切换模型 |
| `Ctrl+C` | 退出 |

### 恢复会话

```bash
# 继续上次会话
opencode -c

# 恢复指定会话
opencode -s ses_abc123
```

## PR 审查工作流

```bash
# 审查指定 PR
opencode pr 42
```

## 常用参数

| 参数 | 用途 |
|------|------|
| `run 'prompt'` | 单次执行并退出 |
| `-c` / `--continue` | 继续上次会话 |
| `-s <id>` | 恢复指定会话 |
| `--model` | 指定模型 |
| `-f <file>` | 附加文件 |
| `--thinking` | 显示思考过程 |

## 查看使用统计

```bash
# 查看会话列表
opencode session list

# 查看费用和 token 使用量
opencode stats
opencode stats --days 7
```

## 注意事项

1. 交互式会话需要终端支持（在 Hermes 中使用 `pty=true`）
2. 使用 `Ctrl+C` 退出，不要用 `/exit`
3. 并行任务使用不同的工作目录避免冲突
4. 单次任务用 `opencode run` 更简单
