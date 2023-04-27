import React, { useState ,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";

import { useStateContext } from "../context";
import { money } from "../assets";
import { CustomButton, FormField, Loader } from "../components";
import { checkIfImage } from "../utils";
import { Web3Storage } from 'web3.storage'

function getAccessToken () {
  // If you're just testing, you can paste in a token
  // and uncomment the following line:
  // return 'paste-your-token-here'

  // In a real app, it's better to read an access token from an
  // environement variable or other configuration that's kept outside of
  // your code base. For this to work, you need to set the
  // WEB3STORAGE_TOKEN environment variable before you run your code.
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDUzOENiMUZlOTVFN0RCZjUzZjFDNDM1YWUwMkFBMjgzRTY1NzZBQjEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODIxOTU2NTA2MDksIm5hbWUiOiJTb2JlckhhdmVuIn0.pM-sWqhkVK1SlTfj-GP7z4NoRIxpicS1HCoVdAo8fPs"
}

function makeStorageClient () {
  return new Web3Storage({ token: getAccessToken() })
}

const CreatePost = () => {
  useEffect(() => {
  
  },[storeFiles,getFiles]);
  const [flag, setFlag] = useState(false);
  const [link, setLink] = useState("");
  const[name, setName] = useState("");
 // const [isLoading, setIsLoading] = useState(false);
  async function storeFiles(files) {
    const client = makeStorageClient();
   // setIsLoading(true);
    const cid = await client.put(files)
  //  setIsLoading(false);
    console.log('stored files with cid:', cid)
    setLink(cid);
    setFlag(true);
    //return cid
  }
  const [file, setFile] = useState()
  function getFiles () {
    const fileInput = document.querySelector('input[type="file"]')
    var newString = fileInput.files[0].name.replace(/ /g, "%20");
    setName(newString );
    console.log(fileInput.files[0])
    return fileInput.files
    
  }
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { publishPost } = useStateContext();
  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    image: "",
    time: "",
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log( form)

    setIsLoading(true);
    await publishPost({
      ...form,

    });
    setIsLoading(false);
    navigate("/");
  };

  return (
    <div className="bg-blue-50 flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {isLoading && <Loader />}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-sky-600 rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
          Report
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full mt-[65px] flex flex-col gap-[30px]"
      >
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Title*"
            placeholder="say no to drugs "
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormFieldChange("title", e)}
          />

          {/* <FormField
            labelName="Post owner"
            placeholder="wallet address "
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange("name", e)}
          /> */}
        </div>

        <FormField
          labelName="description*"
          placeholder="Write what you know"
          isTextArea
          value={form.description}
          handleChange={(e) => handleFormFieldChange("description", e)}
        />

        <FormField
          labelName="location*"
          placeholder="eg : edukki"
          inputType="text"
          value={form.location}
          handleChange={(e) => handleFormFieldChange("location", e)}
        />


        <div className="flex flex-wrap gap-[40px]">

          <FormField
            labelName="Event date *"
            placeholder="Date"
            inputType="date"
            value={form.time}
            handleChange={(e) => handleFormFieldChange("time", e)}
          />
          {console.log(form).time};
        </div>

        {/* <FormField
          labelName="Evidence image *"
          placeholder="Place image URL "
          inputType="url"
          value={form.image}
          handleChange={(e) => handleFormFieldChange("image", e)}
        /> */}
        <div className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-black text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]">
        <input type="file" onChange={() => setFile(getFiles)} />
      <button onClick={storeFiles(file)}>Submit</button>
      {/* <h2>{`https://${link}.ipfs.w3s.link/${name}`}</h2> */}
      {flag ? <img src={`https://${link}.ipfs.w3s.link/${name}`} alt="images" object-fit="cover" width="200" height="200" /> : <h2>Nothing</h2>
      }
        </div>
        
        <div className="flex justify-center items-center mt-[40px]">
          <CustomButton
            btnType="submit"
            title="Submit "
            styles="bg-sky-600"
          />
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
