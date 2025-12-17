
function getPerc() {
    let name = prompt("enter your name")

    // add total marks of std in this variable
let total_Marks_student = +document.getElementById("tm1").value
alert(total_Marks_student)
// add obtained marks of std iletn this variable
let obtainedMarks_oF_Student = +document.getElementById("obt1").value
alert(obtainedMarks_oF_Student)


// apply a percentage formula
let percentage = (obtainedMarks_oF_Student/totalMarks_OF_student)*100

alert(name + "your percentage is" +  percentage + "%")

document.writeln( name + "ypur percentage is "+ percentage + "%")

console.log( name + "your percentage is " +  percentage + "%")




} 