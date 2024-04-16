"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const loginUser = async () => {
    try {
      const response = await fetch(`${apiUrl}/sessions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      console.log(data);
      if (data.token) {
        sessionStorage.setItem("token", data.token);
        router.push("/account");
      } else {
        console.error("Ogiltig session");
        alert("Ogiltig session");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="card">
      <h2>Ange användarnamn och lösenord</h2>
      <input
        type="text"
        placeholder="Användarnamn"
        className="input-field"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Lösenord"
        className="input-field"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={loginUser} className="button">
        Logga In
      </button>
    </section>
  );
}
