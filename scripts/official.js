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

const getRecordLinks = async () => {
  const recordHTML = await getHTML(BASE_URL);
  const $ = cheerio.load(recordHTML.data);
  const records = $('#myc-discography > div > div.section-inner > div');
  const recordsDiv = cheerio.load(records.html());
  const anchorItems = recordsDiv('a:has(img)');

  anchorItems.each((idx, item) => {
    const album = {
      title: undefined,
      releaseDate: undefined,
      albumType: undefined
    }

    const element = $(item);

    // title
    album.title = element.find('.title').text().trim();

    // releaseDate
    const categoryText = element.find('span.category').text().trim();
    const match = categoryText.match(/(\d+\.\d+\.+\d+)/);
    if(match  && match[1]) {
      album.releaseDate = match[1];
      const albumType = categoryText.replace(match[1], '').trim();
      if(albumType === '') {
        albumType = ''
      }
    }

    // albumType
    if(categoryText !== match[1]) {
      album.albumType = ;
    }

    


    if(match) {
      if(match[1]) {
        album.releaseDate = match[1];
      }
      if(match[2]) {
        album.albumType = match[2];
      }
    }

    // console.log(album);
  });
};

getRecordLinks().then(async () => {

});