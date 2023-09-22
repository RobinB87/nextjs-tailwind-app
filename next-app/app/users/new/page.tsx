"use client";

import { useRouter } from "next/navigation";

// for programmatic navigation, be sure to import from next/navigation, NOT next/router
const NewUserPage = () => {
  const router = useRouter();

  return (
    <button className="btn btn-primary" onClick={() => router.push("/users")}>
      Create
    </button>
  );
};

export default NewUserPage;
