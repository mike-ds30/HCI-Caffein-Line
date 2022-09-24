var coffee_menu_open = false;
var tea_menu_open = false;
$(document).ready(
    function() {
        $(".menu_btn_img").attr("src", "desserts/triangle-left.png");
        $(".coffeedessert_menu").hide();
        $(".teadessert_menu").hide();
        $(".coffeedessert_category").click(function() {
            if(!coffee_menu_open) {
                $(".teadessert_menu").slideUp(500);
                $(".coffeedessert_menu").slideDown(500);
                coffee_menu_open = true;
                tea_menu_open = false;
            } else {
                $(".coffeedessert_menu").slideUp(500);
                coffee_menu_open = false;
            }
        })
        $(".teadessert_category").click(function() {
            if(!tea_menu_open) {
                $(".coffeedessert_menu").slideUp(500);
                $(".teadessert_menu").slideDown(500);
                tea_menu_open = true;
                coffee_menu_open = false;
            } else {
                $(".teadessert_menu").slideUp(500);
                tea_menu_open = false;
            }
        })
        var menu_down = false;
        if(!menu_down) {
            $(".dd_btn_img").on({
                mouseenter: function() {
                    $(".dd_btn_img").attr("src", "desserts/menu_hover.png");
                },
                mouseleave: function() {
                    if(!menu_down) $(".dd_btn_img").attr("src", "desserts/menu.png");
                }
            })
        }
        $(".dd_btn_img").click(function() {
            if(menu_down) {
                $(".dd_btn_img").attr("src", "desserts/menu.png");
                menu_down = false;
            } else {
                $(".dd_btn_img").attr("src", "desserts/menu_hover.png");
                menu_down = true;
            }
        })
        $(".fb_img").on({
            mouseenter: function() {
                $(".fb_img").attr("src", "desserts/facebook_hover.png");
            },
            mouseleave: function() {
                $(".fb_img").attr("src", "desserts/facebook_idle.png");
            }
        })
        $(".ig_img").on({
            mouseenter: function() {
                $(".ig_img").attr("src", "desserts/instagram_hover.png");
            },
            mouseleave: function() {
                $(".ig_img").attr("src", "desserts/instagram_idle.png");
            }
        })
        $(".yt_img").on({
            mouseenter: function() {
                $(".yt_img").attr("src", "desserts/youtube_hover.png");
            },
            mouseleave: function() {
                $(".yt_img").attr("src", "desserts/youtube_idle.png");
            }
        })
    }
)
function add_to_cart(name) {
    var amount = prompt("Please specify the quantity of " + name + " that you will purchase:");
    while(true) {
        if(amount == null) return false;
        else if(amount == "" || isNaN(amount)) {
            amount = prompt("Invalid amount!\nPlease specify the quantity of " + name + " that you will purchase:");
        } else if(amount < 1) {
            amount = prompt("Invalid amount!\nPlease specify the quantity of " + name + " that you will purchase:");
        } else {
            break;
        }
    }
    alert("You have added " + amount + " " + name + " to your cart!\nPlease proceed to the payment form to compete your purchase.\nEnjoy your desserts!");
    return false;
}