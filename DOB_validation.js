function calculateAge() {
    const d = new Date(document.getElementById("dob").value);
    const t = new Date();
    let a = t.getFullYear() - d.getFullYear();
    if (t.getMonth() < d.getMonth() || 
       (t.getMonth() === d.getMonth() && t.getDate() < d.getDate())) a--;
    return a;
}

function validateDOB() {
    const el = document.getElementById("dob");
    const age = calculateAge();

    if (age < 18 || age > 35)
        return { valid: false, message: "Age 18–35.", element: el };

    return { valid: true };
}
