function showMessage(messageNumber) {
    // 隱藏所有訊息
    const messages = document.querySelectorAll('.message');
    messages.forEach(msg => msg.classList.remove('active'));

    // 移除所有標籤的 active 狀態
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // 顯示選中的訊息
    document.getElementById('message' + messageNumber).classList.add('active');

    // 設定選中的標籤為 active
    tabs[messageNumber - 1].classList.add('active');
}

function showSubContent(subNumber) {
    // 隱藏所有子內容
    const subContents = document.querySelectorAll('#message2 .sub-content');
    subContents.forEach(content => content.classList.remove('active'));

    // 移除所有子標籤的 active 狀態
    const subTabs = document.querySelectorAll('#message2 .sub-tab');
    subTabs.forEach(tab => tab.classList.remove('active'));

    // 顯示選中的子內容
    document.getElementById('sub' + subNumber).classList.add('active');

    // 設定選中的子標籤為 active
    subTabs[subNumber - 1].classList.add('active');
}

function showSubContent2(subNumber) {
    // 隱藏所有聯絡方式子內容
    const subContents = document.querySelectorAll('#message3 .sub-content');
    subContents.forEach(content => content.classList.remove('active'));

    // 移除所有聯絡方式子標籤的 active 狀態
    const subTabs = document.querySelectorAll('#message3 .sub-tab');
    subTabs.forEach(tab => tab.classList.remove('active'));

    // 顯示選中的子內容
    document.getElementById('contact' + subNumber).classList.add('active');

    // 設定選中的子標籤為 active
    subTabs[subNumber - 1].classList.add('active');
}

function showSubContent3(subNumber) {
    // 隱藏所有最新消息子內容
    const subContents = document.querySelectorAll('#message4 .sub-content');
    subContents.forEach(content => content.classList.remove('active'));

    // 移除所有最新消息子標籤的 active 狀態
    const subTabs = document.querySelectorAll('#message4 .sub-tab');
    subTabs.forEach(tab => tab.classList.remove('active'));

    // 顯示選中的子內容
    document.getElementById('news' + subNumber).classList.add('active');

    // 設定選中的子標籤為 active
    subTabs[subNumber - 1].classList.add('active');
}
