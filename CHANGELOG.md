# Changelog

All notable changes to the Email Follow-Up Manager for Outlook will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-02-09

### Added
- Initial release of Email Follow-Up Manager for Outlook
- Follow-up flag management for emails
- Mark emails as completed with visual indicators
- Support for IMAP, POP, Exchange, and Office 365 accounts
- Task pane interface with three states:
  - No flag (📭)
  - Pending follow-up (🚩)
  - Completed (✓)
- Ribbon buttons:
  - "Open Follow-Up": Opens task pane
  - "Mark Completed": Quick action button
- Three main operations:
  - Set Follow-Up Flag
  - Mark as Completed
  - Clear Flag
- Outlook category integration:
  - "Follow Up" category for pending tasks
  - "Follow Up - Completed" category for completed tasks
- Email information display (subject and sender)
- Status indicator with color-coded backgrounds:
  - Yellow/gold for pending
  - Green for completed
- Toast notifications for user actions
- Custom properties storage for persistent state
- Comprehensive documentation:
  - English user guide (README.md)
  - Portuguese user guide (GUIA_PT.md)
  - Installation guide (INSTALL.md)
  - Testing guide (TESTING.md)
  - Implementation details (IMPLEMENTATION.md)

### Platform Support
- ✅ Outlook on Windows (Desktop)
- ✅ Outlook on Mac (Desktop)
- ✅ Outlook on the Web
- ✅ Outlook on iOS (limited)
- ✅ Outlook on Android (limited)

### Technical Details
- Office.js API integration
- Webpack build system
- Development server with HTTPS
- Manifest validation tools
- Production-ready minified builds

### Security
- CodeQL security scanning: 0 vulnerabilities
- No external data transmission
- Local storage only (email properties)
- Secure HTTPS requirement

## [Unreleased]

### Planned Features
Future versions may include:
- Custom icon files (replacing emoji)
- Due date selection for follow-ups
- Priority levels
- Bulk operations
- Email reminders
- Integration with Microsoft To-Do
- Recurring follow-up templates
- Follow-up statistics and reports

---

## Release Notes Format

### Types of Changes
- **Added**: New features
- **Changed**: Changes in existing functionality
- **Deprecated**: Soon-to-be removed features
- **Removed**: Removed features
- **Fixed**: Bug fixes
- **Security**: Security improvements

### Version Numbering
This project follows [Semantic Versioning](https://semver.org/):
- **MAJOR** version: Incompatible API changes
- **MINOR** version: Backwards-compatible functionality additions
- **PATCH** version: Backwards-compatible bug fixes

---

[1.0.0]: https://github.com/edgarmirandasilva/outlookaddincheck/releases/tag/v1.0.0
[Unreleased]: https://github.com/edgarmirandasilva/outlookaddincheck/compare/v1.0.0...HEAD
