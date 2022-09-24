$(document).ready(
    function() {
        $(".with_visa").hide();
        $(".with_paypal").hide();
        $(".menu_btn_name").on({
            mouseenter: function() {
                $(".menu_btn_img").attr("src", "payment/triangle-left.png");
            },
            mouseleave: function() {
                $(".menu_btn_img").attr("src", "payment/triangle-left-black.png");
            }
        })
        var menu_down = false;
        if(!menu_down) {
            $(".dd_btn_img").on({
                mouseenter: function() {
                    $(".dd_btn_img").attr("src", "payment/menu_hover.png");
                },
                mouseleave: function() {
                    if(!menu_down) $(".dd_btn_img").attr("src", "payment/menu.png");
                }
            })
        }
        $(".dd_btn_img").click(function() {
            if(menu_down) {
                $(".dd_btn_img").attr("src", "payment/menu.png");
                menu_down = false;
            } else {
                $(".dd_btn_img").attr("src", "payment/menu_hover.png");
                menu_down = true;
            }
        })
        $(".fb_img").on({
            mouseenter: function() {
                $(".fb_img").attr("src", "payment/facebook_hover.png");
            },
            mouseleave: function() {
                $(".fb_img").attr("src", "payment/facebook_idle.png");
            }
        })
        $(".ig_img").on({
            mouseenter: function() {
                $(".ig_img").attr("src", "payment/instagram_hover.png");
            },
            mouseleave: function() {
                $(".ig_img").attr("src", "payment/instagram_idle.png");
            }
        })
        $(".yt_img").on({
            mouseenter: function() {
                $(".yt_img").attr("src", "payment/youtube_hover.png");
            },
            mouseleave: function() {
                $(".yt_img").attr("src", "payment/youtube_idle.png");
            }
        })
    }
)
var visa = false;
var paypal = false;
function pay_chosen() {
    var type = document.forms["pay"]["pay_type"].value;
    if(type == "visa") {
        document.getElementById("paypal_acc").value = "";
        $(".paypalaccErr").text("");
        $("#paypal_acc").css("border-color", "lightgrey");
        $(".with_paypal").slideUp(350);
        $(".with_visa").slideDown(350);
        $(".paymentErr").text("");
        $("#pay_type").css("border-color", "green");
        visa = true;
        paypal = false;
    } else if(type == "paypal") {
        document.getElementById("card_num").value = "";
        document.getElementById("validity").value = "";
        document.getElementById("cvv").value = "";
        $(".cardnumErr").text("");
        $("#card_num").css("border-color", "lightgrey");
        $(".validityErr").text("");
        $("#validity").css("border-color", "lightgrey");
        $(".cvvErr").text("");
        $("#cvv").css("border-color", "lightgrey");
        $(".with_visa").slideUp(350);
        $(".with_paypal").slideDown(350);
        $(".paymentErr").text("");
        $("#pay_type").css("border-color", "green");
        paypal = true;
        visa = false;
    } else {
        document.getElementById("card_num").value = "";
        document.getElementById("validity").value = "";
        document.getElementById("cvv").value = "";
        document.getElementById("paypal_acc").value = "";
        $(".cardnumErr").text("");
        $("#card_num").css("border-color", "lightgrey");
        $(".validityErr").text("");
        $("#validity").css("border-color", "lightgrey");
        $(".cvvErr").text("");
        $("#cvv").css("border-color", "lightgrey");
        $(".paypalaccErr").text("");
        $("#paypal_acc").css("border-color", "lightgrey");
        $(".with_visa").slideUp(350);
        $(".with_paypal").slideUp(350);
        $(".paymentErr").text("");
        $("#pay_type").css("border-color", "lightgrey");
        visa = false;
        paypal = false;
    }
}
function validate_pay() {
    var name = document.forms["pay"]["name"].value;
    var email = document.forms["pay"]["email"].value;
    var city = document.forms["pay"]["city"].value;
    var address = document.forms["pay"]["address"].value;
    var pay_type = document.forms["pay"]["pay_type"].value;
    if(pay_type == "visa") {
        var card_num = document.forms["pay"]["card_num"].value;
        var validity = document.forms["pay"]["validity"].value;
        var cvv = document.forms["pay"]["cvv"].value;
    } else if(pay_type == "paypal") {
        var account = document.forms["pay"]["paypal_acc"].value;
    }
    var terms = document.forms["pay"]["terms"].checked;
    var valid = true;
    if(name == "") {
        valid = false;
        $(".nameErr").text("Please enter your name!");
        $("#name").css("border-color", "red");
    } else {
        $(".nameErr").text("");
        $("#name").css("border-color", "green");
    }
    if(email == "") {
        valid = false;
        $(".emailErr").text("Please enter your email!");
        $("#email").css("border-color", "red");
    } else if(email.length < 5) {
        valid = false;
        $(".emailErr").text("Please enter a valid email!");
        $("#email").css("border-color", "red");
    } else {
        var beginning = false, at = false, middle = false, dot = false, end = false;
        for(var i of email) {
            if(!beginning) {
                if(i === '@') break;
                else beginning = true;
            } else if(!at) {
                if(i === '@') at = true;
            } else if(!middle) {
                middle = true;
            } else if(!dot) {
                if(i === '.') dot = true;
            } else if(!end) {
                end = true;
            }
        }
        if(beginning && at && middle && dot && end) {
            $(".emailErr").text("");
            $("#email").css("border-color", "green");
        } else {
            valid = false;
            $(".emailErr").text("Please enter a valid email!");
            $("#email").css("border-color", "red");
        }
    }
    if(city == "") {
        valid = false;
        $(".cityErr").text("Please enter your city!");
        $("#city").css("border-color", "red");
    } else {
        $(".cityErr").text("");
        $("#city").css("border-color", "green");
    }
    if(address == "") {
        valid = false;
        $(".addressErr").text("Please enter your full address!");
        $("#address").css("border-color", "red");
    } else {
        $(".addressErr").text("");
        $("#address").css("border-color", "green");
    }
    if(pay_type === 'none') {
        valid = false;
        $(".paymentErr").text("Please choose a payment method!");
        $("#pay_type").css("border-color", "red");
    } else {
        if(pay_type === 'visa') {
            $(".paypalaccErr").text("");
            $("#paypal_acc").css("border-color", "lightgrey");
            if(card_num == "") {
                valid = false;
                $(".cardnumErr").text("Please enter your card number!");
                $("#card_num").css("border-color", "red");
            } else if(isNaN(card_num)) {
                valid = false;
                $(".cardnumErr").text("Please enter a valid card number!");
                $("#card_num").css("border-color", "red");
            } else if(card_num.length != 16) {
                valid = false;
                $(".cardnumErr").text("Please enter a valid card number!");
                $("#card_num").css("border-color", "red");
            } else {
                $(".cardnumErr").text("");
                $("#card_num").css("border-color", "green");
            }
            if(validity == "") {
                valid = false;
                $(".validityErr").text("Please enter your card's expiry date!");
                $("#validity").css("border-color", "red");
            } else if(validity.length != 5) {
                valid = false;
                $(".validityErr").text("Please enter a valid expiry date!");
                $("#validity").css("border-color", "red");
            } else {
                var m = validity[0] + validity[1];
                var slash = validity[2];
                var y = validity[3] + validity[4];
                if(!isNaN(m) && slash === '/' && !isNaN(y)) {
                    if(!(1 <= m && m <= 12)) {
                        valid = false;
                        $(".validityErr").text("Please enter a valid expiry date!");
                        $("#validity").css("border-color", "red");
                    } else {
                        $(".validityErr").text("");
                        $("#validity").css("border-color", "green");
                    }
                } else {
                    valid = false;
                    $(".validityErr").text("Please enter a valid expiry date!");
                    $("#validity").css("border-color", "red");
                }
            }
            if(cvv == "") {
                valid = false;
                $(".cvvErr").text("Please enter your card's CVV number!");
                $("#cvv").css("border-color", "red");
            } else if(isNaN(cvv)) {
                valid = false;
                $(".cvvErr").text("Please enter a valid CVV number!");
                $("#cvv").css("border-color", "red");
            } else if(cvv.length != 3) {
                valid = false;
                $(".cvvErr").text("Please enter a valid CVV number!");
                $("#cvv").css("border-color", "red");
            } else {
                $(".cvvErr").text("");
                $("#cvv").css("border-color", "green");
            }
        } else {
            if(account == "") {
                valid = false;
                $(".paypalaccErr").text("Please enter your Paypal account email!");
                $("#paypal_acc").css("border-color", "red");
            } else if(account.length < 5) {
                valid = false;
                $(".paypalaccErr").text("Please enter a valid Paypal account email!");
                $("#paypal_acc").css("border-color", "red");
            } else {
                var beginning = false, at = false, middle = false, dot = false, end = false;
                for(var i of account) {
                    if(!beginning) {
                        if(i === '@') break;
                        else beginning = true;
                    } else if(!at) {
                        if(i === '@') at = true;
                    } else if(!middle) {
                        middle = true;
                    } else if(!dot) {
                        if(i === '.') dot = true;
                    } else if(!end) {
                        end = true;
                    }
                }
                if(beginning && at && middle && dot && end) {
                    $(".paypalaccErr").text("");
                    $("#paypal_acc").css("border-color", "green");
                } else {
                    valid = false;
                    $(".paypalaccErr").text("Please enter a valid Paypal account email!");
                    $("#paypal_acc").css("border-color", "red");
                }
            }
        }
    }
    if(!terms) {
        valid = false;
        $(".termsErr").text("You have not agreed to the terms and conditions!");
        $(".condition").css("color", "red");
    } else {
        $(".termsErr").text("");
        $(".condition").css("color", "green");
    }
    if(valid) {
        setTimeout(send, 500);
    }
}
function send() {
    var confirmation = confirm("Are you sure about your order?");
    if(confirmation) {
        alert("Payment confirmed! Your order will arrive tomorrow.");
        document.location.reload();
    }
}