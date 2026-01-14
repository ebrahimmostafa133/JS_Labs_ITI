const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const postsUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';

let userTabsContainer = document.getElementById('user-tabs');
let postsContainer = document.getElementById('posts');

/* Fetch users using fetch + then/catch */
function fetchUsers() {
    fetch(usersUrl)
        .then(response => response.json())
        .then(users => createUserTabs(users))
        .catch(error => console.error('Error fetching users:', error));
}

function createUserTabs(users) {
    let cartona = '';
    users.forEach(user => {
        cartona += `
            <button onclick="displayUserPosts(${user.id})">
                ${user.username}
            </button>
        `;
    });
    userTabsContainer.innerHTML = cartona;
}


/* Fetch posts using async/await */
async function displayUserPosts(userId) {
    try {
        const response = await fetch(postsUrl + userId);
        const posts = await response.json();
        renderPosts(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

function renderPosts(posts) {
    let cartona = '';
    posts.forEach(post => {
        cartona += `
            <div class="post">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
        `;
    });
    postsContainer.innerHTML = cartona;
}


fetchUsers();
