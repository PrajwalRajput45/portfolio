import { useEffect } from "react";
import { profile } from "../data/profile";

export function useTitle(page?: string) {
  useEffect(() => {
    document.title = page ? `${page} | ${profile.name}` : `${profile.name} | ${profile.role}`;
  }, [page]);
}
