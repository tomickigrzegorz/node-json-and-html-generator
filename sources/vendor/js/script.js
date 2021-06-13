window.addEventListener('DOMContentLoaded', () => {

  const enlarge = '<svg xmlns="http://www.w3.org/2000/svg" width="14px" viewBox="0 0 32 32"><path fill="red" d="M32 0v13l-5-5-6 6-3-3 6-6-5-5zM14 21l-6 6 5 5H0V19l5 5 6-6z"></path></svg>';
  const shrink = '<svg xmlns="http://www.w3.org/2000/svg" width="14px" viewBox="0 0 32 32"><path fill="red" d="M14 18v13l-5-5-6 6-3-3 6-6-5-5zM32 3l-6 6 5 5H18V1l5 5 6-6z"></path></svg>';
  const clear = '<svg xmlns="http://www.w3.org/2000/svg" width="14px" viewBox="0 0 32 32"><path fill="#bf00ff" d="M0 28h18v4H0zM28 4h-9.455l-5.743 22H8.668l5.743-22H6V0h22zm1.055 28L25 27.945 20.945 32 19 30.055 23.055 26 19 21.945 20.945 20 25 24.055 29.055 20 31 21.945 26.945 26 31 30.055z"/></svg>';

  pell.init({
    element: document.getElementById('editor'),
    defaultParagraphSeparator: 'div',
    actions: [
      'bold',
      'italic',
      'paragraph',
      'quote',
      'olist',
      'ulist',
      'link',
      {
        name: 'clear',
        icon: clear,
        title: 'Clear formatting',
        result: () => document.execCommand('removeFormat', false, "")
      },
      {
        name: 'full',
        icon: enlarge,
        title: 'Full screen',
        result: () => {
          const buttonFullScreen = document.querySelector('[title="Full screen"]');
          buttonFullScreen.innerHTML = buttonFullScreen.innerHTML === enlarge ? shrink : enlarge;

          document.body.classList.toggle('full-screen');
        }
      },
    ],
    onChange: function (html) {
      document.getElementById('text-output').innerHTML = html
    }
  })


  const example1 = document.getElementById('columns');
  const sortable = new Sortable(example1, {
    ghostClass: 'highlight',
    animation: 150,
  });

  const updateForm = (data) => {
    const { head, body, schema } = data;
    const seoTitle = document.querySelector('[name="seoTitle"]');
    const seoDescription = document.querySelector('[name="seoDescription"]');
    const bodyTitle = document.querySelector('[name="bodyTitle"]');
    const bodyDate = document.querySelector('[name="bodyDate"]');
    const bodyText = document.querySelector('.pell-content');
    const bodyAuthor = document.querySelector('[name="bodyAuthor"]');
    const textareaHidden = document.querySelector('[name="bodyText"]');

    // seo
    seoTitle.value = head.title;
    seoDescription.value = head.description;

    // data on the top of the site
    bodyTitle.value = body.title;
    bodyDate.value = body.date;
    bodyText.innerHTML = body.text;
    bodyAuthor.value = schema.author;
    textareaHidden.innerHTML = body.text;
    //- bodyText.innerHTML = body.text.replace(/\n?\r\n/g, '<br>');

    body.items.forEach((element, index) => {
      // console.log(element);
      const image = document.querySelectorAll('[name="imageAlt"]');
      const imageText = document.querySelectorAll('[name="imageText"]');
      image[index].value = element.alt;
      imageText[index].value = element.text.replace(/<br>/g, '\r\n');
    });
  };


  const fetchJson = (fileJson) => {
    // eslint-disable-next-line no-undef
    fetch(fileJson)
      .then(response => response.json())
      .then((myJson) => {
        updateForm(myJson);
      })
      .catch(error => console.log('error', error));
  };

  if (type === 'update') {
    fetchJson(fileJson);
  }

  // change of view
  const gridCheckbox = document.querySelector('.grid-view-checked');
  gridCheckbox.addEventListener('click', (e) => {
    const { target } = e;
    if (target.name === 'grid') {
      document.body.classList.toggle('grid-view');
    }
  });

  // scroll to top
  const backToTop = document.querySelector('.scroll');
  backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({ top: 0, behavior: 'smooth' });
  })

  // calendar
  flatpickr('.bodyDate', {
    locale: 'pl',
    dateFormat: 'd.m.Y',
    allowInput: true
  });


  // zooom image
  let title = document.title;

  new Zooom('img-zoom', {
    zIndex: 999,
    animationTime: 300,
    cursor: {
      in: 'zoom-in',
      out: 'zoom-out'
    },
    overlay: {
      color: '#edebe7',
      opacity: 90,
    },
    onLoaded: function (element) {
      const imageName = element.previousElementSibling.textContent;
      document.title = title + ' - ' + imageName;
    },
    onCleared: function (element) {
      const title = document.title.split('-')[0];
      document.title = title;
    }
  });

});