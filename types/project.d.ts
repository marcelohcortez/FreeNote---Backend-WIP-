import { Budget } from "./budget";
import { Client } from "./client";
import { ProjectStatus } from "./projectStatus";
import { User } from "./user";
interface Project {
  _id: string;
  name: string;
  description: string;
  budget: Budget._id;
  client: Client._id;
  project_status: ProjectStatus.status;
  created_by: User._id;
  edited_by?: User._id;
  info_data?: string[];
  website?: string;
  start_date?: Date;
  end_date?: Date;
}

export type { Project };
