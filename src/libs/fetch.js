const jsonHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

const getData = (url, { headers, onSuccess, onError }) => {
  fetch(url, {
    method: 'GET',
    headers: {
      ...jsonHeaders,
      ...headers
    }
  })
    .then(response => response.json())
    .then(response => {
      if (typeof onSuccess === 'function') {
        onSuccess(response)
      }
    })
    .catch(response => {
      if (typeof onError === 'function') {
        onError(response)
      }
    })
}

const postData = (url, { body, onSuccess, onError }) => {
  fetch(url, {
    method: 'POST',
    headers: { ...jsonHeaders },
    body
  })
    .then(response => response.json())
    .then(response => {
      if (typeof onSuccess === 'function') {
        onSuccess(response)
      }
    })
    .catch(response => {
      if (typeof onError === 'function') {
        onError(response)
      }
    })
}

export { getData, postData }