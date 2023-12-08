// 创建一个弹窗容器
const popupContainer = document.createElement('div');
popupContainer.style.position = 'fixed';
popupContainer.style.top = '35%';
popupContainer.style.left = '15%';
popupContainer.style.transform = 'translate(-50%, -50%)';
popupContainer.style.width = '400px';
popupContainer.style.height = '500px';
popupContainer.style.background = '#fff';
popupContainer.style.border = '2px solid #ccc';
popupContainer.style.borderRadius = '5px';
popupContainer.style.zIndex = '9999';
popupContainer.style.display = 'none'; // 初始隐藏
// 添加图像容器到弹窗中
const imageContainer = document.createElement('img');
imageContainer.style.maxWidth = '400px';
imageContainer.style.maxHeight = '400px';
popupContainer.appendChild(imageContainer);
document.body.appendChild(popupContainer);

// 创建文本输入框
const inputField = document.createElement('input');
inputField.type = 'text';
inputField.placeholder = 'input...';
popupContainer.appendChild(inputField);

const submitButton = document.createElement('button');
submitButton.textContent = 'post';
submitButton.addEventListener('click', function() {
    const description = inputField.value;
    // 在这里处理提交逻辑，可以将描述和图片一起上传到指定的 API
    console.log('提交的描述:', description);
    console.log('图片 URL:', imageContainer.src);
});
popupContainer.appendChild(submitButton);


// 显示/隐藏弹窗的按钮
const toggleButton = document.createElement('button');
toggleButton.textContent = 'show';
toggleButton.style.position = 'fixed';
toggleButton.style.top = '20px';
toggleButton.style.left = '20px';
toggleButton.style.zIndex = '10000';
document.body.appendChild(toggleButton);


// 点击显示/隐藏弹窗
toggleButton.addEventListener('click', function() {
    // const imageContainera = document.getElementById('imageContainer');
    imageContainer.src = recentImageSrc;
    if (popupContainer.style.display === 'none') {
        popupContainer.style.display = 'block'; // 显示弹窗
        toggleButton.textContent = 'hide'
    } else {
        popupContainer.style.display = 'none'; // 隐藏弹窗
        toggleButton.textContent = 'show'
    }
});


// //鼠标右键点击过的图片url存储最近右键点击的图片链接
// // 右键点击图片时保存图片链接
// document.addEventListener('contextmenu', function(event) {
//     const target = event.target;
//     if (target.tagName === 'IMG') {
//         recentImageSrc = target.src;
//         alert('get img url')
//     }
// });

let recentImageSrc = '';
//右击后接收的消息
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'uploadImage') {
        const imageUrl = request.data; // 获取发送过来的图片 URL
        recentImageSrc = imageUrl
        imageContainer.src = recentImageSrc;
        popupContainer.style.display = 'block'; // 显示弹窗
        toggleButton.textContent = 'hide'
        // alert(recentImageSrc)
    }
});