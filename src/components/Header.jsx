import React from "react";
import Filter from "./Filter";

export default function Header() {
  return (
    <header className="task-manager__header">
      <h1 className="task-manager__title">Task list</h1>
      <Filter />
    </header>
  );
}
