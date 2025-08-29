// find grid container
const gridContainer = document.querySelector("@grid-container");

// create empty container to add html
let blogPostHolder = "";

//function to run on each element of our array
function addBlogPost(item, index) {
  console.log(item);
  console.log(index);
  blogPostHolder +=
 <article>
{
  <h3>${item.title}</h3>'
  <p>${item.content}</ 
</article>
}

//run addblog post on each ite
BlogPosts.forEach(addBlogPost);
