document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-link[data-content]');
    const pageTitleElement = document.getElementById('current-page-title');
    const offcanvasElement = document.getElementById('offcanvasSidebar');
    const bootstrapOffcanvas = new bootstrap.Offcanvas(offcanvasElement);

    // 為每個鏈接添加點擊事件監聽器
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // 清除之前的 active-link 樣式
            navLinks.forEach(l => l.classList.remove('active-link'));

            // 將當前點擊的鏈接設置為 active-link
            this.classList.add('active-link');

            // 隱藏所有內容區塊
            document.querySelectorAll('.content-section').forEach(section => {
                section.style.display = 'none';
            });

            // 獲取內容區域 ID 並顯示對應的內容
            const contentId = this.getAttribute('data-content');
            const contentSection = document.getElementById(contentId);
            contentSection.style.display = 'block';

            // 更新頁籤的標題
            pageTitleElement.querySelector('a').textContent = this.getAttribute('data-title');

            // 滾動到內容區域
            contentSection.scrollIntoView({ behavior: 'smooth' });

            // 關閉 Offcanvas
            bootstrapOffcanvas.hide();
        });
    });
    
    // 預設顯示第一個內容區塊
    document.getElementById('member').style.display = 'block';
    pageTitleElement.querySelector('a').textContent = navLinks[0].getAttribute('data-title');

    // 設置初始激活樣式
    navLinks[0].classList.add('active-link');

    // 手動隱藏遮罩
    offcanvasElement.addEventListener('hidden.bs.offcanvas', function () {
        const backdrop = document.querySelector('.offcanvas-backdrop');
        if (backdrop) {
            backdrop.style.display = 'none'; // 隱藏遮罩
        }
    });
});

// 清除文字
document.getElementById('clearButton')?.addEventListener('click', function() {
    document.querySelectorAll('.inputField').forEach(function(input) {
        input.value = ''; 
    });
});

// 圖片上傳功能
function setupUpload(avatarId, uploadId, previewImageId) {
    const avatar = document.getElementById(avatarId);
    const customUpload = document.getElementById(uploadId);
    const previewImage = document.getElementById(previewImageId);

    customUpload.addEventListener('click', function() {
        avatar.click();
    });

    avatar.addEventListener('change', function(event) {
        const file = this.files[0];

        // 檢查文件類型
        if (!file.type.startsWith('image/')) {
            alert('請上傳有效的圖片文件');
            return;
        }

        const reader = new FileReader();

        reader.onload = function(e) {
            previewImage.src = e.target.result;
            previewImage.style.display = 'block';
            customUpload.style.backgroundImage = 'none';
        };

        reader.readAsDataURL(file);
    });
}

// 設定上傳功能的數量
const totalUploads = 20;

// 使用循環來設置每個上傳功能
for (let i = 1; i <= totalUploads; i++) {
    setupUpload(`avatar${i}`, `custom-avatar-upload${i}`, `previewImage${i}`);
}