import React from 'react'

const Archive = ({inputs, data, setData}) => {
  const handleFileChange = (e) => {
    const files = e.target.files;

    const fileList = Array.from(files);

    setData((prevState) => ({
      ...prevState,
      archive: fileList,
    }));
  }
  return (
    <div className='input-steps-content'>
                <input type="file" name='archive' onChange={handleFileChange} />
    </div>
  )
}

export default Archive