import React, { useState } from "react";

const GpaCalculator = () => {
  const [subjects, setSubjects] = useState([
    { name: "", credit: "", grade: "" },
    { name: "", credit: "", grade: "" },
    { name: "", credit: "", grade: "" },
    { name: "", credit: "", grade: "" },
  ]);

  const addSubject = () => {
    setSubjects([...subjects, { name: "", credit: "", grade: "" }]);
  };

  const updateSubject = (index, field, value) => {
    const updated = [...subjects];
    updated[index][field] = value;
    setSubjects(updated);
  };

  return (
    <div className="min-h-screen mb-10 border-b-2 border-b-gray-500 bg-gradient-to-br from-blue-100 via-gray-100 to-blue-200 py-10 px-4 pt-16">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-3">
          GPA Calculator
        </h1>
        <p className="text-center text-sm md:text-base text-blue-500 mb-10">
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
          onChange={(e) => updateSubject(index, "name", e.target.value)}
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
          onChange={(e) => updateSubject(index, "credit", e.target.value)}
          className="w-full px-2 py-2 md:px-3 rounded-lg border border-gray-300 text-gray-700 group-hover:border-gray-700 group-hover:text-black focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      </td>

      {/* Grade Dropdown */}
      <td className="px-2 md:px-4 py-2 w-[25%] md:w-auto">
        <select
          value={subject.grade}
          onChange={(e) => updateSubject(index, "grade", e.target.value)}
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
          <option value="D">D</option>
          <option value="F">F</option>
        </select>
      </td>
    </tr>
  ))}
</tbody>

          </table>
        </div>

        <div className="text-right mt-6">
          <button
            onClick={addSubject}
            className="text-blue-600 hover:text-blue-800 text-sm underline"
          >
            + Add More Subject
          </button>
        </div>
      </div>
    </div>
  );
};

export default GpaCalculator;
