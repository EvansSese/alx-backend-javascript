export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success === true) {
      // If success is true, resolve the promise with a success object
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      // If success is false, reject the promise with an error object
      reject(new Error('The fake API is not working currently'));
    }
  });
}
