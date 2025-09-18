// ===================
// 1. Blog Post Data
// ===================
const posts = [
    {
        id: 'post1',
        category: ['kite', 'surf'],
        title: 'Why You Should Do Water Sports',
        url: 'blog/post1.html'
    },
    {
        id: 'post2',
        category: ['kite'],
        title: 'How to Prepare for Your Kitesurfing Lesson',
        url: 'blog/post2.html'
    },
    {
        id: 'post3',
        category: ['prana'],
        title: 'Start and End Your Day With Meditation',
        url: 'blog/post3.html'
    },
    {
        id: 'post4',
        category: ['surf'],
        title: 'How to Choose the Right Surfboard',
        url: 'blog/post4.html'
    },
    {
        id: 'post5',
        category: ['tarifa'],
        title: 'The Four Seasons in Tarifa',
        url: 'blog/post5.html'
    },
    {
        id: 'post5',
        category: ['kite', 'surf'],
        title: 'From Balance to Chaos: 8 Levels Challenge',
        url: 'blog/post6.html'
    },

];

// ===================
// 2. Utility Function
// ===================
function renderPostsToContainer(postList, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    postList.slice().reverse().forEach((post) => {
        const postCard = document.createElement('div');
        postCard.classList.add('post-card');
        postCard.setAttribute('data-category', post.category.join(', '));
        postCard.innerHTML = `
            <div class="post-title">${post.title}</div>
            <div class="post-category">${post.category.join(', ')}</div>
        `;

        postCard.addEventListener('click', () => {
            window.location.href = post.url;
        });

        container.appendChild(postCard);
    });
}


// ===================
// 3. Filtered Renderer
// ===================
function renderCategoryPosts(category, containerId) {
    const filteredPosts = posts.filter(post => post.category.includes(category));
    renderPostsToContainer(filteredPosts, containerId);
}

// ==========================
// 4. Generic Filter Renderer
// ==========================
function renderPosts(filter = 'all') {
    const containerId = 'postsContainer';
    const filteredPosts = filter === 'all'
        ? posts
        : posts.filter(post => post.category.includes(filter));

    renderPostsToContainer(filteredPosts, containerId);
}

// ==========================
// 5. Setup Filter Buttons
// ==========================
function setupFilterButtons() {
    const buttons = document.querySelectorAll('.filter-buttons button');
    if (!buttons.length) return;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filter = button.getAttribute('data-filter');
            renderPosts(filter);
        });
    });
}

// ==========================
// 6. Render Latest N Posts
// ==========================
function renderLatestPosts(limit = 3, containerId = 'latestPostsContainer') {
    const sortedPosts = [...posts].slice(-limit).reverse(); // Get last `limit` posts
    renderPostsToContainer(sortedPosts, containerId);
}


// ==========================
// 7. Initial Render Call
// ==========================
document.addEventListener('DOMContentLoaded', () => {
    renderPosts(); // renders to #postsContainer if exists

    // Render specific category sections
    renderCategoryPosts('kite', 'kitePostsContainer');
    renderCategoryPosts('surf', 'surfPostsContainer');
    renderCategoryPosts('prana', 'pranaPostsContainer');
    renderCategoryPosts('tarifa', 'tarifaPostsContainer');
    renderLatestPosts(4, 'latestPostsContainer');


    setupFilterButtons(); // optional
});


