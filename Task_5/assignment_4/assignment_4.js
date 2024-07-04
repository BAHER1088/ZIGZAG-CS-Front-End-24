function downloadContents(urls) {

  const promises = urls.map(url => {
    return fetch(url).then(response => {
     
      if (!response.ok) {
       
        throw new Error(`Failed to fetch ${url}`);
      }
      return response.text(); 
    });
  });

 
  return Promise.all(promises);
}

const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3'
];

downloadContents(urls)
  .then(contents => {
    contents.forEach((content, index) => {
      console.log(`Content from URL ${urls[index]}:\n`, content);
    });
  })
  .catch(error => {
    console.error('Failed to download contents:', error);
  });
