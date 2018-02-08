// request permission on page load
document.addEventListener('DOMContentLoaded', function () {
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.');
    return;
  }

  if (Notification.permission !== "granted")
    Notification.requestPermission();
});

function notifyMe() {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    var notification = new Notification('Notification title', {
      icon: 'https://i.stack.imgur.com/1rwJA.png?s=64&g=1',
      body: "Hey there! You've been notified!",
    });

    notification.onclick = function () {
      window.open("https://galien1.github.io/");
    };

  }

}
