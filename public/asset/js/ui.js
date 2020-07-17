var layoutApp = (function ($) {
  function deviceType() {
    var sizeT = 768, sizeP = 640;
    var typeD = "desktop", typeP = "smart phone", typeT = "smart tablet", type = null;
    var agent = {
      mobile: (/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i.test(window.navigator.userAgent)),
      tablet: (/iPad|tablet/i.test(window.navigator.userAgent))
    };
    if (agent.mobile) {
      var userAgent = navigator.userAgent.toLowerCase();
      if (userAgent.search("android") > -1 && userAgent.search("mobile") == -1) {
        type = typeT;
      }
      if (!type) {
        type = typeP + " notpc";
      }
    }
    if (agent.tablet) {
      type = typeT + " notpc";
    }
    if (!type) {
      var k = navigator.userAgent.toLowerCase().indexOf("msie") != -1 ? $(window).width() : $("body").width();
      if (k <= sizeT && k > sizeP) {
        type = typeT + " pc";
      }
      else if (k <= sizeP) {
        type = typeP + " pc";
      }
      else {
        type = typeD + " pc";
      }
    }
    /* font-size 변경 시 */
    newPageFontReSize(type)
    return type;
  }

  function newPageFontReSize(type) {
    var $sizeObj = $('.header')
    if (type.indexOf('desktop')>-1) {
      var resolution = 1880;
      var font = 52;
      var width = $('html').outerWidth(true, true);
      var fontSize = font * (width/resolution);
      fontSize = fontSize > font ? font : fontSize < 20 ? 20 : fontSize;
      $sizeObj.css('font-size', fontSize);
    } else {
      $sizeObj.removeAttr('style')
    }
  }

  function menu() {
    var nav = $(".smart-box"),
        allmenu = $(".btn-all-menu, .header__button--all"),
        menuclose = $(".btn-close, .header__button--close");

    var reg_active = /[^0-9]/g;
    var active = $("#wrap").attr("class");
    console.log(active)

    if (active !== undefined) {
      var activeNum = active.replace(reg_active, '');
      if (activeNum > 0) {
        $('[data-dep="'+ activeNum +'"]').addClass("on");
      }
    }

    allmenu.off("click").on("click", function () {
      nav.show();
      $('.header__menus').addClass('opened')
    });
    menuclose.off("click").on("click", function () {
      nav.hide();
      $('.header__menus').removeClass('opened')
    });
  }

  function displayType() {
    $("html").attr("class", deviceType());
    $('.header__menus').removeClass('opened');
  }

  $(window).load(function () {
    displayType();
    menu();
    $(window).on("resize", displayType).trigger("resize");
  });
  return {menu: menu}
})(jQuery);

