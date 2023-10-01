"use client";

import { useEffect } from "react";
import EmptyState from "./components/EmptyState";

interface ErrorStateProps {
  error: Error;
}

const Error: React.FC<ErrorStateProps> = ({ error }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <EmptyState 
        title="Uh Oh!"
        subtitle="Something went wrong. Please try again later."
    />
  );
};

export default Error;
