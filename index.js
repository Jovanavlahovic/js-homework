
var a = [[1,2,3],[4,5,6],[7,8,9]];
zbir = 0;
for(var i = 0; i < a.length; i++){
    for(var j = 0; j < a[i].length;j++){
        if(i === j){
            zbir+= a[i][j];
        }
        if(j === (a.length)-i-1){
            zbir+=a[i][j];
        }
    }
}
//console.log(zbir);



var a= [[1,2,3,5],[4,5,6,8],[7,8,9,9],[8,5,3,1]];
var zbirParnih = 0;
for(var i = 0; i < a.length; i++){
    for(var j = 0; j < a[i].length;j++){
        if(a[i][j]%2 == 0){
            zbirParnih+= a[i][j];
        }
    }
}
//console.log(zbirParnih);

var niz = [[1,2,3,5],[3,5,6,8],[7,8,9,3],[8,5,3,1]];
for(var i = 0; i < niz.length; i++){
    for(var j = 0; j < niz[i].length;j++){
        if(niz[i][j] == 3){
            niz[i][j] = 0;
        }
        if(niz[i][j] == 5){
            niz[i][j] = -1;
        }
    }
}
//console.log(niz);


//ispis svih naslova do prosledjenog nivoa
function writeHeader(num){
    for(var i = 1; i < num; i++){
        document.write(`<h${i}>Ovo je generisani naslov</h${i}>`);
}
}

//ispis svih naslova od-do prosledjenog nivoa
function writeHeader2(num1, num2){
    for(var i = num1; i <= num2; i++){
        document.write(`<h${i}>Ovo je generisani naslov</h${i}>`);
}
}

//provera da li je substr deo stringa na osnovu indeksa
function checkForSubstr(string, substr){
    var index = string.indexOf(substr);
    if(index < 0){
        return false;
    } else {
        return true;
    }
}

//document.write(checkForSubstr('dobar dan', 'dan'));

//provera da li je substr deo stringa na osnovu indeksa
//uz ignorisanje malih i velikih slova
function checkForSubstrIgnoreCase(string, substr){
    var index = string.toUpperCase().indexOf(substr.toUpperCase());
    if(index < 0){
        return false;
    } else {
        return true;
    }
}

//document.write(checkForSubstrIgnoreCase('dobar dAn', 'dan'));


//ispis godine rodjenja i pola na osnovu jmbg-a
function splitJMBG(jmbg){
    var dan = jmbg.substring(0,2);
    var mesec = jmbg.substring(2,4);
    var god = jmbg.substring(4,7);
    var reg = jmbg.substring(7,9);
    var pol = jmbg.substring(9,12);
    var cifra = jmbg.substring(12);

    if(pol < 500){
        pol = 'muski';
    } else{
        pol = 'zenski';
    }

    document.write(`Godina rodjenja: 1${god}, pol: ${pol};`);
}

//splitJMBG('1008975433087');

//ispis imena i prezimena na osnovu zadatog url-a
function findFirstAndLastName(url){
    var splited = url.split('&');
    var firstName = splited[0].substring(1);
    var lastName = splited[1];

    document.write(`${firstName}<br>`);
    document.write(`${lastName}`);
}
//findFirstAndLastName('?ime=sinisa&prezime=mihajlovic');

//provera dana do vikenda
function daysUntilWeekend(){
    var danas = new Date();
    var dan = danas.getDay();

    if(dan > 0 && dan < 6) {
        document.write(`Dana do vikenda: ` + (5-dan));
    } else{
        document.write('Jeeej! Vikend je!');
    }
}
