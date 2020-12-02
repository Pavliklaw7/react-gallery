const BASE_URL = 'https://tzfrontend.herokuapp.com'

export const request = async(url, options) => (
  fetch(`${BASE_URL}${url}`, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    })
);