var utilApp = (function ($) {
  function selectChange() {
    $(".select-box").each(function () {
      var select = $(this).find('select');
      var select_name = select.children("option:selected").text();
      select.siblings('label').find("span").text(select_name);
      select.off("focusin click keypress").on("focusin click keypress", function (e) {
        if (e.type == "focusin") {
          $(this).parent().addClass("focus");
        } else {
          if ($(this).parent().hasClass("active")) {
            $(this).parent().removeClass("active");
          } else {
            $(this).parent().addClass("active");
          }
        }
      }).off("blur").on("blur", function (e) {
        $(this).parent().removeClass("active focus");
      });
      select.change(function () {
        var select_name = $(this).children("option:selected").text();
        $(this).siblings('label').find("span").text(select_name);
      });
    });
  }

  function tab() {
    if ($(".tab-box").length == 0 || !$(".tab-box").hasClass("active")) {
      return
    }
    $(".tab-box").each(function () {
      var active = null;
      $(this).find("li").each(function (i) {
        if ($(this).parent().find("a").hasClass("on")) {
          if ($(this).find(">a").hasClass("on")) {
            active = i;
          }
        } else {
          active = 0;
        }
        if (active == i) {
          $(this).find(">a").addClass("on");
          $($(this).find(">a").attr("href")).show();
          if($(this).parent().hasClass("member-list")) {
            var newImg = $(this).find("img").attr("src").replace("off.png", "on.png");
            $(this).find("img").attr("src", newImg);
          }
        } else {
          $($(this).find(">a").attr("href")).hide();
        }
        $(this).find(">a").click(function () {
          $(this).parents("ul").find("li a").removeClass("on");
          if ($(this).parents("ul").hasClass("member-list")) {
            var prevImg = $(this).parents("ul").find("li").eq(active).find("img").attr("src").replace("on.png", "off.png");
            $(this).parents("ul").find("li").eq(active).find("img").attr("src", prevImg);
          }
          $(this).addClass("on");
          $($(this).parents("ul").find("li").eq(active).find("a").attr("href")).hide();
          $($(this).attr("href")).show();

          active = i;
          if ($(this).parents("ul").hasClass("member-list")) {
            var newImg = $(this).parents("ul").find("li").eq(active).find("img").attr("src").replace("off.png", "on.png");
            $(this).parents("ul").find("li").eq(active).find("img").attr("src", newImg);
          }
          return false;
        });
      });
    });
  }

  function toggle() {
    if ($(".toggle-box").length == 0) {
      return;
    }
    $(".toggle-box").each(function () {
      var listBox = $(this);
      $(this).find("dl").each(function () {
        var list = $(this);
        $(this).find("dt a").click(function () {
          listBox.find("dl").not(list).removeClass("on");
          list.toggleClass("on");
          return false;
        });
      });
    });
  }

  function btnAction() {
    var agent = navigator.userAgent.toLowerCase();
    if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1)) {
      $(".flip").find(".back").hide();
      $(".flip").hover(function () {
        $(this).find(".front").hide();
        $(this).find(".back").show();
      }, function () {
        $(this).find(".front").show();
        $(this).find(".back").hide();
      });
    }
    else {
      $(".flip").flip({trigger: 'hover', axis: 'x', reverse: true, speed: 400});
    }
  }

  function gotoTop() {
    var gotop = null;
    if ($("#wrap").height() < 2400) {
      return;
    }
    $(window).scroll(function () {
      if (gotop == null) {
        $("#content").append('<div class="go-top"><div class="in-box"><a href="#"><img src="../asset/images/common/btn_gotop.png" alt="top" /></a></div></div>');
        gotop = $(".go-top");
      }
      var position = $(window).scrollTop() + $(window).height() - ($("html").hasClass("desktop") ? 300 : 75);
      if (position > $(window).height()) {
        if ($(window).scrollTop() == $(document).height() - $(window).height()) {
          position = $(window).scrollTop() + $(window).height() - ($("html").hasClass("smart") ? 170 : 315);
        }
        gotop.show().stop().animate({"top": position + "px"}, 0);

      } else if (position < $(window).height()) {
        gotop.hide();
      }
    });
  }

  function toggleTable() {
    if ($('table.toggle').length == 0) return;
    var objq = $('table.toggle').find('.tog-q');
    var obja = $('table.toggle').find('.tog-a');

    objq.each(function (i) {
      $(this).find('a:first-child').click(function () {
        objq.not(objq.eq(i)).removeClass('on');
        objq.eq(i).toggleClass('on');
        obja.not(obja.eq(i)).removeClass('on')
        obja.eq(i).toggleClass('on');
        return false;
      });
    });
  }

  function memberTab(){
    if($('.member-sec .member-list').length==0){return;}

    var $tabEle = $('.member-sec .member-list'), item = $tabEle.find('a');
    var $con = $('.member-info');
    var cur = $tabEle.data('cur')!=undefined ? $tabEle.data('cur') : 0;

    item.each(function(i){
      if(i==cur){
        $(this).addClass('act');
        $('[data-tab-set="'+ $(this).data('tab') +'"]').addClass('act');
      }else{
        $(this).removeClass('act');
      }
      $(this).off('click').on('click', function(){
        item.removeClass('act');
        $(this).addClass('act');
        $con.removeClass('act');
        $('[data-tab-set="'+ $(this).data('tab') +'"]').addClass('act');
        return false;
      });
    });

  }

  $(document).ready(function () {
    selectChange();
    tab();
    gotoTop();
    toggle();
    toggleTable();
    memberTab();

    $("input, textarea").placeholder();
    $(".portfolio .thum").BlackAndWhite({hoverEffect: true, responsive: true, speed: 0});
    $(".main-portfolio-list__thumb").BlackAndWhite({
      invertHoverEffect: true,
      hoverEffect: true,
      speed: {
        fadeIn: 300,
        fadeOut: 300
      },
      intensity: 1
    });
  });
  $(window).load(function () {
    btnAction();
  });
  return {btnAction: btnAction}
})(jQuery);

