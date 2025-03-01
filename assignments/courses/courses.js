// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ],
    changeEnrollment: function (sectionNum, add = true) {
        const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);
        if (sectionIndex >= 0) {
            if (add) {
                this.sections[sectionIndex].enrolled++;
            } else {
                this.sections[sectionIndex].enrolled--;
            }
            renderSections(this.sections);
        }
    },
    // enrollStudent: function (sectionNum) {
    //     const sectionIndex = this.sections.findIndex((section) => section.sectionNum === sectionNum);
        
    //     if (sectionIndex > 0) {
    //         this.sections[sectionIndex].enrolled++;
    //     };
    //     renderSections(this.sections);
    // },
    // dropStudent: function (sectionNum) {
    //     const sectionIndex = this.sections.findIndex((section) => section.sectionNum === sectionNum);
        
    //     if (sectionIndex > 0) {
    //         this.sections[sectionIndex].enrolled--;
    //     };
    //     renderSections(this.sections);
    // },
};

//activity 1.3
function renderCourseDetails(course) {
    document.querySelector('#courseName').textContent = course.name;
    document.querySelector('#courseCode').textContent = course.code;
}

//activity 1.4
function sectionTemplate(section) {
    return `<tr>
            <td>${section.sectionNum}</td>
            <td>${section.roomNum}</td>
            <td>${section.enrolled}</td>
            <td>${section.days}</td>
            <td>${section.instructor}</td>
            </tr>`;
}

//activity 1.4
function renderSections(sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector('#sections').innerHTML = html.join('')
}

//enroll student button
document.querySelector('#enrollStudent').addEventListener('click', (e) => {
    const sectionNum = document.querySelector('#sectionNumber').value;
    aCourse.changeEnrollment(sectionNum);
})

//drop student button
document.querySelector('#dropStudent').addEventListener('click', (e) => {
    const sectionNum = document.querySelector('#sectionNumber').value;
    aCourse.changeEnrollment(sectionNum);
})

//render course details
renderCourseDetails(aCourse);

//render section details
renderSections(aCourse.sections);