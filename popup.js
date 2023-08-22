document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('update').addEventListener('click', function() {

        // 세션 가져오기
        fetch("https://chat.openai.com/api/auth/session", {
            "headers": {
                "accept": "*/*",
                "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
                "baggage": "sentry-environment=production,sentry-release=f4ae88b9bd228dab393044536abc2f171a867d24,sentry-transaction=%2F%5B%5B...default%5D%5D,sentry-public_key=33f79e998f93410882ecec1e57143840,sentry-trace_id=8e1c9977b9a841748c7c385293bd23d0",
                "cache-control": "no-cache",
                "pragma": "no-cache",
                "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"116\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "sentry-trace": "8e1c9977b9a841748c7c385293bd23d0-82b2732e82ade589-1"
            },
            "referrer": "https://chat.openai.com",
            "referrerPolicy": "same-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include"
        }).then((response) => response.json()).then((json) => {
            console.log('json', json)
            const accessToken = json.accessToken

            fetch("https://chat.openai.com/backend-api/user_system_messages", {
                "headers": {
                    "accept": "*/*",
                    "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
                    "authorization": "Bearer ".concat(accessToken),
                    "cache-control": "no-cache",
                    "content-type": "application/json",
                    "pragma": "no-cache",
                    "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"116\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin"
                },
                "referrer": "https://chat.openai.com",
                "referrerPolicy": "same-origin",
                "body": "{\"about_user_message\":\"내 이름은 지훈\",\"about_model_message\":\"반말하기\",\"enabled\":true}",
                "method": "POST",
                "mode": "cors",
                "credentials": "include"
            });
        })        
        console.log('버튼 클릭됨')  
    });
});