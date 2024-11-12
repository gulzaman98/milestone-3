document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resumeForm');
    var resumeOutputElement = document.getElementById('resumeOutput');
    if (!form) {
        console.error('The resume form element is missing');
        return;
    }
    if (!resumeOutputElement) {
        console.error('The resume output element is missing');
        return;
    }
    form.addEventListener('submit', function (event) {
        var _a;
        event.preventDefault();
        // Type assertion for form inputs
        var profilePictureInput = document.getElementById('profilePicture');
        var nameElement = document.getElementById('name');
        var emailElement = document.getElementById('email');
        var phoneElement = document.getElementById('phone');
        var educationElement = document.getElementById('education');
        var experienceElement = document.getElementById('experience');
        var skillElement = document.getElementById('skill');
        // Check if all required elements are present
        if (!profilePictureInput || !nameElement || !emailElement || !phoneElement || !educationElement || !experienceElement || !skillElement) {
            console.error('One or more form elements are missing');
            return;
        }
        // Extract values
        var name = nameElement.value.trim();
        var email = emailElement.value.trim();
        var phone = phoneElement.value.trim();
        var education = educationElement.value.trim();
        var experience = experienceElement.value.trim();
        var skill = skillElement.value.trim();
        // Handle profile picture input
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        // Generate resume output
        var resumeOutput = "\n            <h2>Resume</h2>\n            ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : "", "\n            <p><strong>Name:</strong> ").concat(name, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skill, "</p>\n        ");
        // Display the resume
        resumeOutputElement.innerHTML = resumeOutput;
        // Optionally reset form fields
        form.reset();
    });
});
