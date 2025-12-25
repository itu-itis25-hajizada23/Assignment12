function validateExperience() {
    const el = document.getElementById("experience");
    const exp = Number(el.value);
    const age = calculateAge();

    if (exp < 0)
        return { valid: false, message: "Experience < 0 olmaz.", element: el };

    if (exp > age - 10)
        return { valid: false, message: "Experience > age-10.", element: el };

    return { valid: true };
}
