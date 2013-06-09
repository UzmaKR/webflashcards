$(document).ready(function() {
  $('#answer_form').on("submit",function(e){
    e.preventDefault();
    console.log($(this).serialize());
    $.ajax({
      url: "/play",
      type: "post",
      data: $(this).serialize()
    }).done(function(response){
       $('html').html(response);
    });
  });
});
