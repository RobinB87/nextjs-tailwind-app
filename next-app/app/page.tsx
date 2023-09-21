import Link from "next/link";
import ProductCard from "./components/ProductCard";

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
