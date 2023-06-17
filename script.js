
document.addEventListener("DOMContentLoaded", function() {
    redirect();
  
  
  });


function redirect() {
    // Get the current URL SectionID i.e get the name after the #artstaion
    var id = window.location.hash.substring(1);
    
    // Get the div element by its ID extract from the previous
    var div = document.getElementById(id);

    // Get the link element inside the div
    var link = div.querySelector("a");

    // Get the href attribute value
    var href = link.href;

    //load the website
    window.location.href  = href

}


//python will write out three files the .html and the  the  dictionary in txt file
// python will download the csv file containing more information work on it and out these two files

