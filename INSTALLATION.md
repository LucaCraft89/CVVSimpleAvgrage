# CVV Average Calculator Extension - Installation Guide

## 📦 Extension Package
The extension is available in `cvv-extension.tar.gz`

## 🌐 Chrome/Chromium Installation (Desktop & Mobile)

### Desktop Chrome:
1. Open Chrome and go to `chrome://extensions/`
2. Enable **Developer mode** (toggle in top right)
3. Click **Load unpacked**
4. Select the `browser-extension` folder
5. The extension is now installed!

### Chrome Android (Kiwi Browser):
Chrome for Android doesn't support extensions, but **Kiwi Browser** does:
1. Install **Kiwi Browser** from Google Play Store
2. Open Kiwi Browser and go to `chrome://extensions/`
3. Enable **Developer mode**
4. Extract the `cvv-extension.tar.gz` file on your phone
5. Click **Load unpacked** and select the extracted folder
6. Done!

**Note:** You'll need a file manager app to extract the `.tar.gz` file on Android (like ZArchiver)

## 🦊 Firefox Installation

### Desktop Firefox:
1. Open Firefox and go to `about:debugging#/runtime/this-firefox`
2. Click **Load Temporary Add-on**
3. Navigate to the `browser-extension` folder
4. Select the `manifest.json` file
5. Extension is loaded! (Note: temporary - will be removed when Firefox restarts)

#### For Permanent Firefox Installation:
You need to sign the extension with Mozilla:
1. Create an account at https://addons.mozilla.org/
2. Go to https://addons.mozilla.org/developers/
3. Submit your extension for signing
4. Once signed, you can install it permanently

### Firefox Android:
1. Install **Firefox Nightly** from Google Play Store (regular Firefox doesn't support custom extensions)
2. Create a collection on https://addons.mozilla.org/ (requires account)
3. Follow Mozilla's guide for custom extension collections: https://blog.mozilla.org/addons/2020/09/29/expanded-extension-support-in-firefox-for-android-nightly/

**Alternative for Android:** Use Kiwi Browser instead - it's much easier!

## 📱 Recommended for Mobile: Kiwi Browser

For the best mobile experience, we recommend **Kiwi Browser** on Android:
- Full Chrome extension support
- Easy to install unpacked extensions
- Works exactly like desktop Chrome
- No special setup required

## 🔧 Files in the Extension

- `manifest.json` - Extension configuration
- `page.html` - Main UI
- `app.js` - Client-side logic (100% local processing)
- `background.js` - Extension background service
- `rules.json` - Network rules for API headers
- `icon*.png` - Extension icons

## ✅ Features

- ✨ 100% client-side processing
- 🔒 No data sent to any server
- 📊 Real-time grade averages
- 🎨 Color-coded grade display
- 📱 Mobile-friendly interface
- 🔐 Credentials stored locally in browser

## 🆘 Troubleshooting

### Extension doesn't load:
- Make sure all files are present in the folder
- Check browser console for errors (F12 → Console)

### Login fails:
- Verify your credentials are correct
- Check your internet connection
- Make sure the ClasseViva API is accessible

### Grades don't display:
- Check browser console for errors
- Try logging out and back in
- Reload the extension

## 📞 Support

If you encounter any issues, check the browser console (F12) for error messages.
