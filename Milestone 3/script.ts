document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm') as HTMLFormElement | null;
    const resumeOutputElement = document.getElementById('resumeOutput') as HTMLDivElement | null;

    if (!form) {
        console.error('The resume form element is missing');
        return;
    }
    if (!resumeOutputElement) {
        console.error('The resume output element is missing');
        return;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Type assertion for form inputs
        const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement | null;
        const nameElement = document.getElementById('name') as HTMLInputElement | null;
        const emailElement = document.getElementById('email') as HTMLInputElement | null;
        const phoneElement = document.getElementById('phone') as HTMLInputElement | null;
        const educationElement = document.getElementById('education') as HTMLInputElement | null;
        const experienceElement = document.getElementById('experience') as HTMLInputElement | null;
        const skillElement = document.getElementById('skill') as HTMLInputElement | null;

        // Check if all required elements are present
        if (!profilePictureInput || !nameElement || !emailElement || !phoneElement || !educationElement || !experienceElement || !skillElement) {
            console.error('One or more form elements are missing');
            return;
        }

        // Extract values
        const name = nameElement.value.trim();
        const email = emailElement.value.trim();
        const phone = phoneElement.value.trim();
        const education = educationElement.value.trim();
        const experience = experienceElement.value.trim();
        const skill = skillElement.value.trim();

        // Handle profile picture input
        const profilePictureFile = profilePictureInput.files?.[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";

        // Generate resume output
        const resumeOutput = `
            <h2>Resume</h2>
            ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ""}
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skill}</p>
        `;

        // Display the resume
        resumeOutputElement.innerHTML = resumeOutput;

        // Optionally reset form fields
        form.reset();
    });
});
