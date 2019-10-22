// Click to select tab

const sidebarItems = document.querySelectorAll("#sidebar>ul>li");
sidebarItems.forEach(li => {
  li.addEventListener("click", e => {
    sidebarItems.forEach(l => l.classList.remove("selected"));
    e.target.classList.add("selected");
  });
});
