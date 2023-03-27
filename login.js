    var idPass = false;

    $('#id').on('keyup', function(){
        // alert($(this).val());  // 제이쿼리 $(this).val() = 자스 this.value  // 이벤트(가 적용될)대상 this
        let idValue = $(this).val();
        if(idValue.length == 0) {    // 아이디를 입력하지 않았다면
            $('#msg_id').text('');   // 밑에 아무 글씨도 나타나지 않음
        } else if(idValue.length < 4) { 
            $('#msg_id').text('아이디는 4자 이상입니다.').css('color', '#FF0000').css('font-size', '14px');
        } else {
            $('#msg_id').text('정상적인 아이디입니다.').css('color', '#0000FF').css('font-size', '14px');
        }
        idPass = idValue.length >= 4; // 입력한 아이디가 4글자 이상이면 true 저장
    })

    $('#frm_login').on('submit', function(event){
        if(idPass == false) {
            alert('아이디를 확인하세요.');
            event.preventDefault();
            return;
        }
        if($('#pw').val() == '') {  // id가 통과되어야 실행  // 길이로 한다면 $('#pw').val().length == 0
            alert('비밀번호를 입력해주세요.');
            event.preventDefault();
            return;
        }
    })