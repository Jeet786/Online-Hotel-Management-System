 $(function(){
	 	  $("#addtext").click(function(){
              var xx = $("#name").val();
          $("#comments").append('<b>' + xx +'</b>' + '<br/>');
              var yy = $("#subject").val();
          $("#comments").append(yy + '<br/>');
          $("#name").css("background-color","white");
            $("#name").val("");
            $("#subject").css("background-color","white");
            $("#subject").val("");
            });
         });