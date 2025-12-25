function validateSalary() {
    const el = document.getElementById("salaryAmount");
    if (Number(el.value) < 0)
        return { valid: false, message: "Salary cannot be negative.", element: el };
    return { valid: true };
}
