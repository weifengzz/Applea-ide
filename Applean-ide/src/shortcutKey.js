import ComponentState from './componentState'
function hideTools () {
	var f=window.event.keyCode;
	let isF = ComponentState.isF;
	//设置是否隐藏还是显示
	if(f === 70 && isF)
	{ 
		document.getElementById('header').style.display='none';
		document.getElementById('left').style.display='none';
		document.getElementById('right').style.display='none';
		ComponentState.isF = false;
	}else {
		document.getElementById('header').style.display='block';
		document.getElementById('left').style.display='block';
		document.getElementById('right').style.display='block';
		ComponentState.isF = true;
	}
}

exports.hideTools = hideTools;