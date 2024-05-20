"use client";

import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

export default function SigninWithGoogle() {
  return (
    <Button
      onClick={() => {
        signIn("google", {
          callbackUrl: `${window.location.origin}`,
        });
        console.log("Clicked");
      }}
      className="mt-6"
      variant="secondary"
    >
      <span className="mr-2">Login with Google </span>
      <FcGoogle className="mr-2 h-4 w-4" />
    </Button>
  );
}
