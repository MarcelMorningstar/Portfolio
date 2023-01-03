import { Reference } from "@sanity/types";

interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  }
}

export interface PageInfo extends SanityBody {
  _type: 'pageInfo';
  heroImage: Image;
  name: string;
  role: string;
  aboutPicture: Image;
  myStory: string;
  phone: string;
  email: string;
}

export interface Skill extends SanityBody {
  _type: 'skills';
  title: string;
  progress: number;
  image: Image;
}

export interface Experience extends SanityBody {
  _type: 'experience';
  jobTitle: string;
  company: string;
  companyImage: Image;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyWorkingHere: boolean;
  technologies: Skill[];
  summery: string[]
}

export interface Project extends SanityBody {
  _type: 'projects';
  image: Image;
  title: string;
  summery: string;
  technologies: Skill[];
  linkToProject: string;
}
