import React from "react";
import { useParams } from "react-router-dom";
import allStudents from "../data/student";
import { useEffect, useState } from "react";
import Student from "../components/Student";

export default function StudentDetail() {
  const { studentId } = useParams();
  const [student, setStudent] = useState(null);
  useEffect(() => {
    const newStudent = allStudents.filter((student) => student.id === studentId);
    setStudent(newStudent[0]);
  },[]);
  return (
    <div>
      StudentDetail: {studentId}
      {student && <Student student={student} />}
    </div>
  );
}
