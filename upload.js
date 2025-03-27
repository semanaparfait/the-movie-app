const optionMenu = document.querySelector(".select-menu"),
selectbtn = optionMenu.querySelector(".select-btn"),
options = optionMenu.querySelectorAll(".option"),
sbtn_text = optionMenu.querySelector(".text");
  
selectbtn.addEventListener("click", () => optionMenu.classList.toggle(".active"));

options.forEach(option =>{
  option.addEventListener("click", ()=>{
      let selectedOption = option.querySelector(".option-text").innerText;
      sbtn_text.innerText = selectedOption;
  })
      console.log(selectedOption)
})



document.querySelector(".select-menu"),
selectBtn = optionMenu.querySelector(".select-btn"),
options optionMenu.querySelectorAll(".option"),
sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () optionMenu.classList.toggle("active"));
56789101120 13
options.forEach(option =>{
option.addEventListener("click", ()=>{
Let selectedOption = option.querySelector(".option-text").innerText;
sBtn text.innerText selectedOption;
console.log(selectedOption)
14))