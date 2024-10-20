import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const StartSession = () => {
    const [heartRate, setHeartRate] = useState(55); // Initial heart rate
    const [stressLevel, setStressLevel] = useState('medium'); // Initial stress level
    const [chartData, setChartData] = useState({
        labels: [], // Time labels for chart
        datasets: [{
            label: 'Heart Rate (bpm)',
            data: [],
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 2,
            fill: false,
            tension: 0.1
        }]
    });

    // Function to generate real-time heart rate data
    const updateHeartRate = () => {
        const newHeartRate = Math.floor(Math.random() * 40) + 60; // Random heart rate between 60 and 100 bpm
        setHeartRate(newHeartRate);

        // Update chart data
        const currentTime = new Date().toLocaleTimeString();
        setChartData(prevState => ({
            labels: [...prevState.labels, currentTime],
            datasets: [{
                ...prevState.datasets[0],
                data: [...prevState.datasets[0].data, newHeartRate]
            }]
        }));
    };

    useEffect(() => {
        // Update heart rate every 2 seconds
        const interval = setInterval(updateHeartRate, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container">
            <header>
                <img src="logo.png" alt="NaturaZen Logo" />
                <nav>
                    <a href="/">Home</a>
                    <a href="/myhistory">My History</a>
                    <a href="/about">About</a>
                </nav>
            </header>

            <div className="session-info">
                <h2>Start Session</h2>
                <p>Welcome to your personalized relaxation session. Below you can monitor your stress levels and heart rate in real-time.</p>
                
                <div className="status">
                    <div className="status-item">
                        <p>Stress Level</p>
                        <div className="value-box">{stressLevel}</div>
                    </div>
                    <div className="status-item">
                        <p>Heart Rate</p>
                        <div className="value-box">{heartRate} bpm</div>
                    </div>
                </div>

                <button onClick={() => alert("Start Session Clicked")}>Start Session</button>
                <button onClick={() => alert("End Session Clicked")}>End Session</button>
            </div>

            <div className="chart-container">
                <h3>Real-Time Heart Rate</h3>
                <Line data={chartData} />
            </div>

            <footer>
                <p>© 2024 NaturaZen. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default StartSession;
