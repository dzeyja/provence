document.addEventListener("DOMContentLoaded", function () {
  const reviewForm = document.getElementById("review-form");
  const reviewsContainer = document.getElementById("reviews");

  // Получаем сохраненные отзывы из локального хранилища, если они есть
  const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];

  // Отображаем сохраненные отзывы
  savedReviews.forEach(function (savedReview) {
    createReviewElement(savedReview.name, savedReview.comment);
  });

  reviewForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;

    if (name && comment) {
      // Создаем объект с отзывом
      const review = { name, comment };

      // Сохраняем отзыв в локальном хранилище
      savedReviews.push(review);
      localStorage.setItem("reviews", JSON.stringify(savedReviews));

      // Отображаем отзыв
      createReviewElement(name, comment);

      // Сброс формы
      document.getElementById("name").value = "";
      document.getElementById("comment").value = "";
    } else {
      alert("Заполните все поля");
    }
  });

  // Функция для создания элемента отзыва и его добавления на страницу
  function createReviewElement(name, comment) {
    const reviewElement = document.createElement("div");
    reviewElement.classList.add("review");

    const nameElement = document.createElement("strong");
    nameElement.textContent = name;

    const commentElement = document.createElement("p");
    commentElement.textContent = comment;

    reviewElement.appendChild(nameElement);
    reviewElement.appendChild(commentElement);

    reviewsContainer.appendChild(reviewElement);
  }
});
