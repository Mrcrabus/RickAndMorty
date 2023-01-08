export interface IUser {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  type: string;
  gender: string;
  origin: object;
  location: object;
  image: string;
  episode: any[];
  url: string;
  created: string;
}