"use client";
import { useState } from "react";
import dynamic from "next/dynamic";

// example of lazy loading, with additional options.
// Only use for large, heavy components
const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  ssr: false, // disable pre rendering on server
  loading: () => <p>Loading...</p>,
});

const HeavyComponentLazyLoadingShowCase = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>Show</button>
      {show && <HeavyComponent />}
    </>
  );
};

export default HeavyComponentLazyLoadingShowCase;
