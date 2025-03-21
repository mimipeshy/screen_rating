const ratings = document.querySelectorAll('.rating');
const ratingStatement = document.querySelector('.rating_statement');

const styleSelection = (number) => {
    ratings.forEach((rating) => {
        rating.style.backgroundColor = "hsl(217,12%,63%,0.08)";
        rating.style.color = "var(--light-grey)";
    });
    const selectedRating = document.querySelector(`.rating:nth-child(${number})`);
    selectedRating.style.backgroundColor = "hsl(217,12%,63%,0.3)";
    selectedRating.style.color = "var(--dark-grey)";
    ratingStatement.innerHTML = `You selected ${number} out of 5`
}
ratings.forEach((rating, index) => {
    rating.addEventListener('click', () => {
        styleSelection(index + 1);
    });
})

const submit = document.querySelector('.submit');
const feedbackForm = document.querySelector('.rating-section');
const feedbackSubmitted = document.querySelector('.feedback-submitted');

submit.addEventListener('click', () => {
    feedbackForm.setAttribute("form-visible", "false")
    feedbackSubmitted.setAttribute("form-visible", "true")
})

