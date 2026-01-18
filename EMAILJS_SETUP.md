# EmailJS Setup Guide

## Why You Need This

Currently, your contact form uses a **mailto fallback** which only opens the visitor's email client. **No email is actually sent** - the visitor has to manually send it from their email client.

To receive emails directly when someone submits the form, you need to set up EmailJS.

## Step-by-Step Setup

### 1. Sign Up for EmailJS (Free)

1. Go to https://www.emailjs.com/
2. Click **"Sign Up"** (top right)
3. Sign up with your email (you can use your Gmail)
4. Verify your email address

### 2. Add Email Service

1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended - easiest)
   - **Outlook** 
   - **Yahoo**
   - Or any other SMTP service
4. Follow the instructions to connect your email
5. **Save the Service ID** (you'll need this)

### 3. Create Email Template

1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Choose a template or start from scratch
4. Set up the template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
   - `{{to_email}}` - Your email (sutharsanmail311@gmail.com)

**Example Template:**
```
Subject: Portfolio Contact: {{from_name}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

5. **Save the Template ID** (you'll need this)

### 4. Get Your Public Key

1. Go to **"Account"** → **"General"**
2. Find **"Public Key"**
3. **Copy the Public Key** (you'll need this)

### 5. Add Environment Variables

1. Create a `.env` file in your project root (same folder as `package.json`)
2. Add these variables:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Example:**
```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
```

### 6. Restart Your Dev Server

After adding the `.env` file:
1. Stop your dev server (Ctrl+C)
2. Start it again: `npm run dev`
3. Environment variables are loaded on startup

### 7. Test It

1. Go to your contact form
2. Fill it out and submit
3. Check your email inbox
4. You should receive the email directly!

## Important Notes

### Free Tier Limits
- **200 emails per month** (free tier)
- Perfect for a portfolio site
- Upgrade if you need more

### Security
- Public Key is safe to use in frontend code
- It's designed to be public
- EmailJS handles security on their end

### .env File
- **Never commit `.env` to GitHub!**
- It should already be in `.gitignore`
- Add your actual values locally only

## Troubleshooting

**"EmailJS not configured" message?**
- Check that `.env` file exists
- Check that variable names start with `VITE_`
- Restart your dev server after adding `.env`

**Emails not arriving?**
- Check your spam folder
- Verify EmailJS service is connected
- Check EmailJS dashboard for errors
- Make sure template variables match

**Still using mailto fallback?**
- Check browser console for errors
- Verify environment variables are loaded
- Make sure you restarted the dev server

## After Setup

Once EmailJS is configured:
- ✅ Emails will be sent directly to your inbox
- ✅ No need for visitors to use their email client
- ✅ You'll receive emails automatically
- ✅ Better user experience

## Need Help?

- EmailJS Docs: https://www.emailjs.com/docs/
- EmailJS Support: Check their dashboard help section
