
const CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

export async function addCloudinaryImg(imageURL){
    const formData = new FormData();
    formData.append('file', imageURL);
    formData.append('upload_preset', UPLOAD_PRESET);
    formData.append('folder', '/project/drinkk');
    return fetch(url,{
        method: 'POST',
        body : formData
    })
    .then(res=>res.json())
    .then(data=>data.url)
    .catch(error=>{console.log(error)});
}

