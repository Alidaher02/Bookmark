const Bookmark_Menu = document.getElementById("Bookmark_Menu")
const AddBook = document.getElementById("AddBook")
const Favorites_Menu = document.getElementById("Favorites_Menu")
const inputTittle = document.getElementById("inputTittle")
const inputUrl = document.getElementById("inputUrl")
const AddSection = document.getElementById("AddSection")
const FavSection = document.getElementById("FavSection")
const favoritesMenu = document.getElementById("favoritesMenu")
const Homebtn = document.getElementById("Homebtn")
const menu_btn = document.getElementById("menu-btn")
const menu = document.getElementById("menu")
const closeBtn = document.getElementById("closebtn")



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
            <button class="favbtn"><i id="heartbg" class="fas fa-heart mr-2 heartBg text-red-600"></i></button>

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
let textChange = document.getElementById("textChange")
let textChanger = document.getElementById("textChanger")
let homeBg = document.getElementById("HomeBg")
let FavBg = document.getElementById("FavBg")
favoritesMenu.addEventListener("click" , () =>{
  homeBg.style.backgroundColor = "#1d1d1d"
  FavBg.style.backgroundColor = "gray"
  AddSection.classList.add("hidden")
  FavSection.classList.remove("hidden")
  textChange.innerHTML = "/ Favorites";
  textChanger.innerHTML = "/ Favorites";
  menu.classList.add("hidden")
})

  Homebtn.addEventListener("click" , () =>{
  homeBg.style.backgroundColor = "gray"
  FavBg.style.backgroundColor = "#1d1d1d"
  AddSection.classList.remove("hidden")
  FavSection.classList.add("hidden")
  textChange.innerHTML = "/ Home";
  textChanger.innerHTML = "/ Home";
  menu.classList.add("hidden")

  })
 
  menu_btn.addEventListener("click" , ()=>{
    menu.classList.remove("hidden")
  })

  closeBtn.addEventListener("click" , () =>{
    menu.classList.add("hidden")
  })

