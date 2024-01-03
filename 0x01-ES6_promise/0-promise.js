export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const successfulOperation = true;
    if (successfulOperation) {
      // If the operation is successful, resolve the promise
      resolve({
        status: 200,
        body: 'Success'
      });
    } else {
      // If the operation fails, reject the promise
      reject(new Error("Error"));
    }
  });
}