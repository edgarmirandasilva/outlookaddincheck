# Outlook Add-in: Email Follow-Up Manager

[![GitHub release](https://img.shields.io/github/v/release/edgarmirandasilva/outlookaddincheck)](https://github.com/edgarmirandasilva/outlookaddincheck/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Overview
Este suplemento do Outlook imita a funcionalidade de follow-up que existe no Outlook quando está conectado a um Exchange ou POP, mas agora também disponível para contas IMAP.

## Funcionalidades

Depois de tratar a ação relacionada com o email:
- Clica no sinalizador junto ao email (na coluna "Follow Up")
- Seleciona "Marcar como Concluído"
- O sinalizador muda de cor/estado para indicar que a tarefa foi feita
- No Outlook moderno, aparece um check verde (✓)
- O email continua na caixa de entrada, mas a tarefa associada desaparece da lista de pendências

## Features
- ✓ Mark emails as completed with follow-up flags
- ✓ Visual indication with green check mark when completed
- ✓ Emails remain in inbox after marking as completed
- ✓ Tasks removed from pending list when completed
- ✓ Support for IMAP accounts
- ✓ Integration with Outlook categories

## 📥 Installation

### For End Users

**Quick Install:**
1. Download the [latest release](https://github.com/edgarmirandasilva/outlookaddincheck/releases)
2. Extract the ZIP file
3. Follow the installation guide: **[INSTALL.md](INSTALL.md)**

For detailed installation instructions including troubleshooting, see the **[Installation Guide](INSTALL.md)**.

### For Developers

#### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- Microsoft Outlook (Desktop, Online, or Mac)

#### Setup
1. Clone this repository:
   ```bash
   git clone https://github.com/edgarmirandasilva/outlookaddincheck.git
   cd outlookaddincheck
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Generate development certificates (required for HTTPS):
   ```bash
   npx office-addin-dev-certs install
   ```

4. Start the development server:
   ```bash
   npm run dev-server
   ```

5. In a new terminal, sideload the add-in to Outlook:
   ```bash
   npm start
   ```

## Usage

### Using the Task Pane
1. Open an email in Outlook
2. Click on the "Open Follow-Up" button in the ribbon
3. The task pane will open showing the current follow-up status
4. Click "Mark as Completed" to mark the email as done
5. The flag will change to a green check mark (✓)

### Using the Ribbon Button
1. Open an email in Outlook
2. Click on the "Mark Completed" button in the ribbon
3. The email will be immediately marked as completed
4. A notification will confirm the action

## How it Works

### Follow-Up States
- **No Flag**: Email has no follow-up flag set
- **Pending Follow-Up**: Email is flagged for follow-up (red flag 🚩)
- **Completed**: Email follow-up is marked as done (green check ✓)

### Technical Implementation
- Uses Office.js API for Outlook integration
- Stores follow-up status in custom properties
- Uses Outlook categories for visual indication
- Compatible with IMAP, POP, and Exchange accounts

## Development

### Build for Production
```bash
npm run build
```

### Validate Manifest
```bash
npm run validate
```

### Stop Debugging
```bash
npm stop
```

## File Structure
```
outlookaddincheck/
├── manifest.xml          # Add-in manifest configuration
├── package.json          # Node.js dependencies
├── webpack.config.js     # Webpack configuration
├── taskpane.html         # Task pane UI
├── taskpane.js           # Task pane functionality
├── commands.html         # Ribbon commands
├── assets/               # Icons and images
├── README.md             # This file - User guide (English)
├── INSTALL.md            # Installation guide
├── GUIA_PT.md            # User guide (Portuguese)
├── CHANGELOG.md          # Version history
├── RELEASE.md            # Release guide for maintainers
├── TESTING.md            # Testing guide
└── IMPLEMENTATION.md     # Implementation details
```

## Compatibility
- Outlook on Windows
- Outlook on Mac
- Outlook on the web
- Outlook on iOS (limited)
- Outlook on Android (limited)

## 📚 Documentation

- **[Installation Guide](INSTALL.md)** - Detailed installation instructions for end users
- **[User Guide (Portuguese)](GUIA_PT.md)** - Complete guide in Portuguese
- **[Testing Guide](TESTING.md)** - How to test the add-in
- **[Implementation Details](IMPLEMENTATION.md)** - Technical architecture
- **[Changelog](CHANGELOG.md)** - Version history and release notes
- **[Release Guide](RELEASE.md)** - For maintainers creating new releases

## 🚀 Releases

Download the latest release from the [Releases page](https://github.com/edgarmirandasilva/outlookaddincheck/releases).

### Current Version: 1.0.0

See [CHANGELOG.md](CHANGELOG.md) for release history and details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## License
MIT

## Author
Edgar Miranda Silva
