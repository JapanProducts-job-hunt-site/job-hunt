// Header

var currentPage = window.location.href;
var result = "";

if(currentPage == "file://macintosh%20hd/Users/KishikawaItaru/GitHub/job-hunt/user/view/edit/baseInfo/baseInfo.html")
	result +="<link rel=\"stylesheet\" type=\"text\/css\" href=\"..\/..\/header\/header.css\">";
else
	result += "<link rel=\"stylesheet\" type=\"text/css\"  href=\"..\/header\/header.css\" />";
	
			result += "<span class = \"logo\">"
        	 	+ "logo"
    		+ "</span>"
	
    		+ "<span class = \"search\">"
    			+ "<input placeholder=\"Search\" />"
    		+ "</span>"
			
			
			+"<span class = \"tag\">"
				+"<span class = \"home\">";
				
if(currentPage == "file://macintosh%20hd/Users/KishikawaItaru/GitHub/job-hunt/user/view/edit/baseInfo/baseInfo.html")
	result += "<img src=\"..\/..\/header\/icons\/home.png\">";
else
	result += "<img src= \"..\/header\/icons\/home.png\">";
	
				result += "</span>"
				+"<span class = \"job\">";
				
if(currentPage == "file://macintosh%20hd/Users/KishikawaItaru/GitHub/job-hunt/user/view/edit/baseInfo/baseInfo.html")
	result += "<img src=\"..\/..\/header\/icons\/job.png\">";
else
	result += "<img src= \"..\/header\/icons\/job.png\">";
				
				result += "</span>"
				+"<span class = \"message\">";
				
if(currentPage == "file://macintosh%20hd/Users/KishikawaItaru/GitHub/job-hunt/user/view/edit/baseInfo/baseInfo.html")
	result += "<img src=\"..\/..\/header\/icons\/message.png\">";
else
	result += "<img src= \"..\/header\/icons\/message.png\">";
				
				result += "</span>"
				+"<span class = \"notification\">";
if(currentPage == "file://macintosh%20hd/Users/KishikawaItaru/GitHub/job-hunt/user/view/edit/baseInfo/baseInfo.html")
	result += "<img src=\"..\/..\/header\/icons\/notification.png\">";
else			
	result += "<img src= \"..\/header\/icons\/notification.png\">";
					
				result += "</span>"
				+"<span class = \"myPage\">";
if(currentPage == "file://macintosh%20hd/Users/KishikawaItaru/GitHub/job-hunt/user/view/edit/baseInfo/baseInfo.html")
	result += "<img src=\"..\/..\/header\/icons\/myPage.png\">";
else
	result += "<img src= \"..\/header\/icons\/myPage.png\">";
	
				result += "</span>"
			+ "</span>";
	
document.write(result);
