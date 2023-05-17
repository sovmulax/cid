import PocketBase from 'pocketbase';

// collect data from pocketbase
const pb = new PocketBase('https://cid.marcaureln.com');

try {
  await pb.admins.authWithPassword('soumailaevane@gmail.com', 'onditmdpdoitetrelong');
} catch (error) {
  // console.log(error);
}

export default pb;
