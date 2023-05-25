// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here
  // Function to fetch data from an API
      const fetchData = (url) =>
        new Promise((resolve, reject) => {
          const startTime = performance.now();
          fetch(url)
            .then((response) => response.json())
            .then((data) => {
              const endTime = performance.now();
              const timeTaken = endTime - startTime;
              resolve(timeTaken);
            })
            .catch((error) => {
              reject(error);
            });
        });

      // Perform API calls using Promise.all
      const promiseAllFetch = () => {
        const startTime = performance.now();
        Promise.all(apiUrls.map((url) => fetchData(url)))
          .then((times) => {
            const endTime = performance.now();
            const totalDuration = endTime - startTime;
            document.getElementById('output-all').textContent = totalDuration.toFixed(2) + ' ms';
          })
          .catch((error) => {
            console.error('Promise.all error:', error);
          });
      };

      // Perform API calls using Promise.any
      const promiseAnyFetch = () => {
        const startTime = performance.now();
        Promise.any(apiUrls.map((url) => fetchData(url)))
          .then((time) => {
            const endTime = performance.now();
            const totalDuration = endTime - startTime;
            document.getElementById('output-any').textContent = totalDuration.toFixed(2) + ' ms';
          })
          .catch((error) => {
            console.error('Promise.any error:', error);
          });
      };

      // Call the fetch functions
      promiseAllFetch();
      promiseAnyFetch();
