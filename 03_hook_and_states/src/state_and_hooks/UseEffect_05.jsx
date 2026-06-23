import { useEffect, useState } from "react";

const UseEffect_05 = () => {
  const [user, setUser] = useState([]);

  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!res.ok) {
          setError("no data found");
        }

        const data = await res.json();

        console.log("data", data);



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

                const { id, name, address: { city, address } } = u

                return (
                  <tr key={u.id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{u.email}</td>
                    <td>{city}</td>
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
