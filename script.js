const form = document.getElementById("eventForm");
const eventList = document.getElementById("eventList");

let events = [];

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const location = document.getElementById("location").value;

    const event = {
        name,
        date,
        time,
        location
    };

    events.push(event);
    displayEvents();

    form.reset();
});

function displayEvents() {
    eventList.innerHTML = "";

    events.forEach((event, index) => {
        const div = document.createElement("div");
        div.classList.add("event-card");

        div.innerHTML = `
            <h3>${event.name}</h3>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Time:</strong> ${event.time}</p>
            <p><strong>Location:</strong> ${event.location}</p>
        `;

        eventList.appendChild(div);
    });
}