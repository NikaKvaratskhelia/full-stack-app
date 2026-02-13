import { Person } from "./Person";

export type Movie = {
  id: number;
  title: string;
  description: string;
  coverPhoto: string;
  genre: string[];
  rating: number;
  runtimeInMinutes: number;
  publishYear: number;
  producer: Person;
  actors: Person[];
};
