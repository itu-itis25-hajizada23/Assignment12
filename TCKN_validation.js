function validateTCKN(tckn) {
    if (tckn.length !== 11) return false;

    let d = [];
    for (let i = 0; i < 11; i++) {
        let n = Number(tckn[i]);
        if (Number.isNaN(n)) return false;
        d.push(n);
    }

    if (d[0] === 0) return false;

    let odd = d[0] + d[2] + d[4] + d[6] + d[8];
    let even = d[1] + d[3] + d[5] + d[7];

    if (((7 * odd - even) % 10) !== d[9]) return false;

    let sum = 0;
    for (let i = 0; i < 10; i++) sum += d[i];
    if ((sum % 10) !== d[10]) return false;

    return true;
}
