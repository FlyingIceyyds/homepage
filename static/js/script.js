console.log('%cowo', 'color: #8B4513; font-size: 20px;');

document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});

function handlePress(event) {
    this.classList.add('pressed');
}

function handleRelease(event) {
    this.classList.remove('pressed');
}

function handleCancel(event) {
    this.classList.remove('pressed');
}

var buttons = document.querySelectorAll('.projectItem');
buttons.forEach(function (button) {
    button.addEventListener('mousedown', handlePress);
    button.addEventListener('mouseup', handleRelease);
    button.addEventListener('mouseleave', handleCancel);
    button.addEventListener('touchstart', handlePress);
    button.addEventListener('touchend', handleRelease);
    button.addEventListener('touchcancel', handleCancel);
});

function toggleClass(selector, className) {
    var elements = document.querySelectorAll(selector);
    elements.forEach(function (element) {
        element.classList.toggle(className);
    });
}

function popGitHub() {
    var tcMainElement = document.querySelector(".tc-main");
    tcMainElement.innerHTML = `
        <div class="card" style="width: auto; border-radius: 15px; display: flex; align-items: center; gap: 15px;">
            <div class="card-content" style="flex: 1;color: black;">
                <h2 style="margin-bottom: 10px;">GitHub</h2>
                <p><strong>@FlyingIce000</strong></p>
                <p><a style="text-decoration: underline;" target="_blank" href="https://github.com/FlyingIce000">github.com/FlyingIce000</a></p>
            </div>
            <div class="card-image" style="flex-shrink: 0;">
                <img src="./static/img/code/GitHub.png" alt="QR Code" style="width: 130px; height: 130px; border-radius: 10px;">
            </div>
        </div>
    `;
    toggleClass(".tc-main", "active");
    toggleClass(".tc", "active");
}

function popWeChat() {
    var tcMainElement = document.querySelector(".tc-main");
    tcMainElement.innerHTML = `
        <div class="card" style="width: 300px; border-radius: 15px; display: flex; align-items: center; gap: 15px;">
            <div class="card-content" style="flex: 1;color: black;">
                <h2 style="margin-bottom: 10px;">WeChat</h2>
                <p><strong>User Name：</strong>ちば</p>
                <p><strong>ID：</strong>@UK_KingX</p>
                <p></p>
            </div>
            <div class="card-image" style="flex-shrink: 0;">
                <img src="./static/img/code/WeChat.jpg" alt="QR Code" style="width: 130px; height: 130px; border-radius: 10px;">
            </div>
        </div>
    `;
    toggleClass(".tc-main", "active");
    toggleClass(".tc", "active");
}

function popWhatsApp() {
    var tcMainElement = document.querySelector(".tc-main");
    tcMainElement.innerHTML = `
        <div class="card" style="width: 300px; border-radius: 15px; display: flex; align-items: center; gap: 15px;">
            <div class="card-content" style="flex: 1;color: black;">
                <h2 style="margin-bottom: 10px;">WhatsApp</h2>
                <p><strong>Name：</strong>FlyingIce</p>
                <p><strong>Tel:</strong>+44 7707971698</p>
                <p></p>
            </div>
            <div class="card-image" style="flex-shrink: 0;">
                <img src="./static/img/code/WhatsApp.jpg" alt="QR Code" style="width: 130px; height: 130px; border-radius: 10px;">
            </div>
        </div>
    `;
    toggleClass(".tc-main", "active");
    toggleClass(".tc", "active");
}

function popTG() {
    var tcMainElement = document.querySelector(".tc-main");
    tcMainElement.innerHTML = `
        <div class="card" style="width: 300px; border-radius: 15px; display: flex; align-items: center; gap: 15px;">
            <div class="card-content" style="flex: 1;color: black;">
                <h2 style="margin-bottom: 10px;">Telegram</h2>
                <p><strong>User Name：</strong>ちば</p>
                <p><strong>ID：</strong>@F_QWQ</p>
                <p></p>
            </div>
            <div class="card-image" style="flex-shrink: 0;">
                <img src="./static/img/code/TG.jpg" alt="QR Code" style="width: 130px; height: 130px; border-radius: 10px;">
            </div>
        </div>
    `;
    toggleClass(".tc-main", "active");
    toggleClass(".tc", "active");
}

