import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

const RECORD_LIST_URL = "https://namu.wiki/w/(%EC%97%AC%EC%9E%90)%EC%95%84%EC%9D%B4%EB%93%A4/%EC%9D%8C%EB%B0%98%20%EB%AA%A9%EB%A1%9D";


const getHTML = async (url) => {
  try {
    return await axios.get(url);
  } catch (e) {
    console.error(e);
  }
};

const downloadImage = async() => {
  const imageBuffer = response.data;
  const imagePath = path.join(__dirname, 'images', name);
  fs.writeFileSync(imagePath, imageBuffer);
  console.log(`이미지가 성공적으로 저장되었습니다: ${imagePath}`);
}



const getRecordList = async () => {
  const recordHTML = await getHTML(RECORD_LIST_URL);
  const $ = cheerio.load(recordHTML.data);
  const abstract = $('#app > div._17s0-GlA.a3yv20wk > div.XhNDx51d.FXgnxt9K > div > div.Nnp2k2UW > div > div.O7Sh7taf.fy2iB5u6 > div.uK3Apzs7.zRn852xP > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > div > div');
  const absDiv = cheerio.load(abstract.html());
  const hrefs = absDiv('a[title]');
  const recordList = [];

  hrefs.each((_, element) => {
    const anchor = absDiv(element);
    recordList.push({
      title: anchor.text(),
      url: 'https://namu.wiki' + anchor.attr('href'),
    });
  })

  return recordList;
};

const getAlbumInfo = async (title, url) => {
  const albumHTML = await getHTML(url);
  const $ = cheerio.load(albumHTML.data);

  const albumImageElement = $(`img[alt=${title}]`)
  console.log(albumImageElement.data());
  // const albumImage = await getImage(albumImageElement);

  const releaseDate = $('span:contains("발매일")').next('span').text().trim();
  console.log(releaseDate);

  const songListElement = $('span:contains("수록곡")');

  if (songListElement.length > 0) {
    const nextDivElement = songListElement.next('div');

    if (nextDivElement.length > 0) {
      const nextDivHTML = nextDivElement.html();
      const $ = cheerio.load(nextDivHTML);
      const spanElements = $('span');
      const songs = getSongs(spanElements, $);
      return songs;
    } else {
      console.error('수록곡 목록을 찾을 수 없습니다.');
    }
  } else {
    console.error('수록곡 섹션을 찾을 수 없습니다.');
  }

  return albumInfo;
};


const getSongs = (spanElements, $) => {
  const songs = [];

  spanElements.each((_, element) => {
    const spanText = $(element).text().trim();
    const match = spanText.match(/^(\d+)\.(\d+)\.\s(.+)/);
    if (match && match[2] && match[3]) {
      songs.push({
        trackNumber: match[2],
        title: match[3]
      });
    }
  });

  return songs;
};

const main = async () => {
  getRecordList().then(async (recordList) => {
    const record = recordList[0];
    const { title, url } = record;
    const albumInfo = await getAlbumInfo(title, url);
    console.log(albumInfo)
  })

  // recordList.forEach(async (record) => {
  //   const { title, url } = record;
  //   const albumInfo = await getAlbumInfo(url);
  // })
};

main();