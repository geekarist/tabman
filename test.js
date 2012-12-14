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
    .assertText('//li[1]', 'Creep, interprété par Radiohead')
    .assertText('//li[2]', "I'm so lonesome I could cry, interprété par Johnny Cash")
    .end(function (err) {
        browser.testComplete(function () {
            console.log('done');
            if (err) throw err;
        });
    });
