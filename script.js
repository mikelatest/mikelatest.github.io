var form = document.getElementById('meeting-form');
if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var beginTime = document.getElementById('start-time').value;
        var endTime = document.getElementById('end-time').value;
        var subject = document.getElementById('meeting-topic').value;
        var booker = document.getElementById('organizer-name').value;
    
        var startDateTime = new Date(beginTime).toISOString().slice(0, 19).replace('T', ' ');
        var endDateTime = new Date(endTime).toISOString().slice(0, 19).replace('T', ' ');


        console.log(startDateTime);
        console.log(endDateTime);

        // var xhr = new XMLHttpRequest();
        // var url = 'http://aiyuyue.cn/services/api/BookingService.aspx';
        // xhr.open('POST', url, true);
        
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        // xhr.onreadystatechange = function() {
        //     if (xhr.readyState === 4 && xhr.status === 200) {
        //         console.log(xhr.responseText);
        //     }
        // };

        // var params = 'beginTime=' + encodeURIComponent(startDateTime) + 
        //             '&end=' + encodeURIComponent(endDateTime) + 
        //             '&topic' + encodeURIComponent(subject) +
        //             '&booker' + encodeURIComponent(booker);

        // xhr.send(params);

        // var formData = new FormData();
        // formData.append('beginTime', startDateTime);
        // formData.append('endTime', endDateTime);
        // formData.append('subject', subject);
        // formData.append('booker', booker);

        // fetch('http://aiyuyue.cn/services/api/BookingService.aspx', {
        //     method: 'POST',
        //     body: formData
        // })
        // .then(response => response.text())
        // .then(data => {
        //     console.log(data);
        // })
        // .catch(error => {
        //     console.log('Error:', error);
        // });


        // MD5加密地址:
        // https://www.sojson.com/encrypt_md5.html


//      http://aiyuyue.cn/services/api/BookingService.aspx
//      ?beginTime=2023-08-01 09:28:00
//      &endTime=2023-08-02 09:28:00
//      &subject=asdf&booker=asdf;;
//      &account=05092
//      &password=d5c22d531c24c40b440f596fb63ca404
//      &roomName="大会议室"
//      &roomCode=01
//      &roomAddress="写字楼一楼"
//      &speaker="东莞朗兴幕墙铝门窗有限公司"
//      &signUrl=""&attendance=;;;

        var targetUrl = 'http://aiyuyue.cn/services/api/BookingService.aspx';

        targetUrl += '?beginTime=' + encodeURIComponent(startDateTime);
        targetUrl += '&endTime=' + encodeURIComponent(endDateTime);
        targetUrl += '&subject=' + encodeURIComponent(subject);
        targetUrl += '&booker=' + encodeURIComponent(booker) + ";;";

        targetUrl += '&account=05092&password=d5c22d531c24c40b440f596fb63ca404'

        targetUrl += '&roomName=' + encodeURIComponent("大会议室");
        targetUrl += '&roomCode=01&roomAddress=' + encodeURIComponent("写字楼一楼")
        targetUrl += '&speaker=' + encodeURIComponent(booker)
        targetUrl += '&signUrl=' + encodeURIComponent("")
        targetUrl += '&attendance=;;;'

        window.location.href = targetUrl;

        // console.log('会议开始时间:', startDateTime);
        // console.log('会议结束时间:', endDateTime);
        // console.log('会议主题:', subject);
        // console.log('预订人姓名:', booker);

    });
}