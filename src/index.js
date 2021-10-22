const init = () => {
const inputForm = document.querySelector("form");
inputForm.addEventListener('submit',(e)=> {
  e.preventDefault();
  const searchedId = document.querySelector("input#searchByID");
    console.log(searchedId.value);

fetch(`http://localhost:3000/movies/${searchedId.value}`)
.then(res => res.json())
.then(data => {
  console.log(data)
  const title = document.querySelector("h4");
  const summary = document.querySelector("p");

  title.innerText = data.title;
  summary.innerText = data.summary;
  
})
})
}
document.addEventListener('DOMContentLoaded', init);








