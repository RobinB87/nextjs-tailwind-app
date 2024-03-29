This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# https://tailwindcss.com/docs/guides/create-react-app

installed when using

    npx create-next-app@latest

# https://react.daisyui.com/?path=/docs/welcome--docs

    npm i -D daisyui@latest

Then add daisyUI to your tailwind.config.js files:
module.exports = {
//...
plugins: [require("daisyui")],
}

To add a theme:
module.exports = {
//...
daisyui: {
themes: ["light", "dark", "cupcake"],
},
}

<html data-theme="cupcake"></html>

# https://www.prisma.io/react-server-components

connection string in public/.env should be something like:
DATABASE_URL="mysql://<user_name>:<password>@db:3306/test"

To be able to create a shadow db to use migrate dev, create a shadowDb url:
SHADOW_DATABASE_URL="mysql://<user_name>:<password>@db:3306/shadowDb"
and in schema.prisma: shadowDatabaseUrl = env("SHADOW_DATABASE_URL")

    npx prisma migrate dev ==>> this does not really work when using docker it seems,
    npx prisma db push ==>> this does the trick

# https://next.cloudinary.dev/installation

https://console.cloudinary.com/settings/<id>/upload_presets/new

in env, add:
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="<name of the cloud>"

# https://next-auth.js.org/

    npm install next-auth

add route handlers (new router style)
https://next-auth.js.org/configuration/initialization#route-handlers-app

in env add:
NEXTAUTH_URL=your_localhost / site
NEXTAUTH_SECRET= some random long string, or generate with

    openssl rand -base64 32

Choose a provider for logging in, e.g Google:
https://next-auth.js.org/providers/

first create some credentials:
https://console.cloud.google.com/apis/credentials

- creat project
- click configure consent screen
- add some scopes, like:
  .../auth/userinfo.email See your primary Google Account email address
  .../auth/userinfo.profile See your personal info, including any personal info you've made publicly available
- add test users
- credentials tab
- create OAuth, add uri, and redirect uri (see next-auth providers/google: For development: http://localhost:3000/api/auth/callback/google)
- store client and secret in env file, eg;
  GOOGLE_CLIENT_ID=
  GOOGLE_CLIENT_SECRET=

create adapter to store users:
https://authjs.dev/reference/adapter/prisma

    npm i @next-auth/prisma-adapter

For CredentialsProvider install bcrypt:

    npm i bcrypt
    npm i -D @types/bcrypt

# Email

    npm i react-email @react-email/components
    npm i resend

# Images

https://nextjs.org/docs/pages/api-reference/components/image

config as:

module.exports = {
images: {
remotePatterns: [
{
protocol: 'https',
hostname: 'example.com',
port: '',
pathname: '/account123/**',
},
],
},
}

# Lazy loading external javascript libraries

for example

    npm i lodash
    npm i -D @types/lodash

# Deployment

    npm run build

https://vercel.com/
import next app
override build command:

    npx prisma generate && next build

and set env variables:
create production env / get host for sql, cloudinary
