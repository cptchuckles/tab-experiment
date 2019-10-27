// Click to select tab

const contents = document.querySelectorAll( ".content" );

const sidebarItems = document.querySelectorAll("#sidebar>ul>li");

sidebarItems.forEach(li => {
  li.addEventListener("click", e => {
    sidebarItems.forEach(l => l.classList.remove("selected"));
    e.target.classList.add( "selected" );
    showRelatedContentTab( e.target );
  });
});

function showRelatedContentTab( tab ) {
  const contentName = tab.getAttribute( "data" );
  if( ! contentName ) return;
  
  contents.forEach( content => {
    if( content.id == contentName ) {
      content.style.visibility = "visible";
    } else {
      content.style.visibility = "hidden";
    }
  });
}
