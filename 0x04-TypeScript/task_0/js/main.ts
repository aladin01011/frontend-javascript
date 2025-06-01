interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Alice',
  lastName: 'Johnson',
  age: 22,
  location: 'New York'
};

const student2: Student = {
  firstName: 'Bob',
  lastName: 'Smith',
  age: 24,
  location: 'San Francisco'
};

const studentsList: Student[] = [student1, student2];

// Create a table element
const table: HTMLTableElement = document.createElement('table');

// Optional: add a header row
const headerRow: HTMLTableRowElement = document.createElement('tr');
const headerFirstName: HTMLTableCellElement = document.createElement('th');
headerFirstName.textContent = 'First Name';
const headerLocation: HTMLTableCellElement = document.createElement('th');
headerLocation.textContent = 'Location';
headerRow.appendChild(headerFirstName);
headerRow.appendChild(headerLocation);
table.appendChild(headerRow);

// Populate the table with studentsArray
studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = document.createElement('tr');

  const firstNameCell: HTMLTableCellElement = document.createElement('td');
  firstNameCell.textContent = student.firstName;

  const locationCell: HTMLTableCellElement = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Append the table to the document body (or any other container)
document.body.appendChild(table);
