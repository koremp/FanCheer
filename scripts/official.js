// import * as axios from 'axios';
// import cheerio from 'cheerio';
// import fs from 'fs';
// import path from 'path';
const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')
const path = require('path')

const BASE_URL = "https://gidle.cubeent.jp/discography/"

const getHTML = async (url) => {
  try {
    return await axios.get(url);
  } catch(e) {
    throw new Error('failed to get html of', url)
  }
};

const getAlbumInfo = ($album, item) => {
  const album = {
    title: undefined,
    releaseDate: undefined,
    albumType: undefined,
  }

  const element = $album(item);

  // title
  const title = element.find('span.title').text().trim();
  album.title = title;

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
    throw new Error('failed to get release date and album type of', album.title);
  }

  return album;
};

const getAlbumInfos = async () => {
  const albumHTML = await getHTML(BASE_URL);
  const $ = cheerio.load(albumHTML.data);
  const albumsDiv = $('#myc-discography > div > div.section-inner > div');
  const $album = cheerio.load(albumsDiv.html());
  const anchorItems = $album('a:has(img)');

  const records = [];

  anchorItems.each((idx, item) => {
    const record = getAlbumInfo($album, item);
    records.push(record);
  });

  console.log(records)
};

getAlbumInfos().then(async () => {

});