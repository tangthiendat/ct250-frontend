import { format } from "date-fns";
export function formatISODate(date: string) {
  return format(new Date(date), "yyyy-MM-dd'T'HH:mm:ss.SSS");
}
