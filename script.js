// 选择所有具有 'panel' 类的元素，并将它们存储在变量 'panels' 中  
const panels = document.querySelectorAll('.panel');  

// 遍历每个面板元素  
panels.forEach(panle => {  
    // 为当前面板添加点击事件监听器  
    panle.addEventListener('click', () => {  
        removeActiveClass();          // 调用函数以移除所有面板的 'active' 类  
        panle.classList.add('active'); // 给点击的面板添加 'active' 类以显示其激活状态  
    });  
});  

// 定义函数以移除所有面板的 'active' 类  
function removeActiveClass() {  
    // 遍历每个面板元素  
    panels.forEach(pannel => {  
        pannel.classList.remove('active'); // 从每个面板中移除 'active' 类  
    });  
}


