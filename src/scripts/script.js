import { generateRandomNumber } from './ops.js'

let STUDENTS = []
let SORTED = []
let GROUPONE_MEMBERS = []
let GROUPTWO_MEMBERS = []

const submitForm = document.querySelector('[submit-form]')
const ALLSTUDENT = document.querySelector('[all-students]')
const SHUFFLE = document.querySelector('[shuffle]')

const NUMBER_OF_STUDENTS = document.querySelector('[students-number]')
NUMBER_OF_STUDENTS.textContent = STUDENTS.length

// @desc    Event Handlers
submitForm.addEventListener('submit', handleSubmit)
SHUFFLE.addEventListener('click', shuffleStudents)


// @desc    Handles Submission Of Student Names
function handleSubmit(event) {
    event.preventDefault()

    const student_name = submitForm.querySelector('[student-name]').value

    try {
        if (student_name) {
            addStudent(student_name)
            NUMBER_OF_STUDENTS.textContent = STUDENTS.length
        }
    } catch (error) {
        console.error(error)
        alert('Ops: something went wrong')
    }

}


// @desc    Adds Student to list
function addStudent(student_name) {

    const foundStudent = STUDENTS.find((student) => {
        return student_name === student
    })

    if (foundStudent) {
        return
    }

    const STUDENT = document.createElement('li')
    STUDENT.textContent = student_name
    ALLSTUDENT.append(STUDENT)
    STUDENTS.push(student_name)

    console.clear()
    console.table(STUDENTS)
}

// @desc    Shuffles Student To Available Groups
function shuffleStudents() {

    SORTED = []
    GROUPONE_MEMBERS = []
    GROUPTWO_MEMBERS = []

    while (SORTED.length != STUDENTS.length) {
        
        for (let index = 0; index < STUDENTS.length; index++) {

            // @desc    returns a number within 0 - n(no of students)
            // @params  STUDENTS.LENGTH(n)
            let index = generateRandomNumber(STUDENTS.length, SORTED)

            const foundStudent = SORTED.includes(STUDENTS[index])

            if (!foundStudent) {
                SORTED.push(STUDENTS[index])
            }

        }
    }

    divideGroups()
    // console.log(SORTED)
}


function divideGroups(){
    for(let index = 0; index < SORTED.length; index++){
        const student = SORTED[index]
        index % 2 == 0 ? GROUPONE_MEMBERS.push(student) : GROUPTWO_MEMBERS.push(student) 
    }

    
    console.log("Group One")
    console.table(GROUPONE_MEMBERS)
    console.log("Group Two")
    console.table(GROUPTWO_MEMBERS)
}