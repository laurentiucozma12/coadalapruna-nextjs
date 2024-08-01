import { useState } from 'react'
import { Alert } from 'antd'

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
                className="fixed bottom-2 left-1/2 z-50 -translate-x-1/2 transform rounded"
            />
        )

    return { copyToClipboard, AlertComponent }
}

export default useCopyToClipboard
