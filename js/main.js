$(document).ready(function(){
    // store features slider
    $(".store-features").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 769,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    //email validation
    var $emailField = $("#subscribe");
    $("#subscribe-submit").click(function(){

        var email = $emailField.val();

        if(email != 0)
        {
            if(!isValidEmailAddress(email))
            {
                $emailField.addClass("invalid");
            } 
        
        } else {
            $emailField.removeClass("invalid");
        }
        event.preventDefault();
    });

    //products filtering
    var flexiblePagination = $("#products-list").flexiblePagination({
        pagingControlsContainer: "#pagination-controls",
        itemsPerPage : 8, 
        searchBoxSelector: ".search-box",
        showGotoFirst: false,
        showGotoLast: false,
        showPrevious: false,
        showNext: false,
        itemSelector : "div.col-sm-3:visible",
        css: {
          paginationLayout: " ",
          btnNumberingClass: "page-link",
          btnActiveClass: "page-link active"
        }
    });

    //remove from list
    $(".remove-from-cart, .overlay-btn").on("click", function() {
      $(this).closest(".col-sm-3").remove();
    });

    //clear list
    var $searchField = $("#find-product"),
        $clearList = $("#clear-list");

    $clearList.on("click", function(){
        $searchField.val('');
        $searchField.keyup();
        $(this).prop('disabled', true);
    });

    // enable button
    $searchField.keyup(function(){
     $("#clear-list").prop('disabled', false);
    });
});
 
 function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}