$(document).ready(function()
{
        $('body').append('<div id="atToTop" class="btn btn-info"><i class="fa fa-arrow-up"></i> Back to Top</div>');

	$(window).scroll(function () 
	{
		if ($(this).scrollTop() != 0) 
		{
			$('#atToTop').fadeIn();
		} 
		else 
		{
			$('#atToTop').fadeOut();
		}
	});

	$('#atToTop').click(function()
	{
	    $("html, body").animate({ scrollTop: 0 }, 600);
	    return false;
	});
});
