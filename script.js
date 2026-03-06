const categoryContainer = document.getElementById("category-container");

const loadCategories = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/categories");
    const data = await res.json();
    data.categories.forEach(category => {
        const btn = document.createElement('button');
        btn.className = "btn btn-success w-full justify-start btn-outline";
        btn.textContent = category.category_name;
        categoryContainer.append(btn);
    });
}
loadCategories();