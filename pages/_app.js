import React from 'react'
import '../styles/globals.css'
import { StateProvider } from '../components/StateProvider'
import { initialState, reducer } from '../components/reducer'

function MyApp({ Component }) {
    return (
        <React.StrictMode>
            <StateProvider initialState={initialState} reducer={reducer}>
                <Component />
            </StateProvider>
        </React.StrictMode>
    )
}
export default MyApp
