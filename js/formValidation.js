function  validate()
{
  var form = document.getElementById("formValidation");

  //Check forms have input
  if (form.getFirstName.value == "") {
    alert ("Please Enter a First Name");
    return false;
  }
}
