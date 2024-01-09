export default function updateStudentGradeByCity(studentList, city, newGrades) {
  // Filter students by the specified city
  const filteredStudents = studentList.filter((student) => student.location === city);

  // Map through the filtered students and update grades
  const updatedStudents = filteredStudents.map((student) => {
    // Find the corresponding new grade for the student, if available
    const newGrade = newGrades.find((grade) => grade.studentId === student.id);

    // Update the student's grade attribute
    student.grade = newGrade ? newGrade.grade : 'N/A';

    return student;
  });

  return updatedStudents;
}
