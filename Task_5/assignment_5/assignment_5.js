
async function fetchMultipleApis(apiUrls) {
 
  const fetchPromises = apiUrls.map(url => {
    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch ${url}`);
      }
      return response.json(); 
    });
  });

  try {
    const results = await Promise.all(fetchPromises);

   
    const combinedResult = results.reduce((acc, result) => {
      return acc.concat(result); 
    }, []);

    return combinedResult;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

const apiUrls = [
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/comments',
  'https://jsonplaceholder.typicode.com/albums'
];

fetchMultipleApis(apiUrls)
  .then(combinedResult => {
    console.log('Combined Result:', combinedResult);
  })
  .catch(error => {
    console.error('Failed to fetch data from APIs:', error);
  });
