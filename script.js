// User database
const users = {
    admin: { 
        username: "admin", 
        password: "magicschool", 
        role: "admin",
        name: "Headmaster",
        avatar: "🧙‍♂️"
    },
    teacher1: {
        username: "teacher1",
        password: "teach123",
        role: "teacher",
        name: "Professor Spellman",
        subject: "Potions",
        avatar: "🧪"
    },
    student1: {
        username: "student1",
        password: "learn123",
        role: "student",
        name: "Apprentice Willow",
        grade: "A",
        avatar: "📚"
    }
};

// Login form handler
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = this.querySelector('input[type="text"]').value;
    const password = this.querySelector('input[type="password"]').value;
    const role = this.querySelector('select').value.toLowerCase();
    
    // Check credentials
    if (users[username] && users[username].password === password && users[username].role === role) {
        // Store current user in localStorage
        localStorage.setItem('currentUser', JSON.stringify(users[username]));
        
        // Redirect to appropriate dashboard
        switch(role) {
            case 'admin':
                window.location.href = 'admin-dashboard.html';
                break;
            case 'teacher':
                window.location.href = 'teacher-dashboard.html';
                break;
            case 'student':
                window.location.href = 'student-dashboard.html';
                break;
        }
    } else {
        alert('Incorrect credentials or role mismatch! Try again.');
    }
});

// Utility functions
function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}