import PocketBase from 'pocketbase';

const pb = new PocketBase('https://cid.pockethost.io/');

try {
  // When targeting static hosting, we cannot use top-level await
  pb.admins.authWithPassword('soumailaevane@gmail.com', 'onditmdpdoitetrelong');
} catch (error) {
  // eslint-disable-next-line no-console
  console.error(error);
}

export default pb;
