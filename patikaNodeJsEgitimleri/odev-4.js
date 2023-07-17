const fs = require('fs');

const employeeData = {
  name: 'Employee 1 Name',
  salary: 2000
};

const jsonData = JSON.stringify(employeeData);

fs.writeFile('employees.json', jsonData, 'utf8', (err) => {
  if (err) {
    console.error('Dosya oluşturma hatası:', err);
    return;
  }
  console.log('employees.json dosyası oluşturuldu ve veri eklendi.');
});
fs.readFile('employees.json', 'utf8', (err, data) => {
	if (err) {
	  console.error('Dosya okuma hatası:', err);
	  return;
	}
	const employee = JSON.parse(data);
	console.log('employees.json dosyası okundu:', employee);
          });
          const updatedEmployeeData = {
	name: 'Updated Employee Name',
	salary: 2500
          };
          
          const updatedJsonData = JSON.stringify(updatedEmployeeData);
          
          fs.writeFile('employees.json', updatedJsonData, 'utf8', (err) => {
	if (err) {
	  console.error('Dosya güncelleme hatası:', err);
	  return;
	}
	console.log('employees.json dosyası güncellendi.');
          });
          fs.unlink('employees.json', (err) => {
	if (err) {
	  console.error('Dosya silme hatası:', err);
	  return;
	}
	console.log('employees.json dosyası silindi.');
          });
		      