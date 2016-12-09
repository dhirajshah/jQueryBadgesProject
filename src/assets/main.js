$(function() {

  // your code will go here
  $.ajax({
  	url: 'https://www.codeschool.com/users/dhirajshah.json',
  	success: function(response){
  		var completedCourses = response.courses.completed;
  		for (var i=0, len=completedCourses.length; i < len; i++) {
  			var output = '<div class="course">';
  			output += '<h3>' + completedCourses[i].title + '</h3>';
  			output += '<img src="'+ completedCourses[i].badge +'">';
  			output += '<a class="btn btn-primary" href="'+ completedCourses[i].url +'" target="_blank">See Course</a>'; 
  			output += '</div>'
  		}
  		$('#badges').html(output);
  	}
  }, "jsonp");

});
