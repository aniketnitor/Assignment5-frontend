document.getElementById('employeeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: e.target.name.value,
        aadharNumber: e.target.aadharNumber.value,
        gender: e.target.gender.value,
        age: parseInt(e.target.age.value),
        salary: parseFloat(e.target.salary.value),
        employeeId: e.target.employeeId.value,
        designation: e.target.designation.value,
        department: e.target.department.value,
        joiningDate: e.target.joiningDate.value
    };

    fetch('http://localhost:8080/api/employees', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Registration failed');
        }
        return response.json();
    })
    .then(data => {
        alert('Employee registered successfully!');
        e.target.reset();
    })
    .catch(error => {
        alert('Failed to register employee. Please try again.');
    });
});