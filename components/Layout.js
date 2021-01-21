import React, { useRef, useState, Component } from 'react'
import styles from './Layout.module.css'
import { EditText, EditTextarea } from 'react-edit-text'
import 'react-edit-text/dist/index.css'
import AddIcon from '@material-ui/icons/Add'
import Image from '../components/Image'
import { useStateValue } from './StateProvider'

function Layout() {
    const [show, setShow] = useState(false)
    const [text, setText] = useState('New description')
    const [title, setTitle] = useState('New title')
    const [cardList, setCardList] = useState([])
    const [image, setImage] = useState()
    const [card, setCard] = useState({
        title: 'New title',
        description: 'New description',
        image: null,
    })
    const [description, setDescription] = useState('New description')
    const [state, dispatch] = useStateValue()
    const childRef = useRef(null)
    let value1, value2
    function handleSave({ name, value }) {
        console.log(value, name)
        if (name == 'textbox') {
            value1 = value
            console.log(value1)
        } else {
            value2 = value
            console.log(value1, value2)
        }
    }

    function onChangeImage(image) {
        setImage(image)
    }

    function addToBasket() {
        const card = {
            title,
            description,
            image,
        }
        let newArray = cardList.slice()
        newArray.push(card)
        setCardList(newArray)
        console.log(newArray)
        console.log(childRef.current)
        setTitle('New title')
        setDescription('New description')
    }

    const handler = () => {
        setText('')
        setShow(true)
    }

    return (
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
                            onSave={handleSave}
                        />
                        <h3 onClick={handler}>{text}</h3>
                        {show && (
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
                                onSave={handleSave}
                            />
                        )}
                    </div>
                    <div className={styles.image}>
                        <div className={styles.icon}>
                            <Image
                                onChangeImage={onChangeImage}
                                ref={childRef}
                            />
                        </div>
                    </div>
                </div>
                <button onClick={addToBasket}>Add to Basket</button>
            </div>
        </div>
    )
}

export default Layout
