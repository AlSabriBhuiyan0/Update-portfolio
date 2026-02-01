# Deploying to cPanel (Fix Blank / Black Page)

If your site shows a **black blank page** on cPanel, follow these steps.

## 1. Upload the right files

You must upload the **built** site, not the source code.

1. **Build locally:**
   ```bash
   npm run build
   ```
2. **Upload the contents of the `dist` folder** (not the whole project, not the `dist` folder itself).

   In cPanel File Manager (or FTP), go to **public_html** (or your domain’s document root) and upload **everything inside** `dist`:

   - `index.html` (at the root of public_html)
   - `assets/` folder (with all `.js` and `.css` files)
   - `favicon.ico`
   - `.htaccess`
   - Any other files from `dist` (e.g. `resume.pdf`, `robots.txt`, `sitemap.xml`, etc.)

**Wrong:** Uploading the whole project (with `src/`, `node_modules/`, etc.) or opening the site from a subfolder that doesn’t match the base path.

**Right:** After upload, your public_html should look like:
```
public_html/
  index.html
  .htaccess
  favicon.ico
  assets/
    index-xxxxx.js
    index-xxxxx.css
    ... (other .js files)
  resume.pdf
  ...
```

## 2. If the site is in a subdirectory

If the site is **not** at the domain root (e.g. `https://yourdomain.com/portfolio/`):

1. In `vite.config.ts`, set `base` to that path (with leading and trailing slash):
   ```ts
   base: '/portfolio/',
   ```
2. Run `npm run build` again.
3. Upload the **new** contents of `dist` to that subdirectory (e.g. `public_html/portfolio/`).

If the site is at the root (e.g. `https://alsabribhuiyan.xyz/`), keep `base: '/'` (default).

## 3. Check the browser console

If the page is still blank:

1. Open the site in the browser.
2. Press **F12** (or right‑click → Inspect) and open the **Console** tab.
3. Look for red errors:
   - **404 on .js files** → Wrong base path or wrong upload location (see steps 1 and 2).
   - **CORS / MIME type errors** → The `.htaccess` in this project sets correct MIME for `.js`; ensure `.htaccess` is uploaded and that your host allows `.htaccess`.
   - **Other JavaScript errors** → Share the exact message for further debugging.

## 4. Summary checklist

- [ ] Ran `npm run build`
- [ ] Uploaded **only** the contents of `dist` (including `index.html`, `assets/`, `.htaccess`)
- [ ] Upload target is the **document root** (e.g. public_html) or the correct subdirectory
- [ ] If using a subdirectory, set `base` in `vite.config.ts` and rebuilt
- [ ] Checked browser console (F12) for errors

After a correct upload, the first request loads `index.html`, then the browser loads `/assets/*.js` and `/assets/*.css`. If those paths are wrong (wrong base or wrong folder), scripts don’t run and you get a blank (black) page.
