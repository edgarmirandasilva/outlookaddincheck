# Installation Guide - Email Follow-Up Manager for Outlook

## Overview
This guide explains how to install and set up the Email Follow-Up Manager add-in for Microsoft Outlook. This add-in adds email follow-up functionality for IMAP accounts, similar to what's available in Exchange and POP accounts.

## Prerequisites

Before installing the add-in, ensure you have:

- **Microsoft Outlook** installed:
  - Outlook Desktop (Windows or Mac)
  - Outlook on the Web (browser-based)
  - Outlook Mobile (iOS/Android) - limited functionality
- **Administrator rights** on your computer (for some installation methods)
- **Internet connection** for downloading the add-in

## Installation Methods

### Method 1: Install from GitHub Release (Recommended for End Users)

1. **Download the Latest Release**
   - Go to the [Releases page](https://github.com/edgarmirandasilva/outlookaddincheck/releases)
   - Download the latest release package (`.zip` file)
   - Extract the ZIP file to a folder on your computer

2. **Install the Add-in**
   
   #### For Outlook Desktop (Windows):
   
   a. Open Microsoft Outlook
   
   b. Click on **File** → **Get Add-ins** (or **Manage Add-ins**)
   
   c. Select **My add-ins** from the left panel
   
   d. Click on **Add a custom add-in** → **Add from File**
   
   e. Browse to the extracted folder and select the `manifest.xml` file
   
   f. Click **Install** and confirm any security prompts
   
   g. Restart Outlook if prompted

   #### For Outlook Desktop (Mac):
   
   a. Open Microsoft Outlook
   
   b. Click on **Tools** → **Get Add-ins**
   
   c. Select **My add-ins** tab
   
   d. Click **Add a custom add-in** → **Add from File**
   
   e. Browse to the extracted folder and select the `manifest.xml` file
   
   f. Click **Install** and confirm any prompts
   
   g. Restart Outlook if needed

   #### For Outlook on the Web:
   
   a. Go to [Outlook.com](https://outlook.com) or [Outlook.office.com](https://outlook.office.com)
   
   b. Click the **Settings** gear icon (⚙️) → **View all Outlook settings**
   
   c. Go to **Mail** → **Customize actions** → **Get Add-ins**
   
   d. Click on **My add-ins** tab
   
   e. Under **Custom add-ins**, click **Add a custom add-in** → **Add from File**
   
   f. Upload the `manifest.xml` file from the extracted folder
   
   g. Click **Install** and confirm

3. **Verify Installation**
   - Open any email in Outlook
   - Look for the **"Follow-Up"** group in the ribbon
   - You should see buttons: **"Open Follow-Up"** and **"Mark Completed"**

### Method 2: Install from Centralized Deployment (For Organizations)

If you're an IT administrator deploying this add-in to your organization:

1. **Access Microsoft 365 Admin Center**
   - Go to [admin.microsoft.com](https://admin.microsoft.com)
   - Navigate to **Settings** → **Integrated apps**

2. **Upload the Add-in**
   - Click **Upload custom apps**
   - Upload the `manifest.xml` file
   - Configure which users or groups should receive the add-in

3. **Deploy**
   - Click **Deploy** and wait for deployment to complete
   - Users will automatically see the add-in in their Outlook

### Method 3: Development Installation (For Developers)

If you want to modify or develop the add-in:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/edgarmirandasilva/outlookaddincheck.git
   cd outlookaddincheck
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Generate Development Certificates**
   ```bash
   npx office-addin-dev-certs install
   ```

4. **Start Development Server**
   ```bash
   npm run dev-server
   ```

5. **Sideload the Add-in**
   - In a new terminal:
   ```bash
   npm start
   ```
   - This will automatically open Outlook with the add-in loaded

## Post-Installation Setup

After installation, the add-in is ready to use immediately. No additional configuration is required.

### First Use

1. **Open an email** in Outlook
2. **Look for the ribbon buttons**:
   - **"Open Follow-Up"**: Opens the task pane with full options
   - **"Mark Completed"**: Quick action to mark an email as completed
3. **Start using the add-in** to manage your email follow-ups

## Troubleshooting

### The add-in doesn't appear in Outlook

**Solution 1: Restart Outlook**
- Close Outlook completely
- Reopen Outlook and check again

**Solution 2: Clear Office Cache**

On Windows:
```
%LOCALAPPDATA%\Microsoft\Office\16.0\Wef\
```
Delete the contents of this folder and restart Outlook.

On Mac:
```
~/Library/Containers/com.microsoft.Outlook/Data/Library/Caches/
```
Delete the contents and restart Outlook.

**Solution 3: Reinstall the add-in**
- Remove the add-in using the same method you installed it
- Wait a few minutes
- Install it again following the installation steps

### Buttons are grayed out

- Make sure you have an email **open** (not just selected)
- The add-in only works with opened emails in read mode

### Changes don't persist

- Ensure you have write permissions for the email account
- IMAP accounts: Verify that custom properties are supported by your mail server
- Try marking the email again

### Icons not showing correctly

- The add-in requires internet connection to load Office.js
- Check your firewall settings
- Ensure CDN access is not blocked

### Installation fails with security warning

- The add-in requires trust from your organization
- Contact your IT administrator if you cannot install custom add-ins
- For personal accounts, ensure you're using a supported Outlook version

## Updating the Add-in

When a new version is released:

1. **Remove the old version**:
   - Go to **File** → **Get Add-ins** → **My add-ins**
   - Click the three dots (...) next to "Email Follow-Up Manager"
   - Select **Remove**

2. **Install the new version**:
   - Follow the installation steps above with the new release package

## Uninstallation

To remove the add-in:

1. Open Outlook
2. Go to **File** → **Get Add-ins** → **My add-ins**
3. Find "Email Follow-Up Manager" in the list
4. Click the three dots (...) → **Remove**
5. Confirm the removal

All follow-up data stored in email properties will remain intact even after uninstallation.

## System Requirements

### Minimum Requirements
- **Operating System**: Windows 10+ or macOS 10.15+
- **Outlook Version**: 
  - Outlook 2016 or later (Desktop)
  - Outlook on the Web (any modern browser)
  - Outlook Mobile (iOS 12+ / Android 8+)
- **Internet Connection**: Required for initial setup and Office.js API

### Supported Account Types
- ✅ IMAP
- ✅ POP3
- ✅ Exchange
- ✅ Office 365 / Microsoft 365
- ✅ Outlook.com

## Getting Help

If you encounter issues not covered in this guide:

1. **Check existing issues**: [GitHub Issues](https://github.com/edgarmirandasilva/outlookaddincheck/issues)
2. **Create a new issue**: Describe your problem with:
   - Outlook version
   - Operating system
   - Account type (IMAP/Exchange/etc.)
   - Steps to reproduce the issue
3. **Contact**: Edgar Miranda Silva via GitHub

## Privacy & Security

- The add-in runs **locally** in your Outlook client
- **No data is sent** to external servers
- Follow-up information is stored in **email custom properties**
- Categories are stored in **Outlook's category system**
- All data remains **on your mail server**

## Additional Resources

- **User Guide (English)**: [README.md](README.md)
- **User Guide (Portuguese)**: [GUIA_PT.md](GUIA_PT.md)
- **Testing Guide**: [TESTING.md](TESTING.md)
- **Implementation Details**: [IMPLEMENTATION.md](IMPLEMENTATION.md)
- **GitHub Repository**: [https://github.com/edgarmirandasilva/outlookaddincheck](https://github.com/edgarmirandasilva/outlookaddincheck)

## License

This add-in is released under the MIT License. See LICENSE file for details.
