import React,{useState} from 'react'

function Twelve() {

    const [file , setFile ] = useState(null)

    const handleFileChnage = (e) =>{
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    }

  return (

    <>
    
    <div>
        <input type="file" accept='image/*' onChange={handleFileChnage} />


        <div>Your Selected Image is here</div>
        {file && <img src={URL.createObjectURL(file)} alt='uploaded' height={200} width={200} />}
    </div>
    </>
    

  )


}

export default Twelve