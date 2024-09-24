// SCSS 檔案和 Bootstrap
import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

// 引入 CKEditor 5
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// 初始化 CKEditor 5
ClassicEditor
    .create(document.querySelector('#editor'))
    .catch(error => {
        console.error(error);
    });