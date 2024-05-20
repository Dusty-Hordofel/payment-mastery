import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  return `${
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000/"
  }${path}`;
}
