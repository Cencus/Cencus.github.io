// Live2D 蕾姆初始化脚本（简化版）
(function() {
    var message_Path = '/live2d/';
    
    // 检测设备
    var userAgent = navigator.userAgent.toLowerCase();
    var norunAI = ['android', 'iphone', 'ipod', 'ipad', 'windows phone', 'mqqbrowser', 'msie', 'trident/7.0'];
    var norunFlag = false;
    
    for (var i = 0; i < norunAI.length; i++) {
        if (userAgent.indexOf(norunAI[i]) > -1) {
            norunFlag = true;
            break;
        }
    }
    
    if (!window.WebGLRenderingContext) {
        norunFlag = true;
    }
    
    if (!norunFlag) {
        // 显示问候语
        function showMessage(text) {
            var el = document.querySelector('.message');
            if (el) {
                el.textContent = text;
                el.style.opacity = '1';
            }
        }
        
        // 初始化
        function init() {
            var now = new Date().getHours();
            var text = '';
            
            if (now > 23 || now <= 5) {
                text = '你是夜猫子呀？这么晚还不睡觉，明天起的来嘛？';
            } else if (now > 5 && now <= 7) {
                text = '早上好！一日之计在于晨，美好的一天就要开始了！';
            } else if (now > 7 && now <= 11) {
                text = '上午好！工作顺利嘛，不要久坐，多起来走动走动哦！';
            } else if (now > 11 && now <= 14) {
                text = '中午了，工作了一个上午，现在是午餐时间！';
            } else if (now > 14 && now <= 17) {
                text = '午后很容易犯困呢，今天的运动目标完成了吗？';
            } else if (now > 17 && now <= 19) {
                text = '傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红~~';
            } else if (now > 19 && now <= 21) {
                text = '晚上好，今天过得怎么样？';
            } else if (now > 21 && now <= 23) {
                text = '已经这么晚了呀，早点休息吧，晚安~~';
            } else {
                text = '嗨~ 快来逗我玩吧！';
            }
            
            showMessage(text);
            
            // 加载模型
            setTimeout(function() {
                if (typeof loadlive2d === 'function') {
                    loadlive2d('live2d', message_Path + 'model/rem/rem.json');
                }
            }, 1000);
        }
        
        if (document.readyState === 'complete') {
            init();
        } else {
            window.addEventListener('load', init);
        }
    }
})();