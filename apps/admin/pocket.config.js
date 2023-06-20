import PocketBase from 'pocketbase';

// collect data from pocketbase
const pb = new PocketBase('http://localhost:8080/');

// try {
//   await pb.admins.authWithPassword('soumailaevane@gmail.com', 'onditmdpdoitetrelong');
// } catch (error) {
//   // console.log(error);
// }

export default pb;
