const form = document.querySelector('.form');
const modalFailure = document.querySelector('.modal-failure');
const modalSuccess = document.querySelector('.modal-success');
const modalButtonOk = document.querySelector('.modal__button--ok');
const modalButtonClose = document.querySelector('.modal__button--close');
const formButtonSubmit = document.querySelector('.form__submit');
const pageContest = document.querySelector('.page-contest');

console.log(pageContest);

let surname = document.getElementById('surname');
let name = document.getElementById('name');
let email = document.getElementById('email');

const onModalSuccessKeyDown = (event) => {
  if (event.key === 'Escape' || event.key === 'escape') {
    modalSuccess.classList.remove('modal-success--opened');
    formButtonSubmit.removeAttribute('disabled', 'disabled');
    surname.classList.remove('input--error');
    name.classList.remove('input--error');
    email.classList.remove('input--error');
  }
};

const onModalFailureKeyDown = (event) => {
  if (event.key === 'Escape' || event.key === 'escape') {
    modalFailure.classList.remove('modal-failure--opened');
    formButtonSubmit.removeAttribute('disabled', 'disabled');
  }
};

const onModalButtonOkClick = () => {
  modalFailure.classList.remove('modal-failure--opened');
  formButtonSubmit.removeAttribute('disabled', 'disabled');
  surname.classList.remove('input--error');
  name.classList.remove('input--error');
  email.classList.remove('input--error');
  pageContest.style.pointerEvents = 'auto';
};

const onModalButtonCloseClick = () => {
  modalSuccess.classList.remove('modal-success--opened');
  formButtonSubmit.removeAttribute('disabled', 'disabled');
  form.submit();
};

document.addEventListener('keydown', onModalSuccessKeyDown);
document.addEventListener('keydown', onModalFailureKeyDown);
modalButtonOk.addEventListener('click', onModalButtonOkClick);
modalButtonClose.addEventListener('click', onModalButtonCloseClick);

const onFormSubmit = (event) => {
  event.preventDefault();

  if (name.value && email.value && surname.value) {
    modalFailure.classList.remove('modal-failure--opened');
    modalSuccess.classList.add('modal-success--opened');
    formButtonSubmit.setAttribute('disabled', 'disabled');
    pageContest.style.pointerEvents = 'none';
  } else {
    surname.classList.add('input--error');
    name.classList.add('input--error');
    email.classList.add('input--error');
    modalSuccess.classList.remove('modal-success--opened');
    modalFailure.classList.add('modal-failure--opened');
    formButtonSubmit.setAttribute('disabled', 'disabled');
    pageContest.style.pointerEvents = 'none';
  }
};

form.addEventListener('submit', onFormSubmit);
