"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function SignOut({ className }: { className?: string }) {
  return (
    <Button
      onClick={() =>
        signOut({
          callbackUrl: `${window.location.origin}/auth/register`,
        })
      }
      className={className || ""}
    >
      Log out
    </Button>
  );
}
