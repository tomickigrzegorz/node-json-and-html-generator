window.addEventListener('DOMContentLoaded', () => {
  const example1 = document.getElementById('columns');
  const sortable = new Sortable(example1, {
    ghostClass: 'highlight',
    animation: 150,
  });

  const updateForm = (json) => {
    const { head, body } = json;
    const seoTitle = document.querySelector('[name="seoTitle"]');
    const seoDescription = document.querySelector('[name="seoDescription"]');
    const bodyTitle = document.querySelector('[name="bodyTitle"]');
    const bodyDate = document.querySelector('[name="bodyDate"]');
    const bodyText = document.querySelector('[name="bodyText"]');

    // seo
    seoTitle.value = head.title;
    seoDescription.value = head.description;

    // data on the top of the site
    bodyTitle.value = body.title;
    bodyDate.value = body.date;
    bodyText.value = body.text;

    body.items.forEach((element, index) => {
      // console.log(element);
      const image = document.querySelectorAll('[name="imageAlt"]');
      const imageText = document.querySelectorAll('[name="imageText"]');
      image[index].value = element.alt;
      imageText[index].value = element.text;
    });
  };

  // eslint-disable-next-line no-undef
  fetch(fileJson)
    .then(response => response.json())
    .then((myJson) => {
      updateForm(myJson);
    });

  // grid change
  const gridCheckbox = document.querySelector('.grid-view-checked');
  const viewGrid = document.querySelector('.view-grid');
  const iconGrid = document.querySelector('.icon-grid');

  gridCheckbox.addEventListener('click', (e) => {
    viewGrid.classList.toggle('grid-view');
    iconGrid.classList.toggle('green');
    const { target } = e;
    target.innerText = target.innerText === 'GRID OFF' ? 'GRID ON' : 'GRID OFF';
  });

  // scroll
  const backToTop = document.querySelector('.scroll');
  (() => {
    window.addEventListener('scroll', () => {
      const pageyoffset = window.pageYOffset || document.documentElement.scrollTop;
      backToTop.style.display = pageyoffset > 200 ? 'block' : 'none';
    });
  })();


  const zoom = new Zooom({
    element: '.img-zoom',
    padding: 80,
    overlay: {
      color: '#000',
      opacity: '.5',
    },
  });

  const option = {
    speed: 100,
    easing: 'easeOutCubic',
  };
  const scroll = new SmoothScroll('.scroll', option);

  flatpickr('.bodyDate', {
    locale: 'pl',
    dateFormat: 'd.m.Y',
  });
});
