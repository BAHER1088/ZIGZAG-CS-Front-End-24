

async function fetchWithRetry(url, options = {}, retries , delay ) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Failed to fetch. Status: ${response.status}`);
      }
      return await response.json(); 
    } catch (error) {
      console.error(`Attempt ${attempt} failed: ${error.message}`);
      if (attempt < retries) {
        console.log(`Retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      } else {
        throw new Error(`Failed after ${retries} retries: ${error.message}`);
      }
    }
  }
}

// Usage example
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

fetchWithRetry(apiUrl, {}, 3, 1000)
  .then(data => {
    console.log('Fetched data:', data);
  })
  .catch(error => {
    console.error('Fetch failed:', error);
  });
