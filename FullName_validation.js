function validateFullName() {
    const el = document.getElementById("fullName");
    const v = el.value.trim();

    if (v.length < 6)
        return { valid: false, message: "Full name min 6 chars.", element: el };

    if (/\d/.test(v))
        return { valid: false, message: "No digits allowed.", element: el };

    return { valid: true };
}
