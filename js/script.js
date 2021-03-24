'use strict';

window.addEventListener('DOMContentLoaded', () => {

// Modal

const modal = document.querySelector('.modal'),
      btn = document.querySelector('.btn__banner'),
      closeBtn = document.querySelector('[data-close]');

function showModal() {
    modal.classList.remove('hide');
    modal.classList.add('show', 'fade');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimeOut);
}

    btn.addEventListener('click', showModal);

function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show', 'fade');
    document.body.style.overflow = '';
}
    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (modal.classList.contains('show') && e.code == 'Escape') {
            closeModal();
        }
    });

    const modalTimeOut = setTimeout(showModal, 200000);

    function showModalbyScroll() {
        if (document.documentElement.clientHeight + window.pageYOffset >= document.documentElement.scrollHeight - 1) {
            showModal();
            window.removeEventListener('scroll', showModalbyScroll);
        }
    }

    window.addEventListener('scroll', showModalbyScroll);

// News

class NewsCard {
    constructor(src, alt, title, descr, parentSelector, ...classes) {
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.parent = document.querySelector(parentSelector);
        this.classes = classes;
    }
    render() {
        const element = document.createElement('div');
        if(this.classes.length === 0) {
            this.element = 'news__item';
            element.classList.add(this.element);
        } else {
            this.element = 'news__item';
            element.classList.add(this.element);
            this.classes.forEach(className => element.classList.add(className));
        }

        element.innerHTML = `
            <div class="news__img">
                <img src=${this.src} alt=${this.alt}>
            </div>
            <div class="news__text-content">
                <div class="news__title">${this.title}</div>
                <div class="news__text">${this.descr}</div>
            </div>
        `;
        this.parent.append(element);
    }
}

new NewsCard(
    './style/img/images/information-orientation.jpg',
    'information orientation',
    'Orientation date',
    'Tue 10/11 & Wed 10/12: 8am-3pm',
    '.main__news'
).render();

new NewsCard(
    './style/img/images/information-campus.jpg',
    'Our campus',
    'Our campus',
    'Find which campus is close to you',
    '.main__news'
).render();

new NewsCard(
    './style/img/images/information-guest-lecture.jpg',
    'guest lecture',
    'Our guest lecture',
    'Join a keynote with Oliver Sack about music in medical treatment',
    '.main__news'
).render();

new NewsCard(
    './style/img/images/information-main.jpg',
    'keep practicing',
    'It does not hurt to keep practicing',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    '.main__news'

).render();



// News Switch

// const newsItem = document.querySelectorAll('.news__item'),
//       mainNewsField = document.querySelector('.main__news'),
//       activeField = document.querySelector('.active'),
//       activeItem = document.querySelector('.news__item_active');

// let itemIndex = 4;

// showItem(itemIndex);

// function showItem(n) {
//         newsItem.forEach(item => {
//             item.classList.remove('news__item_active');
//         });

//         newsItem[itemIndex - 1].classList.add('news__item_active');
//         newsItem[itemIndex - 1].classList.remove('news__item');

//         activeField.insertAdjacentElement('afterbegin', newsItem[itemIndex - 1]);
// }



// Course cards 

class CourseCard {
    constructor(src, alt, title, subtitle, descr, parentSelector, ...classes) {
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.subtitle = subtitle;
        this.descr = descr;
        this.parent = document.querySelector(parentSelector);
        this.classes = classes;
    }

        render() {
        const element = document.createElement('div');

        if(this.classes.length === 0) {
            this.element = 'course__item';
            element.classList.add(this.element);
        } else {
            this.classes.forEach(className => element.classList.add(className));
        }

        element.innerHTML = 
            `
                <div class="course__img">
                    <img src=${this.src} alt=${this.alt}>
                </div>
                <div class="course__text-content">
                    <div class="course__title">${this.title}</div>
                    <div class="course__subtitle">${this.subtitle}</div>
                    <div class="course__description">${this.descr}</div>
                </div>
            `;
            this.parent.append(element);
    }
}

new CourseCard(
    "./style/img/images/course-software.jpg",
    "software",
    "Software engineering",
    "On-campus",
    "Web Development, Mobile Development, iOT, APIs",
    ".courses__row"
).render();

new CourseCard(
    "./style/img/images/course-computer-art.jpg",
    "computer art",
    "Computer art",
    "On-line Course",
    "Imagining \& Design, Web Design, Motion Graphics \& Visual Effects, Computer Animation",
    ".courses__row"
).render();

new CourseCard(
    "./style/img/images/course-design.jpg",
    "course design",
    "Design",
    "On-line Course",
    "User Experience Design, User Research, Visual Design",
    ".courses__row"
).render();

new CourseCard(
    "./style/img/images/course-data.jpg",
    "course data",
    "Data Sciense",
    "On-campus",
    "Data Sciense, Big Data, SQL, Data Visualisation",
    ".courses__row"
).render();

new CourseCard(
    "./style/img/images/course-business.jpg",
    "course business",
    "Business",
    "On-campus",
    "Product Development, Business Development, Startup",
    ".courses__row"
).render();

new CourseCard(
    "./style/img/images/course-marketing.jpg",
    "course marketing",
    "Marketing",
    "On-line Course",
    "Analytics, Content Marketing, Mobile Marketing",
    ".courses__row"
).render();

});
