import React, { useState, useEffect } from 'react'
import styles from './Layout.module.css'
import { EditText, EditTextarea } from 'react-edit-text'
import Image from './Image'
import Card from './Card'

function Layout() {
    const [cardList, setCardList] = useState([])
    const [title, setTitle] = useState('New title')
    const [description, setDescription] = useState('New description')
    const [image, setImage] = useState()
    const [enableTextArea, setEnableTextArea] = useState(false)

    useEffect(() => {
        console.log('Total item in basket : ', cardList.length)
    }, [cardList])

    function addToBasket() {
        if (image == undefined) {
            alert('Image must be uploaded')
            return
        }

        const card = {
            title,
            description,
            image,
        }

        console.log(card)
        setCardList([card, ...cardList])
        console.log(cardList)
        clearAll()
    }

    const clearAll = () => {
        setImage()
        setTitle('New title')
        setDescription('New description')
        setEnableTextArea(false)
    }

    return (
        <>
            <div className={styles.main_container}>
                <div className={styles.container}>
                    <div className={styles.tab}>
                        <h3>New Title</h3>
                    </div>
                    <div className={styles.main}>
                        <div className={styles.titles}>
                            <EditText
                                name='textbox'
                                style={{
                                    color: ' rgb(197, 110, 79)',
                                    fontSize: '30px',
                                    fontWeight: '600',
                                }}
                                value={title}
                                onChange={setTitle}
                            />
                            {enableTextArea ? (
                                <EditTextarea
                                    name='textarea'
                                    rows={5}
                                    style={{
                                        fontSize: '16px',
                                        border: '1px solid #ccc',
                                        width: '328px',
                                    }}
                                    value={description}
                                    onChange={setDescription}
                                />
                            ) : (
                                <h3 onClick={() => setEnableTextArea(true)}>
                                    New description
                                </h3>
                            )}
                        </div>
                        <div className={styles.image}>
                            <div className={styles.icon}>
                                <Image
                                    image={image}
                                    onChangeImage={(e) => setImage(e)}
                                />
                                <div
                                    onClick={addToBasket}
                                    className={
                                        image == undefined
                                            ? styles.light
                                            : styles.green
                                    }
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {cardList.map((cardObj, index) => (
                <Card key={index} cardObj={cardObj} />
            ))}
        </>
    )
}

export default Layout
