// Select elements
const commentInput = document.getElementById('commentInput');
const submitBtn = document.getElementById('submitBtn');
const commentsContainer = document.getElementById('commentsContainer');

// Load comments from localStorage when the page loads
window.onload = function() {
    loadComments();
}

// Add event listener to the submit button
submitBtn.addEventListener('click', addComment);

// Function to add a new comment
function addComment() {
    const commentText = commentInput.value.trim();
    if (commentText) {
        // Get existing comments from localStorage
        const comments = JSON.parse(localStorage.getItem('comments')) || [];

        // Add the new comment
        comments.push(commentText);

        // Save the updated comments back to localStorage
        localStorage.setItem('comments', JSON.stringify(comments));

        // Clear the input field
        commentInput.value = '';

        // Display the updated list of comments
        displayComments(comments);
    }
}

// Function to load and display comments
function loadComments() {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    displayComments(comments);
}

// Function to display comments in the container
function displayComments(comments) {
    commentsContainer.innerHTML = '';
    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.textContent = comment;
        commentsContainer.appendChild(commentElement);
    });
}
