$(document).ready(()=> {
    let star = $(".fa-star"); 
    
    star.on("click",(event)=> {
        let clickedStar = $(`#${event.target.id}`);
        if(clickedStar.hasClass("checked")) {
            clickedStar.removeClass("checked");
        } else {
            clickedStar.addClass("checked");
        }
    })
    
   
});