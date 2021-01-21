import React, { useImperativeHandle, useState } from 'react'
import ImageUploading from 'react-images-uploading'
import AddIcon from '@material-ui/icons/Add'
import styles from './Image.module.css'

const Image = React.forwardRef((props, ref) => {
    //export function Image({ onChangeImage }) {
    const [images, setImages] = useState([])
    const [colorChange, setColorChange] = useState(true)
    const maxNumber = 69

    function clearImage() {
        setImages([])
    }

    const onChange = (imageList, addUpdateIndex) => {
        setImages(imageList)
        props.children.onChangeImage(imageList)
        console.log(images, addUpdateIndex)
        const myFunction = () => {
            const x = document.getElementById('myDIV')
            if (x.style.display === 'none') {
                x.style.display = 'block'
            } else {
                x.style.display = 'none'
            }
        }
        myFunction()

        setColorChange(false)
    }

    return (
        <div className='App'>
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey='data_url'
            >
                {({ imageList, onImageUpload, dragProps }) => (
                    <div className='upload__image-wrapper'>
                        <div
                            onClick={onImageUpload}
                            id='myDIV'
                            {...dragProps}
                            className={styles.icon}
                        >
                            <AddIcon style={{ fontSize: 82 }} />
                            <h3>GÖRSEL</h3>
                        </div>
                        &nbsp;
                        {imageList.map((image, index) => (
                            <div key={index} className={styles.item}>
                                <img
                                    src={image['data_url']}
                                    alt=''
                                    width='328'
                                    height='250'
                                />
                            </div>
                        ))}
                    </div>
                )}
            </ImageUploading>
            <div className={colorChange ? styles.light : styles.green}></div>
        </div>
    )
})

export default Image
