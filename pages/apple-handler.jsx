import { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import { API } from '../src/lisbs/const';

const appleHandler = () => {
    const router = useRouter()

    const handleRequest = async () => {
        const res = axios.post(`${API}/`)
    }

    useEffect(() => {
        const token = router.asPath.split('=')
        const status = token[1].split('&')[0]
        console.log('status', status)
        console.log('params', token[2])
    }, [])

    const newMail = () => {

    }
    return (
        <div>
            <h2>Apple hadler</h2>
            <input type="mail" onChange={() => console.log('asdas')} />
            <input type="submit" onClick={newMail} />
        </div>
    )
}

export default appleHandler
