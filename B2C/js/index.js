$(function() {
	function proFeature() {
		//init
		var $box = $('.pro-feature-flip-list ul')
		var num = $box.find('li').length;
		$box.css({
			'width': 228 * num + 'px'
		});
		//auto play while num>4
		if(num > 4) {
			var t = setInterval(proFeatureAuto, 4000);

			function proFeatureAuto() {
				$box.stop(true, true).animate({
					'margin-left': '-228px'
				}, 300, function() {
					$box.find('li:first').appendTo($box);
					$box.css('margin-left', '0');
				});
			}
			$('.pro-feature-flip').hover(function() {
				clearInterval(t);
			}, function() {
				t = setInterval(proFeatureAuto, 4000);
			})
			//btn
			$('.pro-feature-flip-prev').unbind('click').click(function() {
				$box.find('li:last').prependTo($box);
				$box.css({
					'margin-left': '-228px'
				});
				$box.stop(true, true).animate({
					'margin-left': '0'
				}, 300);
			})
			$('.pro-feature-flip-next').unbind('click').click(function() {
				proFeatureAuto();
			})
		}
	}
	proFeature();

	//主页轮播图
	function bannerSlide() {
		if($('.banner').length > 0 && $('.banner .swiper-slide').length > 1) {
			var swiper = new Swiper('.banner .swiper-container', {
				slidesPerView: 1,
				pagination: '.banner .swiper-pagination',
				paginationClickable: true,
				spaceBetween: 0,
				loop: true,
				autoplay: 5000,
				autoplayDisableOnInteraction: false
			});
		}
	}
	bannerSlide();
	//滚动条
	$(window).load(function() {
		$('.bag-have ul').mCustomScrollbar({
			axis: "y",
			theme: "dark",
			advanced: {
				autoExpandHorizontalScroll: true
			},
			mouseWheel: true
		});
	});
	//下拉购物车价钱计算
	function xiala() {
		var xlzj = 0
		$('.bag-have li .price .all-price i').each(function() {
			var danjia = parseFloat($(this).text())
			xlzj += danjia
			$('.all section span i').text(parseFloat(xlzj).toFixed(2))
		})
	}
	xiala()

	function jiajian() {
		//加
		$('.jia').each(function() {
			$(this).click(function() {
				var b = $(this).siblings('section').text()
				b++
				$(this).siblings('section').text(b)
			})
		})
		//减
		$('.jian').each(function() {
			$(this).click(function() {
				var c = $(this).siblings('section').text()
				c--
				if(c == -1) {
					return
				}
				$(this).siblings('section').text(c)
			})
		})
	}
	jiajian()
	$('.count').text($('.header-search .search-right .shop-bag .bag-have li').length)
	$('.all-goods').text($('.header-search .search-right .shop-bag .bag-have li').length)
	//删除
	$('.sanj').each(function() {
		$(this).click(function() {
			$(this).parent('li').remove()
			$('.all-goods').text($('.header-search .search-right .shop-bag .bag-have li').length)
			$('.count').text($('.header-search .search-right .shop-bag .bag-have li').length)
			if($('.header-search .search-right .shop-bag .bag-have li').length == 0) {
				$('.header-search .search-right .shop-bag .bag-have').css('display', 'none')
			}
			xiala()
		})
	})
	//滚动条不在顶部时 顶部top banner隐藏
	var ToTopFun = function() {
		$('.header-title').css('height', '0px')
		$('.upup').hide()
		var st = $(document).scrollTop();
		if(st > 0) {
			if($(".topbanner").hasClass('active')) {
				$(".topbanner").removeClass('active');
				$('.header-title').css('height', '0px')
			}
			$('.upup').show()

		} else {
			$('.header-title').css('height', '38px')
			$(".topbanner").addClass('active');
			$('.upup').hide()
		}
	};
	$(window).bind("scroll", ToTopFun);
	ToTopFun();
	//隐藏顶部广告图
	$('.topbanner .icon-iconfontchahao').click(function() {
		$('.topbanner').hide()
	})
	$('.header .nav ul li').not('.header .nav ul li ul li').each(function() {
		$(this).hover(function() {
			$(this).children('a').css({
				'color': '#7f7f7f',
				'text-decoration': 'underline'
			})
		}, function() {
			$(this).children('a').css({
				'color': '#000',
				'text-decoration': 'none'
			})
		})
	})
	//展开隐藏
	$('.more').each(function() {
		var b = $(this).text()
		if(b == "More") {
			$(this).siblings('.hid').css('display', 'none')
		}
		if(b == "Hide") {
			$(this).siblings('.hid').css('display', 'block')
		}
		$(this).click(function() {
			var b = $(this).text()
			if(b == "More") {
				$(this).siblings('.hid').slideDown(800)
				$(this).text("Hide")
			}
			if(b == "Hide") {
				$(this).siblings('.hid').slideUp(800)
				$(this).text("More")
			}
		})
	})
	//列表页收藏
	$('.heart').each(function() {
		$(this).click(function() {
			if($(this).attr('src') == "images/hongxin_03.png") {
				$(this).attr('src', 'images/baixin_03.png')
			} else {
				$(this).attr('src', 'images/hongxin_03.png')
			}
		})
	})
	//列表页旁边展开收缩
	$('.zhank').each(function() {
		var c = $(this).text()
		if(c == "+") {
			$(this).parent('p').siblings('.zhank-hid').css('display', 'none')
		}
		if(c == "-") {
			$(this).parent('p').siblings('.zhank-hid').css('display', 'block')
		}
		$(this).click(function() {
			var c = $(this).text()
			if(c == "+") {
				$(this).parent('p').siblings('.zhank-hid').slideDown(800)
				$(this).text("-")
			}
			if(c == "-") {
				$(this).parent('p').siblings('.zhank-hid').slideUp(800)
				$(this).text("+")
			}
		})

	})
	//登录框颜色
	$('.login input[type="text"]').each(function() {
		$(this).focus(function() {
			$(this).css('box-shadow', '0px 0px 5px #999999')
		})
	})
	$('.login input[type="text"]').each(function() {
		$(this).blur(function() {
			$(this).css('box-shadow', '')
		})
	})
	//页码
	$('.main-right .fenye div ul li').each(function() {
		$('.main-right .fenye div ul li').eq(0).hide()
		$('.main-right .fenye div ul li').eq(1).children('a').css('text-decoration', 'none')
		$(this).not($('.main-right .fenye div ul li').eq(1)).click(function() {
			$('.main-right .fenye div ul li').eq(0).show()
			$(this).children('a').css('text-decoration', 'none')
		})
		$('.main-right .fenye div ul li').eq(1).click(function() {
			$('.main-right .fenye div ul li').eq(0).hide()
		})
	})
	//hover变图
	$('.main-right .list-show li .img-a').each(function() {
		$(this).hover(function() {
			var himg = $(this).children('.list-img').attr('hoverimg-src')
			$(this).children('.list-img').attr('src', himg)

		}, function() {
			var limg = $(this).children('.list-img').attr('img-src')
			$(this).children('.list-img').attr('src', limg)
		})
	})
	//选择对错
	$('.main-left .refin ul li').not('.gg-show ul li').each(function() {
		$(this).hover(function() {
			if($(this).children('span').children('img').attr('choose') == "f") {
				$(this).children('span').children('img').attr('src', 'images/dui.png')
				$(this).click(function() {
					$(this).children('span').children('img').attr('src', 'images/dui.png')
					$(this).children('span').children('img').attr('choose', 't')
				})
			}
			if($(this).children('span').children('img').attr('choose') == "t") {
				$(this).children('span').children('img').attr('src', 'images/cuo.png')
				$(this).click(function() {
					$(this).children('span').children('img').attr('src', '')
					$(this).children('span').children('img').attr('choose', 'f')
				})
			}
		}, function() {
			if($(this).children('span').children('img').attr('choose') == "f") {
				$(this).children('span').children('img').attr('src', '')
			}
			if($(this).children('span').children('img').attr('choose') == "t") {
				$(this).children('span').children('img').attr('src', 'images/dui.png')
			}
		})
	})
	//婚纱规格
	$('.main-left .silhouette ul li').each(function() {
		$(this).hover(function() {
			if($(this).children('span').attr('choose') == "dui") {
				$(this).children('span').children('i').removeClass('icon-cuo').addClass('icon-dui')
				$(this).css('border', '1px solid #eb4f38')
				$(this).children('span').css('display', 'none')
			}
			$(this).children('span').css('display', 'block')
			$(this).click(function() {
				$(this).children('span').attr('choose', 'dui-show')
				$(this).css('border', '1px solid #eb4f38')
			})
			if($(this).children('span').attr('choose') == 'dui-show') {
				$(this).children('span').children('i').removeClass('icon-dui').addClass('icon-cuo')
				$(this).click(function() {
					$(this).children('span').css('display', 'none')
					$(this).css('border', '1px solid #d6d6d6')
					$(this).children('span').attr('choose', 'dui')
				})
			}
		}, function() {
			if($(this).children('span').attr('choose') == "dui") {
				$(this).children('span').css('display', 'none')
				$(this).css('border', '1px solid #d6d6d6')
			}
			if($(this).children('span').attr('choose') == 'dui-show') {
				$(this).children('span').css('display', 'block')
				$(this).children('span').children('i').removeClass('icon-cuo').addClass('icon-dui')
			}
			if($(this).children('span').attr('choose') == 'cuo') {
				$(this).children('span').css('display', 'none')
			}
		})

	})
	//颜色
	$('.main-left .colorjs li').each(function(i) {
		$(this).hover(function() {
			if($(this).children('span').attr('choose') == "dui") {
				$(this).children('span').children('i').removeClass('icon-cuo').addClass('icon-dui')
				$(this).children('span').css('display', 'none')
			}
			$(this).children('span').css('display', 'block')
			$(this).click(function() {
				$(this).children('span').attr('choose', 'dui-show')
				$(this).children('span').css('display', 'block')
			})
			if($(this).children('span').attr('choose') == 'dui-show') {
				$(this).children('span').children('i').removeClass('icon-dui').addClass('icon-cuo')
				$(this).click(function() {
					$(this).children('span').css('display', 'none')
					$(this).children('span').attr('choose', 'dui')
				})
			}
		}, function() {
			if($(this).children('span').attr('choose') == "dui") {
				$(this).children('span').css('display', 'none')
			}
			if($(this).children('span').attr('choose') == 'dui-show') {
				$(this).children('span').css('display', 'block')
				$(this).children('span').children('i').removeClass('icon-cuo').addClass('icon-dui')
			}
			if($(this).children('span').attr('choose') == 'cuo') {
				$(this).children('span').css('display', 'none')
			}
		})
	})
	//clear显示
	function clearshow() {
		if($('.gg-show ul li').length > 0) {
			$('.clear').css('display', 'block')
		} else {
			$('.clear').css('display', 'none')
		}
	}
	//clear all
	$('.clear').click(function() {
		$('.torr').children('img').attr('src', '')
		$('.torr').children('img').attr('choose', 'f')
		$('.main-left .clolr li span').css('display', 'none')
		$('.main-left .clolr li span').attr('choose', 'dui')
		$('.main-left .silhouette ul li').css('border', '1px solid #d6d6d6')
		$('.main-left .silhouette ul li span').css('display', 'none')
		$('.main-left .silhouette ul li span').attr('choose', 'dui')
		$('.gg-show ul li').remove()
		clearshow()
	})
	clearshow()
	$('.gg-show ul').delegate('li', 'click', function() {
		$(this).remove()
		var zonghuitxt = $(this).text()
		$('.main-left .refin ul li').not('.gg-show ul li').each(function() {
			//非颜色与婚纱规格
			var a = $('.main-left .refin ul li').not('.gg-show ul li')
			var c = a.length
			for(var i = 0; i < c; i++) {
				if(a.eq(i).text() == zonghuitxt) {
					a.eq(i).children('span').children('img').attr('src', '')
					a.eq(i).children('span').children('img').attr('choose', 'f')
					return
				}
			}
			//颜色与婚纱规格
			var colorleng = $('.main-left .colorjs li').length
			for(var j = 0; j < colorleng; j++) {
				if($('.main-left .colorjs li').children('section').eq(j).text() == zonghuitxt) {
					$('.main-left .colorjs li').eq(j).children('span').attr('choose', 'dui')
					$('.main-left .colorjs li').eq(j).children('span').css('display', 'none')
					return
				}
			}
			var silhouetteg = $('.main-left .silhouette li').length
			for(var k = 0; k < silhouetteg; k++) {
				if($('.main-left .silhouette li').children('section').eq(k).text() == zonghuitxt) {
					$('.main-left .silhouette li').eq(k).children('span').attr('choose', 'dui')
					$('.main-left .silhouette li').eq(k).children('span').css('display', 'none')
					$('.main-left .silhouette li').eq(k).css('border', '1px solid #d6d6d6')
					return
				}
			}
		})
		clearshow()
	})
	//添加规格
	$('.main-left .refin ul li').not('.gg-show ul li').each(function() {
		$(this).click(function() {
			var txt = $(this).text()
			if($(this).children('span').children('img').attr('choose') == "f") {
				$('.gg-show ul').append("<li>" + txt + "<span><img choose='f' src='images/cuo.png' alt='' ></span></li>");
				clearshow()
			}
			if($(this).children('span').children('img').attr('choose') == "t") {
				var b = $('.gg-show ul li').length
				for(var i = 0; i < b; i++) {
					if($('.gg-show ul li').eq(i).text() == txt) {
						$('.gg-show ul li').eq(i).remove()
						clearshow()
						return
					}
				}
			}
		})
	})
	//颜色添加
	$('.main-left .colorjs li').each(function() {
		$(this).click(function() {
			var txt = $(this).children('section').text()
			if($(this).children('span').attr('choose') == "dui") {
				$('.gg-show ul').append("<li>" + txt + "<span><img choose='f' src='images/cuo.png' alt='' ></span></li>");
				clearshow()
			}
			if($(this).children('span').attr('choose') == 'dui-show') {
				var b = $('.gg-show ul li').length
				for(var i = 0; i < b; i++) {
					if($('.gg-show ul li').eq(i).text() == txt) {
						$('.gg-show ul li').eq(i).remove()
						clearshow()
						return
					}
				}
			}
		})
	})
	//婚纱规格添加
	$('.main-left .silhouette ul li').each(function() {
		$(this).click(function() {
			var txt = $(this).children('section').text()
			if($(this).children('span').attr('choose') == "dui") {
				$('.gg-show ul').append("<li>" + txt + "<span><img choose='f' src='images/cuo.png' alt='' ></span></li>");
				clearshow()
			}
			if($(this).children('span').attr('choose') == 'dui-show') {
				var b = $('.gg-show ul li').length
				for(var i = 0; i < b; i++) {
					if($('.gg-show ul li').eq(i).text() == txt) {
						$('.gg-show ul li').eq(i).remove()
						clearshow()
						return
					}
				}
			}
		})
	})
	//详细页滚动图
	function detailed() {
		//init
		var $box = $('.detailed-lb ul')
		var num = $box.find('li').length;
		$box.css({
			'width': 69 * num + 'px'
		});
		//auto play while num>4
		if(num >= 5) {
			$('.detailed-lb-left').click(function() {
				$box.animate({
					"left": "0px"
				})
			})
			$('.detailed-lb-right').click(function() {
				$box.animate({
					"left": "-" + (69 * 5) + "px"
				})
			})
		}
	}
	detailed();
	//详情页价钱滚动图
	function price() {
		var $box = $('.detailed-price-m ul')
		var num = $box.find('li').length;
		var w = $box.find('li').width();
		var i = 0,
			m = 0
		$box.css({
			'width': (w * num) + 'px'
		});

		if(num >= 3) {
			$('.detailed-price-r').click(function() {
				if(i == num - 3) {
					m = 0;
				} else if(i == 0) {
					m = 1;
				}
				if(m) {
					i++;
					$box.stop(true, true).animate({
						"left": "-=" + w + "px"
					})
				} else {
					i--;
					$box.stop(true, true).animate({
						"left": "+=" + w + "px"
					})
				}
				if(i == num - 3) {
					$('.detailed-price-r i').removeClass("icon-right").addClass('icon-left')
				}
				if(i == 0) {
					$('.detailed-price-r i').removeClass("icon-left").addClass('icon-right')
				}
			})
		}
	}
	price();
	//自定义样式是否展示，无货的颜色
	$(".size-gg select").on('change', function() {
		var ss = $(this).children("option:selected").html()
		var content_last = $(".size-gg select").children('option:last-child').text()
		if(ss == content_last) {
			$(".custom").css('display', 'block')
			$('.color-img li').each(function() {
				$(this).removeClass('nohave')
			})
		} else {
			$(".custom").css('display', 'none')
			$('.color-img li').each(function() {
				if($(this).attr('name') == "none") {
					$(this).addClass('nohave')
				}
			})
			$('.size-show').hide()
		}
	})

	//详情页选项卡
	$('.detailed-choosecard li').each(function(i) {
		$(this).hover(function() {
			$(this).addClass('active').siblings().removeClass('active')
			$('.card-show .con-show').eq(i).css('display', 'block').siblings().css('display', 'none')
		})
	})
	//详情页Reviews轮播图 
	function reviews() {
		//init
		var $box = $('.hid-ul')
		var num = $box.find('li').not('.hid-ul li ul li').length;
		var wid = $box.find('li').not('.hid-ul li ul li').width();
		$box.css({
			'width': wid * num + 'px'
		});
		if(num > 1) {
			var t = setInterval(proFeatureAuto, 5000);

			function proFeatureAuto() {
				$box.stop(true, true).animate({
					'margin-left': "-" + wid + 'px'
				}, 300, function() {
					$box.find('li:first').not('.hid-ul li ul li').appendTo($box);
					$box.css('margin-left', '0');
				});
			}
			$('.hid-ul').hover(function() {
				clearInterval(t);
			}, function() {
				t = setInterval(proFeatureAuto, 5000);
			})
			$('.reviews-lbt i').eq(0).unbind('click').click(function() {
				$box.find('li:last').not('.hid-ul li ul li').prependTo($box);
				$box.css({
					'margin-left': "-" + wid + 'px'
				});
				$box.stop(true, true).animate({
					'margin-left': '0'
				}, 300);
			})
			$('.reviews-lbt i').eq(1).unbind('click').click(function() {
				proFeatureAuto();
			})
		}
	}
	reviews();
	//详情页颜色选择
	function colorimg() {
		$('.color-img li').each(function() {
			$(this).hover(function() {
				if($(this).hasClass('nohave')) {
					return false
				} else {
					$(this).addClass('choose-img')
					$(".jqzoom").attr('src', $(this).find("img").attr("mid"));
					$(".jqzoom").attr('rel', $(this).find("img").attr("big"));
				}
			}, function() {
				$(this).removeClass('choose-img')
			})

		})
	}
	colorimg()
	$('.color-img li').bind('click', $(this), function(e) {
		$(this).click(function(e) {
			if($(this).hasClass('nohave')) {
				return false
			} else {
				var colortitle = $(this).attr('title')
				$(this).parents('.color-img').siblings('div').children('.showcolor').text(colortitle)
				$(this).addClass('choose-img').siblings().removeClass('choose-img')
				$(this).hover(function() {}, function() {
					$(this).addClass('choose-img').siblings().removeClass('choose-img')
				})
			}
		})
	})

	function history() {
		//init
		var $box = $('.history-hid ul')
		var num = $box.find('li').length;
		$box.css({
			'width': 160 * num + 'px'
		});
		if(num > 7) {
			var t = setInterval(proFeatureAuto, 4000);

			function proFeatureAuto() {
				$box.stop(true, true).animate({
					'margin-left': '-160px'
				}, 300, function() {
					$box.find('li:first').appendTo($box);
					$box.css('margin-left', '0');
				});
			}
			$('.history-lbt').hover(function() {
				clearInterval(t);
			}, function() {
				t = setInterval(proFeatureAuto, 4000);
			})
			//btn
			$('.history-lbt i').eq(0).unbind('click').click(function() {
				$box.find('li:last').prependTo($box);
				$box.css({
					'margin-left': '-160px'
				});
				$box.stop(true, true).animate({
					'margin-left': '0'
				}, 300);
			})
			$('.history-lbt i').eq(1).unbind('click').click(function() {
				proFeatureAuto();
			})
		}
	}
	history();
	//运费展示隐藏
	$('.cost .yunshu').click(function() {
		$('.cost-hid').slideToggle()
	})
	//Size跳转
	$('.make-count i').click(function() {
		$('.count-down ').slideToggle()
	})
	//详情页定位
	$('.chart').click(function() {
		$('.detailed-choosecard li').eq(1).addClass('active').siblings().removeClass('active')
		$('.con-show').eq(1).css('display', 'block').siblings().css('display', 'none')
		if($('.topbanner').hasClass('active')) {
			$('html, body').animate({
				"scrollTop": ($('#chart').offset().top - 178)
			}, 800);
		} else {
			$('html, body').animate({
				"scrollTop": ($('#chart').offset().top - 92)
			}, 800);
		}

	})
	$('.pj').click(function() {
		if($('.topbanner').hasClass('active')) {
			$('html, body').animate({
				"scrollTop": ($('.reviews').offset().top - 178)
			}, 800);
		} else {
			$('html, body').animate({
				"scrollTop": ($('.reviews').offset().top - 92)
			}, 800);
		}
	})
	//下架页轮播
	function unseal() {
		if($('.unseal-silde').length > 0 && $('.unseal-silde .swiper-slide').length > 1) {
			var swiper = new Swiper('.unseal-silde  .swiper-container', {
				slidesPerView: 1,
				pagination: '.unseal-silde  .swiper-pagination',
				uniqueNavElements: false,
				paginationClickable: true,
				spaceBetween: 0,
				loop: true,
				autoplay: 5000,
				autoplayDisableOnInteraction: false
			});
		}
		$('.unseal-silde').hover(function() {
			swiper.stopAutoplay()
		}, function() {
			swiper.startAutoplay()
		})
	}
	unseal();
	//	//规格的不同尺码选择cm  inch
	//	function zidingyin() {
	//		var ss = $(".custom-gg select option:selected").text()
	//		if(ss == $(".custom-gg select option:last-child").text()) {
	//			var result = $(".custom-detailed-cm").find('option:selected').map(function() {
	//				return $(this).text();
	//			})
	//			var results = []
	//			var err = null
	//			var content = $(".size-gg select").children('option').eq(0).text()
	//			for(var i = 0; i < result.length; i++) {
	//				if(result[i] == content) {
	//					err = result[i]
	//					$(".custom-detailed-cm").find('section').eq(i).children('select').css('border', '1px solid red')
	//				} else {
	//					$(".custom-detailed-cm").find('section').eq(i).children('select').css('border', '1px solid #c0c0c0')
	//				}
	//				results.push(result[i].replace($(".custom-gg select option:last-child").text(), ''))
	//			}
	//			if(err) {
	//				alert('Please fill your specific measurement of Bust.')
	//			} else {
	//				$('.custom').css('display', 'none')
	//				$('.size-show').css('display', 'block')
	//				$('.midify').css('display', 'inline-block')
	//				$(".size-show section").each(function() {
	//					$(this).find(".size-number").text(results[$(this).index()])
	//					$(this).find(".size-big").text($(".custom-gg select option:last-child").text() + ',')
	//				})
	//			}
	//
	//		} else if(ss == $(".custom-gg select option:first-child").text()) {
	//			var result = $(".custom-detailed-inch").find('option:selected').map(function() {
	//				return $(this).text();
	//			})
	//			var results = []
	//			var err = null
	//			var content = $(".size-gg select").children('option').eq(0).text()
	//
	//			for(var i = 0; i < result.length; i++) {
	//				if(result[i] == content) {
	//					err = result[i]
	//					$(".custom-detailed-inch").find('section').eq(i).children('select').css('border', '1px solid red')
	//				} else {
	//					$(".custom-detailed-inch").find('section').eq(i).children('select').css('border', '1px solid #c0c0c0')
	//				}
	//				results.push(result[i].replace($(".custom-gg select option:first-child").text(), ''))
	//			}
	//			if(err) {
	//				alert('Please fill your specific measurement of Bust.')
	//			} else {
	//				$('.custom').css('display', 'none')
	//				$('.size-show').css('display', 'block')
	//				$('.midify').css('display', 'inline-block')
	//				$(".size-show section").each(function() {
	//					$(this).find(".size-number").html(results[$(this).index()])
	//					$(this).find(".size-big").html($(".custom-gg select option:first-child").text() + ',')
	//				})
	//			}
	//		}
	//	}

	function zidingyi() {
		$('.size-big').text($(".custom-gg option:selected").text())
		var result = $(".custom-detailed-cm").find('option:selected').map(function() {
			return $(this).text();
		})
		var content = $(".size-gg select").children('option').eq(0).text()
		var results = []
		var err = null
		for(var i = 0; i < result.length; i++) {
			if(result[i] == content) {
				err = result[i]
				$(".custom-detailed-cm").find('section').eq(i).children('select').css('border', '1px solid red')
			} else {
				$(".custom-detailed-cm").find('section').eq(i).children('select').css('border', '1px solid #c0c0c0')
			}
			results.push(result[i].replace($(".custom-gg select option:first-child").text(), ''))
		}
		if(err) {
			alert('Please fill your specific measurement of Bust.')
		} else {
			$('.custom').css('display', 'none')
			$('.size-show').css('display', 'block')
			$('.midify').css('display', 'inline-block')
			$(".size-show section").each(function() {
				$(this).find(".size-number").html(results[$(this).index()])

			})
		}
	}

	//custom-show
	$('.custom-gg').on('change', function() {
		var thistxt = $(".custom-gg option:selected").text()
		$('.chim').text(thistxt)
	})
	$('.measure').click(function() {
		$('.detailed-choosecard li').eq(3).addClass('active').siblings().removeClass('active')
		$('.con-show').eq(3).css('display', 'block').siblings().css('display', 'none')
	})
	$(".subm").click(function() {
		zidingyi()
	})
	$('.midify').click(function() {
		$('.custom').css('display', 'block')
		$(this).css('display', 'none')
	})

	$('.opt ul li').each(function() {
		$(this).click(function() {
			if($(this).hasClass('havenone')) {
				return false
			} else {
				$(this).addClass('selopt').siblings().removeClass('selopt')
				var opttext = $(this).text()
				$(this).parents('ul').siblings('.option-show').text(opttext)
			}
		})
	})

	function choose() {
		var ss = $('.size-gg select option:selected').text()
		var borderli = $(".color-img ul li")
		var count = 0
		var count2 = 0
		for(var i = 0; i < borderli.length; i++) {
			if(borderli.eq(i).hasClass('choose-img')) {
				count++
			}
		}
		var content = $(".size-gg select").children('option').eq(0).html()
		var content_last = $(".size-gg select").children('option:last-child').html()
		$('.opt ul li').each(function() {
			if($(this).hasClass('selopt')) {
				count2++
			}
		})
		if(count <= 0) {
			alert('Please select a color')
		} else if(ss == content_last) {
			zidingyi()
		} else if(ss == content) {
			alert('Please select a size')
		} else if(count2 <= 0) {
			alert('Please select a option')
		}
	}
	//规格显示
	$(".size-gg select").bind('change', function() {
		var showsize = $(this).find('option:selected').text()
		var content = $(".size-gg select").children('option').eq(0).html()
		var content_last = $(".size-gg select").children('option:last-child').html()
		if(showsize == content || showsize == content_last) {
			$(this).parents('.size-gg').siblings('.size-title').children('.show-size').text("")
		} else {
			$(this).parents('.size-gg').siblings('.size-title').children('.show-size').text(showsize)
		}
	})
	//提交按钮判断
	$('form').submit(function(ev) {
		ev.preventDefault()
		choose()
	})
	var once = 0
	$('.but-btn a').click(function() {
		choose()
		if(once) {
			return
		} else {
			var shuliang = $('.all-goods').text()
			shuliang++
			$('.all-goods').text(shuliang)
			once = 1
		}
		//如果不需要上面的代码计算数量。
		//		$('.all-goods').text($('.header-search .search-right .shop-bag .bag-have li').length)

	})
	$('.r-r i').click(function() {
		$(this).siblings('.r-child').slideToggle()
	})
	$('.r-r .r-border .icon-down').click(function() {
		$(this).parents().siblings('.r-child').slideToggle()
	})

	$('.trans i').click(function() {
		$(this).siblings('.trans-child').slideToggle()
	})
	$('.trans-child input').click(function() {
		if($(this).is(':checked')) {
			$(this).parent('td').parent('tr').addClass('bg-change')
			$(this).parent('td').parent('tr').siblings().removeClass('bg-change')
		}
	})

	$('.address  li').each(function() {
		if($(this).children('i').eq(0).hasClass('icon-dui1')) {
			$(this).show().siblings().hide()
			$(this).children('section').children('.icon-cuo').css('display', 'none')
		} else if($(this).children('i').eq(0).hasClass('icon-quan')) {
			$(this).children('section').children('.icon-cuo').css('display', 'inline')
		}
		$(this).click(function() {
			$(this).addClass('address-bg').siblings().removeClass('address-bg')
			$(this).children('i').eq(0).removeClass('icon-quan').addClass('icon-dui1')
			$(this).children('i').eq(0).css('color', 'red').parent().siblings().children('i').css('color', 'black').removeClass('icon-dui1').addClass('icon-quan')
			//			$(this).prependTo('.address')
			if($(this).children('i').eq(0).hasClass('icon-dui1')) {
				$(this).children('section').children('.icon-cuo').css('display', 'none')
				$(this).siblings().children('section').children('.icon-cuo').css('display', 'inline')
			} else if($(this).children('i').eq(0).hasClass('icon-quan')) {
				$(this).children('section').children('.icon-cuo').css('display', 'inline')
				$(this).siblings().children('section').children('.icon-cuo').css('display', 'none')
			}
		})
	})
	$('.hid-add .showhid').click(function() {
		if($('.address  li').is(':hidden')) {
			$(this).children('span').text("Hide")
			$(this).children('i').removeClass('icon-down1').addClass('icon-up')
		} else {
			$(this).children('span').text("Show")
			$(this).children('i').removeClass('icon-up').addClass('icon-down1')
		}
		$(".address .address-bg").siblings().slideToggle()
	})
	$('.address  li .icon-cuo').click(function() {
		//		if($(this).parents('li').children('i').eq(0).hasClass('icon-dui1')) {
		//						alert('当前为默认地址，不能删除')
		//		} else {
		//			$(this).parents().parents('li').remove()
		//		}
		$(this).parents().parents('li').remove()
	})
	//邮费价格
	$(".trans ").each(function(i) {
		$(this).find("a:first").click(function() {
			var aa = $(".trans").eq(i).find('input[type=radio]:checked').parent().next().text()
			var price = $(".trans").eq(i).find('input[type=radio]:checked').parent().next().next().children('span').text()
			//			price =price.replace('US $ ','')
			$(".trans").eq(i).find('.trans-h').text(aa)
			var dd = $(".trans").eq(i).parent().parent().find('.choose .order-num').text(price)
			$(".trans").eq(i).find('.trans-child').slideUp()
			allp()
		})
		$(this).find("a:last-child").click(function() {
			$(".trans").eq(i).find('.trans-child').slideUp()
		})
	})

	function ordercalc() {
		$('.order-l').each(function() {
			if($(this).children().hasClass('soldout') || $(this).children().hasClass('available')) {
				$(this).parent().siblings('.updown').css('cursor', 'no-drop')
				$(this).parent().siblings('.updown').children().css('cursor', 'no-drop')
				return
			} else {
				$(this).parent().siblings('.updown').children('.sub').click(function() {
					var c = $(this).siblings(".odrder-cont").text()
					c--
					if(c == 0) {
						return
					}
					$(this).siblings(".odrder-cont").text(c)
				})
				$(this).parent().siblings('.updown').children('.add').click(function() {
					var b = $(this).siblings(".odrder-cont").text()
					b++
					$(this).siblings(".odrder-cont").text(b)
				})
			}
		})
	}
	ordercalc()
	//购物车清单删除
	$('.r-r section .icon-lajixiang').click(function() {
		$(this).parents().parents().parent('tr').remove()
		summary()
	})

	$('.r-img').each(function() {
		$(this).children("i").eq(0).click(function() {
			if($(this).hasClass('icon-heart')) {
				$(this).removeClass('icon-heart').addClass('icon-heart1')
				$(this).css('color', 'red')
			} else if($(this).hasClass('icon-heart1')) {
				$(this).removeClass('icon-heart1').addClass('icon-heart')
				$(this).css('color', '#d2d2d2')
			}
		})
	})

	function showMask() {
		//		$('body').css("overflow", "hidden")
		$("#cover").show();
	}
	$('.cover').click(function() {
		$(this).hide()
		$('.alter').hide()
		$('.show-login').hide()
		clo()
	})
	$('.address li ').each(function() {
		$(this).children('section').children('i').eq(0).click(function() {
			showMask()
			$('.alter').css('display', 'block')
		})
	})
	//添加Modify样式
	function addborder() {
		$('.mod-color  ul li').each(function() {
			$(this).click(function() {

				$(this).children('i').css('display', 'block')
				$(this).siblings().children('i').css('display', 'none')
			})
		})
		$('.mod-size ul li').each(function() {
			$(this).click(function() {
				$(this).addClass('on').siblings().removeClass('on')
			})
		})
		$('.mod-option ul li').each(function() {
			$(this).click(function() {
				$(this).addClass('on').siblings().removeClass('on')
			})
		})
	}
	addborder()
	//色卡选择
	$('.color-chart-all span').each(function(i) {
		$(this).click(function() {
			$(this).addClass('on').siblings().removeClass('on')
			$('.color-chart-eve div').eq(i).addClass('show-color').siblings().removeClass('show-color')
		})
	})
	//运输选择
	$('.trans-gj').bind('change', function() {
		var trans = $('.trans-gj option:selected').text()
		$('.kd-btn a').eq(0).click(function() {
			$('.where').text(trans)
		})
	})
	$('.kd-btn a').click(function() {
		$('.cost-hid').slideUp()
	})
	$('.choose-kd').each(function() {
		var b = $('.dan').text()
		var yf = 0
		$(this).children('input').click(function() {
			if($(this).is(':checked')) {
				var feiy = $(this).parent('td').siblings('.shipprice').text()
				var feiynum = $(this).parent('td').siblings('.shipprice').children('.shipnum').text()
				var how = $(this).parent('td').siblings('.tongguo').children('img').attr('title')
				$('.kd-btn a').eq(0).click(function() {
					$('.feiy').text(feiy)
					$('.yh').text(how)
					yf = parseFloat(b) + parseFloat(feiynum)
					$('.dan').text(yf.toFixed(2))
				})
			}
		})
	})
	//订单中mod选择
	function modcho() {
		$(".mod-btn a:first-child").click(function() {
			var optionParent = $(this).parent().prev().find('li')
			var sizeParent = $(this).parent().prev().prev().find("li")
			var colorParent = $(this).parent().prev().prev().prev().find("i")
			var option = ''
			for(var i = 0; i < optionParent.length; i++) {
				if(optionParent.eq(i).hasClass('on')) {
					option = optionParent[i].innerHTML
				}
			}
			var optionContent = $(this).parent().parent().parent().prev().find('.order_opt').text()
			var optionContents = $(this).parent().parent().parent().prev().find('.mod-opg').text()
			if(option) {
				$(this).parent().parent().parent().prev().find('.order_opt').text('[' + option + ']')
				$(this).parent().parent().parent().prev().find('.mod-opg').text(option)
			} else {
				$(this).parent().parent().parent().prev().find('.order_opt').text(optionContent)
				$(this).parent().parent().parent().prev().find('.mod-opg').text(sizeContents)
			}
			var size = ''
			for(var i = 0; i < sizeParent.length; i++) {
				if(sizeParent.eq(i).hasClass('on')) {
					size = sizeParent[i].innerHTML
					if(sizeParent.last().hasClass('on')) {
						size = sizeParent.last().children('span').text()
					}
				}
			}
			var sizeContent = $(this).parent().parent().parent().prev().find('.order_size').text()
			var sizeContents = $(this).parent().parent().parent().prev().find('.mod-dx').text()
			if(size) {
				for(var i = 0; i < sizeParent.length; i++) {
					if(sizeParent.eq(i).hasClass('on')) {
						$(this).parent().parent().parent().prev().find('.mod-ggsize').text("Size:")
						if(sizeParent.last().hasClass('on')) {
							$(this).parent().parent().parent().prev().find('.mod-ggsize').text("Custom:")
						}
					}
				}
				$(this).parent().parent().parent().prev().find('.order_size').text('[' + size + ']')
				$(this).parent().parent().parent().prev().find('.mod-dx').text(size)
			} else {
				$(this).parent().parent().parent().prev().find('.order_size').text(sizeContent)
				$(this).parent().parent().parent().prev().find('.mod-dx').text(sizeContents)
			}
			var color = ''
			for(var i = 0; i < colorParent.length; i++) {
				if(colorParent[i].style.display == 'block') {
					color = colorParent[i].parentNode.title
				}
			}
			var colorContent = $(this).parent().parent().parent().prev().find('.order_col').text()
			var colorContents = $(this).parent().parent().parent().prev().find('.mod-ys').text()
			if(color) {
				$(this).parent().parent().parent().prev().find('.order_col').text('[' + color + ']')
				$(this).parent().parent().parent().prev().find('.mod-ys').text(color)
			} else {
				$(this).parent().parent().parent().prev().find('.order_col').text(colorContent)
				$(this).parent().parent().parent().prev().find('.mod-ys').eq(0).text(colorContents)
			}
		})
		$('.mod-btn a').click(function() {
			$('.r-child').slideUp()
		})
	}
	modcho()

	$('.tanchaung li').eq(0).click(function() {
		$('.show-login div .ac').show()
		$('.show-login div .du').hide()
		$(this).removeClass('on').siblings().addClass('on')
	})
	$('.tanchaung li').eq(1).click(function() {
		$('.show-login div .du').show()
		$('.show-login div .ac').hide()
		$(this).removeClass('on').siblings().addClass('on')
	})
	//有产品页价格
	function priceone() {
		$(".nologin-l .order-all .onp").each(function() {
			var price1 = parseInt($(this).text())
			var num1 = parseInt($(this).parent().parent().prev().find('.odrder-cont').text())
			$(this).parent().parent().next().find('.order-num').text((price1 * num1).toFixed(2))
		})

		function jisuan(PRICE) {
			var price = parseInt(PRICE.parent().next().find('.onp').text())
			var num = parseInt(PRICE.siblings('.odrder-cont').text())
			return price * num
		}
		$(".nologin-l .add").click(function() {
			$(this).parent().next().next().find('.order-num').text((jisuan($(this))).toFixed(2))
			summary()
			yuanshijiaqian()
		})
		$('.nologin-l .sub').click(function() {
			$(this).parent().next().next().find('.order-num').text((jisuan($(this))).toFixed(2))
			summary()
			yuanshijiaqian()
		})
	}
	priceone()

	function summary() {
		var total = 0
		$('.have-order .order-num').each(function() {
			var cost = parseFloat($(this).text())
			var out = $(this).parent().parent().siblings().children(".order-l")
			if(out.children().hasClass('soldout') || 　out.children().hasClass('available')) {
				cost = 0
			}
			total += cost
			$('.summary').text(total.toFixed(2))
		})
	}
	summary()

	//原始状态时的价格
	function addprice() {
		$(".order-all .order-num").each(function() {
			var price2 = $(this).text()
			var num2 = $(this).parent().prev().find('.odrder-cont').text()
			//			$(this).text(price2 * num2)
			$(".order-eve .add").click(function() {
				var th = $(this).siblings('.odrder-cont').text()
				//				$(this).parent().next().find('.order-num').text(price2 * th)
				allp()
			})
			$('.order-eve .sub').click(function() {
				var th = $(this).siblings('.odrder-cont').text()
				//				$(this).parent().next().find('.order-num').text(price2 * th)
				allp()
			})
		})
	}
	addprice()
	//order总价
	function allp() {
		$('.all-order').text($('.eorder').length)
		var shopc = 0
		var kong = 0
		$('.order .order-all .zongj').each(function() {
			var shopprice = parseFloat($(this).text())
			var num = $(this).parents().siblings('.updown').children('.odrder-cont').text()
			var kong = num * shopprice
			shopc += kong
			$('.subtotal').text(shopc.toFixed(2))
		})
		var shipc = 0
		$('.shipcost').each(function() {
			var shipcost = parseFloat($(this).text())
			shipc += shipcost
			$('.shipone').text(shipc.toFixed(2))
		})
		var alltotla = parseFloat($('.shipone').text()) + parseFloat($('.subtotal').text())
		$('.cartotal').text(alltotla.toFixed(2))
	}
	allp()
	$('.adress-main .icon-close').click(function() {
		$('.cover').hide()
		$('.alter').hide()
	})

	// 不打折前原始价钱计算
	function yuanshijiaqian() {
		var all = 0
		$('.yuanshi').each(function() {
			var shu = $(this).parents('.order-all').siblings('.updown').children('.odrder-cont').text()
			var yuanshidanjia = parseFloat($(this).text())
			var out = $(this).parents().siblings().children(".order-l")
			if(out.children().hasClass('soldout') || out.children().hasClass('available')) {
				yuanshidanjia = 0
			}
			all += yuanshidanjia * shu
			$('.yuanshijq').text(all.toFixed(2))
		})

	}
	yuanshijiaqian()
	//对号点击的价钱计算
	$('.cho-order i').each(function() {
		var torf = $(this).parent().next().children('.order-l').children()
		if(torf.hasClass('soldout') || torf.hasClass('available')) {
			$(this).css('cursor', 'no-drop')
			$(this).removeClass('icon-dui1').addClass('icon-quan')
		}
		$(this).click(function() {
			if(torf.hasClass('soldout') || torf.hasClass('available')) {
				return
			} else {
				if($(this).hasClass('icon-quan')) {
					$(this).removeClass('icon-quan').addClass('icon-dui1')
					var danjia = parseFloat($(this).parent().siblings('.choose').find('.order-num').text())
					var zongjia = parseFloat($('.summary').text())
					var jieguo = parseFloat(zongjia + danjia)
					summary()
					var yuanlai = parseFloat($('.yuanshijq').text())
					var xianzai = parseFloat($(this).parent().siblings('.order-all').find('.yuanshi').text())
					var xianzaishu = parseFloat($(this).parent().siblings('.updown').find('.odrder-cont').text())
					var xianzaizong = xianzaishu * xianzai
					var now = parseFloat(yuanlai + xianzaizong)
					$('.yuanshijq').text(now.toFixed(2))
					$('.summary').text(jieguo.toFixed(2))
				} else if($(this).hasClass('icon-dui1')) {
					$(this).removeClass('icon-dui1').addClass('icon-quan')
					var danjia = parseFloat($(this).parent().siblings('.choose').find('.order-num').text())
					var zongjia = parseFloat($('.summary').text())
					var jieguo = parseFloat(zongjia - danjia)
					summary()
					var yuanlai = parseFloat($('.yuanshijq').text())
					var xianzai = parseFloat($(this).parent().siblings('.order-all').find('.yuanshi').text())
					var xianzaishu = parseFloat($(this).parent().siblings('.updown').find('.odrder-cont').text())
					var xianzaizong = xianzaishu * xianzai
					var now = parseFloat(yuanlai - xianzaizong)
					$('.yuanshijq').text(now.toFixed(2))
					$('.summary').text(jieguo.toFixed(2))
				}
			}
		})
	})

	//支付页支付方式选择
	$('.next').click(function() {
		$('.visa input[type=checkbox]').each(function() {
			if($(this).is(":checked")) {
				//do something
			} else {
				alert('Please select your payment method.')
			}
		})
	})

	$('.showaddress').click(function() {
		$('.cover').show()
		$('.alter').show()
	})
	//add  导航展示
	$('.znav li').each(function(i) {
		$(this).hover(function() {
			$('.nav-child .c-bg').eq(i).children('div').show()
			$('.nav-child .c-bg').eq(i).children('div').hover(function() {
				$(this).show()
			}, function() {
				$(this).hide()
			})
		}, function() {
			$('.nav-child .c-bg').eq(i).children('div').hide()
		})
	})

	$('.custom-btn a').eq(1).click(function() {
		$('.custom').hide()
		$('.size-gg option:first').prop("selected", 'selected');
	})

	$('.net').click(function() {
		var kong = 0
		var bk = 0
		$('.air').each(function() {
			if($(this).val() == "") {
				kong = 1
			}
		})
		$('.air1').each(function() {
			var b = $(this).children('option:first-child').text()
			if($('.air1').eq(0).val() == b || $('.air1').eq(1).val() == b) {
				bk = 1
			}
		})
		if(kong == "1" || bk == "1") {
			alert('Please save the shipping address.')
		}
	})

	$('.upup').click(function() {
		var sc = $(window).scrollTop();
		$('body,html').animate({
			scrollTop: 0
		}, 500);
	})
	//上传名字
	$(".a-upload").on("change", "input[type='file']", function() {
		var filePath = $(this).val()
		if(filePath.indexOf("jpg") != -1 || filePath.indexOf("png") != -1 || filePath.indexOf("jpeg") != -1) {
			var arr = filePath.split('\\')
			var fileName = arr[arr.length - 1]
			$(".imgname").show()
			$(".showname").text(fileName)
			$(".showname").attr('title', fileName)
		} else {
			return false
		}
	})
	$(".imgname i").click(function() {

		$(this).parents('.imgname').hide()
	})

	function clo() {
		$('.conversation').hide()
		$('.cover').hide()
	}

	function sho() {
		$('.conversation').show()
		$('.cover').show()
	}
	$('.ques').click(function() {
		sho()
	})
	$('.lam').click(function() {
		sho()
	})
	$('.conversation .icon-close').click(function() {
		clo()
	})
	$('.conversationbtn a').click(function() {
		clo()
	})

	$('.register-btn').click(function() {
		var xuanzhong = 0
		$('.agree input[type=checkbox]').each(function() {
			if($(this).is(':checked')) {
				xuanzhong++
			}
		})
		if(xuanzhong == 0 || xuanzhong == 1) {
			alert('Please check the statement')
		}
	})
	var zongjia1 = 0
	var alltotal = 0
	$('.zongj1').each(function() {
		var pri = parseFloat($(this).text())
		zongjia1 += pri
		$('.subtotal1').text(zongjia1.toFixed(2))
		alltotal = parseInt($('.subtotal1').text()) + parseInt($('.shipone').text())
		$('.cartotal1').text(alltotal.toFixed(2))
	})
})

