import React from "react";
import Link from "next/link";

function CopyrightLabel() {
  return (
    <Link className="link" href={"https://www.benoldham.dev"}>
      <p>
        <i className="bi bi-c-circle"></i> {new Date().getFullYear()} Zakaria
      </p>
    </Link>
  );
}

export default CopyrightLabel;
