declare global {
  interface PocketBaseRecord {
    id: string;
    collectionId: string;
    collectionName: string;
    created: string;
    updated: string;
    expand?: any;
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

  interface Post extends PocketBaseRecord {
    title: string;
    content: string;
    author: string;
    slug: string;
    cover: string | undefined;
    excerpt: string;
  }
}

export {};
