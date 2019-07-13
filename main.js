const scotauto = "scotauto";

$("#authorize").click(function() {
  if (window.steem_keychain) {
    steem_keychain.requestAddAccountAuthority(
      $("#username_authorize").val(),
      scotauto,
      "posting",
      1,
      function(response) {
        console.log(response);
      }
    );
  } else {
    alert("You need Steem Keychain.");
  }
});

$("#revoke").click(function() {
  if (window.steem_keychain) {
    steem_keychain.requestRemoveAccountAuthority(
      $("#username_revoke").val(),
      scotauto,
      "posting",
      function(response) {
        console.log(response);
      }
    );
  } else {
    alert("You need Steem Keychain.");
  }
});
