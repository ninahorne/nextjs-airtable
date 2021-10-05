# Next + Netlify Starter

[![Netlify Status](https://api.netlify.com/api/v1/badges/ed50f56e-4fc2-4c98-8b66-1e5074c6f3d3/deploy-status)](https://app.netlify.com/sites/next-starter/deploys)

This is a [Next.js](https://nextjs.org/) v11.1.1 project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and set up to be instantly deployed to [Netlify](https://url.netlify.com/SyTBPVamO)!

This app uses:

1. TypeScript (.tsx)
2. [![Styled Components](https://www.styled-components.com/)]
3. [![AirTable](https://airtable.com)] as a backend
4. [![Auth0](https://auth0.com/)] for authentication

This project is a very minimal starter that includes 2 sample components, a global stylesheet, a `netlify.toml` for deployment, and a `jsconfig.json` for setting up absolute imports and aliases. It also includes the [Essential Next.js Build Plugin](https://github.com/netlify/netlify-plugin-nextjs), which will allow for you to implement features like Preview Mode, server-side rendering/incremental static regeneration via Netlify Functions, and internationalized routing.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/cassidoo/next-netlify-starter&utm_source=github&utm_medium=nextstarter-cs&utm_campaign=devex-cs)

(If you click this button, it will create a new repo for you that looks exactly like this one, and sets that repo up immediately for deployment on Netlify)

## Getting Started

First, install the dependecies:

```
npm install
```

Next, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

### Installation options

1. Clone this repo: `git clone https://github.com/cassidoo/next-netlify-starter.git`
2. Navigate to the directory and run `npm run dev`
3. Make your changes
4. Connect to [Netlify](https://url.netlify.com/Bk4UicocL) manually (the `netlify.toml` file is the one you'll need to make sure stays intact to make sure the export is done and pointed to the right stuff)

### To Configure with AirTable

1. Create an AirTable Account
2. Create a new Base from Scratch
3. Rename 'Table 1' to 'Users'
4. Add three fields: Name (single line text), UserId (single line text), DateCreated (Date(include time))
5. Get your app credentials and secrets by navigating to [https://airtable.com/api] and clicking on the appropriate base
6. Add the following values to your .env.local file 
``` 
AIRTABLE_API_KEY=
AIRTABLE_BASE_ID=
```
7. 

### To Configure with Auth0

Instructions can be found [![here](https://auth0.com/docs/quickstart/webapp/nextjs?a=Mpy5C3GfLEgG4ceuQzFsJL6V1IgQUYWd&framed=1&sq=1#configure-auth0)]

1. Create an Auth0 Account
2. Create an Application in your Auth0 dashboard (Ours is a 'Regular Web Page' NOT a 'Single Page Application'), and select NextJS as the framework we're using.
3. Create an .env.local file in your root directory and add the following information:

```
AUTH0_SECRET='use [openssl rand -hex 32] to generate a 32 bytes value'
AUTH0_BASE_URL='http://localhost:3000'
AUTH0_ISSUER_BASE_URL='https://YOUR_DOMAIN'
AUTH0_CLIENT_ID='YOUR_CLIENT_ID'
AUTH0_CLIENT_SECRET='YOUR_CLIENT_SECRET'
AUTH0_SCOPE='openid profile'
```


