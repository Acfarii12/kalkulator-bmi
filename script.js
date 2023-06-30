var pria = [
  [0, 18, "Kurus"],
  [18, 25, "Normal"],
  [25, 27, "Gemuk"],
  [27, 9999, "Obesitas"],
];
var wanita = [
  [0, 17, "Kurus"],
  [17, 23, "Normal"],
  [23, 27, "Gemuk"],
  [27, 9999, "Obesitas"],
];
function hitung() {
  var tinggi = document.getElementById("tinggi").value;
  var berat = document.getElementById("berat").value;
  var hasil = document.getElementById("hasil");
  var jenisKelamin = document.getElementsByName("jenisKelamin");

  jenisKelamin.forEach(function (jk) {
    jenisKelamin = jk.checked ? jk.value : jenisKelamin;
  });

  var bmi = berat / Math.pow(tinggi / 100, 2);
  bmi = bmi.toFixed(2);
  var kategori = jenisKelamin == "p" ? pria : wanita;
  kategori.forEach(function (kat) {
    if (bmi > kat[0] && bmi < kat[1]) {
      hasil.innerHTML = bmi + " " + "(" + kat[2] + ")";
    }
  });
}

function ee() {
  document.getElementById("ee").style.display = "block";
  document.getElementById("kalkulator").style.display = "none";
}
