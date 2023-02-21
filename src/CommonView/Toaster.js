import React, { useContext } from 'react'
import { Toast } from 'react-bootstrap'
import DataContext from '../context/DataContext'

const Toaster = ({show , header , type , msg}) => {
    const { setShowAlert } = useContext(DataContext)
    return (
        <Toast
            show={show}
            onClose={() => setShowAlert(false)}
            className="p-3"
            bg={type}
            position="bottom-end"
        >
            <Toast.Header>
                <strong className="me-auto">{header}</strong>
            </Toast.Header>
            <Toast.Body style={{ textAlign: 'left', color: 'white' }}>
                {msg}
            </Toast.Body>
        </Toast>
    )
}

export default Toaster