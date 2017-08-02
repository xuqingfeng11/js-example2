(function($){
$.fn.extend({
	btnone:function(){
		this.addClass("btnk");
		this.find("ul>li>div").hide();
		this.find("ul>li").on({
			"mouseover":function(){
				$(this).find("div").show();
			},
			"mouseout": function(){
				$(this).find("div").hide();
			}
		});
		return this;
	}
})
})(jQuery);