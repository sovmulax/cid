import PocketBase from 'pocketbase';

const pb = new PocketBase('https://cid.pockethost.io/');

try {
  await pb.admins.authWithPassword('soumailaevane@gmail.com', 'onditmdpdoitetrelong');
} catch (error) {
  // eslint-disable-next-line no-console
  console.error(error);
}

export default pb;
