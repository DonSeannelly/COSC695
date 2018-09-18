import { Outcome } from "./Outcome";

export interface Activity {
  description: string;
  outcomes: Outcome[];
  subactivities: Activity[];
}