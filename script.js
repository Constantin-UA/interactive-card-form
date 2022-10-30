console.log('hello world');
//to
const cardNumber = document.querySelector('.interactive-card-front-number');
const cardOwner = document.querySelector('.interactive-card-front-owner');
const cardDate = document.querySelector('.interactive-card-front-date');
const cardCvc = document.querySelector('.interactive-card-back');
//from
const form = document.querySelector('.interactive-card-form');
const formOwner = document.querySelector('#name-owner');
const formNumber = document.querySelector('#number-card');
const formMonth = document.querySelector('#month');
const formYear = document.querySelector('#year');
const formCvc = document.querySelector('#cvc');
const formButton = form.querySelector('.interactive-card-form-button');
//complete section
const complete = document.querySelector('.interactive-card-complete');
const completeButton = complete.querySelector('.interactive-card-complete-button');

//sections show fn
const Show = (elem) => {
	elem.classList.remove('hide');
	elem.classList.add('show');
};

const Hide = (elem) => {
	elem.classList.remove('show');
	elem.classList.add('hide');
};

//form submit event

form.addEventListener('submit', (event) => {
	event.preventDefault();
	cardNumber.innerHTML = formNumber.value;
	cardOwner.innerHTML = formOwner.value;
	cardDate.innerHTML = `${formMonth.value}/${formYear.value}`;
	cardCvc.innerHTML = formCvc.value;
	Hide(form);
	Show(complete);
	form.reset();
});
completeButton.addEventListener('click', (eve) => {
	Hide(complete);
	Show(form);
});

//form validator
function validator(element, rule) {
	if (element === rule) return true;
	return false;
}
