"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default function CreateUserPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function createUser() {
  if (!username || !password) {
    alert("Användarnamn och lösenord får inte vara tomma.");
    return;
  }
    try {
      const response = await fetch(`${apiUrl}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      router.push("/login");
    } catch (error) {
      console.error("Error:", error);
      alert("Något gick fel vid skapandet av användaren.");
    }
  }

  return (
    <section className="card">
      <h2>Skapa användare</h2>
      <input
        type="text"
        placeholder=" Användarnamn"
        className="input-field"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder=" Lösenord"
        className="input-field"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={createUser} className="button">
        Skapa
      </button>
    </section>
  );
}
