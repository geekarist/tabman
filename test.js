var soda = require('soda'),
    assert = require('assert');

var browser = soda.createClient({
    host:'localhost',
    port:4444,
    url:'http://localhost:8888/tabman',
    browser:'safari'
});

browser.on('command', function (cmd, args) {
    console.log(' \x1b[33m%s\x1b[0m: %s', cmd, args.join(', '));
});

browser
    .chain
    .session()
    .open('/tabman')
    .assertText("//tr[1]/td", 'Creep, interpreted by Radiohead')
    .assertText("//tr[2]/td", "I'm so lonesome I could cry, interpreted by Johnny Cash")
    .assertText("//tr[3]/td", "Blowin' in the wind, interpreted by Bob Dylan")
    .assertText("//tr[4]/td", "It ain't me babe, interpreted by Bob Dylan")
    .assertText("//tr[5]/td", "When Johnny strikes up the band, interpreted by Warren Zevon")
    .end(function (err) {
        browser.testComplete(function () {
            console.log('done');
            if (err) throw err;
        });
    });
