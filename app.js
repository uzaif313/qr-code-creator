'use strict'
const app = require("qr-image");
const fs = require("fs");
const qr_data = process.argv[2];
const app_png = app.image(qr_data,{type:"png"})
                .pipe(fs.createWriteStream("qr.png"));
