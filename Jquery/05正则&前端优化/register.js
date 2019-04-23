/*用户名验证*/

$(function(){
	var $username = $('#user_name');

	// 失去焦点
	$('#user_name').blur(function(){
		check_username();
	});

	$('#user_name').click(function(){
		$(this).next().hide();
	});

	function check_username(){
		var val = $username.val(); // 获取输入框的值
		var reUser = /^\w{6,20}$/;

		if(val==''){
			$username.next().html('用户名称不能为空！');
			$username.next().show();
		}
		else if(reUser.test(val)){
			$username.next().hide()
		}
		else{
			$username.next().html('6~20数字、字母和_');
			$username.next().show();
		}
	
	}



})