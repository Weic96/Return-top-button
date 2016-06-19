window.onload = function() {
			var btn = document.getElementById("btn");       //获取按钮
			var clientheight = document.documentElement.clientHeight; //获取当前页面可视区的高度;
			var timer = null;
			var isTop = true;   

			//当滚动条变化的时候执行此函数(清除定时器)
			window.onscroll = function(){
				var osTop = document.documentElement.scrollTop || document.body.scrollTop;
				
				//根据高度决定是否显示按钮(改变#btn的css样式);
				if (osTop >= clientheight * 0.5) {	
					btn.style.display = "block";		//显示按钮
				}else{
					btn.style.display = "none";			//隐藏按钮
				}

				if (!isTop) {
					clearInterval(timer);
				}
				isTop = flase;
			}

			// 当点击按钮时执行此函数(滚动到顶部)
			btn.onclick = function(){
				//设置定时器
				timer = setInterval(function(){
					//获取滚动条距离顶部的数值,第二个为chrome浏览器能支持的
					var osTop = document.documentElement.scrollTop || document.body.scrollTop;
					//定义滚动的速度是由快到慢,公式如下;
					var ispeed = Math.floor(-osTop / 10);
					document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;

						isTop = true;

					//当到达顶部的时候清除定时器;
					if (osTop <= 0) {
						clearInterval(timer);
					}
				},30)
			}
		}
