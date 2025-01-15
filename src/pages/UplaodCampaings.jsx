import React, { useState } from 'react';
import axios from 'axios';
import '../styles/FileUpload.css'; // Import CSS file for styling

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [message, setMessage] = useState({});

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!file) {
            setError('Please select a file');
            return;
        }

        setLoading(true);
        setError('');
        setMessage({});

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('https://facebookadsmangerserver.vercel.app/api/leads/upload', formData, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setMessage(response.data);
        } catch (err) {
            setError('Error uploading file');
            console.error('Upload error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="file-upload-container">
            <h1 className="file-upload-title">Upload CSV File</h1>
            <form onSubmit={handleSubmit} className="file-upload-form">
                <input type="file" onChange={handleFileChange} title='select' accept=".csv" className="file-upload-input" />
                <button type="submit" disabled={loading} className="file-upload-button">
                    {loading ? 'Uploading...' : 'Upload'}
                </button>
            </form>
            {error && <p className="file-upload-error">{error}</p>}
            {message.success !== undefined && (
                <p className={`file-upload-${message.success ? 'success' : 'error'}`}>
                    {message.message}
                </p>
            )}
        </div>
    );
};

export default FileUpload;
