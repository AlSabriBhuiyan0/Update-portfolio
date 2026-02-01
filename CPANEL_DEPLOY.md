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

## 4. React error: `__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED`

If you see:

```text
Uncaught TypeError: Cannot read properties of undefined (reading '__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED')
```

**Fix:** Rebuild and re-upload. The build is now configured so **React** and **ReactDOM** stay in the same chunk (a single React instance). Run `npm run build` and upload the new contents of `dist` again.

## 5. Lockdown / SES and Content Security Policy (CSP)

**“lockdown-install.js / SES Removing unpermitted intrinsics”**  
This usually comes from a **browser extension** (e.g. Lockdown, privacy/security tools). Those can break React.

- Try opening the site in **Incognito/Private** (extensions often disabled there) or another browser.
- If it works there, disable that extension on the site or in normal browsing.

**“Content Security Policy (CSP) prevents the evaluation of arbitrary strings” / script-src blocked**  
If your **host** (cPanel) adds a strict CSP that blocks `eval` or inline scripts:

1. In cPanel, check **Security** → **ModSecurity** or similar and see if you can relax or disable CSP for your domain.
2. If your host allows overriding headers, you can add this to your **`.htaccess`** (only if the host doesn’t set CSP itself):

   ```apache
   # Only if your host does NOT already set a strict CSP
   <IfModule mod_headers.c>
     Header set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self';"
   </IfModule>
   ```

   Adding `'unsafe-eval'` weakens security slightly; use only if the site fails without it and you can’t change the host’s CSP.

3. If you can’t change CSP, ask your host to allow `'unsafe-eval'` in `script-src` for your domain, or consider hosting on a platform that doesn’t inject a strict CSP (e.g. Vercel, Netlify, GitHub Pages).

## 6. Summary checklist

- [ ] Ran `npm run build` (use latest build so React + ReactDOM are in one chunk)
- [ ] Uploaded **only** the contents of `dist` (including `index.html`, `assets/`, `.htaccess`)
- [ ] Upload target is the **document root** (e.g. public_html) or the correct subdirectory
- [ ] If using a subdirectory, set `base` in `vite.config.ts` and rebuilt
- [ ] Checked browser console (F12) for errors
- [ ] If you see lockdown/SES or CSP errors, try Incognito or relax CSP (see section 5)

After a correct upload, the first request loads `index.html`, then the browser loads `/assets/*.js` and `/assets/*.css`. If those paths are wrong (wrong base or wrong folder), scripts don’t run and you get a blank (black) page.
