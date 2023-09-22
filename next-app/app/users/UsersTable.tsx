interface User {
  id: number;
  name: string;
  email: string;
}

const UsersTable = async () => {
  // next js stores in a data cache based on a file system
  // if the same url is fetched, next js gets it from the file system
  // you have full control though, eg 'url', { cache: "no-store" }): always get new data
  // or: 'url', { next: { revalidate: 10 } }) get new data every 10 seconds
  // This is only implemented in the fetch function, NOT in for example axios!
  const res = await fetch("https://jsonplaceholder.typicode.com/users", { next: { revalidate: 100 } });
  const users: User[] = await res.json();

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((x) => (
          <tr key={x.id}>
            <td>{x.name}</td>
            <td>{x.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
