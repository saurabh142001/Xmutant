
"use client"
import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import Spinner from "./ui/Spinner";

export default function StyledButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);

    // Simulating an asynchronous action, replace with your actual async operation
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Button
        color="primary"
        isLoading={isLoading}
        onClick={handleClick}
        className="py-3 px-4 inline-flex items-center gap-4 text-sm font-semibold rounded-lg border border-gray-800 text-gray-800 hover:border-gray-500 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-gray-300 dark:hover:border-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        style={{ width: "160px", height: "48px" }} // Fixed width and height
      >
        {isLoading ? <Spinner /> : "Shadowqwwqewf"}
      </Button>
    </div>
  );
}
