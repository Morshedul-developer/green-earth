const categoryContainer = document.getElementById("category-container");
const treesContainer = document.getElementById("trees-container");
const spinner = document.getElementById("spinner");
const btnAll = document.getElementById("btn-all");

const loadCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/categories",
  );
  const data = await res.json();
  data.categories.forEach((category) => {
    const btn = document.createElement("button");
    btn.className = "btn btn-success w-full justify-start btn-outline btn-category";
    btn.textContent = category.category_name;
    categoryContainer.append(btn);
    btn.onclick = () => {
        removeActive();
        btnAll.classList.add("btn-outline")
        addActive(btn);
        
    }
});
};

const loadTrees = async () => {
  showSpinner();
  const res = await fetch("https://openapi.programming-hero.com/api/plants");
  const data = await res.json();
  hideSpinner();
  displayTrees(data.plants);
};

const displayTrees = (trees) => {
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

const removeActive = () => {
    const btnAll = document.querySelectorAll(".btn-category");
    btnAll.forEach(btn=>{
        btn.classList.add("btn-outline");
    })
}

const addActive = (btn) => {
    btn.classList.remove("btn-outline");
    btn.classList.add("btn-success")
}

const showSpinner = () => {
  spinner.classList.remove("hidden");
  spinner.classList.add("flex");
};
const hideSpinner = () => {
  spinner.classList.add("hidden");
  spinner.classList.remove("flex");
};

btnAll.addEventListener('click', () => {
    removeActive();
    btnAll.classList.remove("btn-outline");
    btnAll.classList.add("btn-success");
})

loadCategories();
loadTrees();