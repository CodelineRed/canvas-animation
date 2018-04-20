// jQuery.noConflict();
(function($) {
    $(document).ready(function() {
        $('#love').canvasAnimation(loveConfig);
        $('#twitch').canvasAnimation(twitchConfig);
        $('[data-toggle="tooltip"]').tooltip();
        
        $('.copy-code').click(function() {
            selectText($(this).data('id'));
        });
        
        // initialize code highlighting
        hljs.initHighlighting();
        $('.code-wrap code').each(function() {
            var line = 1;
            var thisCode = $(this);
            
            code = thisCode.html();
            $(this).html(code.replace(/^/gm, function() {
                thisCode.closest('.code-wrap').find('.code-lines').append(line++ + '<br/>');
                return '';
//                return '<span class="line-number">' + line++ + '</span>';
            }));
        });
    });
})(jQuery);