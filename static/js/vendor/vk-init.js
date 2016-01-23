VK.init({
    apiId: 3037883
});

function authInfo(response) {
    if (response.session) {
        alert('user: '+response.session.mid);
    } else {
        alert('not auth');
    }
}
VK.Auth.getLoginStatus(authInfo);
VK.UI.button('login_button');