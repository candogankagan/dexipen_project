import React from 'react'
import styles from './Layout.module.css'
import 'react-edit-text/dist/index.css'
import Image from '../components/Image'

function Card({ cardObj }) {
    return (
        <div className={styles.main_container}>
            <div className={styles.container}>
                <div className={styles.tab}>
                    <h3>New Title</h3>
                </div>
                <div className={styles.main}>
                    <div className={styles.titles}>
                        <h3 id={styles.title}>{cardObj.title}</h3>
                        <div id={styles.text}>
                            <h4>{cardObj.description}</h4>
                        </div>
                    </div>
                    <div className={styles.image}>
                        <div className={styles.icon}>
                            <Image image={cardObj.image} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
