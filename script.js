let string = prompt("ketikan kalimat");

String.prototype.titleCase = function () {
  let kata = this.split(" ");
  console.log(kata);

  let kataAkhir = kata.map((element) => {
    let karakter = element.charAt(0);
    let kapital = karakter.toUpperCase();
    element = kapital + element.slice(1);
    return element;
  });
  return kataAkhir.join(" ");
};

alert(string.titleCase());