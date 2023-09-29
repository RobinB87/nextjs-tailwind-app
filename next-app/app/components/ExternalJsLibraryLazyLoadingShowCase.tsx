"use client";

const ExternalJsLibraryLazyLoadingShowCase = () => {
  return (
    <>
      <button
        onClick={async () => {
          const _ = (await import("lodash")).default;
          const users = [
            { name: "r" },
            { name: "v" },
            { name: "a" },
            { name: "d" },
            { name: "e" },
            { name: "z" },
            { name: "b" },
          ];

          const sorted = _.orderBy(users, ["name"]);
          console.log(sorted);
        }}
      >
        Sort and console log users array
      </button>
    </>
  );
};

export default ExternalJsLibraryLazyLoadingShowCase;
