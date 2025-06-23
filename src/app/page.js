"use client";

import { useState } from "react";
import ArchitectureLoader from "@/components/loaders/ArchitectureLoader";
import MainContent from "@/components/landing/MainContent"; // Import the new MainContent component
import StyleScroll from "@/providers/style-scroll";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <ArchitectureLoader onComplete={handleLoadingComplete} />;
  }

  return (
    <StyleScroll>
      <MainContent />
    </StyleScroll>
  );
}
