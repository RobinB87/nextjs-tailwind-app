import Link from "next/link";

import ProductCard from "./components/ProductCard/ProductCard";

// Link:
//  - only downloads content of the target page (so if you click /users, it does not download the navbar etc). rsc in devtools stands for react_server_component
//  - pre-fetches links that are in the viewport. If you run the app in production, the users page will be prefetched twice, once sorted by name and once sorted by email (as there are two Links). Improves performance
//  - Caches pages on the client: if you go to a page you have seen before, nextjs does not do a request to backend. So if you go from homepage to users and back to homepage, homepage is not requested again. This only exists for one sessions and clears at a full page reload
export default function Home() {
  return (
    <main>
      <h1>Hello world</h1>
      {/* Next.js provides the Link component to enable client-side navigation. This means as the user navigates between pages, the new content is loaded quickly and smoothly without the entire page being reloaded.  */}
      <Link href="/users/">Users</Link>
      <ProductCard />
    </main>
  );
}
