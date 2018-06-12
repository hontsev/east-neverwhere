$(window).load(function(){
	str="";
	str+='	     <li class="dropdown">'+
        '    <a href="#" class="dropdown-toggle" data-toggle="dropdown">'+
        '       项目 <b class="caret"></b>'+
        '    </a>'+
        '    <ul class="dropdown-menu">'+
        '       <li><a href="/game.html">游戏测试</a></li>'+
		'	   <li><a href="/shaohuamoniqi/index.html">韶华模拟器</a></li>'+
		'	   <li><a href="/ha2048/index.html">ha2048</a></li>'+
        '       <li class="divider"></li>'+
        '    </ul>'+
        ' </li>';
		
					str+='	     <li class="dropdown">'+
        '    <a href="#" class="dropdown-toggle" data-toggle="dropdown">'+
        '       测试 <b class="caret"></b>'+
        '    </a>'+
        '    <ul class="dropdown-menu">'+
        '       <li><a href="/filetest.html">文件操作测试</a></li>'+
		'       <li><a href="/mingan.html">敏感词过滤</a></li>'+
        '       <li><a href="/formatchange.html">格式小工具</a></li>'+
		'		<li><a href="http://neverwhere.esy.es/xsltml_2.1.2/mml2latex.html">mml转latex</a></li>'+
        '    </ul>'+
        ' </li>';
		
							str+='	     <li class="dropdown">'+
        '    <a href="#" class="dropdown-toggle" data-toggle="dropdown">'+
        '       文章 '+
        '    </a>'+
		'    <ul class="dropdown-menu">'+
        '       <li><a href="/article/index.html">全部文章</a></li>'+
        '    </ul>'+
        ' </li>';
		
		str+='	     <li class="dropdown">'+
        '    <a href="#" class="dropdown-toggle" data-toggle="dropdown">'+
        '       相关链接 <b class="caret"></b>'+
        '    </a>'+
        '    <ul class="dropdown-menu">'+
        '       <li><a  target="_blank" href="http://www.pixiv.net/member.php?id=4756962">Pixiv主页</a></li>'+
		'	   <li><a  target="_blank" href="https://github.com/hontsev">GitHub</a></li>'+
        '       <li><a  target="_blank" href="http://tieba.baidu.com/f?kw=%E4%B8%9C%E6%96%B9%E6%A1%85%E5%AD%90%E9%85%B1%E7%9A%84%E4%B8%80%E5%A4%A9%E8%BF%98%E7%9C%9F%E6%98%AF%E5%92%8C%E5%B9%B3%E5%91%A2&frs=yqtb">贴吧乌有乡</a></li>'+
		'	   <li><a  target="_blank" href="http://tieba.baidu.com/f?ie=utf-8&kw=%E4%B8%9C%E6%96%B9%E6%A1%85%E5%AD%90">东方桅子吧</a></li>'+
		'	   <li><a  target="_blank" href="http://tieba.baidu.com/f?ie=utf-8&kw=%E4%B8%9C%E6%96%B9%E6%9E%99%E5%AD%90">东方枙子吧</a></li>'+
        '    </ul>'+
        ' </li>';
		

    $('#menubar').html(str);
});