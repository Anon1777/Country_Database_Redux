function redirect(){
  var url = document.getElementById('textbox').value;
  var underscore = url.replace(/ /g, "_");
  var myFile = new File("templates/" + underscore + ".html");
  if(myFile.exists()){
    window.location.href = myFile;
  } else {
    window.location.href = "../404.html";
  }
}