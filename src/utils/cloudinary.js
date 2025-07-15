import {v2 as cloudinary} from "cloudinary";
import fs from "fs";


const uploadOnCloudinary = async (localFilePath) => {
    try{
     if(!localFilePath) return null;
     //upload the files on cloudinary
     const response = await cloudinary.uploader.upload(localFilePath,{
        resourceType : "auto"
     })
     console.log("file is successfuly uploaded on cloudinary",response.url);
    }catch(error){
      fs.unlinkSync(localFilePath);
      //remove the locally saved temporary file as the upload operation got failed
      return null;
    }
};

cloudinary.config({
  cloud_name:process.env.cloud_name,
  api_key:process.env.api_key,
  api_secret:process.env.api_secret  
});

export {uploadOnCloudinary};