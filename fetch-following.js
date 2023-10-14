let userId  = 28862234520;  // thestackoverflow
let count   = null;         // page size, def/max is 200?
let max_id  = null;         // cursor?
let url     = `https://www.instagram.com/api/v1/friendships/${userId}/following/`;

if (count !== null) {
    url += "?count=" + count;
}
if (max_id !== null) {
    url += url.includes("?") ? "&" : "?";
    url += "max_id=" + max_id;
}

// copy-paste the headers & other fields from the network tab into the options

let options = {
    "headers": {
        "accept": "*/*",
        "accept-language": "__OMITTED__",
        "dpr": "__OMITTED__",
        "sec-ch-prefers-color-scheme": "__OMITTED__",
        "sec-ch-ua": "__OMITTED__",
        "sec-ch-ua-full-version-list": "__OMITTED__",
        "sec-ch-ua-mobile": "__OMITTED__",
        "sec-ch-ua-model": "__OMITTED__",
        "sec-ch-ua-platform": "__OMITTED__",
        "sec-ch-ua-platform-version": "__OMITTED__",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "viewport-width": "__OMITTED__",
        "x-asbd-id": "__OMITTED__",
        "x-csrftoken": "__OMITTED__",
        "x-ig-app-id": "__OMITTED__",
        "x-ig-www-claim": "__OMITTED__",
        "x-requested-with": "XMLHttpRequest"
    },
    "referrer": "https://www.instagram.com/thestackoverflow/following/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "include"
};

fetch(url, options).then(async response => {
    let data = await response.json();
    // copy the object that is logged in the console to a json file
    console.log(data);
});

