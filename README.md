# 📝 Winston Logger for NestJS

A highly configurable and structured logger for NestJS using Winston and Daily Rotate File. This logger supports multiple logging levels, customizable formats, and log file rotation, making it ideal for production-grade applications.

## 🚀 Features

- 📜 **Multiple Logging Levels**: Includes standard CLI, NPM, and syslog levels.
- 🎨 **Colorized Console Output**: Enhanced readability for development.
- 📂 **Daily Rotate File Logging**: Logs are rotated daily with size and retention management.
- ⚡ **Customizable Levels and Colors**: Tailor log levels to your project needs.
- 🌍 **Environment-Aware Logging**: Console logging is disabled in production.

## 📦 Installation

```bash
npm install winston winston-daily-rotate-file
```

## 🔧 Usage

### 1️⃣ Import and Use the Logger

Since this is a standalone TypeScript file, you can import and use it anywhere in your NestJS project.

```typescript
import { WinstonLogger } from './winston-logger'

const logger = new WinstonLogger()

logger.info('Application started successfully')
logger.error('An error occurred', 'ErrorTraceDetails')
```

## 🎯 Logging Levels

This logger supports various log levels categorized into **CLI & NPM Levels** and **Syslog Levels**.

### 🔹 CLI & NPM Levels

- `error`, `warn`, `info`, `debug`, `http`, `verbose`, `input`, `silly`, `data`, `help`, `prompt`

### 🔸 Syslog Levels

- `emerg`, `alert`, `crit`, `notice`

Example:

```typescript
logger.warn('This is a warning')
logger.crit('Critical system failure!')
```

## 📜 Log File Management

- Logs are stored in the `logs/` directory.
- Log rotation follows **daily rotation** with:
    - `maxSize: 30m` (Max log file size per day: 30MB)
    - `maxFiles: 20d` (Logs retained for 20 days)

## 🎨 Console Output (Development Mode)

![Console Log Example](https://via.placeholder.com/800x400.png?text=Console+Logging+Example)

## 📌 Contributing

Feel free to open issues and PRs if you find any improvements! 🚀

## 📄 License

MIT License. Free to use and modify.

## 🌟 Show Your Support

If you find this logger helpful, give it a ⭐ on GitHub and share it on LinkedIn! 🚀
