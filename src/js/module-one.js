const NOTIFIVATION_DELAY = 3000;
let = timeoutId = null;
const refs = {
  notification: document.querySelector('.js-alert'),
};
refs.notification.addEventListener('click', onNotificationClick);
showNotification();
function onNotificationClick() {
  hideNotification();
  clearInterval(timeoutId);
}
function showNotification() {
  refs.notification.classList.add('is-visible');
  timeoutId = setTimeout(() => {
    console.log('close');
    hideNotification();
  }, NOTIFIVATION_DELAY);
}
