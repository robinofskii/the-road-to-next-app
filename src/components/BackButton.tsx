"use client";

import { useRouter } from "next/navigation";

// A simple back button component that navigates to the previous page - will probably change later since this doesn't fit the course
const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="border p-2 rounded-full mb-4 cursor-pointer"
    >
      ←
    </button>
  );
};

export default BackButton;
