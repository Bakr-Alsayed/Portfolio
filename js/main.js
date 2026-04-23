const item_projects = document.querySelectorAll(".item");
const btns = document.querySelectorAll(".btn_projects");


btns.forEach((button) => {
    let data_button = button.getAttribute("data-type");

    button.addEventListener("click",()=>{
        item_projects.forEach((item) => {

        let dat_item = item.getAttribute("data-type");

        if(data_button == "all" || data_button == dat_item){
            item.style.display ="flex"

        }else{
            item.style.display ="none"
        }

    })
    })
    
});





