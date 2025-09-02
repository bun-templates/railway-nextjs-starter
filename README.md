# Bun + Next.js Starter on Railway

Deploy a Next.js 15 application powered by the Bun runtime to Railway.

[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/deploy/bun-nextjs-starter?referralCode=Bun&utm_medium=integration&utm_source=template&utm_campaign=bun)

## Local Development

After cloning the repository: 

1. Install dependencies:
```bash
bun install
```

2. Run the development server:
```bash
bun dev
```


## Deployment

### Method 1: Deploy via CLI

Make sure you have the Railway CLI installed:

```bash
bun install -g @railway/cli
```

Log into your Railway account:

```bash
railway login
```

After successfully authenticating, create a new project:

```bash
# Initialize project
railway init

# Deploy your application
railway up

# Generate public domain
railway domain
```

## Method 2: Deploy via Dashboard

### Step 1: Create New Project

1. Go to [Railway Dashboard](http://railway.com/?utm_medium=integration&utm_source=docs&utm_campaign=bun)
2. Click **"New Project"**
3. Select **"Deploy from GitHub repo"**
4. Choose your repository

### Step 2: Generate Public Domain

1. Select your service
2. Go to **"Settings"** tab
3. Under **"Networking"**, click **"Generate Domain"**

Your website is now live! Railway auto-deploys on every GitHub push.

---

- [Bun Documentation](https://bun.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Railway Documentation](https://docs.railway.app)
