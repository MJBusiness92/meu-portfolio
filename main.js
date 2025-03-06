// function getProjects(){
//     const urlGitHub = 'https://api.github.com/users/Gutoneitzke/repos'
//     var loadingElement = document.getElementById('loading')

//     fetch(urlGitHub,{
//         method: 'GET',
//     })
//         .then((response) => response.json())
//         .then((response) => {
//             console.log(response)
//             showProjects(response)
//             loadingElement.style.display = 'none'
//         })
//         .catch((e) => {
//             console.log(`Error -> ${e}`)
//         })
// }

// function showProjects(data){
//     var listElement = document.getElementById('my-projects-list')
//     for(let i = 0; i < data.length; i++)
//     {
//         let div = document.createElement("div")
//         let a = document.createElement("a")
//         a.href = data[i]['clone_url']
//         a.target = '_blank'
//         a.title = data[i]['description']
//         let linkText = document.createTextNode(data[i]['name']);
//         a.appendChild(linkText);
//         div.appendChild(a)
//         listElement.appendChild(div)
//     }
// }

// getProjects()

 // JavaScript opcional para funcionalidades adicionais, como navegação automática
 const carrossel = document.querySelector('.carrossel');
 let isDown = false;
 let startX;
 let scrollLeft;

 carrossel.addEventListener('mousedown', (e) => {
     isDown = true;
     startX = e.pageX - carrossel.offsetLeft;
     scrollLeft = carrossel.scrollLeft;
 });

 carrossel.addEventListener('mouseleave', () => {
     isDown = false;
 });

 carrossel.addEventListener('mouseup', () => {
     isDown = false;
 });

 carrossel.addEventListener('mousemove', (e) => {
     if (!isDown) return;
     e.preventDefault();
     const x = e.pageX - carrossel.offsetLeft;
     const walk = (x - startX) * 2; // Ajuste a velocidade de rolagem
     carrossel.scrollLeft = scrollLeft - walk;
 });
