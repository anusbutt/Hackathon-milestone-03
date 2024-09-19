var form = document.getElementById("resume-form");
var resumedisplayelement = document.getElementById("resume-display");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var resume = "\n    <h2>resume</h2>\n    <h3><b>personal information</b></h3>\n    <p><b>name:</b> ".concat(name, "</p>\n    <p><b>phone:</b> ").concat(phone, "</p>\n    <p><b>email:</b> ").concat(email, "</p>\n\n    <h3>education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>experience</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>skills</h3>\n    <p>").concat(skills, "</p>\n    ");
    if (resumedisplayelement) {
        resumedisplayelement.innerHTML = resume;
    }
    else {
        console.error("the resume display element is missing");
    }
});
