export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    if (typeof fileName !== 'string') {
      reject(new Error('Invalid fileName. Please provide a string.'));
    } else {
      reject(new Error(`${fileName} cannot be processed`));
    }
  });
}
