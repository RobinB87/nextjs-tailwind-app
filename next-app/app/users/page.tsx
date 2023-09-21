interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users:</h1>
      <ul>
        {users.map((x) => (
          <li key={x.id}>{x.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
