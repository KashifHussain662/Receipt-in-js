// Receipt like jazz cash & Eassy Paissa //

var account_name = "Kashif Hussain";
var account_nmbr = "0333 2211166";

function hello() {
  alert(
    `To : ${
      document.getElementById("nmbr").value
    } \nFrom : ${account_name} \nAmmount Send : ${
      document.getElementById("mony").value
    } \nReceiver Name : ${
      document.getElementById("name").value
    } \nYou : ${account_nmbr}`
  );
}
