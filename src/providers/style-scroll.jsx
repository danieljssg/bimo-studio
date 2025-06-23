"use client";

import { useEffect } from "react";

export default function StyleScroll({ children }) {
  useEffect(() => {
    // Add smooth scrolling behavior to the whole page
    document.documentElement.style.scrollBehavior = "smooth";

    // Cleanup function to reset scroll behavior when component unmounts
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []); // Empty dependency array ensures this runs only once

  return <>{children}</>;
}
