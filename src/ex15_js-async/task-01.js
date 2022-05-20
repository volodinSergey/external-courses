const requestURL = 'https://jsonplaceholder.typicode.com/posts';

const myFetch = (method, url, body) => new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  xhr.responseType = 'json';
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.addEventListener('load', () => resolve(xhr.response));

  xhr.addEventListener('error', () => reject(xhr.response));

  xhr.send(JSON.stringify(body));
});

myFetch('GET', requestURL)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

const dataObject = {
  title: 'Title',
  body: 'Some kind of text',
};

myFetch('POST', requestURL, dataObject)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
