window.addEventListener('DOMContentLoaded', () => {
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
});