var mainApp = (function ($) {
  $(document).ready(function () {
    if($('.front-visual-sec').length >= 1){
      $('.front-visual-sec ul').bxSlider({auto: true, autoControls: false, stopAutoOnClick: true, pager: true});
    }
    if ($(".main-front").length == 1) {
      var slide_box = $(".main-front");
      var slide_obj = slide_box.find(".slide");
      var slider = $('.slide').bxSlider({
        adaptiveHeight: true, responsive: true,
        mode: 'fade', pause: 25000,
        auto: true, autoControls: false, controls: false,
        pager: true, pagerType: 'full',
        onSliderLoad: function (currentIndex) {
          setTimeout(function () {
            if (slide_obj.find("li").eq(currentIndex).find(".marquee").length == 0) {
              $(".mar-play").hide();
            } else {
              $(".mar-play").show();
            }
            var currentSlide = slide_obj.find("li").eq(currentIndex);
            currentSlide.find(".marquee").marquee({time: currentSlide.attr("time"), action: true, btn: $(".mar-play")});
          }, 20);
        },
        onSlideBefore: function () {
          $('.slide-number').text((slider.getCurrentSlide() + 1) + '/' + slider.getSlideCount());
        },
        onSlideAfter: function ($slideElement, oldIndex, newIndex) {
          setTimeout(function () {
            $(".mar-play").off("click");
            var oldSlide = slide_obj.find("li").eq(oldIndex);
            var newSlide = slide_obj.find("li").eq(newIndex);
            if (newSlide.find(".marquee").length == 0) {
              $(".mar-play").hide();
            } else {
              $(".mar-play").show();
            }
            newSlide.find(".marquee").marquee({time: newSlide.attr("time"), action: true, btn: $(".mar-play")});
            oldSlide.find(".marquee").marquee({action: false, btn: null});
          }, 20);
        }
      });
      $('<div class="slide-number"><span>' + (slider.getCurrentSlide() + 1) + '/' + slider.getSlideCount() + '</span></div>').insertAfter(slide_box.find('.bx-controls .bx-pager'));
      $('<div class="controls-auto"><a class="mar-play active" href="#">play</a></div>').insertAfter(slide_box.find('.bx-controls .slide-number'));
    }
  });
  $.fn.marquee = function (_option) {
    var $this = $(this), setting = {time: 0, action: true}, options = $.extend(setting, _option);
    $this.item = $this.find("span"), $this.time = setting.time, $this.width = 996;
    $this.btn = setting.btn;

    function baseSet() {
      if ($this.item.length < 2) {
        $this.item.clone().appendTo($this);
        $this.item = $this.find("span");
      }
    }

    function sizeSet() {
      stop();
      $this.item.css("width", "");
      $this.width = $this.item.outerWidth(true, true) + 100;
      $this.start_pos = $this.width, $this.end_pos = -$this.width;
      $this.item.css("width", $this.width);
      $this.item.each(function (i) {
        if (i == 0) {
          $(this).css({'left': 0});
        } else {
          $(this).css({'left': $this.width});
        }
      });
    }

    function scroll(o) {
      if (o.position().left <= -$this.width) {
        o.css('left', $this.start_pos);
        scroll(o);
      } else {
        var time = (parseInt(o.position().left, 10) - $this.end_pos) * ($this.time / ($this.start_pos - $this.end_pos));
        o.animate({'left': -$this.width}, time, 'linear', function () {
          scroll(o);
        });
      }
    }

    function stop() {
      $this.item.stop();
      $this.item.clearQueue();
    }

    function play() {
      $this.item.each(function () {
        scroll($(this));
      });
    }

    function applyResizeEvent() {
      $(window).resize(function () {
        sizeSet();
        play();
      });
    }

    if (setting.action) {
      if ($this.btn != undefined) {
        $this.btn.addClass("active");
      }
      baseSet();
      sizeSet();
      play();
    } else {
      if ($this.btn != undefined) {
        $this.btn.removeClass("active");
      }
      setTimeout(function () {
        stop();
        $this.item.each(function (i) {
          if (i == 0) {
            $(this).css({'left': 0});
          } else {
            $(this).css({'left': $this.width});
          }
        });
      }, 30);
    }

    if ($this.btn != undefined) {
      $this.btn.click(function () {
        console.log(1);
        if ($(this).hasClass("active")) {
          setting.action = false;
          $this.btn.removeClass("active");
          stop();
        } else {
          setting.action = true;
          $this.btn.addClass("active");
          play();
        }
        return false;
      });
    }

    applyResizeEvent();
  }
})(jQuery);

