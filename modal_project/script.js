'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close_modal = document.querySelector('.close-modal');
const btn_show_modal = document.querySelectorAll('.show-modal');

function task_after_clicking_on_button() {
  for (let i = 0; i < btn_show_modal.length; i++) {
    btn_show_modal[i].addEventListener('click', fun_show_modal);
  }
}

const fun_close_modal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const fun_show_modal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

task_after_clicking_on_button();

close_modal.addEventListener('click', fun_close_modal);

overlay.addEventListener('click', fun_close_modal);

document.addEventListener('keydown', function (keyboard_event) {
  if (keyboard_event.key === 'Escape' && !modal.classList.contains('hidden')) {
    fun_close_modal();
  }
});
