import React from 'react'
import Layout from '../components/Layout'
import { useStateValue } from '../components/StateProvider'

export default function Home() {
    const [{ basket }, dispatch] = useStateValue()
    return (
        <div>
            <Layout />
        </div>
    )
}
