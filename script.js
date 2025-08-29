let a = '0';
let b = ''
let c = '';
let r
let d = '';
function num(p) {
    if (p != 'ac') {
        if (p === '/' || p === 'x' || p === '_' || p === '+') {
            b = a;
            a = '0';
            if (p == '_') p = '-';
            c = p;
            d = d + c;
            // document.querySelector(".rest").innerHTML = d;
            document.getElementById('result').innerHTML = d;
        }
        else if (p == '=') {
            r = 0;
            if (c == 'x') {
                r = Number(b) * Number(a);
            }
            else if (c == '/') {
                r = Number(b) / Number(a);
            }
            else if (c == '-') {
                r = Number(b) - Number(a);

            }
            else if (c == '+') {
                r = Number(b) + Number(a);
            }
            d = d + '=' + r;
            // document.querySelector(".rest").innerHTML = d;
            document.getElementById('result').innerHTML = d;

            a = '0';
            b = '';
            c = '';
            d = '';
        }
        if (a == '0') {
            if (p != c && p != '=') {
                a = p;
                d = d + p
                // document.querySelector(".rest").innerHTML = d;

                document.getElementById('result').innerHTML = d;
            }
        }
        else if (p != c && p != '=') {
            if (p == '.' && a.includes('.')) return;
            a = a + p;
            d = d + p;
            // document.querySelector(".rest").innerHTML = d;

            document.getElementById('result').innerHTML = d;
        }

        // d = '';
    }
    else {
        a = '0';
        b = ''
        c = '';
        d = '';

        document.getElementById('result').innerHTML = 'Enter';
    }

}
