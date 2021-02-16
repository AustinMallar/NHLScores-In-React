import React from "react";
import Logo from "./Logo";

export default function header() {
  return (
    <div>
      <header className="app-header">
        <div className="app-logo">
          <Logo />
        </div>
      </header>
    </div>
  );
}
