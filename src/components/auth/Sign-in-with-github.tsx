"use client";

import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";

export default function SigninWithGithub() {
  return (
    <Button
      onClick={() =>
        signIn("github", {
          callbackUrl: `${window.location.origin}`,
        })
      }
      className="mt-6"
      variant="secondary"
    >
      Login with Github <FaGithub className="mr-2 h-4 w-4" />
    </Button>
  );
}
