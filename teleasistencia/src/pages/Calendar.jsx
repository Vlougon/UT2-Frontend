import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import '../styles/Calendar.css';

export default function Calendar() {
    const [events, setEvents] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedDates, setSelectedDates] = useState({});

    const handleSelectedDates = (info) => {
        let startDay = parseInt(info.startStr.slice(-2));
        let endDay = parseInt(info.endStr.slice(-2)) - 1 > 0 ? parseInt(info.endStr.slice(-2)) - 1 : startDay;
        endDay = endDay.toString().length === 2 ? endDay : endDay.toString().padStart(2, '0');

        let startDate = info.startStr;
        let enDate = info.endStr.slice(0, -2) + endDay;

        if (startDate === enDate) {
            setSelectedDate(startDate);
            alert(startDate);
            return
        }

        setSelectedDates({ start: startDate, end: enDate });
        alert(startDate + '/' + enDate);
    };

    const handleEventSubmit = (event) => {
        setEvents([...events, event]);
        setSelectedDate('');
        setSelectedDates({});
    };

    return (
        <div id='calendar'>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactPlugin, listPlugin]}
                initialView="dayGridMonth"
                themeSystem="Darkly"
                locale={'es'}
                editable={true}
                selectable={true}
                slotMinTime='00:00:00'
                slotMaxTime='23:00:00'
                events={events}
                select={handleSelectedDates}
                headerToolbar={
                    {
                        left: 'prev next today',
                        center: 'title',
                        right: 'dayGridMonth timeGridWeek timeGridDay listWeek'
                    }
                }
                eventClick={
                    function (argument) {
                        alert(argument.event.title);
                        alert(argument.event.start);
                    }
                }
            />
        </div>
    )
}