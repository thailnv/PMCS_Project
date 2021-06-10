function GetAcesstoken(file) {
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
  return fetch(refresh_url, refresh_request).then( response => {
          return(response.json());
      }).then( response_json =>  {
         return  uploadFile(response_json.access_token,file);
  });
}

function uploadFile(access_token,file){

var metadata = {
  'name': 'Script', // Filename at Google Drive
  'mimeType': file.type, // mimeType at Google Drive
};
// Here gapi is used for retrieving the access token.
var form = new FormData();
form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
form.append('file', file);

return fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id', {
  method: 'POST',
  headers: new Headers({ 'Authorization': 'Bearer ' + access_token }),
  body: form,
}).then((res) => {
  return res.json();
}).then(function(val) {
  return val;
});
}




function uploadImage(img)  {
    var form = new FormData();
    form.append('image', img);
    let key = '92bd8c2c76657d6c7d7dd0eb1e7dc4d0';
    let url = `https://api.imgbb.com/1/upload?key=${key}`;
    let config = {
        method: 'POST',
        header: {
            'processData': false,
            'mimeType': 'multipart/form-data',
            'contentType': false,
        },
        body: form
    }
    return fetch(url, config)
        .then(response => response.json())
        .then(data => {
           return data;
        })
  }
function uploadScript(script){

}
  export const uploadService = {
    uploadImage,
    GetAcesstoken
  }