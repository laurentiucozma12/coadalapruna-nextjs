import { useState } from 'react'
import { Alert } from 'antd'
import './useCopyToClipboard.css'

const useCopyToClipboard = () => {
    const [showAlert, setShowAlert] = useState(false)

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text)
            setShowAlert(true)
            setTimeout(() => setShowAlert(false), 3000)
        } catch (err) {
            console.error('Failed to copy: ', err)
        }
    }

    const AlertComponent = () =>
        showAlert && (
            <Alert
                message="Numărul de telefon a fost copiat cu success"
                type="success"
                showIcon
                closable
                onClose={() => setShowAlert(false)}
                style={{
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    position: 'fixed',
                    color: 'white',
                    background: 'black',
                }}
            />
        )

    return { copyToClipboard, AlertComponent }
}

export default useCopyToClipboard
