$(document).ready(
    function() {
        $(".menu_btn_name").on({
            mouseenter: function() {
                $(".menu_btn_img").attr("src", "index/triangle-left.png");
            },
            mouseleave: function() {
                $(".menu_btn_img").attr("src", "index/triangle-left-black.png");
            }
        })
        var menu_down = false;
        if(!menu_down) {
            $(".dd_btn_img").on({
                mouseenter: function() {
                    $(".dd_btn_img").attr("src", "index/menu_hover.png");
                },
                mouseleave: function() {
                    if(!menu_down) $(".dd_btn_img").attr("src", "index/menu.png");
                }
            })
        }
        $(".dd_btn_img").click(function() {
            if(menu_down) {
                $(".dd_btn_img").attr("src", "index/menu.png");
                menu_down = false;
            } else {
                $(".dd_btn_img").attr("src", "index/menu_hover.png");
                menu_down = true;
            }
        })
        $(".fb_img").on({
            mouseenter: function() {
                $(".fb_img").attr("src", "index/facebook_hover.png");
            },
            mouseleave: function() {
                $(".fb_img").attr("src", "index/facebook_idle.png");
            }
        })
        $(".ig_img").on({
            mouseenter: function() {
                $(".ig_img").attr("src", "index/instagram_hover.png");
            },
            mouseleave: function() {
                $(".ig_img").attr("src", "index/instagram_idle.png");
            }
        })
        $(".yt_img").on({
            mouseenter: function() {
                $(".yt_img").attr("src", "index/youtube_hover.png");
            },
            mouseleave: function() {
                $(".yt_img").attr("src", "index/youtube_idle.png");
            }
        })
        //image slider//

        //on-load actions
        $("li").hide();
        var currImg = $("li").first();
        currImg.show();
        var currIdx = 0;
        var time_counter = 0;

        //utility functions to change arrow
        function begin_slide() {
            $("#prev_img").attr("src", "index/point_back_disable.png");
            $("#next_img").attr("src", "index/point_next_disable.png");
        }
        function end_slide() {
            $("#prev_img").attr("src", "index/point_back.png");
            $("#next_img").attr("src", "index/point_next.png");
        }
        $("#prevBtn").on({
            mouseenter: function() {
                $("#prev_img").attr("src", "index/point_back_hover.png");
            },
            mouseleave: function() {
                $("#prev_img").attr("src", "index/point_back.png");
            }
        })
        $("#nextBtn").on({
            mouseenter: function() {
                $("#next_img").attr("src", "index/point_next_hover.png");
            },
            mouseleave: function() {
                $("#next_img").attr("src", "index/point_next.png");
            }
        })
        //move to next picture on button press
        $("#nextBtn").click(function() {
            begin_slide();
            time_counter = 0;
            disable_button(1700);
            currImg.fadeOut(800, function() {
                if(currIdx == $("li").length - 1) {
                    currIdx = 0;
                    currImg = $("li").first();
                } else {
                    currIdx += 1;
                    currImg = currImg.next();
                }
                currImg.fadeIn(800);
                setTimeout(end_slide, 800);
            })
        })

        //move to previous picture on button press
        $("#prevBtn").click(function() {
            begin_slide();
            time_counter = 0;
            disable_button(1700);
            currImg.fadeOut(800, function() {
                if(currIdx == 0) {
                    currIdx = $("li").length - 1;
                    currImg = $("li").last();
                } else {
                    currIdx -= 1;
                    currImg = currImg.prev();
                }
                currImg.fadeIn(800);
                setTimeout(end_slide, 800);
            })
        })

        //utility function to move to next picture
        function next_image() {
            disable_button(1700);
            currImg.fadeOut(800, function() {
                if(currIdx == $("li").length - 1) {
                    currIdx = 0;
                    currImg = $("li").first();
                } else {
                    currIdx += 1;
                    currImg = currImg.next();
                }
                currImg.fadeIn(800);
                setTimeout(end_slide, 800);
            })
        }

        //disable button pressing during animation to prevent errors
        function disable_button(duration) {
            var nbtn = $("#nextBtn");
            var pbtn = $("#prevBtn");
            nbtn.prop("disabled", true);
            pbtn.prop("disabled", true);
            window.setTimeout(function() {
                nbtn.prop("disabled", false);
                pbtn.prop("disabled", false);
            }, duration)
        }

        //executes automatic image slider
        function slider_loop() {
            disable_button(500);
            begin_slide();
            setTimeout(next_image, 500);
        }

        //timer for automatic image slider
        function slider_looop() {
            time_counter++;
            if(time_counter == 8) {
                slider_loop();
                time_counter = 0;
                setTimeout(slider_looop, 2100);
            } else setTimeout(slider_looop, 1000);
        }
        slider_looop();
    }
)