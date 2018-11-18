const path = require("path");
const fs = require('fs-extra');
const os = require('os');
const mkdirp = require('mkdirp');
const env = require('dotenv');
const jimp = require('jimp');
const mime = require('mime-types');
env.config();
const publicDirectoryName = process.env.PUBLIC_DIR_NAME || 'public';
const sourceDirectoryName = process.env.SOURCE_DIR_NAME || 'src';
const contentDirectoryName = process.env.CONTENT_DIR_NAME || 'content';
const contentDirectoryPath = sourceDirectoryName + "/" + contentDirectoryName;


fs.readdir(sourceDirectoryName + "/images", (err, files) => {
    files.forEach(file => {
        if (mime.lookup(file) === "image/jpeg") {
            jimp.read(sourceDirectoryName + "/images/" + file, (err, file) => {
            	
                if (err) {
                    console.log(err);
                } else {
                    file
                        .resize(100, 100) // resize
                        .quality(60) // set JPEG quality
                        .greyscale() // set greyscale
                        .write(publicDirectoryName + "/images/qweqwe.jpg"); // save
                }
            });
        }
    });
})