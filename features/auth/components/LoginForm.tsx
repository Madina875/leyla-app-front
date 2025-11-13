"use client";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  return (
    <form className="space-y-4">
      <input
        className="border p-2 w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="bg-blue-500 text-white p-2 rounded">Login</button>
    </form>
  );
}
