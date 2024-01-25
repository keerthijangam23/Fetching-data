// window.onload = () => {
//   let clickMeButton = document.getElementById("displayData");
//   clickMeButton.addEventListener("click", displayingData);
// function displayingData() {
//   var xmlRequest = new XMLHttpRequest();
//   var url = "https://jsonplaceholder.typicode.com/posts";
//   xmlRequest.open("GET", url, false);
//   xmlRequest.onload = function () {
//     document.getElementById("data").innerHTML = this.responseText;
//   };
//   xmlRequest.send();
// }
// };


//using promises
let clickMeButton = document.getElementById("displayData");
  clickMeButton.addEventListener("click", displayingData);
  function displayingData(){
    const url = fetch("https://jsonplaceholder.typicode.com/posts")
    url.then((resolve)=> {
      //console.log(resolve);
         return resolve.json();
        // return document.getElementById("data").innerHTML = JSON.stringify(response.json)
    })
     .then((json) =>  document.getElementById("text").innerHTML = JSON.stringify(json))
   }
   


  //  //using async and await
  //  let clickMeButton = document.getElementById("displayData");
  // clickMeButton.addEventListener("click", displayingData);
  // async function displayingData(){
  //   const url =  await fetch("https://jsonplaceholder.typicode.com/posts")
  //    const data = await url.json();
  //   document.getElementById("data").innerHTML = JSON.stringify(data);
  // }
 

