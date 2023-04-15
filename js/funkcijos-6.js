/*
Funkcija pavadinimu “dalyba”:
    a. turi priimti du kintamuosius
    b. reikia sugalvoti ir įgyvendinti kuo daugiau logiškų patikrinimų, kurie padėtų
apsaugoti funkciją nuo neteisingo panaudojimo
        i. esant blogoms sąlygoms, išvesti atitinkamą pranešimą
        ii. esant geroms - tęsti darbą
    c. į atskirą kintamąjį išsaugoti apskaičiuotą dviejų skaičių dalybos reikšmę
        i. daliname pirmąjį skaičių iš antrojo
d. grąžinti suskaičiuotą reikšmę
e. TESTAI:
    i. sugalvoti bent 5 testus, kurie bendrai iš esmės patvirtintu gerą funkcijos
veikimą
*/

function dalyba (a, b) {
    if (typeof a !== 'number' || !isFinite (a) || typeof b !== 'number' || !isFinite (b)) {
        if (typeof a !== 'number' || !isFinite (a)) {
            console.log('Pirmasis kintamasis yra netinkamo tipo');
        }
        if (typeof b !== 'number' || !isFinite (b)) {
            console.log('Antrasis kintamasis yra netinkamo tipo');
        }
        return;
    }
    const sum = a / b;
    return sum;
}
console.log(dalyba(6, 'ggg'));

/* function dalyba (a, b) {
    
    if (typeof a !== 'number' || !isFinite (a)) {
        return 'Pirmasis kintamasis yra netinkamo tipo';
    }
    if (typeof b !== 'number' || !isFinite (b)) {
        return 'Antrasis kintamasis yra netinkamo tipo';
        }
    }
    const sum = a / b;
    return sum;
}
console.log(dalyba(6, 3));*/
