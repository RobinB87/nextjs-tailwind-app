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
