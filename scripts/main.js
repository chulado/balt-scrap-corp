function wheel(a){var b=-1*Math.max(-1,Math.min(1,a.wheelDelta||-a.detail));$(window).scrollLeft($(window).scrollLeft()+25*b)}!function(a,b,c){function d(b,c){this.element=b,this.settings=a.extend({},e,c),this._defaults=e,this._name=f,this.init()}var e={label:"MENU",duplicate:!0,duration:200,easingOpen:"swing",easingClose:"swing",closedSymbol:"&#9658;",openedSymbol:"&#9660;",prependTo:"body",parentTag:"a",closeOnClick:!1,allowParentLinks:!1,nestedParentLinks:!0,showChildren:!1,brand:"",init:function(){},open:function(){},close:function(){}},f="slicknav",g="slicknav";d.prototype.init=function(){var c,d,e=this,f=a(this.element),h=this.settings;if(h.duplicate?(e.mobileNav=f.clone(),e.mobileNav.removeAttr("id"),e.mobileNav.find("*").each(function(b,c){a(c).removeAttr("id")})):e.mobileNav=f,c=g+"_icon",""===h.label&&(c+=" "+g+"_no-text"),"a"==h.parentTag&&(h.parentTag='a href="#"'),e.mobileNav.attr("class",g+"_nav"),d=a('<div class="'+g+'_menu"></div>'),""!==h.brand){var i=a('<div class="'+g+'_brand">'+h.brand+"</div>");a(d).append(i)}e.btn=a(["<"+h.parentTag+' aria-haspopup="true" tabindex="0" class="'+g+"_btn "+g+'_collapsed">','<span class="'+g+'_menutxt">'+h.label+"</span>",'<span class="'+c+'">','<span class="'+g+'_icon-bar"></span>','<span class="'+g+'_icon-bar"></span>','<span class="'+g+'_icon-bar"></span>',"</span>","</"+h.parentTag+">"].join("")),a(d).append(e.btn),a(h.prependTo).prepend(d),d.append(e.mobileNav);var j=e.mobileNav.find("li");a(j).each(function(){var b=a(this),c={};if(c.children=b.children("ul").attr("role","menu"),b.data("menu",c),c.children.length>0){var d=b.contents(),f=!1;nodes=[],a(d).each(function(){return a(this).is("ul")?!1:(nodes.push(this),void(a(this).is("a")&&(f=!0)))});var i=a("<"+h.parentTag+' role="menuitem" aria-haspopup="true" tabindex="-1" class="'+g+'_item"/>');if(h.allowParentLinks&&!h.nestedParentLinks&&f)a(nodes).wrapAll('<span class="'+g+"_parent-link "+g+'_row"/>').parent();else{var j=a(nodes).wrapAll(i).parent();j.addClass(g+"_row")}b.addClass(g+"_collapsed"),b.addClass(g+"_parent");var k=a('<span class="'+g+'_arrow">'+h.closedSymbol+"</span>");h.allowParentLinks&&!h.nestedParentLinks&&f&&(k=k.wrap(i).parent()),a(nodes).last().after(k)}else 0===b.children().length&&b.addClass(g+"_txtnode");b.children("a").attr("role","menuitem").click(function(b){h.closeOnClick&&!a(b.target).parent().closest("li").hasClass(g+"_parent")&&a(e.btn).click()}),h.closeOnClick&&h.allowParentLinks&&(b.children("a").children("a").click(function(b){a(e.btn).click()}),b.find("."+g+"_parent-link a:not(."+g+"_item)").click(function(b){a(e.btn).click()}))}),a(j).each(function(){var b=a(this).data("menu");h.showChildren||e._visibilityToggle(b.children,null,!1,null,!0)}),e._visibilityToggle(e.mobileNav,null,!1,"init",!0),e.mobileNav.attr("role","menu"),a(b).mousedown(function(){e._outlines(!1)}),a(b).keyup(function(){e._outlines(!0)}),a(e.btn).click(function(a){a.preventDefault(),e._menuToggle()}),e.mobileNav.on("click","."+g+"_item",function(b){b.preventDefault(),e._itemClick(a(this))}),a(e.btn).keydown(function(a){var b=a||event;13==b.keyCode&&(a.preventDefault(),e._menuToggle())}),e.mobileNav.on("keydown","."+g+"_item",function(b){var c=b||event;13==c.keyCode&&(b.preventDefault(),e._itemClick(a(b.target)))}),h.allowParentLinks&&h.nestedParentLinks&&a("."+g+"_item a").click(function(a){a.stopImmediatePropagation()})},d.prototype._menuToggle=function(a){var b=this,c=b.btn,d=b.mobileNav;c.hasClass(g+"_collapsed")?(c.removeClass(g+"_collapsed"),c.addClass(g+"_open")):(c.removeClass(g+"_open"),c.addClass(g+"_collapsed")),c.addClass(g+"_animating"),b._visibilityToggle(d,c.parent(),!0,c)},d.prototype._itemClick=function(a){var b=this,c=b.settings,d=a.data("menu");d||(d={},d.arrow=a.children("."+g+"_arrow"),d.ul=a.next("ul"),d.parent=a.parent(),d.parent.hasClass(g+"_parent-link")&&(d.parent=a.parent().parent(),d.ul=a.parent().next("ul")),a.data("menu",d)),d.parent.hasClass(g+"_collapsed")?(d.arrow.html(c.openedSymbol),d.parent.removeClass(g+"_collapsed"),d.parent.addClass(g+"_open"),d.parent.addClass(g+"_animating"),b._visibilityToggle(d.ul,d.parent,!0,a)):(d.arrow.html(c.closedSymbol),d.parent.addClass(g+"_collapsed"),d.parent.removeClass(g+"_open"),d.parent.addClass(g+"_animating"),b._visibilityToggle(d.ul,d.parent,!0,a))},d.prototype._visibilityToggle=function(b,c,d,e,f){var h=this,i=h.settings,j=h._getActionItems(b),k=0;d&&(k=i.duration),b.hasClass(g+"_hidden")?(b.removeClass(g+"_hidden"),b.slideDown(k,i.easingOpen,function(){a(e).removeClass(g+"_animating"),a(c).removeClass(g+"_animating"),f||i.open(e)}),b.attr("aria-hidden","false"),j.attr("tabindex","0"),h._setVisAttr(b,!1)):(b.addClass(g+"_hidden"),b.slideUp(k,this.settings.easingClose,function(){b.attr("aria-hidden","true"),j.attr("tabindex","-1"),h._setVisAttr(b,!0),b.hide(),a(e).removeClass(g+"_animating"),a(c).removeClass(g+"_animating"),f?"init"==e&&i.init():i.close(e)}))},d.prototype._setVisAttr=function(b,c){var d=this,e=b.children("li").children("ul").not("."+g+"_hidden");e.each(c?function(){var b=a(this);b.attr("aria-hidden","true");var e=d._getActionItems(b);e.attr("tabindex","-1"),d._setVisAttr(b,c)}:function(){var b=a(this);b.attr("aria-hidden","false");var e=d._getActionItems(b);e.attr("tabindex","0"),d._setVisAttr(b,c)})},d.prototype._getActionItems=function(a){var b=a.data("menu");if(!b){b={};var c=a.children("li"),d=c.find("a");b.links=d.add(c.find("."+g+"_item")),a.data("menu",b)}return b.links},d.prototype._outlines=function(b){b?a("."+g+"_item, ."+g+"_btn").css("outline",""):a("."+g+"_item, ."+g+"_btn").css("outline","none")},d.prototype.toggle=function(){var a=this;a._menuToggle()},d.prototype.open=function(){var a=this;a.btn.hasClass(g+"_collapsed")&&a._menuToggle()},d.prototype.close=function(){var a=this;a.btn.hasClass(g+"_open")&&a._menuToggle()},a.fn[f]=function(b){var c=arguments;if(void 0===b||"object"==typeof b)return this.each(function(){a.data(this,"plugin_"+f)||a.data(this,"plugin_"+f,new d(this,b))});if("string"==typeof b&&"_"!==b[0]&&"init"!==b){var e;return this.each(function(){var g=a.data(this,"plugin_"+f);g instanceof d&&"function"==typeof g[b]&&(e=g[b].apply(g,Array.prototype.slice.call(c,1)))}),void 0!==e?e:this}}}(jQuery,document,window);var keysUp=[38,33,36,37],keysDown=[40,34,32,39];$(window).on("keydown",function(a){for(var b=keysUp.length;b--;)if(a.keyCode===keysUp[b])return void $(window).scrollLeft($(window).scrollLeft()-25);for(var b=keysDown.length;b--;)if(a.keyCode===keysDown[b])return void $(window).scrollLeft($(window).scrollLeft()+25)}),window.addEventListener&&window.addEventListener("DOMMouseScroll",wheel,!1),window.onmousewheel=document.onmousewheel=wheel,$(".sidemenu").slicknav({prependTo:".main-nav"}),$(".slicknav_nav a").click(function(a){a.preventDefault(),$("html, body").animate({scrollLeft:$($(a.target).attr("href")).offset().left})});