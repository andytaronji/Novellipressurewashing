# Favicon Setup Guide

This project uses a comprehensive favicon setup to ensure proper display across all browsers and platforms. Here's how the favicon system works and how to update it in the future.

## Current Favicon Files

The following favicon files are included in the project:

- `public/favicon.ico` - Traditional favicon format (32x32)
- `public/favicon.png` - PNG version of the favicon
- `public/apple-touch-icon.png` - Icon for iOS devices (180x180)
- `public/android-chrome-192x192.png` - Icon for Android devices (192x192)
- `public/android-chrome-512x512.png` - Large icon for Android devices (512x512)
- `public/site.webmanifest` - Web app manifest file for PWA support
- `public/browserconfig.xml` - Configuration for Microsoft browsers

## How to Update the Favicon

If you need to update the favicon in the future, follow these steps:

1. Replace the `public/favicon.png` file with your new logo image.

2. Run the conversion script to generate all the necessary favicon formats:
   ```
   node convert-favicon.js
   ```

3. The script will automatically create:
   - favicon.ico
   - apple-touch-icon.png
   - android-chrome-192x192.png
   - android-chrome-512x512.png

4. No changes to the HTML or configuration files are needed, as they're already set up to reference these files.

## Favicon References in the Code

The favicon is referenced in two main places:

1. **app/layout.tsx metadata** - Using Next.js metadata API to define icons
2. **app/layout.tsx head section** - Using traditional link tags for maximum compatibility

## Troubleshooting

If the favicon doesn't appear on your deployed site:

1. **Clear browser cache** - Browsers aggressively cache favicons, so try hard refreshing (Ctrl+F5 or Cmd+Shift+R)
2. **Check deployment** - Ensure all favicon files are included in your deployment
3. **Verify paths** - Make sure the paths in the HTML references match the actual file locations
4. **Test locally** - Run a production build locally (`npm run build` then `npm run start`) to see if the issue reproduces

## Additional Resources

- [Favicon Generator](https://realfavicongenerator.net/) - For more advanced favicon generation
- [PWA Asset Generator](https://github.com/onderceylan/pwa-asset-generator) - For generating PWA icons
