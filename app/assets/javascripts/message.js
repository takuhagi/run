$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="message__box" data-message-id=${message.id}>
          <div class="message_info">
            <div class="message_info__user__name">
              ${message.user_name}
            </div>
            <div class="message_info__date">
              ${message.created_at}
            </div>
          </div>
          <div class="message">
            <p class="message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="message__box" data-message-id=${message.id}>
        <div class="message_info">
          <div class="message_info__user__name">
            ${message.user_name}
          </div>
          <div class="message_info__date">
            ${message.created_at}
          </div>
        </div>
        <div class="message">
          <p class="message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.main_chat__message__form__1').on('submit', function(e){
    console.log(2)
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.main_chat__message__list').append(html);      
      $('.main_chat__message__form__1')[0].reset();
      $('.main_chat__message__list').animate({ scrollTop: $('.main_chat__message__list')[0].scrollHeight});
      $('.message__btn').prop("disabled", false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.message__btn').prop("disabled", false);
    });
  });
});  