(() => {
  const buttons = document.querySelectorAll('.tabs__button-list li');
  const contents = document.querySelectorAll('.tabs__content-list li');

  if (buttons.length !== contents.length) return;

  const btn_cnt = Array.from(buttons).map((btn, i) => [ btn, contents[i] ]);

  window.tabs = new Tabs(btn_cnt);
})();

(() => {
  const tabs = tabs.getAll();

  const iframe = document.createElement('iframe');

  // iframe.srcdoc = unescape();


  function unescape(text) {
    return text.replace(/(&lt;)|(&gt;)/g, (match) => {
      if (match === '&lt;') return '<';
      if (match === '&gt;') return '>';
    });
  }

  function embedRelations(text, relations) {
    relations.forEach(({ rela }) => {

    });
  }

})();
