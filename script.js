/*
Google Drive Direct Download Link Generator
Created by Abdurrahman Abulgasim
*/
/***************** get preview link *************************/
let link = //here goes your preview link
/***************** get file id from the link ****************/
const re = /d\/(.*)\/view/g;
const array = [...link.matchAll(re)];
let id = array[0][1];
/***************** create the direct download link **********/
let dLink = 'https://drive.google.com/uc?export=download&id='+id;
