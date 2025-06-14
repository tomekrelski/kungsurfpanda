const posts = [
    {
        id: 'post1',
        category: ['kite', 'surf'],
        title: 'Dlaczego warto uprawiać sporty wodne', // Polish title
        url: 'blog/post1.html'
    },
    {
        id: 'post2',
        category: ['kite'],
        title: 'Jak Przygotować Się do Lekcji Kitesurfingu', // Polish title
        url: 'blog/post2.html'
    },

    
    {
        id: 'post3',
        category: ['prana'],
        title: 'Zacznij i zakończ dzień medytacją', // Polish title
        url: 'blog/post3.html'
    }, 
    {
        id: 'post4',
        category: ['surf'],
         title: 'Jak Wybrać Odpowiednią Deskę Surfingową', // Polish title
        url: 'blog/post4.html'
    }, 

    {
        id: 'post4',
        category: ['tarifa'],
        title: 'Cztery Pory Roku w Tarifie', // Polish title
        url: 'blog/post5.html'
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
