var names = ["Alvin Reba","Alvin Vincent","Alan", "Mikha", "Nabil", "Naufal"];
var courses = ["Algoritma dan Pemrograman", "Struktur Data", "Basis Data", "Sistem Operasi", "Arsitektur Komputer", "Matematika Diskrit", "Statistika dan Probabilitas", "Jaringan Komputer", "Pemrograman Web", "Teknologi Basis Data", "Kecerdasan Buatan", "Pemrograman Berorientasi Objek", "Rekayasa Perangkat Lunak", "Interaksi Manusia dan Komputer", "Grafika Komputer", "Keamanan Informasi dan Jaringan", "Sistem Informasi Geografis", "Algoritma Genetika", "Pengolahan Citra", "Teknik Simulasi", "Mobile Programming", "Sistem Terdistribusi", "Machine Learning", "Pengenalan Pola", "Teknik Optimasi"];

window.onload = function() {
  var select = document.getElementById("course");
  for(var i = 0; i < courses.length; i++) {
    var opt = courses[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
  }
}

function showHint(str) {
  var dataList = document.getElementById("names");
  dataList.innerHTML = ""; // clear previous options
  if (str.length == 0) {
    return;
  } else {
    for(i = 0; i < names.length; i++) {
      if(names[i].toLowerCase().startsWith(str.toLowerCase())) {
        var option = document.createElement("option");
        option.value = names[i];
        dataList.appendChild(option);
      }
    }
  }
}

function validateForm() {
  var name = document.getElementById("name").value;
  var nrp = document.getElementById("nrp").value;
  var course = document.getElementById("course").value;
  var lecturer = document.getElementById("lecturer").value;
  if (name == "") {
    alert("Name cannot be empty");
    return false;
  }
  if (nrp == "") {
    alert("NRP cannot be empty");
    return false;
  }
  if (course == "" || course == "Please choose an option") {
    alert("Mata Kuliah must be selected");
    return false;
  }
  if (lecturer == "") {
      alert("Dosen cannot be empty");
      return false;
    }
}
