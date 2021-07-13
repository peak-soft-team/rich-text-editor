const DEFAULT_URL = 'https://mtutor-node-api.herokuapp.com'

 const Fetch = async (path, options) => {
	const requestOptions = {
		method: options.method || 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	}
	if (options.method !== 'GET') {
		requestOptions.body = JSON.stringify(options.body)
	}
	 const promisifiedFetch = new Promise((resolve, reject) => {
    fetch(`${DEFAULT_URL}/${path}`, requestOptions)
        .then((response) => {
          if(response.ok){
            resolve(response)
          } else {
            reject(response)
          }
        })
  })

  return promisifiedFetch
  .then(res  => {
    return res.json();
  })
  
  
}

export default Fetch