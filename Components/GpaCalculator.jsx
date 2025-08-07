import React, { useState } from "react";

// to show min 4 rows by default
const GpaCalculator = () => {
  const [subjects, setSubjects] = useState([
    { name: "", credit: "", grade: "" },
    { name: "", credit: "", grade: "" },
    { name: "", credit: "", grade: "" },
    { name: "", credit: "", grade: "" },
  ]);
  //adding a new subject
  const addSubject = () => {
    setSubjects([...subjects, { name: "", credit: "", grade: "" }]);
  };
  //update subject everytime user updates some row input , it changes automatically in array too
  const updateSubject = (index, field, value) => {
    const updated = [...subjects];
    updated[index][field] = value;
    setSubjects(updated);
  };

  //grade points
  const gradePoints = {
    "A+": 4.0,
    A: 4.0,
    "A-": 3.7,
    "B+": 3.3,
    B: 3.0,
    "B-": 2.7,
    "C+": 2.3,
    C: 2.0,
    "C-": 1.7,
    "D+": 1.3,
    D: 1.0,
    "D-": 0.7,
    F: 0.0,
  };
  const [gpa, setGpa] = useState(null);
  //function to clculate gpa
  const calculateGpa = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    for (let subject of subjects) {
      let credit = parseFloat(subject.credit);
      let grade = subject.grade;
      //condition to calculate only when credits and grade is valid
      if (!isNaN(credit) && gradePoints[grade] !== undefined) {
        totalPoints += gradePoints[grade] * credit;
        totalCredits += credit;
      }

    }
    if (totalCredits === 0) {
      setGpa("Invalid input");
    } else {
      const result = totalPoints / totalCredits;
      setGpa(result.toFixed(2));
    }
  };
  return (
    <div
      className="min-h-screen mb-10 borde
    r-b-2 border-b-gray-500 bg-gradient-to-br from-blue-100 via-gray-100 to-blue-200 py-10 px-4 pt-16"
    >
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-3">
          GPA Calculator
        </h1>
        <p className="text-center text-sm md:text-base text-blue-500 mb-2">
          Calculate your GPA easily by adding your courses below.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-y-4">
            <thead>
              <tr className="text-gray-700 text-sm md:text-base">
                <th className="px-4 py-2">Subject Name</th>
                <th className="px-4 py-2">Credit Hours</th>
                <th className="px-4 py-2">Grade</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((subject, index) => (
                <tr
                  key={index}
                  className="bg-gray-100 group transition-all rounded-xl text-sm md:text-base"
                >
                  {/* Subject Name */}
                  <td className="px-2 md:px-4 py-2 w-[50%] md:w-auto">
                    <input
                      type="text"
                      placeholder="e.g. Math"
                      value={subject.name}
                      onChange={(e) =>
                        updateSubject(index, "name", e.target.value)
                      }
                      className="w-full px-2 py-2 md:px-3 rounded-lg border border-gray-300 text-gray-700 group-hover:border-gray-700 group-hover:text-black focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                  </td>

                  {/* Credit Hours */}
                  <td className="px-2 md:px-4 py-2 w-[25%] md:w-auto">
                    <input
                      type="number"
                      placeholder="e.g. 3"
                      min="0"
                      value={subject.credit}
                      onChange={(e) =>
                        updateSubject(index, "credit", e.target.value)
                      }
                      className="w-full px-2 py-2 md:px-3 rounded-lg border border-gray-300 text-gray-700 group-hover:border-gray-700 group-hover:text-black focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                  </td>

                  {/* Grade Dropdown */}
                  <td className="px-2 md:px-4 py-2 w-[25%] md:w-auto">
                    <select
                      value={subject.grade}
                      onChange={(e) =>
                        updateSubject(index, "grade", e.target.value)
                      }
                      className="w-full px-2 py-2 md:px-3 rounded-lg border border-gray-300 text-gray-700 bg-white group-hover:border-gray-700 group-hover:text-black focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm md:text-base min-w-[60px] md:min-w-[110px]"
                    >
                      <option value="" disabled hidden>
                        {window.innerWidth >= 768 ? "Select Grade" : ""}
                      </option>
                      <option value="A+">A+</option>
                      <option value="A">A</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B">B</option>
                      <option value="B-">B-</option>
                      <option value="C+">C+</option>
                      <option value="C">C</option>
                      <option value="C-">C-</option>
                      <option value="D+">D+</option>
                      <option value="D">D</option>
                      <option value="D-">D-</option>
                      <option value="F">F</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-right mt-2">
          <button
            onClick={addSubject}
            className="text-blue-600 hover:text-blue-800 text-sm underline"
          >
            + Add More Subject
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <button
            onClick={calculateGpa}
            className="rounded-xl bg-blue-600 text-white font-bold md:tracking-wider  px-6 py-2 md:px-12 md:py-4"
          >
            Calculate GPA
          </button>
          {gpa !== null && (
            <p className="mt-4 text-center text-md  md:text-lg font-bold text-green-700">
              Your GPA is : {gpa}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GpaCalculator;
