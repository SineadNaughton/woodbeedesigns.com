/*AUTHOR DINGFEN ZHONG*/
 
 
 $(document).ready(function(){
    $("li.a").filter(':nth-child(n+4)').addClass('hide');
    $("ul").on('click','li.q', function(){
      $(this)
        .next()
          .slideDown(200)
          .siblings('li.a')
            .slideUp(200);
    })
  })