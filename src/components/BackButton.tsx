"use client";

import { useRouter } from "next/navigation";

// A simple back button component that navigates to the previous page - will probably change later since this doesn't fit the course
const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="mb-4 cursor-pointer rounded-full border p-2"
    >
      ←
    </button>
  );
};

export default BackButton;
