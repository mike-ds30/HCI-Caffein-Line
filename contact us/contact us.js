$(document).ready(
    function() {
        $(".menu_btn_name").on({
            mouseenter: function() {
                $(".menu_btn_img").attr("src", "contact us/triangle-left.png");
            },
            mouseleave: function() {
                $(".menu_btn_img").attr("src", "contact us/triangle-left-black.png");
            }
        })
        var menu_down = false;
        if(!menu_down) {
            $(".dd_btn_img").on({
                mouseenter: function() {
                    $(".dd_btn_img").attr("src", "contact us/menu_hover.png");
                },
                mouseleave: function() {
                    if(!menu_down) $(".dd_btn_img").attr("src", "contact us/menu.png");
                }
            })
        }
        $(".dd_btn_img").click(function() {
            if(menu_down) {
                $(".dd_btn_img").attr("src", "contact us/menu.png");
                menu_down = false;
            } else {
                $(".dd_btn_img").attr("src", "contact us/menu_hover.png");
                menu_down = true;
            }
        })
        $(".fb_img").on({
            mouseenter: function() {
                $(".fb_img").attr("src", "contact us/facebook_hover.png");
            },
            mouseleave: function() {
                $(".fb_img").attr("src", "contact us/facebook_idle.png");
            }
        })
        $(".ig_img").on({
            mouseenter: function() {
                $(".ig_img").attr("src", "contact us/instagram_hover.png");
            },
            mouseleave: function() {
                $(".ig_img").attr("src", "contact us/instagram_idle.png");
            }
        })
        $(".yt_img").on({
            mouseenter: function() {
                $(".yt_img").attr("src", "contact us/youtube_hover.png");
            },
            mouseleave: function() {
                $(".yt_img").attr("src", "contact us/youtube_idle.png");
            }
        })
    }
)

function validate_contact_us() {
    var name = document.forms["contact_us"]["name"].value;
    var email = document.forms["contact_us"]["email"].value;
    var message = document.forms["contact_us"]["message"].value;
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
    if(message == "") {
        valid = false;
        $(".messageErr").text("Please enter your message!");
        $("#message").css("border-color", "red");
    } else {
        $(".messageErr").text("");
        $("#message").css("border-color", "green");
    }
    if(valid) {
        setTimeout(send, 500);
    }
}
function send() {
    var confirmation = confirm("Are you sure you want to send this message?");
    if(confirmation) {
        alert("Message Received! We will get back to you shortly.");
        document.location.reload();
    }
}