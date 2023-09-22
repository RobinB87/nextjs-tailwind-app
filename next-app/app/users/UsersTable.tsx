import Link from "next/link";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UsersTable = async ({ sortOrder }: Props) => {
  // next js stores in a data cache based on a file system
  // if the same url is fetched, next js gets it from the file system
  // you have full control though, eg 'url', { cache: "no-store" }): always get new data
  // or: 'url', { next: { revalidate: 10 } }) get new data every 10 seconds
  // This is only implemented in the fetch function, NOT in for example axios!
  const res = await fetch("https://jsonplaceholder.typicode.com/users", { next: { revalidate: 100 } });
  const users: User[] = await res.json();

  const getSortedUsers = () => {
    switch (sortOrder) {
      case "email":
        return users.sort((a, b) => a.email.localeCompare(b.email));
      default:
        return users.sort((a, b) => a.name.localeCompare(b.name));
    }
  };

  const sortedUsers: User[] = getSortedUsers();

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            <Link href="/users?sortOrder=name">Name</Link>
          </th>
          <th>
            <Link href="/users?sortOrder=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((x) => (
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
