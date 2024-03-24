function checkStudentMarks(){//function for capturing the marks is declared
    let marks = prompt('Enter your marks : ')//inputs the entered marks and assigns the variable 'marks'
    if(marks>=0 && marks<=100){//checks for marks validity
        gradeMarks(marks);//calls the function for grading if the marks are valid and passes the marks as the parameter
    }else{
        console.log('Enter Valid Marks!');
    }
}
checkStudentMarks();//function for checking students' marks is called.

function gradeMarks(studentMarks){//function for grading is declared
  if(studentMarks>79){//checks for marks above 79
    console.log('Student Grade: A');//prints the grade
  }else if(studentMarks>=60 && studentMarks<=79){//marks ranging 60 to 79
    console.log('Student Grade: B');//prints the grade
  }else if(studentMarks>49 && studentMarks<=59){//marks ranging 59 to 49
    console.log('Student Grade: C');//prints the grade
  }else if(studentMarks>=40 && studentMarks<=49){//marks ranging 40 to 49
    console.log('Student Grade: D');//prints the grade
  }else{//marks less than 40
    console.log('Student Grade: E');//prints the grade
  }
    

}