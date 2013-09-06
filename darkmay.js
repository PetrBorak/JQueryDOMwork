$(document).ready(function(){
/* MASKA */
var ResetChb = function(obj){
  $(obj).parent().siblings(“.checkbox”).children(“.checkboxWrapper”).removeClass(“checked”);
	$(obj).parent().siblings(“.checkbox”).children(“.checkboxWrapper”).addClass(“notChecked”);
	$(obj).parent().siblings(“.checkbox”).children(“.checkboxWrapper”).children(‘input[type=checkbox]’).attr(‘checked’, false);
};
$(‘.search-mask-sb .select select’).wrap(‘<div class=”selectWrapper” />’);
$(‘.search-mask-sb .checkbox input[type!=”hidden”] ‘).wrap(‘<div class=”checkboxWrapper” />’);

$(“.checkboxWrapper”).click(function(){
if (!$(this).children(‘input’).attr(‘disabled’)){
	if ($(this).children(‘input’).is(‘:checked’)){
		ResetChb(this);
		$(this).children(‘input’).attr(‘checked’, false);
		$(this).removeClass(“checked”);
		$(this).addClass(“notChecked”);
	}else{
		ResetChb(this);
		$(this).children(‘input’).attr(‘checked’, true);
		$(this).removeClass(“notChecked”);
		
$(this).addClass(“checked”);
}
}
});
if ($.browser.opera){
	$(“.search-mask-sb .select select”).css(“background”,”rgba(0,0,0,0)”);
}
$(‘.checkboxWrapper input[type=checkbox]’).each(function(){
if ($(this).attr(‘checked’) == “checked”){
	$(this).parent().addClass(“checked”);
}
if($(this).attr(‘disabled’)){
	$(this).parent().css(“opacity”,”0.3”);
}
});
/* WEATHER */
$(“.side-weather .cd-content”).each(function(){
	var tab = document.createElement(“table”);
  	$(this).children(“ul”).each(function(){
  	var row = document.createElement(“tr”);
  	var cell1 = document.createElement(“td”);
  	var cell2 = document.createElement(“td”);
  	var cell3 = document.createElement(“td”);
  	$(cell1).html($(this).children(“li:nth-child(1)”).html());
  	$(cell2).html($(this).children(“li:nth-child(2)”).html());
  	$(cell3).html($(this).children(“li:nth-child(3)”).html());
  	$(row).append(cell1);
  	$(row).append(cell2);
  	$(row).append(cell3);
  	$(tab).append(row);
});
  $(this).empty();
  $(this).append(tab);
});

/* DLOUHY NADPIS */
$(‘.master-title .text’).each(function(){
if( $(this).width() > 550 ){
	$(this).parent().addClass(‘longTitle’);
}
});

/* ODSTRANENI ROURY - FOOTER */
var $a = $(‘span.footer2 a’);
$(‘span.footer2’).html($a);
/* SQUARE NABIDKA - VLOZENI CLEAR DIVU */
$(‘.top-offer-square:nth-child(3n)’).after(“<div class=’clear’ />”);

/* TOP OFFER SQUARE */
var N03 = {
	init: function() {
		$(‘.top-offer-square’).each(
		function(i, obj){
			N03.getMeal(i, obj);
			N03.getState(i, obj);
			N03.getPicture(i, obj);
			N03.getHotel(i, obj, 30);
			N03.getTerm(i, obj);
			N03.getStars(i, obj);
			N03.getPrice(i, obj);
			N03.getTransport(i, obj);
			N03.getDetail(i, obj);
			N03.built(i, obj);
});
},

//END N03.INIT
	getPicture: function(i, obj){
		N03.init.picture = $(obj).find(‘.img’).parent();
},
	getState: function(i, obj){
		N03.init.state = $(obj).find(‘h2 a’);
},
	getHotel: function(i, obj, max){
		var hotelText = $(obj).find(‘.tod-hotel a’).text();
		if(hotelText.length > max){hotelText = hotelText.substring(0, max) + ‘...’;}
			var hotelA = document.createElement(‘a’);
			var hotelAhref = $(obj).find(‘.tod-hotel a’).attr(‘href’);
			$(hotelA).attr(‘href’,hotelAhref);
			$(hotelA).append(hotelText);
			var pHotel = document.createElement(‘p’);
			$(pHotel).addClass(‘hotelP’);
			$(pHotel).append(hotelA);
			N03.init.hotel = pHotel;
},
	getTerm: function(i, obj){
		var last = $(obj).find(‘.date strong’);
		N03.init.termLast = $(last).html();
		var term = $(obj).find(‘.date’);
		$(term).find(‘strong’).remove();
		N03.init.termDate = $(term).html();
},
	getMeal: function(i, obj){
		var mealText = $(obj).find(“.tod-hotel”).next(“p”).text();
		var s = mealText.split(“,”);
		N03.init.meal = s[0];
},
	getStars: function(i, obj){
		N03.init.stars = $(obj).find(‘.nb.star’).eq(0).parent();
},
	getPrice: function(i, obj){
		var p = $(obj).find(‘.price strong’);
		N03.init.price = p;
},
	getTransport: function(i, obj){
	N03.init.transport = $(obj).find(‘.transport-icon’).attr(“alt”);
},
	getDetail: function(i, obj){
		var detailP = document.createElement(‘p’);
		var detailPHref = $(obj).find(‘.img’).parent().attr(‘href’);
		var detailLink = document.createElement(‘a’);
		$(detailLink).attr(‘href’,detailPHref);
		$(detailLink).append(‘Více >>’);
		$(detailP).append(detailLink);
		$(detailP).addClass(‘detail’);
		N03.init.detail = detailP;
},
	built: function(i,obj){
		$(obj).empty();
		var hotelDiv = document.createElement(‘div’);
		var priceDiv = document.createElement(‘div’);
		var imageDiv = document.createElement(‘div’);
		var starsDiv = document.createElement(‘div’);
		var termDateDiv = document.createElement(‘div’);
		var termLastDiv = document.createElement(‘div’);
		var stateDiv = document.createElement(‘div’);
		var transportDiv = document.createElement(‘div’);
		var foodDiv = document.createElement(‘div’);
		var detail = document.createElement(‘div’);
		var info = document.createElement(‘div’);
		$(stateDiv).addClass(‘state’);
		$(hotelDiv).addClass(‘hot’);
		$(priceDiv).addClass(‘price’);
		$(imageDiv).addClass(‘thumb’);
		$(starsDiv).addClass(‘starsD’);
		$(termDateDiv).addClass(‘termDate’);
		$(termLastDiv).addClass(‘termLast’);
		$(transportDiv).addClass(‘transportDiv’);
		$(foodDiv).addClass(‘foodDiv’);
		$(detail).addClass(‘detail’);
		$(info).addClass(‘infoWrapper’);
		$(obj).append(imageDiv);
		$(obj).append(starsDiv);
		$(obj).append(hotelDiv);
		$(obj).append(stateDiv);
		$(info).append(termDateDiv);
		$(info).append(termLastDiv);
		$(info).append(transportDiv);
		$(info).append(foodDiv);
		$(info).append(priceDiv);
		$(obj).append(info);
		$(obj).append(detail);
		$(termDateDiv).append(N03.init.termDate);
		$(termDateDiv).prepend(“Dátum: “);
		$(termLastDiv).append(N03.init.termLast);
		$(termLastDiv).prepend(“Dåžka: “);
		$(hotelDiv).append(N03.init.hotel);
		$(priceDiv).append(N03.init.price);
		$(imageDiv).append(N03.init.picture);
		$(starsDiv).append(N03.init.stars);
		$(transportDiv).append(N03.init.transport);
		$(transportDiv).prepend(“Doprava: “);
		$(foodDiv).append(N03.init.meal);
		$(foodDiv).prepend(“Strava: “);
		$(detail).append(N03.init.detail);
		$(stateDiv).append(N03.init.state);
}
};
//END N03

N03.init();

/* HUGE LINE */
var N02 = {
	init: function() {
		var state;
		var location;
		var hotel;
		var termLong;
		var term;
		var meal;
		var transport;
		var price;
		var percent;
		var stars;
		var detail;
		$(‘.top-offer-huge-line’).each(
			function(i, obj){
				N02.getState(i, obj);
				N02.getLocation(i, obj);
				N02.getTermLong(i, obj);
				N02.getTerm(i, obj);
				N02.getMeal(i, obj);
				N02.getTransport(i, obj);
				N02.getPrice(i, obj);
				N02.getPercent(i, obj);
				N02.getPicture(i, obj);
				N02.getStars(i, obj);
				N02.getHotel(i, obj);
				N02.getDetail(i , obj);
				N02.built(i, obj);
});
},

//END N02.INIT
	getState: function(i, obj){
		var stateText = $(obj).find(‘.land a:nth-child(1)’);
		var divState = document.createElement(‘div’);
		$(divState).addClass(‘stat’);
		$(divState).prepend(stateText);
		N02.init.state = divState;
},
	getLocation: function(i, obj){
		if ($(obj).find(‘.land a’).length > 0){
			var locText = $(obj).find(‘.land a’).last();
			var divLoc = document.createElement(‘div’);
			$(divLoc).append(locText);
			$(divLoc).addClass(‘lokace’);
			N02.init.location = divLoc;
		}else{
			N02.init.location = null;
}
},
	getHotel: function(i, obj){
		var hotelText = $(obj).find(‘h2 a’).text();
			if(hotelText.length > 20){hotelText = hotelText.substring(0, 20) + ‘...’;}
		var hotelA = document.createElement(‘a’);
		var hotelAhref = $(obj).find(‘h2 a’).attr(‘href’);
		$(hotelA).attr(‘href’,hotelAhref);
		$(hotelA).append(hotelText);
		var divHotel = document.createElement(‘div’);
		$(divHotel).addClass(‘hotel’);
		$(divHotel).prepend(hotelA);
		N02.init.hotel = divHotel;
},
	getTermLong: function(i, obj){
		var last = $(obj).find(‘.last strong’);
		var termLongText = last.text();
		var termLongDiv = document.createElement(‘div’);
		$(termLongDiv).addClass(‘delka’);
		var pLeft = document.createElement(‘p’);
		var pRight = document.createElement(‘p’);
		$(pLeft).addClass(‘left’).prepend(‘Délka: ‘);
		$(pRight).addClass(‘right’).prepend(termLongText);
		$(termLongDiv).prepend(pLeft);
		$(termLongDiv).append(pRight);
		N02.init.termLong = termLongDiv;
},
	getTerm: function(i, obj){
		var last = $(obj).find(‘.last’);
		last.find(‘strong’).remove();
		var lastText = last.text();
		var lastDiv = document.createElement(‘div’);
		$(lastDiv).addClass(‘termin’);
		var pLeft = document.createElement(‘p’);
		var pRight = document.createElement(‘p’);
		$(pLeft).addClass(‘left’).prepend(‘Termín: ‘);
		$(pRight).addClass(‘right’).prepend(lastText);
		$(lastDiv).prepend(pLeft);
		$(lastDiv).append(pRight);
		N02.init.term = lastDiv;
},
	getMeal: function(i, obj){
		var meal01 = $(obj).find(‘.adds’).text();
		var indexMeal = meal01.indexOf(‘:’);
		meal01 = meal01.substring((indexMeal + 1),(meal01.length + 1));
		var mealOdlet = meal01.indexOf(‘Odlet’);
		var mealLength = meal01.length;
		if(mealOdlet != -1){
			meal01 = meal01.substring(0, mealOdlet);
}
		meal01 = meal01.replace(/\s{2,}/,””);
		var pLeft = document.createElement(‘p’);
		var pRight = document.createElement(‘p’);
		var mealDiv = document.createElement(‘div’);
		$(pLeft).addClass(‘left’);
		$(pRight).addClass(‘right’);
		$(pLeft).append(‘Strava: ‘);
		$(pRight).append(meal01);
		$(mealDiv).addClass(‘strava’).append(pLeft);
		$(mealDiv).append(pRight);
		N02.init.meal = mealDiv;
},
	getTransport: function(i, obj){
		var TA= $(obj).find(‘.transport-icon’).attr(‘alt’);
		var TIdiv = document.createElement(‘div’);
		$(TIdiv).addClass(‘doprava’);
		var leftP = document.createElement(‘p’);
		$(leftP).append(‘Doprava: ‘);
		var rightP = document.createElement(‘p’);
		$(rightP).addClass(‘right’);
		$(leftP).addClass(‘left’);
		$(rightP).append(TA);
		$(TIdiv).append(leftP);
		$(TIdiv).append(rightP);
		N02.init.transport = TIdiv;
},
	getPrice: function(i, obj){
		var kc = $(obj).find(‘.kc a’);
		var kcDiv = document.createElement(‘div’);
		$(kcDiv).addClass(‘cenaInRow’);
		var leftP = document.createElement(‘p’);
		var rightP = document.createElement(‘p’);
		$(leftP).addClass(‘left’);
		$(rightP).addClass(‘right’);
		$(rightP).append(kc);
		//$(leftP).append(‘Cena: ‘);
		$(kcDiv).prepend(leftP);
		$(kcDiv).append(rightP);
		N02.init.price = kcDiv;
},
	getPercent: function(i, obj){
		var per = $(obj).find(‘.percent’);
		if ($(per).text().length > 0){
			var perDiv = document.createElement(‘div’);
			$(perDiv).addClass(‘sleva’);
			var leftP = document.createElement(‘p’);
			var rightP = document.createElement(‘p’);
			$(leftP).addClass(‘left’);
			$(rightP).addClass(‘right’);
			$(rightP).append(per);
			$(leftP).append(‘Sleva: ‘);
			$(perDiv).prepend(leftP);
			$(perDiv).append(rightP);
			$(perDiv).addClass(“red”);
			N02.init.percent = perDiv;
		}else{
			N02.init.percent = null;
}
},
	getStars: function(i, obj){
		var starsP = $(obj).find(‘.nb.star’).parent();
		starsP.addClass(‘stars’);
		N02.stars = starsP;
},
	getPicture: function(i, obj){
		N02.init.picture = $(obj).find(‘.thumb’).get(0);
},
	getDetail: function(i, obj){
		var detailP = document.createElement(‘p’);
		var detailPHref = $(obj).find(‘.img’).parent().attr(‘href’);
		var detailLink = document.createElement(‘a’);
		$(detailLink).attr(‘href’,detailPHref);
		$(detailLink).append(‘Detail >>’);
		$(detailP).append(detailLink);
		$(detailP).addClass(‘detail’);
		N02.init.detail = detailP;
},
	built: function(i, obj){
		$(obj).empty();
		var offer0 = document.createElement(‘div’);
		$(offer0).addClass(‘offer0’);
		$(offer0).prepend(N02.init.picture);
		$(obj).append(offer0);
		var offer1 = document.createElement(‘div’);
		$(offer1).addClass(‘offer1’);
		$(offer1).append(N02.init.hotel);
		$(offer1).append(N02.init.state);
		$(offer1).append(N02.stars);
		$(obj).append(offer1);
		var offer2 = document.createElement(‘div’);
		$(offer2).addClass(‘offer2’);
		$(offer2).append(N02.init.meal);
		$(offer2).append(N02.init.transport);
		$(offer2).append(N02.init.term);
		$(offer2).append(N02.init.termLong);
		$(obj).append(offer2);
		var offer3 = document.createElement(‘div’);
		$(offer3).addClass(‘offer3’);
		$(offer3).append(N02.init.price);
		$(obj).append(offer3);
		$(obj).append(“<div class=’clear’ />”);
}
};
//END N02

N02.init();


var check = {
	init: function(){
		$(‘#search-mask .checkbox input[type!=”hidden”]’).wrap(‘<div class=”checkWrap”/>’);
		check.initiateLoad();
},
	initiateLoad: function(){
		$(‘.checkWrap input’).each(
			function(i, obj){
				var CMC = $(obj);
				var CMCc = CMC.is(‘:checked’);
				check.set(CMCc, CMC, true);
});
		$(‘.checkWrap’).click(
			function(){
				var x = $(this).find(‘input’);
				var y = x.is(‘:checked’);
				check.set(y, x, false);
});
},
	data: function(wid, heig, bp1, bp2){
		this.wid = wid;
		this.heig = heig;
		this.bp1 = bp1;
		this.bp2 = bp2;
},
	set: function(ischecked, input, initload){
		var Ip = input.parent();
		if(initload){
			if(ischecked){
				Ip.css({‘background-position’:’0 0’});
			}else{Ip.css({‘background-position’:’left -19px’});}
		}else{
			if(ischecked){
				check.reset();
			}else{
				check.reset();
				input.attr(‘checked’, true);
				input.parent().css(‘background-position’,’0 0’);
}
}
},
	reset: function(){
		$(‘#sm-fm, #sm-lm’).attr(‘checked’, false);
		$(‘.checkWrap’).css(‘background-position’,’0 -19px’);
}}
check.init();


$(‘.default-design .text’).filter(function(){return /topoffers.*/.test(this.parentNode.parentNode.className)}).	filter(function(){return (!(/master-footer.*/.test(this.parentNode.className)))}).each(function(i, obj){

  var xTxt = $(this).text();
  var xTxtS = xTxt.split(‘ ‘);
  var xTxtSl = xTxtS.length;
  var inTxt = Math.floor(xTxtSl/2);
  xTxtS.splice(inTxt,0,’<span>’);
  xTxtS.splice((xTxtS.length),0,’</span>’);
  var xTxt02 = new String();
  for(var k = 0; k <xTxtS.length; k++){
    xTxt02 +=xTxtS[k];
    if(k!=0) xTxt02 += ‘&nbsp;’;
    $(this).html(xTxt02);
  }
});
footer = {
  init: function(){
  $(‘#loga’).each(function(k,kobj){
    footer.totalLength(k, kobj);
    $(kobj).find(‘ul’).each(function(i, obj){
      $(obj).find(‘li img’).each(function(x,xobj){
      var toC = (60 - $(xobj).height());
      toC /= 2;
      $(xobj).css({‘padding-top’:toC+’px’});
      });
  footer.scrollLeft(i,obj);
    });
  });
},
  totalLength: function(i, obj){
    var tl = 0;
    $(obj).find(‘ul li’).each(function(g,gobj){
      tl += $(gobj).outerWidth(true);
      console.log(‘width: ‘ + tl);
    });
  $(obj).find(‘ul’).css({‘width’:tl+’px’});
  footer.TL = tl;
  },
  TL: 0,
  counter: 0,
  SL: 0,
  scrollLeft: function(i, obj){
    if((footer.TL+footer.counter)<=620){
      clearTimeout(footer.SL);
      footer.scrollRight(i,obj);
      return;
      }
    $(obj).css({‘left’:footer.counter+’px’});
    footer.counter-=2;
    var total = (footer.counter + footer.TL);
    console.log(‘footer counter ‘ + footer.counter+’ footer.TL’+ footer.TL + ‘ total ‘ + total);
    var obj = obj;
    footer.SL = setTimeout(function(){footer.scrollLeft(i,obj)}, 100);
  },
  scrollRight: function(i, obj){
    footer.counter+=2;
    $(obj).css({‘left’:footer.counter+’px’});
    footer.counter++;
    if((footer.counter)>=0){
      clearTimeout(footer.SL);
      footer.scrollLeft(i,obj);
      return;
    }
  footer.SL = setTimeout(function(){footer.scrollRight(i,obj)}, 100);
  }
}
footer.init();