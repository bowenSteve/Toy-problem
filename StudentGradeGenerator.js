function checkStudentMarks(){//function for capturing the marks is declared
    let marks = parseInt(prompt('Enter your marks : '))//inputs the entered marks and assigns the variable 'marks'
    if(marks>=0 && marks<=100){//checks for marks validity
        gradeMarks(marks);//calls the function for grading if the marks are valid and passes the marks as the parameter
    }else{
        console.log('Enter Valid Marks!');
    }
}
checkStudentMarks();//function for checking students' marks is called.

function gradeMarks(studentMarks){//function for grading is declared
  if(studentMarks>79){
    console.log('Student Grade: A');
  }else if(studentMarks>=60 && studentMarks<=79){
    console.log('Student Grade: B');
  }else if(studentMarks>49 && studentMarks<=59){
    console.log('Student Grade: C');
  }else if(studentMarks>=40 && studentMarks<=49){
    console.log('Student Grade: D');
  }else{
    console.log('Student Grade: E');
  }
}