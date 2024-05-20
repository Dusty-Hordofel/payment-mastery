// import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/utils/auth/authOptions";

import { auth } from "@/lib/auth";

// import { auth } from "../../auth";

export const currentUserRole = async () => {
  const session = await auth();

  return session?.user?.role;
};
