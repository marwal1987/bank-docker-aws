"use client";

import { useState, useEffect } from "react";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export default function AccountPage() {
  const [saldo, setSaldo] = useState("");
  const [amount, setAmount] = useState("");
  async function fetchSaldo() {
    try {
      const token = sessionStorage.getItem("token");
      const response = await fetch(`${apiUrl}/me/accounts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });
      const data = await response.json();
      console.log(data);
      setSaldo(data.saldo);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    fetchSaldo();
  }, []);

  async function depositMoney() {
    try {
      const token = sessionStorage.getItem("token");
      const response = await fetch(`${apiUrl}/me/accounts/transactions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, amount: parseInt(amount) }),
      });
      const data = await response.json();
      console.log(data);
      fetchSaldo();
      setSaldo(data.newBalance);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <section className="card">
      <h2>Konto </h2>
      <p className="text-xl text-stone-50">Saldo: {saldo} kr</p>

      <input
        type="text"
        placeholder="Ange belopp"
        className="input-field"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={depositMoney} className="button">
        Sätt in
      </button>
    </section>
  );
}
