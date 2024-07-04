
async function fetchWithTimeout(url, options = {}, timeout = 5000) {
 
  const controller = new AbortController();
  const { signal } = controller;

  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeout);

  try {
   
    const response = await fetch(url, { ...options, signal });
    clearTimeout(timeoutId); 

    if (!response.ok) {
      throw new Error(`Failed to fetch. Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error(`Request timed out after ${timeout}ms`);
    }
    throw error; 
  }
}

// Usage example
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

fetchWithTimeout(apiUrl, {}, 3000)
  .then(data => {
    console.log('Fetched data:', data);
  })
  .catch(error => {
    console.error('Fetch failed:', error);
  });
