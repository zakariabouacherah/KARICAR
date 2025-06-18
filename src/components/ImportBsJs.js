// This component is used to import the Bootstrap JS without causing build errors due to SSR

"use client"

import React, { useEffect } from "react";

export default function ImportBsJs() {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    return null;
}