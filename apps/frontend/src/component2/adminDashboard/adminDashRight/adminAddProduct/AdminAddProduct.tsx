import { useMemo, useState } from 'react';
import './AdminAddProduct.css'
import { useDropzone } from 'react-dropzone';
function AdminAddProduct() {
  const [showOptionButton, setShowOptionButton] = useState<boolean>(false)

  const handleShowOption = () => {
    setShowOptionButton(!showOptionButton)
  }
  const baseStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#253D35',
    borderStyle: 'dashed',
    backgroundColor: '##F5F6F7',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out',
    justifyContent: 'center'
  };

  const focusedStyle = {
    borderColor: '#2196f3'
  };

  const acceptStyle = {
    borderColor: '#00e676'
  };

  const rejectStyle = {
    borderColor: '#ff1744'
  };
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const onDrop = (acceptedFiles: any) => {
    setUploadedFiles(acceptedFiles);
    // setValue('avatar', acceptedFiles[0]);
  };
  const { getRootProps, getInputProps, open, isFocused,
    isDragAccept,
    isDragReject } = useDropzone({
      noClick: true,
      onDrop,
      accept: {
        'image/*': ['.jpeg', '.png']
      },
    });
  const style = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);
  return (
    <div className='AdminAddProduct_Main'>
      <div className='AdminAddProduct_Main_wrap'>
        <div className='AdminAddProduct_Header'>
          <p className='AdminAddProductRoute_Name'>Add Product</p>
        </div>
        <div className='AdminAddProduct_UploadArea'>
          {uploadedFiles && uploadedFiles.length > 0 ?
            <div className='AdminAddProduct_ImagePreview'>
              <img src={URL.createObjectURL(uploadedFiles[0])} alt='' />
            </div> :
            <div className='AdminAddProduct_UploadArea_Image_Wrap'>
              <div {...getRootProps({ style })} className="dropzone" >
                <input
                  {...getInputProps()}
                />
                <img src='./Upload.svg' alt='' className='UploadImg' />
                <p className='DropZoneText'>Drag and Drop File</p>
                <p className='or'>or</p>
                <button className='Browse' onClick={open}>Browse</button>
              </div>
            </div>
          }

          <div className='AdminAddProduct_UploadArea_Input_Main'>
            <div className='AdminAddProduct_UploadArea_Input_wrap'>
              <div className='AdminAddProductInputHeader'>
                <p>Product Info</p>
              </div>
              <div className='AdminAddProductInput_wrap'>
                <label className='ProductName_Wrap'>
                  <p>Product Name</p>
                  <input type="text" placeholder='Product Name' className='ProductInput' />
                </label>
                <input type="text" placeholder='Product Price' className='ProductInput' />
                <textarea placeholder='Product Details' className='Product_Details' />
                <input type="text" placeholder='Product Color' className='ProductInput' />
                <div className='AdminAddProductAction'>
                  <span className='ProductType'>
                    <p>Type:</p>
                    <select>
                      <option>Men</option>
                      <option>Women</option>
                      <option>Children</option>
                    </select>
                  </span>
                  <span className='ProductQuantity'>
                    <p>Quantity</p>
                    <select>
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </span>
                </div>
              </div>
              <div className='AdminAddProductButton_Wrap'>
                <button className='AdminAddProductButton' onClick={handleShowOption}>Upload</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showOptionButton && <div className='AdminAddProduct_Upload_option'>
        <div className='AdminAddProduct_Upload_option_wrap'>
          <h2>Are you sure?</h2>
          <p>You are about to upload an item.</p>
          <div className='AdminAddProduct_Upload_option_buttons_wrap'>
            <button className='AdminAddProduct_Upload_option_buttons'>Yes Upload</button>
            <button className='AdminAddProduct_Upload_option_buttons' onClick={() => setShowOptionButton(!showOptionButton)}>GO back</button>
          </div>
        </div>
      </div> }

    </div>
  )
}

export default AdminAddProduct