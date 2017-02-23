/* Javascript for FeedbackXBlock. */
function FeedbackXBlock(runtime, element) {

    function updateCount(result) {
        $('.submitbutton', element).prop('disabled', true);
        $('.successmsg', element).text('Thank you!!!!!');
    }

    var handlerUrl = runtime.handlerUrl(element, 'post_answer');

    $('.submitbutton', element).click(function(eventObject) {
        var answer_value = $('#answer',element).val()
        $.ajax({
            type: "POST",
            url: handlerUrl,
            data: JSON.stringify({"answer": answer_value}),
            success: updateCount
        });
    });

    $(function ($) {
        /* Here's where you'd do things on page load. */
    });
}

