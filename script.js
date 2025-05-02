fetch('data/assets.json')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('asset-list');
    data.forEach(item => {
      const div = document.createElement('div');
      div.className = 'asset';

      const title = `<h2>${item.title}</h2>`;
      const desc = `<p>${item.description}</p>`;
      let preview = '';

      if (item.type === 'image') {
        preview = `<img src="${item.preview}" alt="${item.title}" onclick="showModal('${item.preview}')" />`;
      } else if (item.type === 'audio') {
        preview = `<audio controls src="${item.file}"></audio>`;
      }

      const dl = `<a class="download" href="${item.file}" download>ダウンロード</a>`;
      div.innerHTML = title + desc + preview + dl;
      list.appendChild(div);
    });
  });

function showModal(src) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  modal.style.display = "block";
  modalImg.src = src;
}

document.querySelector(".close").onclick = () => {
  document.getElementById("modal").style.display = "none";
};
