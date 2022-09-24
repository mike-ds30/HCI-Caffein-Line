var coffee_menu_open = false;
var tea_menu_open = false;
$(document).ready(
    function() {
        $(".menu_btn_img").attr("src", "beverages/triangle-left.png");
        $(".coffee_menu").hide();
        $(".tea_menu").hide();
        $(".coffee_category").click(function() {
            if(!coffee_menu_open) {
                $(".tea_menu").slideUp(500);
                $(".coffee_menu").slideDown(500);
                coffee_menu_open = true;
                tea_menu_open = false;
            } else {
                $(".coffee_menu").slideUp(500);
                coffee_menu_open = false;
            }
        })
        $(".tea_category").click(function() {
            if(!tea_menu_open) {
                $(".coffee_menu").slideUp(500);
                $(".tea_menu").slideDown(500);
                tea_menu_open = true;
                coffee_menu_open = false;
            } else {
                $(".tea_menu").slideUp(500);
                tea_menu_open = false;
            }
        })
        var menu_down = false;
        if(!menu_down) {
            $(".dd_btn_img").on({
                mouseenter: function() {
                    $(".dd_btn_img").attr("src", "beverages/menu_hover.png");
                },
                mouseleave: function() {
                    if(!menu_down) $(".dd_btn_img").attr("src", "beverages/menu.png");
                }
            })
        }
        $(".dd_btn_img").click(function() {
            if(menu_down) {
                $(".dd_btn_img").attr("src", "beverages/menu.png");
                menu_down = false;
            } else {
                $(".dd_btn_img").attr("src", "beverages/menu_hover.png");
                menu_down = true;
            }
        })
        $(".fb_img").on({
            mouseenter: function() {
                $(".fb_img").attr("src", "beverages/facebook_hover.png");
            },
            mouseleave: function() {
                $(".fb_img").attr("src", "beverages/facebook_idle.png");
            }
        })
        $(".ig_img").on({
            mouseenter: function() {
                $(".ig_img").attr("src", "beverages/instagram_hover.png");
            },
            mouseleave: function() {
                $(".ig_img").attr("src", "beverages/instagram_idle.png");
            }
        })
        $(".yt_img").on({
            mouseenter: function() {
                $(".yt_img").attr("src", "beverages/youtube_hover.png");
            },
            mouseleave: function() {
                $(".yt_img").attr("src", "beverages/youtube_idle.png");
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
    alert("You have added " + amount + " " + name + " to your cart!\nPlease proceed to the payment form to compete your purchase.\nEnjoy your drinks!");
    return false;
}