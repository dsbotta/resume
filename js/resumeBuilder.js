
/** OBJECTS **/
var bio = {
	"name": "Daniel Botta",
	"role": "Web Developer",
	"contact": {
		"mobile": "757-677-6922",
		"email": "daniel.s.botta@gmail.com",
		"github": "dsbotta",
		"location": "Alexandria VA US"
	},
	"welcome": "Hello! This is my practice resume for your viewing. I would love the opportunity to work for your company!",
	"skills": ["HTML", "CSS", "JavaScript", "Jquery", "JSON"],
	"bioPic": "images/me.jpg"
};

var education = {
	"schools": {
		"name": "Liberty University",
		"city": "Lynchburg VA US",
		"dates": "2009-2013",
		"degree": "BA",
		"major": "Exercise Science"
		},
"onlineCourses":	[
		{
		"title": "Front-End Web Developer Nano Degree",
		"school": "Udacity.com",
		"dates": "2015",
		"url": "https://www.udacity.com"
		},
		{
		"title": "Intro to JavaScript",
		"school": "Treehouse.com",
		"dates": "2015",
		"url": "http://teamtreehouse.com/"	
		},
		{
		"title": "Intro to PHP",
		"school": "CodeAcademy.com",
		"dates": "2015",
		"url": "http://codeacademy.com/"	
		}
	]	
};

var projects = {	
	"project": [
		{
		"title": "COHO Fitness Center Website",
		"dates": "2015",
		"descriptions": "Recreated the COHO website for better accessibility and a better visual experience.",
		"images": [
			"http://placehold.it/300x300",
			"http://placehold.it/300x300"
			]
		},
		{
		"title": "Daniel Botta Portfolio Website",
		"dates": "2015",
		"descriptions": "An interactive portfolio website demonstrating all of my development projects.",
		"images": [
			"http://placehold.it/300x300",
			"http://placehold.it/300x300"
			]
		}
	]
};

var work = {
	"jobs": [
		{
		"title": "Program Manager",
		"company": "Corporate Fitness Works",
		"location": "Washington DC US",
		"date": "2014 - Current",
		"description": "This is where the content about what I did will go."
		},
		{
		"title": "Assistant Program Manager",
		"company": "Corporate Fitness Works",
		"location": "Washington DC US",
		"date": "2013 - 2014",
		"description": "This is where the content about what I did will go."
		}
	]
};

var footer = {};

bio.display = function() {
		formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedName);
		formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcome);
		$("#header").append(formattedWelcome);
		formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
		$("#topContacts").append(formattedMobile);
		formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
		$("#topContacts").append(formattedEmail);
		formattedGitHub = HTMLgithub.replace("%data%", bio.contact.github);
		$("#topContacts").append(formattedGitHub);
		formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
		$("#topContacts").append(formattedLocation);
		formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header").append(formattedPic);
};
bio.display();



/** Display BIO **/
if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for (i=0; i < bio.skills.length; i++) {	
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	}
};

/** Display WORK **/
work.display = function() {
	if (work.jobs.length > 0) {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer  = HTMLworkEmployer.replace("%data%", work.jobs[job].company);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].date);
			$(".work-entry:last").append(formattedDates);
			var formattedLocations = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedLocations);
			var formattedDescriptions = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescriptions);
		}; 
	};
};
work.display();

/** Displaying Projects by Encapsulating Functions **/
projects.display = function() {
	for(i in projects.project) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[i].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.project[i].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[i].descriptions);
		$(".project-entry:last").append(formattedDescription);
		for (i2 in projects.project[i].images) {
			var formattedImages = HTMLprojectImage.replace("%data%", projects.project[i].images[i2]);
			$(".project-entry:last").append(formattedImages);
		};
	};
};
projects.display();

/** Display Education **/
education.display = function() {
	$("#education").append(HTMLschoolStart);
	var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools.name) + HTMLschoolDegree.replace("%data%", education.schools.degree);
	$(".education-entry:last").append(formattedSchoolName);
	var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools.dates);
	$(".education-entry:last").append(formattedSchoolDates);
	var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools.city);
	$(".education-entry:last").append(formattedSchoolLocation);
	var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools.major);
	$(".education-entry:last").append(formattedSchoolMajor);
	$("#education").append(HTMLonlineStart);
	$(".online-entry").append(HTMLonlineClasses);
	for(i in education.onlineCourses) {
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
		$(".online-entry:last").append(formattedOnlineTitle);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
		$(".online-entry:last").append(formattedOnlineDates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
		$(".online-entry:last").append(formattedOnlineURL);

	};
};
education.display();

/** Display CLICKS on PAGE with CONSOLE.LOG **/
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

/** Display INTERNATIONALIZE with BUTTON **/
function inName(name) {
	name = bio.name;
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] +" "+name[1];
};
$("#main").append(internationalizeButton);


/** View Map **/
$("#mapDiv").append(googleMap);

footer.display = function() {
	formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
	$("#footerContacts").append(formattedMobile);
	formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
	$("#footerContacts").append(formattedEmail);
	formattedGitHub = HTMLgithub.replace("%data%", bio.contact.github);
	$("#footerContacts").append(formattedGitHub);
	formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
	$("#footerContacts").append(formattedLocation);
};
footer.display();






