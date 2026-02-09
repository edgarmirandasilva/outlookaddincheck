# Quick Start: Creating Your First Release

This guide will help you create the first GitHub release (v1.0.0) for the Email Follow-Up Manager.

## Prerequisites

- Git repository is up to date
- All documentation is complete
- Code has been tested (see TESTING.md)

## Step-by-Step Instructions

### 1. Build the Production Files

```bash
# Make sure you're in the project directory
cd /path/to/outlookaddincheck

# Install dependencies if needed
npm install

# Build for production
npm run build

# Validate the manifest
npm run validate
```

This creates the `dist/` folder with production-ready files.

### 2. Prepare the Release Package

Create a ZIP file containing all necessary files for end users:

```bash
# Create release directory
mkdir -p release/outlook-addin-followup-v1.0.0

# Copy all necessary files
cp manifest.xml release/outlook-addin-followup-v1.0.0/
cp taskpane.html release/outlook-addin-followup-v1.0.0/
cp taskpane.js release/outlook-addin-followup-v1.0.0/
cp -r assets release/outlook-addin-followup-v1.0.0/
cp -r src release/outlook-addin-followup-v1.0.0/
cp README.md release/outlook-addin-followup-v1.0.0/
cp INSTALL.md release/outlook-addin-followup-v1.0.0/
cp GUIA_PT.md release/outlook-addin-followup-v1.0.0/
cp CHANGELOG.md release/outlook-addin-followup-v1.0.0/
cp LICENSE release/outlook-addin-followup-v1.0.0/

# Create ZIP archive
cd release
zip -r outlook-addin-followup-v1.0.0.zip outlook-addin-followup-v1.0.0/
cd ..
```

### 3. Create Git Tag

```bash
# Create an annotated tag for v1.0.0
git tag -a v1.0.0 -m "Release version 1.0.0 - Initial release"

# Push the tag to GitHub
git push origin v1.0.0
```

### 4. Create GitHub Release

1. Go to your GitHub repository: https://github.com/edgarmirandasilva/outlookaddincheck

2. Click on **"Releases"** (right side of the page)

3. Click **"Draft a new release"** button

4. Fill in the release form:
   - **Choose a tag:** Select `v1.0.0` from the dropdown
   - **Release title:** `v1.0.0 - Email Follow-Up Manager`
   - **Description:** Copy the content from `.github/RELEASE_TEMPLATE.md`

5. **Attach files:**
   - Click "Attach binaries by dropping them here or selecting them"
   - Upload: `release/outlook-addin-followup-v1.0.0.zip`
   - Optionally also upload: `manifest.xml`

6. **Review and publish:**
   - Make sure "Set as the latest release" is checked
   - Click **"Publish release"**

### 5. Verify the Release

1. Go to the releases page: https://github.com/edgarmirandasilva/outlookaddincheck/releases
2. You should see your v1.0.0 release
3. Click on it to verify:
   - Release notes are displayed correctly
   - ZIP file is available for download
   - Links in the description work

### 6. Test the Release Package

Download the release package you just created and test the installation:

1. Download the ZIP file from GitHub
2. Extract it to a test folder
3. Follow the instructions in INSTALL.md
4. Verify the add-in installs and works correctly

## What Users Will See

After you create the release, users will be able to:

1. Go to https://github.com/edgarmirandasilva/outlookaddincheck/releases
2. See "v1.0.0 - Email Follow-Up Manager" as the latest release
3. Read the release notes describing features
4. Download `outlook-addin-followup-v1.0.0.zip`
5. Follow INSTALL.md to install the add-in

## Troubleshooting

### Build Fails

If `npm run build` fails:
```bash
# Clean and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Tag Already Exists

If the tag already exists:
```bash
# Delete local tag
git tag -d v1.0.0

# Delete remote tag (if pushed)
git push origin :refs/tags/v1.0.0

# Recreate the tag
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

### Cannot Create Release

Make sure you have:
- Push access to the repository
- The tag is pushed to GitHub
- You're on the correct repository

## After the Release

1. Update README.md release badge (it will show the correct version automatically)
2. Monitor GitHub issues for user feedback
3. Be ready to create a patch release (v1.0.1) if critical bugs are found

## Future Releases

For subsequent releases (v1.1.0, v1.0.1, etc.):
- Follow the comprehensive guide in RELEASE.md
- Update CHANGELOG.md before each release
- Increment version numbers in package.json and manifest.xml

---

**Need more details?** See the complete [RELEASE.md](RELEASE.md) guide for maintainers.
