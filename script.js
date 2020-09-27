(() => {
  const buttons = document.querySelectorAll('.tabs__button-list li');
  const contents = document.querySelectorAll('.tabs__content-list li');

  if (buttons.length !== contents.length) return;

  const btn_cnt = Array.from(buttons).map((btn, i) => [ btn, contents[i] ]);

  window.tabs = new Tabs(btn_cnt);
})();



(() => {
  const target = document.querySelector('.code-result__result');
  const entry = 'HTML';

  const _tabs = Array.from(tabs.getAll());
  const data = getData(_tabs);

  codeResult(target, data, entry);

  function getData(data) {
    const result = {};
    data.forEach(([ button, _content ]) => {
      const path = button.textContent;
      const type = button.dataset.type;
      let content = _content.textContent;

      if (type === 'text/html') content = unescape(content);

      result[path] = {
        type,
        content,
        url: null
      };
    });

    return result;
  }

  function unescape(text) {
    return text.replace(/&lt;|&gt;/g, (match) => {
      if (match === '&lt;') return '<';
      if (match === '&gt;') return '>';
    });
  }
})();
