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
        {inputs.map((item, index) => (
            <div key={index} className="input">
                <label htmlFor="">{item}</label> <br />
                <input type="file" onChange={handleFileChange} />
            </div>
        ))}
    </div>
  )
}

export default Archive