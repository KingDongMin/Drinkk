import {Cloudinary} from '@cloudinary/url-gen';
import axios from "axios"

const CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET

const cld = new Cloudinary({
    cloud:{
        cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME
    }
})

const myImage = cld.image("samples/animals")

export function test(){
    console.log(myImage.toURL());
    return myImage.toURL();
}

// cloudinary에 이미지 저장하기
export async function addTest(formData){
    axios.post(`http://res.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/project/drinkk/image/upload`,{
        file : formData
    })//
    .then(result=>{console.log(result)})//
    .catch(error=>{console.log(error)});
}

const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

export async function submitTest(formData){
    fetch(url, {
        method : "POST",
        body: formData
    }).then(res=>res.json()
    ).then(data=>{
        console.log(data.url);
    })
}

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

