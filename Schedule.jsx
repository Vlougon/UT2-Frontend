let days = 1;
const weekDaysNames = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabádo', 'Domingo'];
const calendar = document.querySelector('#schedule').querySelector('tbody');

window.addEventListener('load', adjustScheduleNames);
window.addEventListener('resize', adjustScheduleNames);

let currentDate = (new Date().getMonth() + 1) + '/' + (new Date().getDate()) + '/' + new Date().getFullYear();
let dayName = new Date(currentDate).toLocaleDateString("es-ES", { weekday: 'long' });
console.log(new Date().getDate());

for (let i = 1; i <= 5; i++) {
    const calendarRow = document.createElement('tr');

    for (let j = 1; j <= 7; j++) {
        const calendarDay = document.createElement('td');

        calendarDay.textContent = days;
        calendarDay.className = 'day';

        if (days <= 31) {
            calendarRow.insertAdjacentElement('beforeend', calendarDay);
            calendar.insertAdjacentElement('beforeend', calendarRow);
        }

        days++;
    }
}

function adjustScheduleNames() {
    const daysWeek = document.querySelectorAll('th');

    if (window.innerWidth <= 576) {
        for (const dayName of daysWeek) {
            dayName.textContent = dayName.textContent.charAt(0).toUpperCase();
        }
    } else {
        for (const [index, dayName] of daysWeek.entries()) {
            dayName.textContent = weekDaysNames[index];
        }
    }
}