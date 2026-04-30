import { useEffect } from "react";

function Dashboard() {
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:5000/api/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const data = await res.json();
      console.log(data);
    };

    fetchData();
  }, []);

  return <h1>Dashboard</h1>;
}

export default Dashboard;