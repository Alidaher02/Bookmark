const Bookmark_Menu = document.getElementById("Bookmark_Menu")
const AddBook = document.getElementById("AddBook")
const Favorites_Menu = document.getElementById("Favorites_Menu")
const inputTittle = document.getElementById("inputTittle")
const inputUrl = document.getElementById("inputUrl")



AddBook.addEventListener("click" , () =>{

  let title = inputTittle.value.trim();
  let url   = inputUrl.value;

    let div = document.createElement("div")
    if (title == "" || !url.match(/^http:\/\//) ) {
     inputTittle.value = "Pleasr enter a valid name"
      inputUrl.value = "Pleasr enter a valid url"
      setTimeout(() => {
        inputTittle.value = "";
        inputUrl.value = "";
     }, 1000 );
     return;
   }

    div.innerHTML = `
      <div class="flex items-center justify-between bg-white dark:bg-gray-700">
          <div class="flex flex-col gap-2 p-2 rounded-2xl">
              <h2  class="font-semibold w-60 sm:w-[1000px] p-2 overflow-y-auto">${title}</h2>
              <h3 class="text-blue-400 w-60 sm:w-[1000px] p-2  overflow-y-auto ">${url}</h3>
          </div>
          <div class="flex sm:flex-row flex-col sm:gap-1 gap-3">
              <button class="favbtn"><i id="heartbg" class="fas fa-heart mr-2 heartBg"></i></button>
              <button class="deletebtn"><i class="fas fa-trash mr-2 "></i></button>
          </div>
        </div>
         
    `;

    Bookmark_Menu.appendChild(div);

    
    const favbtn = div.querySelector(".favbtn");
    const heartIcon = div.querySelector(".heartBg");
    let Fav = null;

    favbtn.addEventListener("click", () => {
      heartIcon.classList.toggle("heart");
  
      if (heartIcon.classList.contains("heart")) {
        if (!Fav) {
          heartIcon.classList.add("heart")
          Fav = document.createElement("div");
          Fav.innerHTML = `
            <div class="flex items-center justify-between bg-white dark:bg-gray-700">
              <div class="flex flex-col gap-2 p-2 rounded-2xl">
                <h2 class="font-semibold w-60 sm:w-[1000px] p-2 overflow-y-auto">${title}</h2>
                <h3 class="text-blue-400 w-60 sm:w-[1000px] p-2 overflow-y-auto">${url}</h3>
              </div>
            <button class="favbtn"><i id="heartbg" class="fas fa-heart mr-2 heartBg"></i></button>

            </div>
          `;
          Favorites_Menu.appendChild(Fav);
        }
      } else {
        if (Fav) {
          Fav.remove();
          Fav = null;
        }
      }

      let favbtn = Fav.querySelector(".favbtn")
      favbtn.addEventListener("click" , ()=>{
        Fav.remove();
        heartIcon.classList.remove("heart")
      })
    });
  
  inputTittle.value = "";
  inputUrl.value = ""

     
    let deletebtn = div.querySelector(".deletebtn")
    deletebtn.addEventListener("click" , () => {
      div.remove();
Fav.remove();
      
    })

  
    
})

