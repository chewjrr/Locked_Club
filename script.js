const tracks = document.getElementById('tracks');

const releases = [
  { year: '2023', elements: ['<iframe frameborder="0" style="border:none;width:90%;height:610px;" width="90%" height="610" src="https://music.yandex.ru/iframe/album/26297626">Слушайте <a href=\'https://music.yandex.ru/album/26297626\'>Svoboda</a> — <a href=\'https://music.yandex.ru/artist/6167271\'>Locked Club</a> на Яндекс Музыке</iframe>', '<iframe frameborder="0" style="border:none;width:90%;height:610px;" width="90%" height="610" src="https://music.yandex.ru/iframe/album/25639360">Слушайте <a href=\'https://music.yandex.ru/album/25639360\'>Forever Punk</a> — <a href=\'https://music.yandex.ru/artist/6167271\'>Locked Club</a> на Яндекс Музыке</iframe>'] },
  { year: '2022', elements: ['<iframe frameborder="0" style="border:none;width:90%;height:610px;" width="90%" height="610" src="https://music.yandex.ru/iframe/album/23099742">Слушайте <a href=\'https://music.yandex.ru/album/23099742\'>It\'s My Rave</a> — <a href=\'https://music.yandex.ru/artist/6167271\'>Locked Club</a> на Яндекс Музыке</iframe>', '<iframe frameborder="0" style="border:none;width:90%;height:610px;" width="90%" height="610" src="https://music.yandex.ru/iframe/album/21243694">Слушайте <a href=\'https://music.yandex.ru/album/21243694\'>Acid Avengers 021</a> — <a href=\'https://music.yandex.ru/artist/299280\'>Maelstrom</a> на Яндекс Музыке</iframe>'] },
  { year: '2021', elements: ['<iframe frameborder="0" style="border:none;width:90%;height:610px;" width="90%" height="610" src="https://music.yandex.ru/iframe/album/24506036">Слушайте <a href=\'https://music.yandex.ru/album/24506036\'>Egipet</a> — <a href=\'https://music.yandex.ru/artist/6167271\'>Locked Club</a> на Яндекс Музыке</iframe>', '<iframe frameborder="0" style="border:none;width:90%;height:610px;" width="90%" height="610" src="https://music.yandex.ru/iframe/album/17280508">Слушайте <a href=\'https://music.yandex.ru/album/17280508\'>Sadism</a> — <a href=\'https://music.yandex.ru/artist/6167271\'>Locked Club</a> на Яндекс Музыке</iframe>'] },
  { year: '2020', elements: ['<iframe frameborder="0" style="border:none;width:100%;height:610px;" width="100%" height="610" src="https://music.yandex.ru/iframe/album/10932885">Слушайте <a href=\'https://music.yandex.ru/album/10932885\'>Atom Hell</a> — <a href=\'https://music.yandex.ru/artist/6167271\'>Locked Club</a> на Яндекс Музыке</iframe>'] },
  { year: '2019', elements: ['<iframe frameborder="0" style="border:none;width:90%;height:610px;" width="90%" height="610" src="https://music.yandex.ru/iframe/album/9154119">Слушайте <a href=\'https://music.yandex.ru/album/9154119\'>Irak</a> — <a href=\'https://music.yandex.ru/artist/6167271\'>Locked Club</a> на Яндекс Музыке</iframe>', '<iframe frameborder="0" style="border:none;width:90%;height:610px;" width="90%" height="610" src="https://music.yandex.ru/iframe/album/8332097">Слушайте <a href=\'https://music.yandex.ru/album/8332097\'>Lomay</a> — <a href=\'https://music.yandex.ru/artist/6167271\'>Locked Club</a> на Яндекс Музыке</iframe>'] }
]

releases.forEach(year => {
  const yearTitle = document.createElement('h1');
  yearTitle.textContent = year.year;
  yearTitle.style.textAlign = 'center';
  tracks.appendChild(yearTitle);

  const iframesWrapper = document.createElement('div');
  iframesWrapper.classList.add('column');

  year.elements.forEach(element => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(element, 'text/html');
    const iframeSrc = doc.querySelector('iframe').src;

    const iframe = document.createElement('iframe');
    iframe.src = iframeSrc;
    iframe.width = '45%';
    iframe.height = '610';
    iframe.style.border = 'none';
    iframesWrapper.appendChild(iframe);

    iframe.style.marginLeft = '48px';
    iframe.style.marginRight = '40px';
  });

  tracks.appendChild(iframesWrapper);
});

async function checkResource(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Ошибка загрузки ресурса');
    }
  } catch (error) {
    console.error(error);
  }
}

