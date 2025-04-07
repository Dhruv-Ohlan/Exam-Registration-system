function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
      section.className = 'hidden-section';
    });
    document.getElementById(sectionId).className = 'active-section';
  }
  
  // Dummy exam data
  const exams = [
    { subject: "Mathematics", date: "2025-05-12" },
    { subject: "Physics", date: "2025-05-15" },
    { subject: "Chemistry", date: "2025-05-18" },
  ];
  
  window.onload = () => {
    const table = document.getElementById("examTable");
    exams.forEach((exam, index) => {
      const row = document.createElement("tr");
  
      const subjectCell = document.createElement("td");
      subjectCell.textContent = exam.subject;
      
      const dateCell = document.createElement("td");
      dateCell.textContent = exam.date;
  
      const actionCell = document.createElement("td");
      const button = document.createElement("button");
      button.textContent = "Register";
      button.onclick = () => alert(`Registered for ${exam.subject}!`);
      actionCell.appendChild(button);
  
      row.appendChild(subjectCell);
      row.appendChild(dateCell);
      row.appendChild(actionCell);
  
      table.appendChild(row);
    });
  };
  