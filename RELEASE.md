# Release Guide for Maintainers

This document provides instructions for project maintainers on how to create and publish releases of the Email Follow-Up Manager for Outlook.

## Release Checklist

Before creating a new release, ensure:

- [ ] All features for the release are complete and merged
- [ ] All tests pass (see TESTING.md)
- [ ] Documentation is up-to-date
- [ ] CHANGELOG.md is updated with release notes
- [ ] Version numbers are updated in all files
- [ ] Code has been reviewed for security issues
- [ ] Build succeeds without errors

## Version Numbering

This project follows [Semantic Versioning](https://semver.org/):

- **MAJOR** (X.0.0): Breaking changes, incompatible API changes
- **MINOR** (1.X.0): New features, backwards-compatible
- **PATCH** (1.0.X): Bug fixes, backwards-compatible

## Pre-Release Steps

### 1. Update Version Numbers

Update the version in the following files:

**package.json:**
```json
{
  "version": "1.0.0"
}
```

**manifest.xml:**
```xml
<Version>1.0.0.0</Version>
```

### 2. Update CHANGELOG.md

Move items from `[Unreleased]` section to a new version section:

```markdown
## [1.0.0] - 2026-02-09

### Added
- Feature 1
- Feature 2

### Fixed
- Bug fix 1

### Changed
- Change 1
```

Add the version link at the bottom:
```markdown
[1.0.0]: https://github.com/edgarmirandasilva/outlookaddincheck/releases/tag/v1.0.0
```

### 3. Build the Production Release

```bash
# Install dependencies (if not already done)
npm install

# Build for production
npm run build

# Validate the manifest
npm run validate
```

Verify the build output in the `dist/` folder.

### 4. Test the Build

Follow the steps in TESTING.md to ensure the production build works correctly:

1. Test basic functionality
2. Test all three operations (Set, Complete, Clear)
3. Test on different platforms if possible
4. Verify there are no console errors

### 5. Commit Version Changes

```bash
git add package.json manifest.xml CHANGELOG.md
git commit -m "Bump version to 1.0.0"
git push origin main
```

## Creating the Release

### Step 1: Create a Git Tag

```bash
# Create annotated tag
git tag -a v1.0.0 -m "Release version 1.0.0"

# Push the tag to GitHub
git push origin v1.0.0
```

### Step 2: Create GitHub Release

1. **Go to GitHub**
   - Navigate to: https://github.com/edgarmirandasilva/outlookaddincheck/releases

2. **Click "Draft a new release"**

3. **Fill in Release Details:**
   - **Tag version**: Select `v1.0.0` (the tag you just created)
   - **Release title**: `v1.0.0 - Email Follow-Up Manager`
   - **Description**: Copy from CHANGELOG.md, format nicely

   Example description:
   ```markdown
   ## What's New in v1.0.0
   
   Initial release of Email Follow-Up Manager for Outlook!
   
   ### Features
   - ✅ Follow-up flag management for emails
   - ✅ Mark emails as completed with visual indicators
   - ✅ Support for IMAP, POP, Exchange, and Office 365 accounts
   - ✅ Task pane interface with clear status indicators
   - ✅ Quick action ribbon buttons
   
   ### Platform Support
   - Outlook on Windows (Desktop)
   - Outlook on Mac (Desktop)  
   - Outlook on the Web
   - Outlook on Mobile (limited)
   
   ### Installation
   
   See [INSTALL.md](INSTALL.md) for detailed installation instructions.
   
   **Quick Install:**
   1. Download the release package below
   2. Extract the ZIP file
   3. In Outlook, go to File → Get Add-ins → My add-ins
   4. Click "Add a custom add-in" → "Add from File"
   5. Select the `manifest.xml` file
   
   ### Documentation
   - [Installation Guide](INSTALL.md)
   - [User Guide (English)](README.md)
   - [User Guide (Portuguese)](GUIA_PT.md)
   - [Testing Guide](TESTING.md)
   
   ### Full Changelog
   See [CHANGELOG.md](CHANGELOG.md) for complete details.
   ```

### Step 3: Prepare Release Assets

Create a release package with necessary files:

```bash
# Create a release directory
mkdir -p release/outlook-addin-followup-v1.0.0

# Copy necessary files
cp manifest.xml release/outlook-addin-followup-v1.0.0/
cp -r dist/* release/outlook-addin-followup-v1.0.0/
cp -r assets release/outlook-addin-followup-v1.0.0/
cp README.md release/outlook-addin-followup-v1.0.0/
cp INSTALL.md release/outlook-addin-followup-v1.0.0/
cp CHANGELOG.md release/outlook-addin-followup-v1.0.0/
cp LICENSE release/outlook-addin-followup-v1.0.0/ # if exists

# Create ZIP file
cd release
zip -r outlook-addin-followup-v1.0.0.zip outlook-addin-followup-v1.0.0/
cd ..
```

### Step 4: Upload Release Assets

1. In the GitHub release page, under "Attach binaries", click to upload
2. Upload the ZIP file: `outlook-addin-followup-v1.0.0.zip`
3. Optionally upload the `manifest.xml` separately for quick access

### Step 5: Publish Release

1. **Review all details**
2. Choose release type:
   - ✅ **"Set as the latest release"** (for stable releases)
   - ⚠️ **"Set as a pre-release"** (for beta/alpha versions)
3. Click **"Publish release"**

## Post-Release Steps

### 1. Announce the Release

Consider announcing on:
- GitHub Discussions
- Project README (add a badge)
- Social media if applicable
- Email to users/contributors

### 2. Update README Badges (Optional)

Add a release badge to README.md:

```markdown
[![GitHub release](https://img.shields.io/github/v/release/edgarmirandasilva/outlookaddincheck)](https://github.com/edgarmirandasilva/outlookaddincheck/releases)
```

### 3. Monitor for Issues

After release:
- Watch for new issues on GitHub
- Monitor user feedback
- Be ready to create patch releases if critical bugs are found

## Hotfix Release Process

For urgent bug fixes:

1. Create a hotfix branch from the release tag:
   ```bash
   git checkout -b hotfix/1.0.1 v1.0.0
   ```

2. Fix the bug and commit

3. Update version to 1.0.1 in package.json and manifest.xml

4. Update CHANGELOG.md with fix details

5. Merge to main and follow normal release process

6. Tag as v1.0.1

## Release Package Contents

A complete release package should include:

```
outlook-addin-followup-v1.0.0/
├── manifest.xml              # Required: Add-in manifest
├── taskpane.html             # Required: Main UI
├── taskpane.js               # Required: Main logic (or .bundle.js)
├── commands.html             # Required: Ribbon commands
├── commands.js               # Required: Command handlers (or .bundle.js)
├── assets/                   # Required: Icons and images
│   ├── icon-16.png
│   ├── icon-32.png
│   ├── icon-64.png
│   └── icon-80.png
├── README.md                 # Recommended: User documentation
├── INSTALL.md                # Recommended: Installation guide
├── CHANGELOG.md              # Recommended: Version history
└── LICENSE                   # Recommended: License file
```

## Troubleshooting Release Issues

### Build Fails

```bash
# Clean and rebuild
rm -rf dist/ node_modules/
npm install
npm run build
```

### Manifest Validation Fails

```bash
# Validate manifest
npm run validate

# Common issues:
# - Icon URLs incorrect
# - Version format wrong (must be X.X.X.X)
# - Invalid XML syntax
```

### Git Tag Already Exists

```bash
# Delete local tag
git tag -d v1.0.0

# Delete remote tag
git push origin :refs/tags/v1.0.0

# Recreate tag
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

## Versioning Strategy

### When to Bump Major Version (2.0.0)
- Breaking changes to manifest structure
- Removed features
- Changed behavior that breaks existing installations

### When to Bump Minor Version (1.1.0)
- New features added
- New commands or buttons
- New configuration options
- Backwards-compatible changes

### When to Bump Patch Version (1.0.1)
- Bug fixes
- Documentation updates
- Performance improvements
- Security patches

## Rollback Procedure

If a release has critical issues:

1. **Create hotfix immediately** if possible
2. **Mark release as pre-release** on GitHub to warn users
3. **Add prominent warning** in release description
4. **Create new release** with fix as soon as possible

## Additional Resources

- [GitHub Releases Documentation](https://docs.github.com/en/repositories/releasing-projects-on-github)
- [Semantic Versioning](https://semver.org/)
- [Keep a Changelog](https://keepachangelog.com/)
- [Office Add-ins Documentation](https://docs.microsoft.com/en-us/office/dev/add-ins/)

## Questions?

For questions about the release process, open an issue on GitHub or contact the maintainer.

---

**Last Updated:** 2026-02-09 *(Update this date when modifying the release process)*  
**Maintainer:** Edgar Miranda Silva
