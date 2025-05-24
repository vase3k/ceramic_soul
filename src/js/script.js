import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import JustValidate from 'just-validate';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '/src/sass/style.scss';

try {
    const burger = document.querySelector('.burger'),
        close = document.querySelector('.header__menu-close'),
        menu = document.querySelector('.header__menu');

    burger.addEventListener('click', () => {
        menu.classList.add('header__menu_active');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', () => {
        menu.classList.remove('header__menu_active');
        document.body.style.overflow = '';
    });
} catch (e) {}

try {
    const touch__form = new JustValidate(
        document.querySelector('.touch__form'),
        { submitFormAutomatically: true },
        [
            {
                key: 'enter your name',
                dict: {
                    english: 'enter your name',
                    russian: 'введите имя ебта',
                },
            },
            {
                key: 'enter your email',
                dict: {
                    english: 'enter your email',
                    russian: 'введите мыло ваще',
                },
            },
            {
                key: 'please fill up questioner',
                dict: {
                    english: 'please fill up questioner',
                    russian: 'заполни поле чувак',
                },
            },
            {
                key: 'you forgot the checkbox',
                dict: {
                    english: 'you forgot the checkbox',
                    russian: 'забыл кликнуть мудила',
                },
            },
        ]
    );
    touch__form
        .addField('#name', [
            {
                rule: 'required',
                errorMessage: 'enter your name',
            },
            {
                rule: 'minLength',
                value: 4,
            },
        ])
        .addField('#email', [
            {
                rule: 'required',
                errorMessage: 'enter your email',
            },
            {
                rule: 'email',
            },
        ])
        .addField(
            '#question',
            [
                {
                    rule: 'required',
                    errorMessage: 'please fill up questioner',
                },
                {
                    rule: 'minLength',
                    value: 3,
                },
            ],
            {
                errorsContainer: document
                    .getElementById('question')
                    .parentElement.getElementsByClassName('question-error-message')[0],
            }
        )
        .addField(
            '#checkbox',
            [
                {
                    rule: 'required',
                    errorMessage: 'you forgot the checkbox',
                },
            ],
            {
                errorsContainer: document
                    .getElementById('checkbox')
                    .parentElement.parentElement.getElementsByClassName(
                        'checkbox-error-message'
                    )[0],
            }
        )
        .setCurrentLocale('russian');
} catch (e) {}

try {
    const footer__form = new JustValidate('#footer__form', { submitFormAutomatically: true }, [
        {
            key: 'enter your email',
            dict: {
                english: 'enter your email',
                russian: 'введите мыло ваще',
            },
            key: 'you forgot the checkbox',
            dict: {
                english: 'you forgot the checkbox',
                russian: 'забыл кликнуть мудила',
            },
        },
    ]);
    footer__form
        .addField(
            '#footer__email',
            [
                {
                    rule: 'required',
                    errorMessage: 'enter your email',
                },
            ],
            {
                errorsContainer: document.querySelector('.footer-mail-error-message'),
            }
        )
        .addField(
            '#footer__checkbox',
            [
                {
                    rule: 'required',
                    errorMessage: 'you forgot the checkbox',
                },
            ],
            {
                errorsContainer: document.querySelector('.footer-checkbox-error-message'),
            }
        )
        .setCurrentLocale('russian');
} catch (e) {}

try {
    const tabs = document.querySelectorAll('.catalog__tab'),
        contents = document.querySelectorAll('.catalog__content-item');

    tabs.forEach((item, index) => {
        item.addEventListener('click', () => {
            tabs.forEach((t) => t.classList.remove('catalog__tab_active'));
            contents.forEach((c) => (c.style.display = 'none'));

            item.classList.add('catalog__tab_active');
            contents[index].style.display = 'flex';
        });
    });

    contents.forEach((c, i) => (c.style.display = i === 0 ? 'flex' : 'none'));
} catch (e) {}

try {
    const swiper = new Swiper('.works__slider', {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.icon-right-open',
            prevEl: '.icon-left-open',
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
                spaceBetween: 5,
            },
            1920: {
                spaceBetween: 35,
            },
        },
        modules: [Navigation, Pagination],
    });
} catch (e) {}
