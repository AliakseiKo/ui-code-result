var codeResult = (() => {
  function codeResult(target, data, entry, {
    iframeClass = 'code-result__result-iframe'
  } = {}) {
    const iframe = document.createElement('iframe');

    embedRelations(entry, data);

    iframe.classList.add(iframeClass);
    iframe.srcdoc = data[entry].content;

    target.innerHTML = '';
    target.append(iframe);
  }

  function embedRelations(path, relations) {
    if (relations[path].url !== null) return relations[path].url;

    relations[path].content = relations[path].content.replace(/:{(\w+?)}/g, (match, _path) => {
      if (!(_path in relations)) return match;
      if (relations[_path].url !== null) return relations[_path].url;

      return relations[_path].url = embedRelations(_path, relations);
    });

    return relations[path].url = createURL(relations[path].content, relations[path].type);
  }

  function createURL(content, type) {
    return URL.createObjectURL(new Blob([content], { type }));
  }

  return codeResult;
})();
