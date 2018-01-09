/*
 *      教學導覽
 */
$(document).ready(function() {
        var tour;

        tour = new Tour({
                debug: true
        });

        tour.addSteps([
                
                {
                        //首頁
                       // path: "/",
                element: ".wall_content",
                content: "<div class='cherry_pop'>新上傳的照片會 顯示在照片牆喔！</div>",
                placement: "bottom"
            },
			
				{
                      //相片列表
                      //  path: "/",
                        element: "#album_edit",
                        content:"<div class='watermelon_pop'>相簿標題、分類和 權限，都可以在這 邊設定喔！</div>",
                        placement: "bottom"
                },
                {
                      //相片內容
                      //  path: "/",
                        element: "#file_like",
                        content:"<div class='peach_pop'>覺得這張照片很讚嗎？ 按下喜歡可以收藏喔！</div>",
                        placement: "top"
                }
				
        ]);


        //tour.start(true);
        tour.restart();

        if (tour.ended()) {
                alert('end');
        };
});