var type;
var kc = 51;
var shuliangjiaqian = [{
	"num": "1",
	"price": "10"
}, {
	"num": "5",
	"price": "16"
}, {
	"num": "12",
	"price": "25"
}, {
	"num": "20",
	"price": "60"
}, {
	"num": "23",
	"price": "88"
}]

function piliang() {
	var len = shuliangjiaqian.length;
	var lll = []
	for(var c = 0; c < len; c++) {
		lll.push(shuliangjiaqian[c].num)
	}
	lll.splice(0, 3)
	$('.contnum').each(function(i) {
		if(i < 3) {
			$('.calcupdown-l section .calcdown').click(function() {
				var b = $('.calcnumber').text()
				b++
				//					for (z = 0; z>lll.length;z++) {
				$(this).click(function() {
					console.log($(this).prototype)
				})
				//					}	
			})
		}
	})

	function calc() {
		var jianshu = parseInt($('.calcupdown-l section .calcnumber').text())
		for(var index in shuliangjiaqian) {
			if(index <= len - 2) {
				var c = parseInt(index) + 1
				if(jianshu >= parseInt(shuliangjiaqian[index].num) && jianshu < parseInt(shuliangjiaqian[c].num)) {
					var jia = shuliangjiaqian[index].price
					var allprice = parseInt(jia * jianshu)
					$('.dan').text(allprice.toFixed(2))
				}
				var max = parseInt(shuliangjiaqian[len - 1].num)
				var maxparice = parseInt(shuliangjiaqian[len - 1].price)
				if(jianshu >= max) {
					var maxallprice = parseInt(jianshu * maxparice)
					$('.dan').text(maxallprice.toFixed(2))

				}
			}
		}
	}
	$('.calcupdown-l section .calcup').click(function() {
		var c = $('.calcnumber').text()
		c--
		if(c == 0) {
			return
		}
		$('.calcnumber').text(c)
		calc()
	})
	$('.calcupdown-l section .calcdown').click(function() {
		var b = $('.calcnumber').text()
		if(b >= kc) {
			alert('库存没这么多')
		} else {
			b++
			$('.calcnumber').text(b)
			calc()
		}
	})
}
piliang()

//add
$('.sear_fdj').click(function(e) {
	e.stopPropagation();
	$(this).children('i').hide()
	$(this).children('input').show()
	$('.help').hide()
	$('.sign').hide()
})

$(document).click(function(e) {
	e.stopPropagation();
	$('.sear_fdj i').show()
	$('.sear_fdj').children('input').hide()
	$('.help').show()
	$('.sign').show()
})

$('.chosseoptions input[type=radio]').each(function() {
	if($(this).is(':checked')) {
		$(this).parents('tr').css('background', '#f6f6f6')
	}
})

$('.chosseoptions input[type=radio]').click(function() {
	$(this).parents('tr').css('background', '#f6f6f6')
	$(this).parents('tr').siblings('tr').css('background', '#FFF')
})

$('.color-img li').click(function() {
	var ccc = $(this).children('img').attr('src')
	$('#cloud-zoom-big').css('background-image', 'url(' + ccc + ')')
	$('#cloud-zoom-big').remove()
})

function ordfixed() {
	var ccc = $('.xuanting').offset().top
	$(window).scroll(function() {
		if($(document).scrollTop() > ccc) {
			$('.xuanting').addClass('fixed')
		} else {
			$('.xuanting').removeClass('fixed')
		}
	})
}
ordfixed()

