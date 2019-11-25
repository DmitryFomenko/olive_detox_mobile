import './styles.css';

$(document).ready(function() {
  $(".js-select").select2({
    width: "90vw",
    placeholder:"When do you need to be clean?",
    data: ['text','more text','and more', 'and more....']
  });
  $(".js-select2").select2({
    width: "90vw",
    placeholder:"What’s your toxin exposure?",
    data: ['text','more text','and more', 'and more....']
  });
  $(".js-select3").select2({
    width: "90vw",
    placeholder:"What’s your body weight?",
    data: ['text','more text','and more', 'and more....']
  });
  $(".js-select4").select2({
    width: "90vw",
    placeholder:"More needs",
    data: ['text','more text','and more', 'and more....']
  });
});

$(document).ready(function() {
  $(function () {
    let w = $(window);

    w.on('scroll', function () {
      let top = $(this).scrollTop();
      parallax(top);
    });
  });

  function parallax(top) {
    if(top > 300) {
      $('.header-info__leaf_up').css(
      'transform', 'translateY(' + ((top / -10) + 32) + 'px)'
      );
      $('.header-info__leaf_down').css(
        'transform', 'translateY(' + ((top / -10) + 32) + 'px)'
      );
    }

    if(top > 1900) {
        $('.detox__leaf-left').css(
      'transform', 'translateY(' + ((top / -10) + 190) + 'px)'
      );
      $('.detox__leaf-right').css(
        'transform', 'translateY(' + ((top / -7) + 271) + 'px)'
      );
    }

    if(top > 2300) {
      $('.detox__leaf-down').css(
      'transform', 'translateY(' + ((top / -10) + 238) + 'px)'
      )
    }

    if(top > 4800) {
      $('.leaf_find_left').css(
      'transform', 'translateY(' + ((top / -10) + 480) + 'px)'
      );
      $('.leaf_find_right').css(
      'transform', 'translateY(' + ((top / -10) + 480) + 'px)'
      );

      $('.leaf_find_left_down').css(
        'transform', 'translateY(' + ((top / -10) + 480) + 'px)'
      );
    }
  };

})

$(document).ready(function(){
  $(".checkbox1").click(function(){
      $(".nav").toggleClass("show");
      $("main").toggleClass("hide");
  });
});
