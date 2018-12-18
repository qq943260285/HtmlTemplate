window.onload = function () {
    createAppMenu = function (menuList, selectIndex) {
        if (!selectIndex || selectIndex > menuList.length)
            selectIndex = 0;
        var ul = document.getElementById('app-menu');
        ul.innerHTML = '';
        for (let i = 0; i < menuList.length; i++) {
            var li = document.createElement('li');
            li.onclick = function () {
                let li = document.getElementsByClassName("menu-status-select")[0];
                if (li == this) return;
                li.classList.remove("menu-status-select");
                this.classList.add("menu-status-select");
                menuList[i].options.callback();
            };
            if (i == selectIndex)
                li.className = 'menu-status-select';
            let menuStatusDiv = document.createElement('div');
            menuStatusDiv.className = 'menu-status';
            li.appendChild(menuStatusDiv);
            let menuImgDiv = document.createElement('div');
            menuImgDiv.className = 'menu-img';
            li.appendChild(menuImgDiv);
            let menuTxtDiv = document.createElement('div');
            menuTxtDiv.className = 'menu-txt';
            menuTxtDiv.innerHTML = menuList[i].name;
            li.appendChild(menuTxtDiv);
            ul.appendChild(li)
        }

    }
    createAppPanel = function () {
        var panels = document.getElementsByClassName('summary-panel');
        for (let i = 0; i < panels.length; i++) {
            panels[i].onclick = function () {
                let panel = document.getElementsByClassName("summary-panel-select")[0];
                if (panel == this) return;
                panel.classList.remove("summary-panel-select");
                this.classList.add("summary-panel-select");
            }
        }
    }
    createAppTable = function (rowArry) {
        // [[0,1,2,3,4],[0,1,2,3,4],[0,1,2,3,4]]
        var tbody = document.getElementById('tbody');
        tbody.innerHTML = '';

        for (let i = 0; i < rowArry.length; i++) {
            var tr = document.createElement('tr');
            if (i == 0) tr.className = "tr-content-select";
            tr.onclick = function () {
                let tr = document.getElementsByClassName("tr-content-select")[0];
                if (tr) {
                    if (tr == this) return;
                    tr.classList.remove("tr-content-select");
                }
                this.classList.add("tr-content-select");
            }
            for (let j = 0; j < rowArry[i].length; j++) {
                let td = document.createElement('td');
                td.className = "tb-" + (j + 1)
                td.innerHTML = rowArry[i][j];
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }

    }
    createAppMenu([
        {
            name: "首页",
            options: {
                id: 1,
                callback: function () {
                    console.log("首页");
                }
            }

        },
        {
            name: "基准值",
            options: {
                id: 2,
                callback: function () {
                    console.log("基准值");

                }
            }
        },
        {
            name: "我的项目",
            options: {
                id: 3,
                callback: function () {
                    console.log("我的项目");

                }
            }
        }
    ], 0);
    createAppPanel();
    createAppTable([[0, 1, 2, 3, 4], [0, 1, 2, 3, 4],[0, 1, 2, 3, 4],[0, 1, 2, 3, 4],[0, 1, 2, 3, 4], [0, 1, 2, 3, 4], [0, 1, 2, 3, 4], [0, 1, 2, 3, 4], [0, 1, 2, 3, 4], [0, 1, 2, 3, 4], [0, 1, 2, 3, 4], [0, 1, 2, 3, 4], [0, 1, 2, 3, 4], [0, 1, 2, 3, 4], [0, 1, 2, 3, 4], [0, 1, 2, 3, 4]]);
}
