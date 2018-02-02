console.log('test');

var editor = grapesjs.init({
height: '100%',
noticeOnUnload: 0,
storageManager:{autoload: 0},
container : '#gjs',
fromElement: true,

    plugins: ['gjs-mjml'],
    pluginsOpts: {
        'gjs-mjml': {}
    }
});
console.log(555);
window.editor = editor;