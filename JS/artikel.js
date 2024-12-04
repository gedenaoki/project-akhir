function showArticle(articleId) {
    // Sembunyikan semua artikel
    const articles = document.querySelectorAll('.article');
    articles.forEach(article => {
        article.classList.add('hidden');
    });

    // Tampilkan artikel yang dipilih
    const selectedArticle = document.getElementById(articleId);
    if (selectedArticle) {
        selectedArticle.classList.remove('hidden');
}
}