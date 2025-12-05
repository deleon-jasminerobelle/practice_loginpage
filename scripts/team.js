const teamMembers = {
    1: {
        name: "Jasmine Robelle De Leon",
        role: "Project Manager/Developer",
        description: "Oversees the entire project, ensuring all tasks are completed on time and aligned with the team's objectives.",
        image: ""
    },
    2: {
        name: "Clarence Villas",
        role: "Tech Lead/Developer",
        description: "Responsible for the technical direction of the project.",
        image: "../clarence.jpg"
    },
    3: {
        name: "Krislyn Francisco",
        role: "System Analyst/Developer",
        description: "Tests all features, identifies bugs, and ensures the system meets project requirements.",
        image: ""
    }
};

function showMember(id) {
    const member = teamMembers[id];
    const modal = document.getElementById('modal');
    
    document.getElementById('modal-name').textContent = member.name;
    document.getElementById('modal-role').textContent = member.role;
    document.getElementById('modal-description').textContent = member.description;
    
    const modalImg = document.getElementById('modal-img');
    const modalImage = document.getElementById('modal-image');
    
    if (member.image) {
        modalImg.src = member.image;
        modalImg.style.display = 'block';
        modalImage.classList.add('has-image');
    } else {
        modalImg.style.display = 'none';
        modalImage.classList.remove('has-image');
    }
    
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
}

function logout() {
    window.location.href = '../index.html';
}
