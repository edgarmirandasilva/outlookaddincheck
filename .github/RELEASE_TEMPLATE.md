# Release Template for GitHub

Use this template when creating a new release on GitHub.

---

## What's New in v1.0.0

🎉 **Initial Release** of Email Follow-Up Manager for Outlook!

This add-in brings email follow-up functionality to IMAP accounts, similar to what's available in Exchange and POP accounts.

### ✨ Features

- ✅ **Follow-up flag management** - Set, complete, and clear follow-up flags on emails
- ✅ **Visual indicators** - See at a glance which emails need follow-up
  - 📭 No flag
  - 🚩 Pending follow-up (yellow/gold background)
  - ✓ Completed (green background with checkmark)
- ✅ **Task pane interface** - Comprehensive controls for managing follow-ups
- ✅ **Quick action buttons** - Ribbon buttons for fast access:
  - "Open Follow-Up" - Opens the task pane
  - "Mark Completed" - Instantly marks email as done
- ✅ **Email information display** - Shows subject and sender
- ✅ **Category integration** - Uses Outlook categories for organization
- ✅ **Toast notifications** - Confirms actions
- ✅ **Persistent storage** - Follow-up state saved in email properties

### 🌐 Platform Support

- ✅ Outlook on Windows (Desktop)
- ✅ Outlook on Mac (Desktop)
- ✅ Outlook on the Web
- ⚠️ Outlook on iOS (limited functionality)
- ⚠️ Outlook on Android (limited functionality)

### 📦 Supported Account Types

- ✅ IMAP (primary target)
- ✅ POP3
- ✅ Exchange
- ✅ Office 365 / Microsoft 365
- ✅ Outlook.com

### 📥 Installation

**Quick Install:**
1. Download `outlook-addin-followup-v1.0.0.zip` below
2. Extract the ZIP file to a folder on your computer
3. Open Microsoft Outlook
4. Go to **File** → **Get Add-ins** → **My add-ins**
5. Click **Add a custom add-in** → **Add from File**
6. Select the `manifest.xml` file from the extracted folder
7. Click **Install** and restart Outlook if prompted

**Detailed Instructions:** See [INSTALL.md](https://github.com/edgarmirandasilva/outlookaddincheck/blob/main/INSTALL.md) for complete installation guide including troubleshooting.

### 📖 Documentation

- **[Installation Guide](https://github.com/edgarmirandasilva/outlookaddincheck/blob/main/INSTALL.md)** - Detailed installation and troubleshooting
- **[User Guide (English)](https://github.com/edgarmirandasilva/outlookaddincheck/blob/main/README.md)** - How to use the add-in
- **[User Guide (Portuguese)](https://github.com/edgarmirandasilva/outlookaddincheck/blob/main/GUIA_PT.md)** - Guia completo em Português
- **[Testing Guide](https://github.com/edgarmirandasilva/outlookaddincheck/blob/main/TESTING.md)** - How to test functionality
- **[Changelog](https://github.com/edgarmirandasilva/outlookaddincheck/blob/main/CHANGELOG.md)** - Complete version history

### 🔧 How to Use

1. **Open an email** in Outlook
2. Look for the **"Follow-Up"** section in the ribbon
3. Click **"Open Follow-Up"** to open the task pane
4. Use the buttons to:
   - **Set Follow-Up Flag** - Mark email for later action
   - **Mark as Completed** - Mark task as done (email stays in inbox)
   - **Clear Flag** - Remove all flags

Or use the quick action:
- Click **"Mark Completed"** button directly in the ribbon for instant completion

### 🔒 Privacy & Security

- ✅ All processing happens **locally** in your Outlook client
- ✅ **No data** is sent to external servers
- ✅ Follow-up information stored in **email custom properties**
- ✅ All data remains **on your mail server**
- ✅ **0 security vulnerabilities** (CodeQL scanned)

### 🐛 Known Limitations

- Icons use emoji (may display differently on different operating systems)
- Mobile platforms have limited functionality compared to desktop
- Requires internet connection for Office.js API (standard for Office add-ins)

### 📋 System Requirements

**Minimum:**
- Windows 10+ or macOS 10.15+
- Outlook 2016 or later (Desktop) / Outlook on the Web (any modern browser)
- Internet connection

### 🆘 Getting Help

- **Issues**: Report bugs or request features in [GitHub Issues](https://github.com/edgarmirandasilva/outlookaddincheck/issues)
- **Troubleshooting**: See [INSTALL.md](https://github.com/edgarmirandasilva/outlookaddincheck/blob/main/INSTALL.md#troubleshooting)

### 📦 Release Assets

- **outlook-addin-followup-v1.0.0.zip** - Complete installation package
- **manifest.xml** - Manifest file (for quick access)

### 🙏 Acknowledgments

Thanks to the Office Add-ins team at Microsoft for the excellent documentation and tools.

### 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/edgarmirandasilva/outlookaddincheck/blob/main/LICENSE) file for details.

---

**Full Changelog**: https://github.com/edgarmirandasilva/outlookaddincheck/blob/main/CHANGELOG.md
