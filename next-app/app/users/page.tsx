import Link from "next/link";
import { Suspense } from "react";

import UsersTable from "./UsersTable";

interface Props {
  searchParams: { sortOrder: string };
}

// can only get routing params in page components, so you need to pass them to childs as props
const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users:</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      {/* In Next.js, components can be rendered at build time (called Static Rendering) or at request time (called Dynamic Rendering). If we have pages or components with static data, we can pre-render them during build time to improve our application’s performance. 
      
      Rendering can happend static or dynamic. If no cache options are used in the fetch method, the below date will not change for a production build. 
      When 'cache: "no-store"' is used, You will see a lambda in the build output, before the /users page, and an explanation that rendering happens at run time on the server side and not static */}
      {/* <p>{new Date().toLocaleTimeString()}</p> */}

      {/* Use suspense to show a FALLBACK UI which is shown while the component is being rendered 
      TRICK: go to react devtools, look for suspense and click 'suspend' in top right corner to show the fallback component*/}
      <UsersTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