function popEmail() {
    var tcMainElement = document.querySelector(".tc-main");
    tcMainElement.innerHTML = `
        <div class="card" style="width: 300px; border-radius: 15px; display: flex; align-items: center; gap: 15px;">
            <div class="card-content" style="flex: 1;color: black;">
                <h2 style="margin-bottom: 10px;">E-Mail</h2>
                <p><strong><a style="text-decoration: underline;" target="_blank" href="mailto:ceo@xxidc.top">ceo@xxidc.top</strong></p>
                <p></p>
            </div>
            <div class="card-image" style="flex-shrink: 0;">
                <img src="./static/img/code/Email.png" alt="QR Code" style="width: 130px; height: 130px; border-radius: 10px;">
            </div>
        </div>
    `;
    toggleClass(".tc-main", "active");
    toggleClass(".tc", "active");
}

function popZZ() {
    var tcMainElement = document.querySelector(".tc-main");
    tcMainElement.innerHTML = `
        <div class="card" style="width: 300px; border-radius: 15px; display: flex; align-items: center; gap: 15px;">
            <div class="card-content" style="flex: 1;color: black;">
                <p><h2>海内存知己，</h2></p>
                <p><h2>天涯若比邻。</h2></p>
                <br>
                <p>使用WeChat赞助</p>
            </div>
            <div class="card-image" style="flex-shrink: 0;">
                <img src="./static/img/code/ZZ.jpg" alt="QR Code" style="width: 130px; height: 130px; border-radius: 10px;">
            </div>
        </div>
    `;
    toggleClass(".tc-main", "active");
    toggleClass(".tc", "active");
}

var tc = document.getElementsByClassName('tc');
var tc_main = document.getElementsByClassName('tc-main');
tc[0].addEventListener('click', function (event) {
    // popWX();
    popGitHub();
});
tc_main[0].addEventListener('click', function (event) {
    event.stopPropagation();
});


function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) == 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

document.addEventListener('DOMContentLoaded', function () {

    var html = document.querySelector('html');
    var themeState = getCookie("themeState") || "Light";
    var tanChiShe = document.getElementById("tanChiShe");

    function changeTheme(theme) {
        tanChiShe.src = "./static/svg/snake-" + theme + ".svg";
        html.dataset.theme = theme;
        setCookie("themeState", theme, 365);
        themeState = theme;
    }

    var Checkbox = document.getElementById('myonoffswitch')
    Checkbox.addEventListener('change', function () {
        if (themeState == "Dark") {
            changeTheme("Light");
        } else if (themeState == "Light") {
            changeTheme("Dark");
        } else {
            changeTheme("Dark");
        }
    });

    if (themeState == "Dark") {
        Checkbox.checked = false;
    }

    changeTheme(themeState);

    // var fpsElement = document.createElement('div');
    // fpsElement.id = 'fps';
    // fpsElement.style.zIndex = '10000';
    // fpsElement.style.position = 'fixed';
    // fpsElement.style.left = '0';
    // document.body.insertBefore(fpsElement, document.body.firstChild);

    // var showFPS = (function () {
    //     var requestAnimationFrame = window.requestAnimationFrame ||
    //         window.webkitRequestAnimationFrame ||
    //         window.mozRequestAnimationFrame ||
    //         window.oRequestAnimationFrame ||
    //         window.msRequestAnimationFrame ||
    //         function (callback) {
    //             window.setTimeout(callback, 1000 / 60);
    //         };

    //     var fps = 0,
    //         last = Date.now(),
    //         offset, step, appendFps;

    //     step = function () {
    //         offset = Date.now() - last;
    //         fps += 1;

    //         if (offset >= 1000) {
    //             last += offset;
    //             appendFps(fps);
    //             fps = 0;
    //         }

    //         requestAnimationFrame(step);
    //     };

    //     appendFps = function (fpsValue) {
    //         fpsElement.textContent = 'FPS: ' + fpsValue;
    //     };

    //     step();
    // })();
    
    //pop('./static/img/tz.jpg')

});

var pageLoading = document.querySelector("#zyyo-loading");
window.addEventListener('load', function() {
    setTimeout(function () {
        pageLoading.style.opacity = '0';
    }, 100);
});

