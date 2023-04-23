import { useState } from 'react'

import './App.css'
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

function App() {

  const [flag, setFlag] = useState(false);
  const [link, setLink] = useState("");
  const[name, setName] = useState("");

  async function storeFiles(files) {
    const client = makeStorageClient();
    const cid = await client.put(files)
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
  return (
 <div>
      <h1>React App</h1>
      <input type="file" onChange={() => setFile(getFiles)} />
      <button onClick={storeFiles(file)}>Submit</button>
      <h2>{`https://${link}.ipfs.w3s.link/${name}`}</h2>
      {flag ? <img src={`https://${link}.ipfs.w3s.link/${name}`} alt="images" /> : <h2>Nothing</h2>
      }
      
 </div>
  )
}

export default App
