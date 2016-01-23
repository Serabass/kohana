VK.init({
    apiId: 3037883
});

function authInfo(response) {
    if (response.session) {
        VK.Api.call('users.get', {
            user_ids: response.session.mid,
            fields: 'photo_50,city,verified'
        }, function (res) { window.user = res.response[0] });
    } else {
        alert('not auth');
    }
}
VK.Auth.getLoginStatus(authInfo);
VK.UI.button('login_button');