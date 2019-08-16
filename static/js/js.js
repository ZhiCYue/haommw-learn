
if ($(document).height() > 700) {
  $('#fh5co-page').css('min-height', $(document).height() + 'px');
}

$('.img-wrap img').attr('onerror', "javascript:this.src='http://img.haommw.com//haommw/img/7643cd3807598497.jpg';");

var k = 0;
var t = 1;
var full = false;
var isLoading = false;
var totalHeight = 0;
var timestamp = new Date().getTime();
$('.grid').imagesLoaded().always(function () {
  t = 0;
  $('.loading').hide();
});

function ata() {

  var currTime = new Date().getTime()
  console.log(currTime - timestamp)
  if (currTime - timestamp < 2000 && isLoading) {
    return false;
  };
  timestamp = currTime
  
  if (full) return false

  isLoading = true

  totalHeight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());
  if ($(document).height() <= (totalHeight * 1.2)) {

    $('.loading').show();

    if ($('.grid img').size() >= 50) {
      $('.loadend').html('<a href="https://www.baidu.com" target="_blank">兄弟不要着急，点击这里还有更多美女图片</a>');
      t = 1;
      full = true;
      $('.loading').hide();
      return false;
    }


    $('.grid img').attr('name', '')

    // ajax 请求数据
    let data = `<div class="img-temp grid-item item animate-box fadeIn">
    <a href="" data="http://haommw.dnw2.com/haommw/img/58eddc2f14aac11d.jpg" class="image-popup" title="在家无聊自拍的妹子图片" target="_blank">
      <div class="img-wrap">
        <img src="http://haommw.dnw2.com/haommw/img/58eddc2f14aac11d.jpg" name="13" alt="在家无聊自拍的妹子图片"
          class="img-responsive"
          onerror="javascript:this.src='http://img.haommw.com//haommw/img/7643cd3807598497.jpg';">
      </div>
    </a>
  </div>`

    if (data) {
      t = 1;
      $(".image-popup").unbind();

      data = $(data);
      $('.grid').append(data).isotope('appended', data);
      $('.img-temp').css('opacity', 0);
      $('.img-temp').imagesLoaded().progress(function (instance, image) { $('.grid').isotope('layout'); });

      $('.grid').imagesLoaded().always(function () {
        contentWayPoint();
        $('.loading').hide();
        t = 0;
        $('.grid img').attr('name', '');
        $('.img-temp').attr("class", "grid-item item animate-box");
      });


      isLoading = false;
      $('.loading').hide();
    }

    function errCb() {
      alert('数据异常！~~~');
      t = 1;
      $('.loading').hide();
    }

    function emptyCb() {
      $('.loadend').html('已经没有拉~~~');
      t = 1;
      full = true
      $('.loading').hide();
    }

  }
}
$(window).scroll(function () {
  if (t == 0 && !full) { ata() };
})

// $("body").on("touchstart", function(e) {
//   e.preventDefault();
//   console.log(e)
// });

var contentWayPoint = function () {
  var i = 0;
  $('.animate-box').waypoint(function (direction) {

    if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {

      i++;

      $(this.element).addClass('item-animate');
      setTimeout(function () {

        $('body .animate-box.item-animate').each(function (k) {
          var el = $(this);
          setTimeout(function () {
            var effect = el.data('animate-effect');
            if (effect === 'fadeIn') {
              el.addClass('fadeIn animated-fast');
            } else if (effect === 'fadeInLeft') {
              el.addClass('fadeInLeft animated-fast');
            } else if (effect === 'fadeInRight') {
              el.addClass('fadeInRight animated-fast');
            } else {
              el.addClass('fadeInUp animated-fast');
            }
            el.removeClass('item-animate');
          }, k * 200, 'easeInOutExpo');
        });

      }, 100);

    }

  }, { offset: '90%' });
};