// 2016/10/19
//
// ============
// 作业 15
//
//
// 本次作业没有提示的地方需要自行搜索
// 别忘了用 github 管理作业的进度
// ============
//



// 作业 1
//
// 实现函数 GuaOptions1, 功能见注释描述
var GuaOptions1 = function(options) {
    /*
    options 是一个包含 string 的数组
    本函数对每个 string 生成一个复选框和文本
    append 到 body 中
    示意图如下

    +-+
    | | string
    +-+

    */
	var len = options.length
	for (var i = 0; i < len; i++) {
		var element = options[i]
		if(i%2 !== 0) {
			var t = `<label><input name="state" type="checkbox" value="" />${element}</label> 
					<br>
			`
		}else {
			var t = `<label><input name="state" type="checkbox" value="" />${element}</label> `
		}
		$('body').append(t)
	}
}
//GuaOptions1(['一', '二', '三', '四',])

// 作业 2
//选中不变，没选则选
var selectAll = function() {
	var input = $('input')
	for(var i = 0; i < input.length; i++) {
		var element = input[i]
		if (element.checked) {
			element.checked = true
		}else {
			element.checked = true
		}	
	}
}
//选中取消，没选则选
var selectReverse = function() {
	var input = $('input')
	for(var i = 0; i < input.length; i++) {
		var element = input[i]
		if (element.checked) {
			element.checked = false
		}else {
			element.checked = true
		}	
	}
}
var GuaOptions2 = function(options) {
    /*
    options 是一个包含 string 的数组
	本题和作业 1 一样的功能 只是多了 2 个按钮
    全选 和 反选
    */
	GuaOptions1(options)
	var t = `
			<br>
			<button class="all">全选</button>
			<button class="reverse">反选</button>
			<br>
	`
	$('body').append(t)
	
		$('.all').on('click', function() {
			selectAll()
		})
		$('.reverse').on('click', function() {
			selectReverse()
		})
	}	

//GuaOptions2(['一', '二', '三', '四',])

// 作业 3
var GuaOptions3 = function(options) {
    /*
    options 是一个包含如下 object 的数组
    text 是文本描述
    checked 是布尔值, 表示是否打勾
    {
    	'text': 'string',
        'checked': true,
    }
	本题和作业 2 一样的功能, 但是参数变了
	并且要求在初始化的时候要按照相应的值对相应的复选框打勾
    */
	var l = []
	var len = options.length
	for(var i = 0; i < len; i++) {
		var inputText = options[i].text
		l.push(inputText)				
		}
	GuaOptions2(l)
	for(var i = 0; i < len; i++) {
		var checkNow = options[i].checked
		$('input')[i].checked = checkNow
		}	
}

// 作业 4
//保存当前的options
var saveOptions = function(options) {	
	var len = options.length
	var input = $('input')
	for(var i = 0; i < len; i++) {
		var state = input[i].checked
		options[i].checked = state
	}
	localStorage.name = JSON.stringify(options);//将JSON对象转化成字符串后，赋值给localStorage.name存储   
}

//更新页面
var updatePage = function() {
	var message = localStorage.name
	var messages = JSON.parse(message)
	var input = $('input')
	for(var i = 0; i < messages.length; i++) {
		var checkNow = messages[i].checked
		$('input')[i].checked = checkNow
	}				
}


var GuaOptions4 = function(options) {
    /*
	本题和作业 3 一样的功能
    但是多了 2 个按钮 save 和 load
    save 按钮点击的时候会保存当前的 options 状态到 localStorage(用 JSON)
    load 按钮点击的时候会从 localStorage 中读取保存的信息并更新界面
    */
	
	GuaOptions3(options)
	//添加save与load按钮
	var t = `
			<br>
			<button class="save">save</button>
			<button class="load">load</button>
			<br>
		`
	$('body').append(t)
	//点击save按钮，保存当前的 options 状态到 localStorage
	$('.save').on('click', function() {
		saveOptions(options)
		console.log('localStorage.name', localStorage.name)
	})
	//localStorage 中读取保存的信息并更新界面
	$('.load').on('click', function() {
		updatePage()
		console.log('localStorage.name', localStorage.name)
	})	
}
GuaOptions4([
			{'text': '一',
			 'checked': true,}, 
			{'text': '二',
			 'checked': false,},  
			{'text': '三',
			 'checked': false,},  
			{'text': '四',
			 'checked': false,}, 
			])
			