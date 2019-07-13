const scotauto = "scotauto";

$("#authorize").click(function() {
  steem_keychain.requestAddAccountAuthority(
    $("#username_authorize").val(),
    scotauto,
    "posting",
    1,
    function(response) {
      console.log(response);
    }
  );
});

$("#revoke").click(function() {
  steem_keychain.requestRemoveAccountAuthority(
    $("#username_revoke").val(),
    scotauto,
    "posting",
    function(response) {
      console.log(response);
    }
  );
});

$(function() {
  if (!window.steem_keychain) {
    alert("You need Steem Keychain.");
  }
});
