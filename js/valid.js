function validation() {
	valid = true;
	var name = $('#name').val();
    var email = $('#email').val();
    var country = $('#country');
    var typeofroom = $('#typeofrooms');
    var noofroom = $('#noofrooms');
    var checkin = $('#checkin').val();
    var checkout = $('#checkout').val();
    var adult = $('#adult').val();
    var children = $('#children').val();
    var phone = $('#phone').val();
    var special = $('#subject').val();

    $(".error").remove();  
    
  if (name.length < 1) {
      $('#name').parent().append('<span class="error">This field is required</span>');
      valid = false;
   }
    if (email.length < 1) {
      $('#email').parent().append('<span class="error">This field is required</span>');
      valid = false;
    } else {
      var regEx = regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        $('#email').parent().append('<span class="error">Enter a valid email</span>');
        valid = false;
      }
    }
    if (country.val() == ""){
      $("#country").parent().append('<span class="error">Please select the country</span>');
      valid = false;
    }
    if (typeofroom.val() == ""){
      $("#typeofrooms").parent().append('<span class="error">Please select the type of room</span>');
      valid = false;
    }
    if (noofroom.val() == ""){
      $("#noofrooms").parent().append('<span class="error">Please select the no. of room</span>');
      valid = false;
    }
    if (checkin.length < 1){
      $("#checkin").parent().append('<span class="error">Please select the checkin date</span>');
      valid = false;
    }
     if (checkout.length < 1){
      $("#checkout").parent().append('<span class="error">Please select the checkout date</span>');
      valid = false;
    }
     if (adult.length <= 0){
      $("#adult").parent().append('<span class="error">Please select the select no. of adults</span>');
      valid = false;
    }
     if (children.length <= 0){
      $("#children").parent().append('<span class="error">Please select the select the no. of children</span>');
      valid = false;
    }
     if (special.length < 1){
      $("#subject").parent().append('<span class="error">This field is required</span>');
      valid = false;
    }
     if (phone.length < 1){
      $("#phone").parent().append('<span class="error">This field is required</span>');
      valid = false;
    }else{
      var filter = /^[0-9]+$/;
       if (!filter.test(phone)) {
        $('#phone').parent().append('<span class="error">Enter a valid phone no.</span>');
        valid = false;
    }
      }
      return valid;
}
