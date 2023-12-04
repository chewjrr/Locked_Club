function setupRouting() {
  // Получаем текущий URL
  var currentUrl = window.location.href;

  // Проверяем текущий URL и выполняем соответствующие действия
  if (currentUrl.includes("index.html")) {
    // Выполняем действия для главной страницы
    console.log("Вы находитесь на главной странице");
  } else if (currentUrl.includes("albums.html")) {
    // Выполняем действия для страницы с альбомами
    console.log("Вы находитесь на странице с альбомами");
  } else if (currentUrl.includes("about.html")) {
    // Выполняем действия для страницы "О нас"
    console.log("Вы находитесь на странице 'О нас'");
  } else {
    // Выполняем действия по умолчанию
    console.log("Страница не найдена");
  }
}

// Вызываем функцию настройки маршрутизации при загрузке страницы
window.onload = setupRouting;

// Обработка ошибки 404 для каждого элемента в releases
releases.forEach(release => {
  release.elements.forEach(element => {
    const url = element.match(/src="([^"]+)"/)[1];
    checkResource(url);
  });
});