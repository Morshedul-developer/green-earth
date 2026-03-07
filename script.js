const categoryContainer = document.getElementById("category-container");
const treesContainer = document.getElementById("trees-container");

const loadCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/categories",
  );
  const data = await res.json();
  data.categories.forEach((category) => {
    const btn = document.createElement("button");
    btn.className = "btn btn-success w-full justify-start btn-outline";
    btn.textContent = category.category_name;
    categoryContainer.append(btn);
  });
};

const loadTrees = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/plants");
  const data = await res.json();
  displayTrees(data.plants);
};

// category
// :
// "Fruit Tree"
// description
// :
// "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals."
// id
// :
// 1
// image
// :
// "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg"
// name
// :
// "Mango Tree"
// price
// :
// 500
const displayTrees = (trees) => {
  console.log(trees);
  trees.forEach((tree) => {
    const div = document.createElement("div");
    div.className = "card bg-base-100 shadow-sm";
    div.innerHTML = `
    <figure>
              <img
                src="${tree.image}"
                class="h-45 w-full object-cover rounded-t-lg"
              />
            </figure>
            <div class="card-body p-3 space-y-1">
              <h2 class="card-title">${tree.name}</h2>
              <p class="line-clamp-2">
                ${tree.description}
              </p>
              <div class="flex justify-between items-center">
                <div class="badge badge-soft badge-success">${tree.category}</div>
                <div class="font-semibold">$${tree.price}</div>
              </div>
              <div class="card-actions justify-between items-center">
                <button class="btn btn-success w-full rounded-full">Add to Cart</button>
              </div>
            </div>
    `;
    treesContainer.append(div);
  });
};

loadCategories();
loadTrees();
