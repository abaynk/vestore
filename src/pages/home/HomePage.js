import React, { useState } from 'react'
import QrReader from 'react-qr-reader'
import './HomePage.css';

const HomePage = () => {
    const [link, setLink] = useState('');
    const handleScan = (data) => {
        if (data) {
            setLink(data)
        }
    }
    const handleError = (err) => {
        console.log(err)
    }
    return (
        <div className='root'>
            <h1>Scan your QR code:</h1>
            <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '500px' }}

        />
        <p>Your product link is: <a href={`${link}`}>{link}</a></p>
        </div>
    )
}

export default HomePage

