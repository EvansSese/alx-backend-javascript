import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((result) => {
      console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`);
    })
    .catch((error) => {
      console.error('Signup system offline');
    });
}
