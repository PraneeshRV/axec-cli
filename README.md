![npm version](https://img.shields.io/npm/v/axec-cli)
![license](https://img.shields.io/github/license/PraneeshRV/axec-cli)
![issues](https://img.shields.io/github/issues/PraneeshRV/axec-cli)
![stars](https://img.shields.io/github/stars/PraneeshRV/axec-cli?style=social)

# Axec-cli  Appimage Executor

> A blazing-fast CLI tool to list and launch AppImages on Arch Linux (will work on other distros)

---

## 🚀 Features

- ⚡ List AppImages in specified directory (Default : `~/AppImages`)
- 🏃‍♂️ Run AppImages with a single command
- 🧠 Smart fallback to default AppImage folder
- ✨ Built with Node.js + Commander.js
- 💻 Designed for Arch + KDE but works on any distro

---

## 📦 Installation

```bash
npm i axec-cli
```

---

## 📂 AppImage Directory

By default, `Axec` looks for AppImages in:

```
~/AppImages
```

**You can also pass a full path to an AppImage if it's stored elsewhere.**

---

## 🧪 Usage

### List available AppImages
```bash
axec list
```

### Run an AppImage from default folder
Example:
```bash
axec run filename.AppImage
```

### Run an AppImage from a custom path
Example:
```bash
axec run ~/Downloads/filename.AppImage
```

---

## 🛠️ Commands

| Command        | Description                            |
|----------------|----------------------------------------|
| `axec list [dir]`    | Lists all `.AppImage` files in the mentioned directory (Default: `~/AppImages`) |
| `axec run <filename>` | Launches the AppImage file            |

---

## 🧱 Built With

- [Node.js](https://nodejs.org)
- [Commander.js](https://github.com/tj/commander.js)
- [Chalk](https://github.com/chalk/chalk)

---

## 🧩 Coming Soon (v1.1+)/ To-Do

- ✅ Auto `chmod +x` on non-executable AppImages
- 🔍 Fuzzy matching for partial filenames
- 🧠 Config file support for custom AppImage folders
- 🖼️ GUI version for KDE
- 📦 AUR package?

---

## 🧑‍💻 Author

Made with ❤️ by [Praneesh R V](https://github.com/PraneeshRV)

---

## 📄 License

MIT License — feel free to fork and build on top.
