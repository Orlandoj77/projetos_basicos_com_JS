
/*fetch("https://pokeapi.co/api/v2/pokemon/ditto")
.then(api=>{
  return  api
})
.then(dados=>{
    console.log(dados.json())
})*/

fetch("https://jsonplaceholder.typicode.com/todos/")
.then((Response)=>Response.json())
.then(data=>{

  const list = document.querySelector("#fill_list");
  data.map((item)=>{

    const li = document.createElement("li");
    
    li.setAttribute("id", item.id);
    li.innerHTML = item.title;
    list.appendChild(li);
  })
})