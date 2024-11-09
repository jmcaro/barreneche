// test.js
import Student from "../models/Student.js";
import Course from "../models/Course.js";

async function testManyToMany() {
  const student1 = await Student.create({ name: "Alice" });
  const student2 = await Student.create({ name: "Bob" });

  const course1 = await Course.create({ title: "Mathematics" });
  const course2 = await Course.create({ title: "Science" });

  // Asociar estudiantes a cursos
  await student1.addCourse(course1);
  await student1.addCourse(course2);
  await student2.addCourse(course1);

  // Verificar la relación
  const studentsInMath = await course1.getStudents();
  console.log(
    "Estudiantes en Matemáticas:",
    studentsInMath.map((s) => s.name)
  );
}

testManyToMany();
