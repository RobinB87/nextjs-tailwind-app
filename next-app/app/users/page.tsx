interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  // next js stores in a data cache based on a file system
  // if the same url is fetched, next js gets it from the file system
  // you have full control though, eg 'url', { cache: "no-store" }): always get new data
  // or: 'url', { next: { revalidate: 10 } }) get new data every 10 seconds
  // This is only implemented in the fetch function, NOT in for example axios!
  const res = await fetch("https://jsonplaceholder.typicode.com/users", { next: { revalidate: 100 } });
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users:</h1>
      {/* In Next.js, components can be rendered at build time (called Static Rendering) or at request time (called Dynamic Rendering). If we have pages or components with static data, we can pre-render them during build time to improve our application’s performance. 
      
      Rendering can happend static or dynamic. If no cache options are used in the fetch method, the below date will not change for a production build. 
      When 'cache: "no-store"' is used, You will see a lambda in the build output, before the /users page, and an explanation that rendering happens at run time on the server side and not static */}
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map((x) => (
          <li key={x.id}>{x.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
