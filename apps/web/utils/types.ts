/* eslint-disable @typescript-eslint/no-unused-vars */

interface PocketBaseRecord {
  id: string;
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
}

interface Company extends PocketBaseRecord {
  name: string;
  logo: string;
  link: string;
}

interface Member extends PocketBaseRecord {
  fullname: string;
  jobTitle: string;
  picture: string;
  email: string | undefined;
  facebook: string | undefined;
  linkedin: string | undefined;
}
