function checkStudentMarks(){//function for capturing the marks is declared
    let marks = parseInt(prompt('Enter your marks : '))//inputs the entered marks and assigns the variable 'marks'
    if(marks>=0 && marks<=100){//checks for marks validity
        const grade =gradeMarks(marks);// a variable grade is declared and the output of gradeMarks function is assigned to it
        console.log(`Your Grade is: ${grade}`)//prints the grade to the user
      }else{
        console.log('Enter Valid Marks!');
    }
}

function gradeMarks(studentMarks){//function for grading is declared
  if(studentMarks>79){
    return 'A';
  }else if(studentMarks>=60 && studentMarks<=79){
    return 'B'
  }else if(studentMarks>49 && studentMarks<=59){
    return 'C'
  }else if(studentMarks>=40 && studentMarks<=49){
    return 'D'
  }else{
    return 'E'
  }
}
checkStudentMarks();//function for checking students' marks is called.
