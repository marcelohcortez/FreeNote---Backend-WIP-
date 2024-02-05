import { User } from "./user";

interface Note {
  _id: string;
  created_by: User._id;
  info_data: string[];
}

export type { Note };
