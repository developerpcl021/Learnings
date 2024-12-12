import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios';

const App = () => {
    const [fetchData, setFetchData] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isUpdating, setIsUpdating] = useState(false);

    useEffect(() => {
        fetchDataFromServer();
    }, [isUpdating]);

    const fetchDataFromServer = () => {
        fetch('http://localhost:3002/templates')
            .then(response => response.json())
            .then(data => {
                setFetchData(data);
            })
            .catch(error => console.error(error));
    };

    const postDataToServer = async (e) => {
        const data = {
            title,
            content,
        };
    e.preventDefault();

        const updatedData = [...fetchData, data]; // Add the new template to the existing data

        setIsUpdating(true); // Set the updating state to true

        try {
            const response = await axios.post("http://localhost:3002/templates", data);

            if (response.status === 200) {
                console.log("Template posted successfully");
                // Update the fetched data
                setFetchData(updatedData);
                setIsUpdating(false); // Set the updating state back to false
                setTitle("");
                setContent("");
            } else {
                console.error("Failed to post template");
            }
            window.location.reload();
        } catch (error) {
            console.error("Failed to post template", error);
        }
    };


    return (
        <div>
            <h1>Hello, ReactDOM!</h1>
            {fetchData.map(template => (
                <div key={template.id}>
                    <h3>{template.title}</h3>
                    <p>{template.content}</p>
                </div>
            ))}


            <div>
                <h2>Create New Template</h2>
                <form onSubmit={postDataToServer}>
                    <label style={{ display: "block" }}>
                        Title:
                    </label>
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <label style={{ display: "block" }}>
                        Content:
                    </label>
                    <textarea
                        value={content}
                        onChange={e => setContent(e.target.value)}
                    ></textarea>
                    <button type='submit' style={{ display: "block" }}>Post Template</button>
                </form>
            </div>
        </div>
    );
};

createRoot(document.getElementById('root')).render(<App />);
