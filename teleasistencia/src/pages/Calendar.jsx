import { useState, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import '../styles/Calendar.css';

export default function Calendar() {
    const [events, setEvents] = useState([]);
    const [title, setTitle] = useState('');
    const [selectedDates, setSelectedDates] = useState({
        firstDate: '0000-00-00',
        secondDate: '0000-00-00',
        firstTime: '00:00:00',
        secondTime: '00:00:00',
    });
    const modalRef = useRef(null);

    const handleSelectedDates = (info) => {
        let startDate = info.startStr.includes('T') ? info.startStr.slice(0, 10) : info.startStr;
        let endDate = info.endStr.includes('T') ? info.endStr.slice(0, 10) : info.endStr;
        let startTime = new Date(info.start).getHours().toString().padStart(2, '0') + ':' + new Date(info.start).getMinutes().toString().padStart(2, '0') + ':' + new Date(info.start).getSeconds().toString().padStart(2, '0');
        let endTime = new Date(info.end).getHours().toString().padStart(2, '0') + ':' + new Date(info.end).getMinutes().toString().padStart(2, '0') + ':' + new Date(info.end).getSeconds().toString().padStart(2, '0');

        setSelectedDates({ firstDate: startDate, secondDate: endDate, firstTime: startTime, secondTime: endTime });

        modalRef.current.className += ' d-block';
    };

    const handleEventSubmit = () => {
        if (title === '') {
            return
        }

        const event = {
            title: title,
            start: selectedDates.firstDate + 'T' + selectedDates.firstTime + 'Z',
            end: selectedDates.secondDate + 'T' + selectedDates.secondTime + 'Z',
            backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16)
        };

        setEvents([...events, event]);
        setSelectedDates({
            firstDate: '0000-00-00',
            secondDate: '0000-00-00',
            firstTime: '00:00:00',
            secondTime: '00:00:00',
        });
    };

    const handleChange = (event) => {
        const { value } = event.target;

        setTitle(value);
    };

    const handleModalClose = () => {
        modalRef.current.className = 'modal';
    }

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
                dayMaxEventRows={4}
                eventMaxStack={1}
                moreLinkClick='popover'
                events={events}
                select={handleSelectedDates}
                headerToolbar={
                    {
                        left: 'prev next today',
                        center: 'title',
                        right: 'dayGridMonth timeGridWeek timeGridDay listWeek'
                    }
                }
            />

            <div ref={modalRef} className="modal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Recordatorio</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleModalClose}></button>
                        </div>
                        <div className="modal-body text-start">
                            <form action="" method="post">
                                <div className="row g-3">
                                    <div className='col-12'>
                                        <label htmlFor="startingCalendarDate" className="form-label">Fecha de Inicio:</label>
                                        <div className='input-group'>
                                            <span className='input-group-text' id='startCalendarDate'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 448 512">
                                                    <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" />
                                                </svg>
                                            </span>
                                            <input type="date" value={selectedDates.firstDate} className='form-control' id='startingCalendarDate' aria-describedby='startCalendarDate' disabled />
                                        </div>
                                    </div>

                                    <div className='col-12'>
                                        <label htmlFor="endingCalendarDate" className="form-label">Fecha de Finalización:</label>
                                        <div className='input-group'>
                                            <span className='input-group-text' id='endCalDat'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 448 512">
                                                    <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" />
                                                </svg>
                                            </span>
                                            <input type="date" value={selectedDates.secondDate} className='form-control' id='endingCalendarDate' aria-describedby='endCalDat' disabled />
                                        </div>
                                    </div>

                                    <div className='col-12'>
                                        <label htmlFor="startingCalendarHour" className="form-label">Hora de Inicio:</label>
                                        <div className='input-group'>
                                            <span className='input-group-text' id='startCalHou'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-fill" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                                                </svg>
                                            </span>
                                            <input type="time" value={selectedDates.firstTime} className='form-control' id='startingCalendarHour' aria-describedby='startCalHou' disabled />
                                        </div>
                                    </div>

                                    <div className='col-12'>
                                        <label htmlFor="closingCalendarHour" className="form-label">Hora de Finalización:</label>
                                        <div className='input-group'>
                                            <span className='input-group-text' id='closingCalHou'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-fill" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                                                </svg>
                                            </span>
                                            <input type="time" value={selectedDates.secondTime} className='form-control' id='closingCalendarHour' aria-describedby='closingCalHou' disabled />
                                        </div>
                                    </div>

                                    <div className='col-12'>
                                        <label htmlFor="calendarTitle" className="form-label">Título:</label>
                                        <div className='input-group'>
                                            <span className='input-group-text' id='title'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                                                </svg>
                                            </span>
                                            <input type='text' value={title} className="form-control" id="calendarTitle" onChange={handleChange} required></input>
                                        </div>
                                    </div>

                                    <div className='col-12'>
                                        <label htmlFor="calendarBeneficiary" className="form-label">Beneficiario:</label>
                                        <div className='input-group'>
                                            <span className='input-group-text' id='province'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 448 512">
                                                    <path d="M128 136c0-22.1-17.9-40-40-40L40 96C17.9 96 0 113.9 0 136l0 48c0 22.1 17.9 40 40 40H88c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40H40c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40H88c22.1 0 40-17.9 40-40V328zm32-192v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V136c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM288 328c0-22.1-17.9-40-40-40H200c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V328zm32-192v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V136c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM448 328c0-22.1-17.9-40-40-40H360c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V328z" />
                                                </svg>
                                            </span>
                                            <select className="form-select" aria-label='calendarBeneficiary' id='calendarBeneficiary' aria-describedby='province'>
                                                <option>Beneficiario</option>
                                                <option value="1">Beneficiario 1</option>
                                                <option value="2">Beneficiario 2</option>
                                                <option value="3">Beneficiario 3</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className='col-12'>
                                        <label htmlFor="calendarObservations" className="form-label">Observaciones:</label>
                                        <div className='input-group'>
                                            <span className='input-group-text' id='observations'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                                                </svg>
                                            </span>
                                            <textarea className="form-control" id="calendarObservations"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleModalClose}>Cerrar</button>
                            <button type="button" className="btn btn-primary" onClick={handleEventSubmit}>Poner Recordatorio</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}