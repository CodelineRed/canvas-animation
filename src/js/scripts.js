// jQuery.noConflict();
(function($) {
    $(document).ready(function() {
        hljs.initHighlightingOnLoad();
        $('#love').canvasAnimation(loveConfig);
        $('#twitch').canvasAnimation(twitchConfig);
        
//        $('code').each(function() {
//            var line = 1;
//            code = $(this).html();
//            $(this).html(code.replace(/^/gm, function() {
//                return '<span class="line-number">' + line++ + '</span>';
//            }));
//        });
    });
})(jQuery);

var loveConfig = {
    autoplay : true,
    infinity: false,
    steps : [
        {
            addClass : 'ca-1',
            duration : 800
        },
        {
            addClass : 'ca-2',
            duration : 800
        },
        {
            addClass : 'ca-3',
            duration : 800
        },
        {
            addClass : 'ca-4',
            duration : 500
        }
    ]
};

var twitchConfig = {
    autoplay : false,
    infinity: true,
    controls_fa: 5,
    steps : [
        {
            addClass : 'ca-1',
            duration : 1800
        },
        {
            addClass : 'ca-2',
            duration : 500
        },
        {
            addClass : 'ca-3',
            duration : 100
        },
        {
            addClass : 'ca-4',
            duration : 1800
        },
        {
            addClass : 'ca-5',
            duration : 500
        },
        {
            addClass : 'ca-6',
            duration : 100
        },
        {
            addClass : 'ca-7',
            duration : 1800
        },
        {
            addClass : 'ca-8',
            duration : 500
        },
        {
            addClass : 'ca-9',
            duration : 100
        },
        {
            addClass : 'ca-10',
            duration : 2900
        },
        {
            addClass : 'ca-11',
            duration : 500
        },
        {
            addClass : 'ca-12',
            duration : 300
        },
        {
            addClass : 'ca-13',
            duration : 300
        },
        {
            addClass : 'ca-14',
            duration : 300
        },
        {
            addClass : 'ca-15',
            duration : 300
        }
    ]
};