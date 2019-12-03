var $form = document.querySelector('form');
var $input = document.querySelector('input');
var $chat = document.querySelector('.chat');

function createMessageNode(message) {
  var messageNode = document.createElement('div');
  messageNode.className = 'message';

  var spanNode = document.createElement('span');
  spanNode.className = getMessageClassName();
  spanNode.innerText = message;

  messageNode.appendChild(spanNode);

  return messageNode;
}

function getMessageClassName() {
  // If the most recent message was "friend" then
  // you are the first message from yourself.
  if ($chat.lastChild.classList.contains('friend')) {
    return 'top bottom';
  };

  $chat.lastChild.firstChild.classList.remove('bottom');
  return 'bottom';
}

$form.addEventListener('submit', function(e) {
  e.preventDefault();

  var message = $input.value;

  if (!message.trim()) {
    return;
  }

  var messageNode = createMessageNode(message);

  $chat.appendChild(messageNode);

  $input.value = '';
});

console.log(`%cOh ho ho, you've come to inspect some source.
The more readable source is up on github: https://github.com/yefim/chat-bubbles.`, 'font-size: 20px');
