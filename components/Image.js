import React from 'react'
import ImageUploading from 'react-images-uploading'
import AddIcon from '@material-ui/icons/Add'
import styles from './Image.module.css'

function Image({ image, onChangeImage }) {
    return (
        <div className='App'>
            <ImageUploading
                multiple
                value={image}
                onChange={(e) => onChangeImage(e)}
                maxNumber={1}
                dataURLKey='data_url'
            >
                {({ imageList, onImageUpload, dragProps }) => (
                    <div className='upload__image-wrapper'>
                        <div
                            onClick={onImageUpload}
                            id='myDIV'
                            {...dragProps}
                            style={{
                                cursor: 'pointer',
                                display: image == undefined ? 'block' : 'none',
                            }}
                        >
                            <AddIcon
                                style={{ fontSize: 82, marginBottom: 20 }}
                            />
                            <h3 style={{ marginLeft: 5 }}>GÖRSEL</h3>
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
        </div>
    )
}

export default Image
