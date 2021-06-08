

async function uploadFile(){

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
  export const imgService = {
    uploadImage,
    uploadFile
  }