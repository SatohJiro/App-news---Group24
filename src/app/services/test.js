// Write Javascript code here
const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');


const URL = "https://nld.com.vn/";

request(URL, function (err, res, body) {
  if (err) {
    console.log(err);
  } else {
    const arr = [];
    let $ = cheerio.load(body);
    $('div.clearfix').each(function (index) {

      const data = $(this).find('div.hot-news-item>a').attr('href');
      const name = $(this).find('div.hot-news-item>a').attr('title');
      const obj = {
        data: data,
        name: name
      };
      console.log(obj);
      // arr.push(JSON.stringify(obj));
    });


  }
});
