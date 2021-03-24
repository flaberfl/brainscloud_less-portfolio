$(function () {
    
    let filter = $("[data-filter]");

    filter.on("click", function (event) {
        event.preventDefault(); // чтобы не срабатывала ссылка
        
        let cat = $(this).data('filter');
        console.log(cat);
    });

});