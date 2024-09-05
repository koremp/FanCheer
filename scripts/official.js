const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')
const path = require('path')

const BASE_URL = "https://gidle.cubeent.jp/discography/"
const IMG_DIR= path.join(process.cwd(), 'public', 'album', 'images');
const JSON_PATH = path.join(process.cwd(), 'public', 'album', 'infos.json');

const getHTML = async (url) => {
  try {
    return await axios.get(url);
  } catch(e) {
    throw new Error('failed to get html of', url)
  }
};

const getImgStream = async (url) => {
  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream'
  });

  return response;
}

const downloadAlbumImage = async (albumDetail) => {
  const { imgSrc, imgPath, title } = albumDetail;
  const response = await getImgStream(imgSrc);

  if(response.status !== 200) {
    throw new Error('Failed to get image of ', imgSrc);
  }

  console.log('downloading : ', title);

  const writer = fs.createWriteStream(imgPath);
  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
};

// save album infos as json
const saveInfoToJson = async (albumInfos) => {
  fs.writeFileSync(JSON_PATH, JSON.stringify(albumInfos, null, 2));
  console.log('saved album details to json', JSON_PATH);
};

// get album info from album element
const getAlbumInfo = ($album, item) => {
  const album = {
    title: undefined,
    filename: undefined,
    releaseDate: undefined,
    albumType: undefined,
    href: undefined,
  };

  const element = $album(item);

  // href
  const href = element.attr('href');
  album.href = href;

  // title
  const title = element.find('span.title').text().trim();
  album.title = title;

  // fileName
  const filename = title.replace(/[^a-z0-9]/gi, ' ').trim().replace(/ +/g, '-').toLowerCase() + '.jpg';
  album.filename = filename;

  // releaseDate & albumType
  const categoryText = element.find('span.category').text().trim();
  const match = categoryText.match(/(\d+\.\d+\.+\d+)/);

  if(match  && match[1]) {
    // releaseDate
    const releaseDate = match[1];
    album.releaseDate = releaseDate;

    // albumType
    const albumType = categoryText.replace(releaseDate, '').trim();
    if(albumType !== '') {
      album.albumType = albumType;
    }
  } else {
    // throw new Error('failed to get release date and album type of', album.title);
  }

  return album;
};

// aget album info list from base url
const getAlbumsFromBaseUrl = async () => {
  const albumHTML = await getHTML(BASE_URL);
  const $ = cheerio.load(albumHTML.data);
  const albumsDiv = $('#myc-discography > div > div.section-inner > div');
  const $album = cheerio.load(albumsDiv.html());
  const anchorItems = $album('a:has(img)');

  const albumInfos = [];

  anchorItems.each((_, item) => {
    // get album info from album element
    // href, title, filename, releaseDate, albumType
    const albumInfo = getAlbumInfo($album, item);
    albumInfos.push(albumInfo);
  });

  return albumInfos;
};


const getDetailFromAlbumPage = async (album) => {
  const albumHTML = await getHTML(album.href);
  const $ = cheerio.load(albumHTML.data);
  const albumDetailDiv = $('div.section-inner');
  const $detailDiv = cheerio.load(albumDetailDiv.html());

  // imgSrc
  const imgSrc = $detailDiv('img').attr('src');

  // imgPath
  const imgPath = path.join(IMG_DIR, album.filename)

  // desc
  const desc = $detailDiv('div.wp-content').text().trim();

  // songs
  const songs = [];
  const songlist = $detailDiv('ul.song-list');
  const songlistItems = songlist.find('li');
  songlistItems.each((_, element) => {
    const song = $(element).text().trim();
    songs.push(song);
  })

  return {
    ...album,
    imgSrc,
    imgPath,
    desc,
    songs,
  }
};


const main = async () => {
  // get album infos from albums page
  const albums = await getAlbumsFromBaseUrl();

  // get album detail from album page
  const albumDetails = []
  for( const album of albums) {
    const albumDetail = await getDetailFromAlbumPage(album);
    albumDetails.push({ ...album, ...albumDetail });
  }

  // create album_images directory
  if (!fs.existsSync(IMG_DIR)) {
    fs.mkdirSync(IMG_DIR);
  }

  // download album images
  for(const albumDetail of albumDetails) {
    try {
      await downloadAlbumImage(albumDetail);
    } catch(e) {
      console.error('failed to download album image of', albumDetail.imgSrc);
      console.error(e);
    }
  }

  // save informations as json
  await saveInfoToJson(albumDetails);
}

main();