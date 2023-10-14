async function fetchURL(url) {
    let response = await fetch(url);
    if (response.ok) {
        let data = await response.json();
        return data;
    } else {
        throw new Error('Network response was not ok.');
    }
}

async function fetchURLs(urls, callback) {
    for (let i = 0; i < urls.length; i++) {
        try {
            let data = await fetchURL(urls[i]);
            callback(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}

