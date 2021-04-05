$(function () {

  // В переменную filter сохраняем ссылки, по которым мы фильтруем наши работы.

  let filter = $("[data-filter]");

  // При клике на какую-нибудь из этих ссылок 
  filter.on("click", function (event) {
    event.preventDefault(); // чтобы не срабатывала ссылка

    // Сохраняем в "cat" значение атрибута data-filter (в котором хранится название нашей категории)
    let cat = $(this).data('filter');

    // Потом сравниваем.
    // Если категория All то убираем всем класс HIDE, иначе
    // проходимся по всем работам дальше и фильтруем наши работы
    if (cat == 'all') {
      $("[data-cat]").removeClass('hide');
    } else {

      $("[data-cat]").each(function () {

        let workCat = $(this).data('cat');

        if (workCat != cat) {
          $(this).addClass('hide');
        } else {
          $(this).removeClass('hide');
        }
      });
    }

    // Проходимся по всем элементам, у которых есть атрибут "data-cat", и
    // если значение этого атрибута не совпадает с значением "cat", то
    // этот элемент будем скрывать
    // console.log(cat);

  });
});