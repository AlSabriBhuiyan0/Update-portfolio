# Al Sabri Bhuiyan (Sunny) — Portfolio

Personal portfolio website: **Data Analyst & Web Developer** — turning data into insights and code into solutions.

**Live site**: [alsabribhuiyan.xyz](https://alsabribhuiyan.xyz)

---

## Project info

- **Stack**: Vite, TypeScript, React, shadcn/ui, Tailwind CSS
- **Deployment**: cPanel (static build)

---

## How to run locally

You need **Node.js** and **npm** (or use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)).

```sh
# Clone the repository
git clone <YOUR_GIT_URL>
cd system-focus

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open the URL shown in the terminal (e.g. `http://localhost:5173`).

---

## How to build for production

```sh
npm run build
```

Output is in the **`dist`** folder (static HTML, CSS, JS). This folder is what you upload to cPanel.

---

## Deploy with cPanel

This project is deployed on **cPanel** (not Lovable/Vercel). Steps:

1. **Build the project locally**
   ```sh
   npm run build
   ```

2. **Upload the `dist` folder**
   - In cPanel, open **File Manager** (or use FTP/SFTP).
   - Go to the directory that will serve your site (e.g. `public_html` for the main domain, or a subfolder for a subdomain).

3. **Upload contents of `dist`**
   - Upload **all files and folders inside `dist`** (e.g. `index.html`, `assets/`, etc.) into that directory.
   - Do **not** upload the empty `dist` folder itself — only its contents, so that `index.html` is at the document root.

4. **Custom domain (e.g. alsabribhuiyan.xyz)**
   - In cPanel: **Domains** or **Addon Domains** → add or point your domain to the same directory where you uploaded the `dist` contents.
   - Ensure the document root for that domain is the folder containing `index.html`.

5. **Optional: resume and assets**
   - If you use `/resume.pdf`, place `resume.pdf` in the same directory as `index.html` (or in the same path as in `public/` so URLs still work).

After updating the site: run `npm run build` again and re-upload the new `dist` contents to the same cPanel directory.

---

## Editing the code

- **Local IDE**: Clone the repo, edit, then run `npm run build` and upload the new `dist` to cPanel.
- **GitHub**: Edit files in the GitHub web editor, then pull locally, build, and upload to cPanel.
- **GitHub Codespaces**: Open the repo in Codespaces, edit, build, and download/upload the `dist` folder to cPanel.

---

## Technologies

- **Vite** — build tool and dev server  
- **TypeScript** — type-safe JavaScript  
- **React** — UI components  
- **shadcn/ui** — accessible UI components  
- **Tailwind CSS** — styling  
- **Framer Motion** — animations  

---

## Custom domain

The site uses the custom domain **alsabribhuiyan.xyz**. Domain and SSL are configured in cPanel (Domains, SSL/TLS). After pointing the domain to your hosting, use cPanel’s SSL option (e.g. Let’s Encrypt) to enable HTTPS.
