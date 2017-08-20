function Contact(first, last, phone, visited) {
  this.firstName = first;
  this.lastName = last;
  this.phoneNumber = phone;
  this.placesVisited = visited;
}


Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedPhoneNumber = $("input#new-phone-number").val();
    var inputtedPlacesVisited = $("input#new-places-visited").val().split(' ');

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedPlacesVisited);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".phone-number").text(newContact.phoneNumber);
      jQuery.each((newContact.placesVisited), function(i, val) {
        $("#places-visited").append("<li>"+val+"</li>");
      });
    });
  });
});
