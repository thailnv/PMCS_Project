function get_access_token_using_saved_refresh_token() {
    // from the oauth playground
    const refresh_token = "1//04gMAAgu9HFp5CgYIARAAGAQSNwF-L9Ir8Jj6Ua_-S_e0lPpy2qyk1yI2V6MZGEu_QYjVuSb3h1osmdAKfO7zuZht8_HKJFWD0L0";
    // from the API console
    const client_id = "770758275003-93pvt96fbsobte9k7b7k6s8u7hfs71vh.apps.googleusercontent.com";
    // from the API console
    const client_secret = "XeXGw5ZZkKipgRzid_4y0lzK";
    // from https://developers.google.com/identity/protocols/OAuth2WebServer#offline
    const refresh_url = "https://oauth2.googleapis.com/token";

    const post_body = `grant_type=refresh_token&client_id=${encodeURIComponent(client_id)}&client_secret=${encodeURIComponent(client_secret)}&refresh_token=${encodeURIComponent(refresh_token)}`;

    let refresh_request = {
        body: post_body,
        method: "POST",
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        })
    }

    // post to the refresh endpoint, parse the json response and use the access token to call files.list
    fetch(refresh_url, refresh_request).then( response => {
            return(response.json());
        }).then( response_json =>  {
            console.log(response_json);
            uploadFile(response_json.access_token);
    });
}

// a quick and dirty function to list some Drive files using the newly acquired access token
var fileName='mychat123';
var fileData='this is a sample data';
var contentType='text/plain'
var metadata = {
      'name': fileName,
      'mimeType': contentType
};

function getFileById (access_token,id) {
    const drive_url = `https://www.googleapis.com/drive/v3/files/${id}`;
    let drive_request = {
        method: "GET",
        headers: new Headers({
            Authorization: "Bearer "+access_token
        })
    }
    fetch(drive_url, drive_request).then( response => {
        return(response.json());
    }).then( data =>  {
        console.log(data);
    });
}
function uploadFile(access_token){
    var fileContent = 'sample text'; // As a sample, upload a text file.
var file = new Blob([fileContent], {type: 'text/plain'});
var metadata = {
    'name': 'sampleName', // Filename at Google Drive
    'mimeType': 'text/plain', // mimeType at Google Drive
};
// Here gapi is used for retrieving the access token.
var form = new FormData();
form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
form.append('file', file);

fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id', {
    method: 'POST',
    headers: new Headers({ 'Authorization': 'Bearer ' + access_token }),
    body: form,
}).then((res) => {
    return res.json();
}).then(function(val) {
    getFileById(access_token,val.id)
});
}

get_access_token_using_saved_refresh_token();