import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { currentProfile } from "./current-profile";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
