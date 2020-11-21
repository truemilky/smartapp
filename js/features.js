const tabs = document.querySelectorAll('.features__item');
const contents = document.querySelectorAll('.features__about-wrapper');
const icons = document.querySelectorAll('.features__icon');

tabs.forEach((tab, index) => {
  tab.onclick = () => {
   changeTab(index) 
  };
});

function changeTab(index) {
  for (let tab of tabs) {
    tab.classList.remove('active');
  }
  tabs[index].classList.add('active');

  for (let el of contents) {
    el.classList.remove('active');
  }
  contents[index].classList.add('active');

  for (let icn of icons) {
    icn.classList.remove('active');
  }
  icons[index].classList.add('active');
}