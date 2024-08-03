# Marketing

-   Pentru nunti Ioan si Ioana ... sa ma focusez pe aspectul de nunti si evenimente
-   Pentru barbati adevarati Florin si Teodor, etc.
-   Zi de Tik Tok ca sunt sticle vandute
-   Pot sa prezint sticle specifice care au confectiuni specifice.. de exemplu cu:
    -   pusca in sticla pentru vantatori
    -   pentru cantareti, sticla cu xacofon si vioara
-   Chestii traditionala, poarta, clopotnita, vartelnita, fantana si scara... etc.
-   Sticle cu glume; sticle doar ornate cu tricolor si sfoara de canepa
-   Subiecte de marketing: Traditional, Nume, Pescari

# ToDo List

-   compresie imagini
-   si local storage sau cache for images
-   lazy loading
-   browser caching
-   de ce imi apar toate imaginile pe pagina la carusel cand se loadeaza pagina, sa folosesc un loading state

# Images

## [Using Images in Next.js (next/image examples)](https://www.youtube.com/watch?v=IU_qq_c_lKA)

### 1. Use Image component from NextJs:

```js
import Image from 'next/image'
// ... code component ...
;<Image
    className="h-auto max-w-full"
    src="/imageName.jpg"
    alt="Image of a ..."
    height={240}
    width={320}
/>
// ... code component ...
```

### 2. Add webp and avif formats in next.config.mjs:

```mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets.vercel.com',
                port: '',
                pathname: '/image/upload/**',
            },
        ],
    },
}

export default nextConfig
```

### 3 Image properties

#### 3.1 Image sizes and fill

```js
import Image from 'next/image'
// ... code component ...
;<Image
    className="h-auto max-w-full"
    src="/imageName.jpg"
    alt="Image of a ..."
    height={240}
    width={320}
    // layout="responsive"
    //// fill // Instead of "height={}" and "width={}", you can use "fill", which will take the entire width and height
    //// sizes="100vw" // If you use fill, you should use "sizes" also
    // quality={100}
    // placeholder="blur" // If you are importing a local image, nextjs will be able to automatically generate the blur data URL which gives you that nice blur up placeholder
/>
// ... code component ...
```

#### 3.2 Image sizes with grid. Those classes will automatically make the images be responsive and look good on different screen sizes

```js
import Image from 'next/image'
// ... code component ...
;<div className="relative h-[400px]">
    <Image
        className="object-cover"
        src="/imageName.jpg"
        alt="Image of a ..."
        fill
        sizes="100vw"
    />
</div>
<div className="relative h-[400px]">
    <Image
        className="object-cover"
        src="/imageName.jpg"
        alt="Image of a ..."
        fill
        sizes="100vw"
    />
</div>
<div className="relative h-[400px]">
    <Image
        className="object-cover"
        src="/imageName.jpg"
        alt="Image of a ..."
        fill
        sizes="100vw"
    />
</div>
// ... code component ...
```

#### 3.3 Responsive Images

```js
<div className="relative h-[400px]">
    <Image
        className="object-cover"
        src="/imageName.jpg"
        alt="Image of a ..."
        fill
        sizes="100vw"
    />
</div>
```

## [Are you optimally loading your images?)](https://www.youtube.com/watch?v=-zzmfjIiC3M)

## [You are loading Images wrong! Use this instead 😍)](https://www.youtube.com/watch?v=8viWcH5bUE4)

### Browser Lazy Loading

# NextJs

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
