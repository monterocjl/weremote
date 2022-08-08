const accordionBtns = document.querySelectorAll(".faqs_container__faq__q");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("is-open");

    let arrow = this.previousElementSibling;
    let content = this.nextElementSibling;
    content.classList.toggle("is-open");
    arrow.classList.toggle("is-open");

    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };
});
