
# Axec 🪓

> A blazing-fast CLI tool to list and launch AppImages on Arch Linux — built for KDE warriors.

---

## 🚀 Features

- ⚡ List AppImages in specified directory (Default : `~/AppImages`)
- 🏃‍♂️ Run AppImages with a single command
- 🧠 Smart fallback to default AppImage folder
- ✨ Built with Node.js + Commander.js
- 💻 Designed for Arch + KDE but works on any distro

---

## 📦 Installation

### Global (Recommended)

```bash
npm install -g @praneesh/axec
```

### Or use via `npx`:

```bash
npx @praneesh/axec list
```

---

## 📂 AppImage Directory

By default, `Axec` looks for AppImages in:

```
~/AppImages
```

You can also pass a full path to an AppImage if it's stored elsewhere.

---

## 🧪 Usage

### List available AppImages
```bash
axec list
```

### Run an AppImage from default folder
```bash
axec run Obsidian-1.9.10.AppImage
```

### Run an AppImage from a custom path
```bash
axec run ~/Downloads/Obsidian-1.9.10.AppImage
```

---

## 🛠️ Commands

| Command        | Description                            |
|----------------|----------------------------------------|
| `axec list`    | Lists all `.AppImage` files in `~/AppImages` |
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