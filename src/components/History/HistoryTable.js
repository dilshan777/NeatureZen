import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button'
import "./HistoryTable.css";

const HistoryTable = () => {


const [data, setData] = useState([
    { id: 1, date: "2024-09-01", startTime: "08:00", startTimeHeartRate: 72, endTime: "08:30", endTimeHeartRate: 75 },
    { id: 2, date: "2024-09-02", startTime: "09:00", startTimeHeartRate: 68, endTime: "09:45", endTimeHeartRate: 70 },
    { id: 3, date: "2024-09-03", startTime: "07:30", startTimeHeartRate: 74, endTime: "08:15", endTimeHeartRate: 76 },
    { id: 4, date: "2024-09-04", startTime: "10:00", startTimeHeartRate: 80, endTime: "10:30", endTimeHeartRate: 82 },
    { id: 5, date: "2024-09-05", startTime: "06:30", startTimeHeartRate: 66, endTime: "07:00", endTimeHeartRate: 67 },
    { id: 6, date: "2024-09-06", startTime: "11:00", startTimeHeartRate: 85, endTime: "11:30", endTimeHeartRate: 88 },
    { id: 7, date: "2024-09-07", startTime: "05:30", startTimeHeartRate: 62, endTime: "06:00", endTimeHeartRate: 64 },
    { id: 8, date: "2024-09-08", startTime: "12:00", startTimeHeartRate: 78, endTime: "12:45", endTimeHeartRate: 79 },
    { id: 9, date: "2024-09-09", startTime: "08:15", startTimeHeartRate: 70, endTime: "09:00", endTimeHeartRate: 71 },
    { id: 10, date: "2024-09-10", startTime: "14:00", startTimeHeartRate: 90, endTime: "14:30", endTimeHeartRate: 92 },
    { id: 11, date: "2024-09-11", startTime: "13:30", startTimeHeartRate: 77, endTime: "14:00", endTimeHeartRate: 78 },
    { id: 12, date: "2024-09-12", startTime: "15:00", startTimeHeartRate: 88, endTime: "15:45", endTimeHeartRate: 89 },
    { id: 13, date: "2024-09-13", startTime: "16:30", startTimeHeartRate: 92, endTime: "17:00", endTimeHeartRate: 93 },
    { id: 14, date: "2024-09-14", startTime: "17:00", startTimeHeartRate: 84, endTime: "17:30", endTimeHeartRate: 85 },
    { id: 15, date: "2024-09-15", startTime: "18:00", startTimeHeartRate: 76, endTime: "18:30", endTimeHeartRate: 78 },
    { id: 16, date: "2024-09-16", startTime: "19:00", startTimeHeartRate: 82, endTime: "19:30", endTimeHeartRate: 83 },
    { id: 17, date: "2024-09-17", startTime: "20:00", startTimeHeartRate: 74, endTime: "20:30", endTimeHeartRate: 76 },
    { id: 18, date: "2024-09-18", startTime: "21:00", startTimeHeartRate: 70, endTime: "21:30", endTimeHeartRate: 72 },
    { id: 19, date: "2024-09-19", startTime: "22:00", startTimeHeartRate: 65, endTime: "22:30", endTimeHeartRate: 66 },
    { id: 20, date: "2024-09-20", startTime: "23:00", startTimeHeartRate: 72, endTime: "23:30", endTimeHeartRate: 74 },
    { id: 21, date: "2024-09-21", startTime: "06:00", startTimeHeartRate: 60, endTime: "06:30", endTimeHeartRate: 61 },
    { id: 22, date: "2024-09-22", startTime: "05:45", startTimeHeartRate: 64, endTime: "06:15", endTimeHeartRate: 66 },
    { id: 23, date: "2024-09-23", startTime: "08:30", startTimeHeartRate: 80, endTime: "09:00", endTimeHeartRate: 82 },
    { id: 24, date: "2024-09-24", startTime: "09:15", startTimeHeartRate: 86, endTime: "09:45", endTimeHeartRate: 87 },
    { id: 25, date: "2024-09-25", startTime: "07:00", startTimeHeartRate: 68, endTime: "07:30", endTimeHeartRate: 70 },
    { id: 26, date: "2024-09-26", startTime: "10:30", startTimeHeartRate: 72, endTime: "11:00", endTimeHeartRate: 73 },
    { id: 27, date: "2024-09-27", startTime: "06:45", startTimeHeartRate: 65, endTime: "07:15", endTimeHeartRate: 67 },
    { id: 28, date: "2024-09-28", startTime: "07:30", startTimeHeartRate: 66, endTime: "08:00", endTimeHeartRate: 68 },
    { id: 29, date: "2024-09-29", startTime: "13:00", startTimeHeartRate: 78, endTime: "13:30", endTimeHeartRate: 79 },
    { id: 30, date: "2024-09-30", startTime: "15:15", startTimeHeartRate: 82, endTime: "15:45", endTimeHeartRate: 84 },
    { id: 31, date: "2024-10-01", startTime: "14:45", startTimeHeartRate: 79, endTime: "15:15", endTimeHeartRate: 80 },
    { id: 32, date: "2024-10-02", startTime: "16:00", startTimeHeartRate: 86, endTime: "16:30", endTimeHeartRate: 88 },
    { id: 33, date: "2024-10-03", startTime: "08:30", startTimeHeartRate: 70, endTime: "09:00", endTimeHeartRate: 71 },
    { id: 34, date: "2024-10-04", startTime: "18:00", startTimeHeartRate: 84, endTime: "18:30", endTimeHeartRate: 86 },
    { id: 35, date: "2024-10-05", startTime: "19:00", startTimeHeartRate: 68, endTime: "19:30", endTimeHeartRate: 70 },
    { id: 36, date: "2024-10-06", startTime: "20:15", startTimeHeartRate: 92, endTime: "20:45", endTimeHeartRate: 93 },
    { id: 37, date: "2024-10-07", startTime: "21:00", startTimeHeartRate: 74, endTime: "21:30", endTimeHeartRate: 75 },
    { id: 38, date: "2024-10-08", startTime: "06:15", startTimeHeartRate: 65, endTime: "06:45", endTimeHeartRate: 66 },
    { id: 39, date: "2024-10-09", startTime: "07:30", startTimeHeartRate: 72, endTime: "08:00", endTimeHeartRate: 74 },
    { id: 40, date: "2024-10-10", startTime: "09:00", startTimeHeartRate: 80, endTime: "09:30", endTimeHeartRate: 82 },
    { id: 41, date: "2024-10-11", startTime: "10:15", startTimeHeartRate: 76, endTime: "10:45", endTimeHeartRate: 78 },
    { id: 42, date: "2024-10-12", startTime: "05:30", startTimeHeartRate: 62, endTime: "06:00", endTimeHeartRate: 64 },
    { id: 43, date: "2024-10-13", startTime: "11:00", startTimeHeartRate: 88, endTime: "11:30", endTimeHeartRate: 90 },
    { id: 44, date: "2024-10-14", startTime: "12:00", startTimeHeartRate: 82, endTime: "12:30", endTimeHeartRate: 83 },
    { id: 45, date: "2024-10-15", startTime: "14:00", startTimeHeartRate: 78, endTime: "14:30", endTimeHeartRate: 80 },
    { id: 46, date: "2024-10-16", startTime: "17:00", startTimeHeartRate: 85, endTime: "17:30", endTimeHeartRate: 86 },
    { id: 47, date: "2024-10-17", startTime: "20:00", startTimeHeartRate: 76, endTime: "20:30", endTimeHeartRate: 78 },
    { id: 48, date: "2024-10-18", startTime: "21:00", startTimeHeartRate: 72, endTime: "21:30", endTimeHeartRate: 74 },
    { id: 49, date: "2024-10-19", startTime: "08:30", startTimeHeartRate: 68, endTime: "09:00", endTimeHeartRate: 70 },
    { id: 50, date: "2024-10-20", startTime: "09:30", startTimeHeartRate: 64, endTime: "10:00", endTimeHeartRate: 66 },
    { id: 51, date: "2024-10-20", startTime: "09:30", startTimeHeartRate: 64, endTime: "10:00", endTimeHeartRate: 105 }
]);


    const [selectedDate, setSelectedDate] = useState(null); // For calendar filter

    // Filter function to filter by date
    const onDateFilterChange = (e) => {
        setSelectedDate(e.value);
    };

    const resetFilter = () => {
        setSelectedDate(null); // Clear the selected date to reset the filter
    };

    // Function to format date to match "YYYY-MM-DD" in your dataset
    const formatDate = (date) => {
        if (!date) return null;
        let day = String(date.getDate()).padStart(2, '0');
        let month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        let year = date.getFullYear();
        return `${year}-${month}-${day}`;
    };

    const heartRateTemplate = (rowData, field) => {
      const heartRate = rowData[field];
      let style = {};

      if (heartRate >= 60 && heartRate <= 100) {
          style = { backgroundColor: '#c8e6c9' }; // Green for normal heart rate
      } else if (heartRate > 100 || heartRate < 60) {
          style = { backgroundColor: '#ffcdd2' }; // Red for dangerous heart rate
      }

      return <span style={style}>{heartRate} bpm</span>;
  };

    return (
        <div className='heartRateHistory'>
        <div className="card">
            <h3 className='historyTitle'>My Session History</h3>
            <Calendar 
                value={selectedDate} 
                className='dateSelectorSection'
                onChange={onDateFilterChange} 
                placeholder="Select a Date" 
                dateFormat="yy-mm-dd"
            />

                <Button 
                    label="Reset Filter" 
                    onClick={resetFilter} 
                    className="p-button-secondary dateSelectorSection" 
                    style={{ marginLeft: '10px' }}
                />

          <DataTable 
                value={data.filter(row => !selectedDate || row.date === formatDate(selectedDate))} // Filter by date
                paginator 
                rows={5} 
                rowsPerPageOptions={[5, 10]} 
                tableStyle={{ minWidth: '50rem' }}
            >
                <Column field="id" header="ID"></Column>
                <Column field="date" header="Date"></Column>
                <Column field="startTime" header="Start Time"></Column>
                
                {/* Custom templates for heart rate highlighting */}
                <Column 
                    field="startTimeHeartRate" 
                    header="Start Time Heart Rate" 
                    body={(rowData) => heartRateTemplate(rowData, 'startTimeHeartRate')}
                />
                <Column 
                    field="endTimeHeartRate" 
                    header="End Time Heart Rate" 
                    body={(rowData) => heartRateTemplate(rowData, 'endTimeHeartRate')}
                />
                
                <Column field="endTime" header="End Time"></Column>
            </DataTable>
        </div>
        </div>
    );
};

export default HistoryTable;
