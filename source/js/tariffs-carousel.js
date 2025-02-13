const tariffsTable = document.querySelector('.tariffs-table');

const paginationButtons = document.querySelectorAll(
  '.tariffs__pagination-list .pagination-list__toggle'
);


const onButtonClick = (index) => {
    paginationButtons.forEach((elem) => elem.classList.remove('pagination-list__toggle--current'));


    paginationButtons[index].classList.add('pagination-list__toggle--current');
    switch (index) {
        case 0: tariffsTable.style.left = '186%';
        break;

        case 1: tariffsTable.style.left = '86%';
        break;

        case 2: tariffsTable.style.left = '-12%';
        break;
    }
}

paginationButtons.forEach((button, index) => button.addEventListener('click', () => onButtonClick(index))
);
