function preloader() {
    'use strict';
    $('.preloader').delay(100).fadeOut(10);
}

$(document).ready(function(){
    //2CB05E9188D6452F5ED60D2532B472ED850C1A4692A1B6B4E3A23983F8F1F2E1CE4EFFC95BF5238B382D3325453022FB
    $("#sendEmail").click(function(){
        const fromName = $("#fromName").val();
        const fromEmail = $("#fromEmail").val();
        const fromTel =  $("#fromTel").val();
        const subject =  $("#subject").val();
        let body = $("#body").val();
        body = "<h1>"+ fromName +"("+fromEmail+") 님의 메일입니다. </h1><br>"+"전화번호 : "+fromTel+"내용 :"+subject;

        Email.send({
            SecureToken: "2CB05E9188D6452F5ED60D2532B472ED850C1A4692A1B6B4E3A23983F8F1F2E1CE4EFFC95BF5238B382D3325453022FB",
            To: "alsgud0713@nate.com",
            From: fromEmail,
            Subject: subject,
            Body: body
        }).then(
           message => { console.log("이메일을 성공적으로 보냈습니다.") }
        ).catch(
            error => { console.log("이메일을 보내는데 실패했습니다.") }
        )

    });
});

