document.addEventListener("DOMContentLoaded", ()=>{
    const slide_a = document.querySelectorAll('#slide a');


    let i = 2
    const slide = () => {
        if (i > 0) {
            slide_a[i].style.opacity = 0;
            slide_a[i].style.transition = "opacity 0.5s";
            i--;
        } else {
            i = 2;
            slide_a.forEach(j => {
                j.style.opacity = 1;
                j.style.transition = "opacity 0.5s";
            });
        }

    };


    setInterval(slide, 2000);


    /************************************************ */

    const noti_gel_btn = document.querySelectorAll('#noti_gel h2 button');
    const notice_ul = document.querySelector("#notice ul");
    const gallery_div = document.querySelector("#gallery>div");
    const noti_gal = [notice_ul, gallery_div];
    const multi_event = ["click", "focus"];

    noti_gel_btn.forEach (i => {

        multi_event.forEach (ev => {

            i.addEventListener(ev, () => {

                const parent = i.parentElement;
                

                noti_gal.forEach (j => {
    
                    j.style.display = "none";
                    j.previousElementSibling.previousElementSibling.classList.remove("active");
                    
                });

                const remove = () => {
                    parent.classList.add("active");
                    parent.nextElementSibling.nextElementSibling.style.display = "block";
                };
                
                parent ? remove() : null;

            });
            
        });

    });


    /************************************************ */



});///////////////////////전체 끝