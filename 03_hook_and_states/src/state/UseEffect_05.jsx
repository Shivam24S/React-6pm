import { useEffect, useState } from "react";

const UseEffect_05 = () => {
  const [user, setUser] = useState([]);

  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        const data = await res.json();

        console.log("data", data);

        if (!data) {
          setError("no data found");
        }

        setUser(data);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchUserData();
  }, []);

  console.log("error", error);

  return (
    <>
      {error != null ? (
        <>
          <h1>{error}</h1>
        </>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>address</th>
              </tr>
            </thead>
            <tbody>
              {user.map((u) => {
                return (
                  <tr key={u.id}>
                    <td>{u.id}</td>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>{u.address["street"]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default UseEffect_05;
