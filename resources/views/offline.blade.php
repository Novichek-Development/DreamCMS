<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<title>Технические работы</title>
	<style>
		.container{
			text-align: center;
		}
		.button {
			background-color: #4CAF50;
			border: none;
			color: white;
			padding: 15px 32px;
			text-align: center;
			text-decoration: none;
			display: inline-block;
			font-size: 16px;
			margin: 4px 2px;
			cursor: pointer;
		}
	</style>
	<!-- Yandex.Metrika counter --> <script type="text/javascript" > (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date(); for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }} k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(94127045, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true, ecommerce:"dataLayer" }); </script> <noscript><div><img src="https://mc.yandex.ru/watch/94127045" style="position:absolute; left:-9999px;" alt="" /></div></noscript> <!-- /Yandex.Metrika counter -->
</head>
<body style="margin: 0">
<div class="container">
	<h1 style="text-align: center">Мы закрыты на тех. работы!</h1>
	<h2>Скоро вернемся!</h2>
	<img src="/VIPE.png" style="width: 900px">
	<br>
	<h2>Следите за новостями</h2>
	<a class="button" href="https://vk.com/avemc">В нашей группе ВКонтакте</a>
</div>

<script type="text/javascript">
    var imgsrc="/tea.png";
    var ie4=(document.all)?1:0;
    var ns6=(document.getElementById&&!document.all)?1:0;
    var height=(document.layers)?window.innerHeight:window.document.body.scrollHeight;
    if (height<window.document.body.clientHeight) height=window.document.body.clientHeight;
    var width=(document.layers)?window.innerWidth:window.document.body.clientWidth;

    height = height - 64;

    var col=Math.round(height/25);    //количество снежинок

    amp=new Array();
    x_pos=new Array();
    y_pos=new Array();
    stx=new Array();
    sty=new Array();
    deltax=new Array();
    obj=new Array();

    for (i=0; i<col; ++i) {
        amp[i]=Math.random()*19;
        x_pos[i]=Math.random()*(width-amp[i]-29);
        y_pos[i]=Math.random()*height;
        stx[i]=0.03+Math.random()*0.25;
        sty[i]=2+Math.random();
        deltax[i]=0;
        if (ie4||ns6) {
            document.write("<img id=\"sn"+ i +"\" style=\"position:absolute;" +
                "z-index: "+ i +"; visibility:visible; top:-50px; left:-50px;\"" +
                "src='"+imgsrc+"' border=0>");
        }
        obj[i] = document.getElementById("sn"+i);
    }

    function flake() {
        for (i=0; i<col; ++i) {
            y_pos[i]+=sty[i];
            if (y_pos[i]>height-49) {
                x_pos[i]=Math.random()*(width-amp[i]-29);
                y_pos[i]=0;
            }
            deltax[i]+=stx[i];
            obj[i].style.top=y_pos[i]+"px";
            obj[i].style.left=x_pos[i]+amp[i]*Math.sin(deltax[i])+"px";
        }
        setTimeout("flake()", 40);
    }
    flake();
</script>
</body>
</html>