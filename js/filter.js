const filterList = document.querySelector(".filter__list");
const projectItem = document.querySelectorAll(".projects__item");

const proj = [...projectItem];
const arrFilter = ["Дизайн", "Веб-сайти", "Додатки", "Маркетинг"];
const projectObj = [
  { title: "Дизайн", class: "js-design" },
  { title: "Веб-сайти", class: "js-web" },
  { title: "Додатки", class: "js-app" },
  { title: "Маркетинг", class: "js-marketing" },
];

filterList.addEventListener("click", onClick);

function onClick(e) {
  const filterBtn = e.target.classList.contains("filter__button");

  const textContent = e.target.textContent;
  if (!filterBtn) {
    return;
  }
  if (e.target.textContent === "Усі") {
    return proj.forEach((item) => item.classList.remove("projects__hidden"));
  }

  for (const project of projectObj) {
    filter(textContent, project.title, project.class);
  }
}

function filter(textContent, btnTitle, classFilter) {
  if (textContent === btnTitle) {
    proj.forEach((item) => item.classList.remove("projects__hidden"));
    const filterArr = proj.filter((item) => !item.classList.contains(`${classFilter}`)).map((el) => el.classList.add("projects__hidden"));
    console.log(filterArr);
    return filterArr;
  }
}
