import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex bg-slate-200 p-5 space-x-3">
      <Link href="/" className="mr-5">
        Next .js
      </Link>
      <Link href="/users">Users</Link>
      {/* endpoint is exposed by next-auth */}
      <Link href="/api/auth/signin">Login</Link>
    </div>
  );
};

export default NavBar;
