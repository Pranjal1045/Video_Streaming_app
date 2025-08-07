import {v2 as cloudinary} from "cloudinary";
import fs from "fs";


const uploadOnCloudinary = async (localFilePath) => {
    try{
     if(!localFilePath) return null;
     //upload the files on cloudinary
     const response = await cloudinary.uploader.upload(localFilePath,{
        resourceType : "auto"
     })
     fs.unlinkSync(localFilePath);
     return response;
    }catch(error){
       //remove the locally saved temporary file as the upload operation got failed
      fs.unlinkSync(localFilePath);
      return null;
    }
};

cloudinary.config({
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
  api_key:process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET  
});

export {uploadOnCloudinary};