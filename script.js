const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

const events = {
    "2025-01-01": "Supplementary Examination Week",
    "2025-01-06": "Semester Enrollment and Commencement of Classes",
    "2025-01-13": "Elective Courses ADD/DROP Week",
    "2025-01-14": "[Pongal]",
    "2025-01-20": "Class Committee Week (Meeting 1)",
    "2025-01-25": "Institute League Starts",
    "2025-01-26": "[Republic Day]",
    "2025-01-30": "DC Meeting Window Closes (Dec 15-Jan 30)",
    "2025-02-01": "GATE 2025",
    "2025-02-02": "GATE 2025 / Institute League closes ",
    "2025-02-15": "GATE 2025",
    "2025-02-16": "GATE 2025",
    "2025-02-22": "Mid Semester Examination (G)",
    "2025-02-24": "Mid Semester Examination (A/B)",
    "2025-02-25": "Mid Semester Examination (C/D)",
    "2025-02-26": "Mid Semester Examination (E/F)",
    "2025-02-28": "Research Scholars Day",
    "2025-03-03": "UG/PG Mid Sem Project Review Week / Mid Sem Feedback Week",
    "2025-03-12": "Declaration of Mid Semester Exam Results",
    "2025-03-17": "Class Committee Week (Meeting2) / Supplementary Exam week for Final years",
    "2025-03-21": "Inter-IIIT sports meet",
    "2025-03-22": "Inter-IIIT sports meet",
    "2025-03-23": "Inter-IIIT sports meet",
    "2025-03-27": "Techno Cultural fest",
    "2025-03-28": "Techno Cultural fest",
    "2025-03-29": "Techno Cultural fest",
    "2025-03-30": "Techno Cultural fest",
    "2025-03-31": "Techno Cultural fest / [Id-ul-Fitr]",
    "2025-04-10": "[Mahavir Jayanti]",
    "2025-04-14": "End Semester Feedback week",
    "2025-04-16": "{Friday Timetable}",
    "2025-04-18": "[Good Friday]",
    "2025-04-22": "Compilation of Attendance",
    "2025-04-25": "End Semester Examination (A)",
    "2025-04-26": "End Semester Examination (B)",
    "2025-04-28": "End Semester Examination (C)",
    "2025-04-29": "End Semester Examination (D)",
    "2025-04-30": "End Semester Examination (H-L)",
    "2025-05-01": "End Semester Examination (E)",
    "2025-05-02": "End Semester Examination (F)",
    "2025-05-03": "End Semester Examination (G)",
    "2025-05-04": "Student Vacation starts",
    "2025-05-05": "Makeup Exams Internship For B.Tech 22 / UG/PG End Sem Project Review Week",
    "2025-05-12": "[Buddha Purnima]",
    "2025-05-15": "Class committee Meeting 3 / Grade Moderation",
    "2025-05-16": "Class committee Meeting 3 / Grade Moderation",
    "2025-05-19": "Grade Verification",
    "2025-05-20": "Declaration of Results",
    "2025-06-07": "[Id ul-Zuha (Bakrid)]",
    "2025-06-21": "International Yoga Day Event",
    "2025-07-01": "DC Meeting window opens",
    "2025-07-06": "[Muharram]",
    "2025-07-07": "Semester Course Registration Week",
    "2025-07-21": "Supplementary Examination Week",
    "2025-07-25": "Convocation 2025",
    "2025-07-28": "Semester Enrollment and Commencement of Classes",
    "2025-08-04": "Elective Courses ADD/DROP Week",
    "2025-08-11": "Class Committee Week (Meeting 1)",
    "2025-08-15": "[Independence Day]",
    "2025-08-18": "DC Meeting window closes",
    "2025-08-26": "{Wednesday Timetable}",
    "2025-08-27": "[Ganesh Chaturthi]",
    "2025-09-01": "Swachhta pakhwada starts",
    "2025-09-05": "[Milad un-Nabi/ Id-e-Milad]",
    "2025-09-14": "Swachhta Hi Seva starts",
    "2025-09-15": "Swachhta pakhwada closes",
    "2025-09-16": "{Friday Timetable}",
    "2025-09-18": "Mid Semester Examination (A/B)",
    "2025-09-19": "Mid Semester Examination (C/D)",
    "2025-09-20": "Mid Semester Examination (G)",
    "2025-09-22": "Mid Semester Examination (E/F)",
    "2025-09-23": "Mid Semester Feedback opens / PG Mid Sem Project Review Week",
    "2025-10-01": "[Mahanavmi] / Swachhta Hi Seva closes",
    "2025-10-02": "[Mahatma Gandhi Jayanti]",
    "2025-10-06": "Declaration of Mid Semester Exam Results",
    "2025-10-07": "Class Committee Week (Meeting 2)",
    "2025-10-10": "Meraki",
    "2025-10-11": "Inter Department sports tournament Starts / Meraki",
    "2025-10-12": "Meraki",
    "2025-10-19": "Inter Department sports tournament Closes",
    "2025-10-20": "[Diwali (Deepavali)]",
    "2025-10-31": "National Unity Run",
    "2025-11-05": "[Guru Nanak's Birthday]",
    "2025-11-10": "End Semester Feedback week",
    "2025-11-12": "Compilation of Attendance",
    "2025-11-17": "End Semester Examination (A)",
    "2025-11-18": "End Semester Examination (B)",
    "2025-11-19": "End Semester Examination (C)",
    "2025-11-20": "End Semester Examination (D)",
    "2025-11-21": "End Semester Examination (H-L)",
    "2025-11-24": "End Semester Examination (E)",
    "2025-11-25": "End Semester Examination (F)",
    "2025-11-26": "End Semester Examination (G)",
    "2025-11-27": "Student vacation starts",
    "2025-12-01": "PG End Sem Project Review week / Makeup Examination Week",
    "2025-12-08": "DC Meeting Window opens",
    "2025-12-11": "Class Committee Meeting 3 / Grade Moderation",
    "2025-12-12": "Class Committee Meeting 3 / Grade Moderation",
    "2025-12-15": "Grade Verification",
    "2025-12-16": "Declaration of Results",
    "2025-12-25": "[Christmas Day]"
};

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        const dateKey = `${currYear}-${String(currMonth + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
        let eventText = events[dateKey] ? `<br><span class="event">${events[dateKey]}</span>` : "";
        liTag += `<li class="${isToday}">${i}${eventText}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
};

renderCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else {
            date = new Date();
        }
        renderCalendar();
    });
});
