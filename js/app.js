$(function () {
    
    let filter = $("[data-filter]");

    filter.on("click", function (event) {
        event.preventDefault(); // чтобы не срабатывала ссылка
        
        let cat = $(this).data('filter');

      // Проходимся по всем элементам, у которых есть атрибут "data-cat", и
      // если значение этого атрибута не совпадает с значением "cat", то
      // этот элемент будем скрывать

        console.log(cat);
    });

});