var popup = (function ($) {
  /* layer + alert popup */
  var popupCount = 0, bg = null, popWrap = null, pop_opacity = null;

  function pos(obj, bg_opacity) {
    var popObj = obj;
    var t = (($(window).height() - popObj.outerHeight(true, true)) / 2) + $(window).scrollTop();
    var p = [t < 0 ? 0 : t, ($(window).width() - popObj.outerWidth(true, true)) / 2 + $(window).scrollLeft()];
    if (popupCount == 0 && bg == null) {
      if ($(".layer-bg").length == 0) {
        popWrap.prepend("<div class='layer-bg'></div>");
      }
      bg = $(".layer-bg");
    }
    popupCount = popupCount + 1;
    popObj.css({"top": p[0] + "px", "left": p[1] + "px"}).show();

    $(window).off("resize").on("resize", function () {
      var t = (($(window).height() - popObj.outerHeight(true, true)) / 2) + $(window).scrollTop();
      var p = [t < 0 ? 0 : t, ($(window).width() - popObj.outerWidth(true, true)) / 2 + $(window).scrollLeft()];
      popObj.css({"top": p[0] + "px", "left": p[1] + "px"});
    });

    pop_opacity = bg_opacity;
    if (pop_opacity != null) {
      bg.css("opacity", pop_opacity).show();
    } else {
      bg.show();
    }
  }

  function layerPop(link, bg_opacity) {
    popWrap = $(".layer-area-wrap");
    var popObj = $(link.attr("href"))
    pos(popObj, bg_opacity);
    popObj.find('.close').off("click").on("click", function () {
      layerPopClose(popObj);
      return false;
    });
  }

  function alertPop(tit, txt, bg_opacity) {
    popWrap = $(".layer-area-wrap");
    popWrap.append('<div class="pop alert-pop"><div class="p-body"><a href="#" class="close">�ݱ�</a><p class="tit">' + tit + '</p><p class="msg">' + txt + '</p><div class="btn-box"><a href="#" class="btn ty3" onclick="popup.layerPopClose($(this).parent().parent().parent()); return false;">OK</a></div></div></div>');
    var popObj = $(".alert-pop"), close = popObj.find(".close");
    pos(popObj, bg_opacity);
    popObj.find('.close').off("click").on("click", function () {
      layerPopClose(popObj);
      return false;
    });
  }

  function layerPopClose(obj) {
    popupCount = popupCount - 1;
    if (popupCount == 0) {
      bg.hide();
      pop_opacity = null;
    }
    if (obj.hasClass("alert-pop")) {
      obj.remove();
    } else {
      obj.hide();
    }
  }

  return {layerPop: layerPop, alertPop: alertPop, layerPopClose: layerPopClose, open: open, close: close}
})(jQuery);