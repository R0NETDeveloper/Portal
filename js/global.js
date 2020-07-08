(function ($) {
    'use strict';
    /*==================================================================
        [ Daterangepicker ]*/
    try {
        $('.js-datepicker').daterangepicker({
            "singleDatePicker": true,
            "showDropdowns": true,
            "autoUpdateInput": false,
            locale: {
                format: 'DD/MM/YYYY'
            },
        });
    
        var myCalendar = $('.js-datepicker');
        var isClick = 0;
    
        $(window).on('click',function(){
            isClick = 0;
        });
    
        $(myCalendar).on('apply.daterangepicker',function(ev, picker){
            isClick = 0;
            $(this).val(picker.startDate.format('DD/MM/YYYY'));
    
        });
    
        $('.js-btn-calendar').on('click',function(e){
            e.stopPropagation();
    
            if(isClick === 1) isClick = 0;
            else if(isClick === 0) isClick = 1;
    
            if (isClick === 1) {
                myCalendar.focus();
            }
        });
    
        $(myCalendar).on('click',function(e){
            e.stopPropagation();
            isClick = 1;
        });
    
        $('.daterangepicker').on('click',function(e){
            e.stopPropagation();
        });
    
    
    } catch(er) {console.log(er);}
    /*[ Select 2 Config ]
        ===========================================================*/
    
    try {
        var selectSimple = $('.js-select-simple');
    
        selectSimple.each(function () {
            var that = $(this);
            var selectBox = that.find('select');
            var selectDropdown = that.find('.select-dropdown');
            selectBox.select2({
                dropdownParent: selectDropdown
            });
        });
    
    } catch (err) {
        console.log(err);
    }
    

})(jQuery);




function runCode() {

  
    document.getElementById("PartnerForm")
    alert("start");

    $.ajax({
        type: "POST",
        url: "https://prod-08.southeastasia.logic.azure.com:443/workflows/cc27086d2446477c895d65a414773a5b/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=zACcckvV5dHhOefqzUQf4iPLUBvWF3k80RVDn9jg5LU",
        data: JSON.stringify({
            first_name: $("#first_name").val(),
            last_name: $("#last_name").val(),
            birthday: $("#birthday").val(),
            email: $("#email").val(),
            id_card: $("#id_card").val(),
            phone: $("#phone").val(),
            subject: $("#subject").val(),
          
        }),
        
        success: function(){},
        dataType: "json",
        contentType : "application/json"
      });


      alert("END");
  
     
   
     }

  

   

 



