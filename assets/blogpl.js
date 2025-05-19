const posts = [
    {
        id: 'kite1',
        category: ['kite', 'surf'],
        title: 'Dlaczego warto uprawiać sporty wodne', // Polish title
        url: 'blog/dlaczegowartouprawiacsportywodne.html' // Polish URL path
    },
];

// Function to render posts based on filter
function renderPosts(filter = 'all') {
    const container = document.getElementById('postsContainer');
    container.innerHTML = '';

    const filteredPosts = filter === 'all'
        ? posts
        : posts.filter(post => post.category.includes(filter));

    filteredPosts.forEach((post) => {
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

// Filter buttons logic
document.querySelectorAll('.filter-buttons button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.filter-buttons button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const filter = button.getAttribute('data-filter');
        renderPosts(filter);
    });
});

// Initial render with all posts
renderPosts();
