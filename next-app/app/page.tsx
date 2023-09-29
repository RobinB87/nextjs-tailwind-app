import Link from "next/link";
import { getServerSession } from "next-auth";
import { Metadata } from "next";
import Image from "next/image";

import { authOptions } from "./api/auth/[...nextauth]/route";
import ProductCard from "./components/ProductCard/ProductCard";
import HeavyComponentLazyLoadingShowCase from "./components/HeavyComponentLazyLoadingShowCase";

import bla from "@/public/images/bla.png";

// Link:
//  - only downloads content of the target page (so if you click /users, it does not download the navbar etc). rsc in devtools stands for react_server_component
//  - pre-fetches links that are in the viewport. If you run the app in production, the users page will be prefetched twice, once sorted by name and once sorted by email (as there are two Links). Improves performance
//  - Caches pages on the client: if you go to a page you have seen before, nextjs does not do a request to backend. So if you go from homepage to users and back to homepage, homepage is not requested again. This only exists for one sessions and clears at a full page reload
export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    // h-screen is 100% height of the viewport
    <main className="relative h-screen">
      <h1>Hello {session && <span>{session.user?.name}</span>}</h1>
      {/* <Image
        src="https://bit.ly/react-cover"
        alt="bla"
        fill
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        priority
      /> */}
      {/* Next.js provides the Link component to enable client-side navigation. This means as the user navigates between pages, the new content is loaded quickly and smoothly without the entire page being reloaded.  */}
      <Link href="/users/">Users</Link>
      <ProductCard />
      <HeavyComponentLazyLoadingShowCase />

      {/* under the hood, next/image automatically compresses and resizes images based on device size, always prefer this one in nextjs over the default image element */}
      {/* image in public folder is of type webp, which is modern and far smaller than .jpg etc */}
      {/* <Image src={bla} alt="bla" /> */}
    </main>
  );
}

// override the metadata from the layout page, in various pages...
// export const metadata: Metadata = {
//   title: "...",
//   description: "...",
// };

// can also generate dynamic metadata
// export const generateMetadata = async (): Promise<Metadata> => {
//   const bla = await fetch();

//   return {
//     title: bla.bla,
//   };
// };
