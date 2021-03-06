
function trazerCategorias() {
    var data = "&acao=listarIndex";
    $.ajax({
        type: "POST",
        url: "../../controller/ControllerCategoria.php",
        data: data,
        success: function(result){
            $("#catNovoLugar").html(result);
            $("#catLocal").html(result);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr.status);
            console.log(thrownError);
        }
    });
}

$(function() {
    $( "#login" ).button().on( "click", function() {
        $("#dialog-form").dialog({
            autoOpen: false,
            height: 400,
            width: 350,
            modal: true,
            buttons: {
                Cancel: function () {
                    dialog.dialog("close");
                }
            },
            close: function () {
                form[0].reset();
                allFields.removeClass("ui-state-error");
            }
        });
    });

    //Handles menu drop down
    $('.dropdown-menu').find('form').click(function (e) {
        e.stopPropagation();
    });

    function onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: '          + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: '        + profile.getName());
        console.log('Image URL: '   + profile.getImageUrl());
        console.log('Email: '       + profile.getEmail()); // This is null if the 'email' scope is not present.
    }
    trazerCategorias();
});

//});


$.when($(function () {})).done(categoriasCheckbox());


type = ['','info','success','warning','danger'];


demo = {
    // initPickColor: function(){
    //     $('.pick-class-label').click(function(){
    //         var new_class = $(this).attr('new-class');
    //         var old_class = $('#display-buttons').attr('data-class');
    //         var display_div = $('#display-buttons');
    //         if(display_div.length) {
    //             var display_buttons = display_div.find('.btn');
    //             display_buttons.removeClass(old_class);
    //             display_buttons.addClass(new_class);
    //             display_div.attr('data-class', new_class);
    //         }
    //     });
    // },

    initChartist: function(){

        var dataSales = {
            labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
            series: [
                [287, 385, 490, 492, 554, 586, 698, 695, 752, 788, 846, 944],
                [67, 152, 143, 240, 287, 335, 435, 437, 539, 542, 544, 647],
                [23, 113, 67, 108, 190, 239, 307, 308, 439, 410, 410, 509]
            ]
        };

        var optionsSales = {
            lineSmooth: false,
            low: 0,
            high: 800,
            showArea: true,
            height: "245px",
            axisX: {
                showGrid: false,
            },
            lineSmooth: Chartist.Interpolation.simple({
                divisor: 3
            }),
            showLine: false,
            showPoint: false,
        };

        var responsiveSales = [
            ['screen and (max-width: 640px)', {
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];

        Chartist.Line('#chartHours', dataSales, optionsSales, responsiveSales);


        var data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
                [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
            ]
        };

        var options = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: "245px"
        };

        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];

        Chartist.Bar('#chartActivity', data, options, responsiveOptions);

        var dataPreferences = {
            series: [
                [25, 30, 20, 25]
            ]
        };

        var optionsPreferences = {
            donut: true,
            donutWidth: 40,
            startAngle: 0,
            total: 100,
            showLabel: false,
            axisX: {
                showGrid: false
            }
        };

        Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);

        Chartist.Pie('#chartPreferences', {
            labels: ['62%','32%','6%'],
            series: [62, 32, 6]
        });
    },



    showNotification: function(from, align){
        color = Math.floor((Math.random() * 4) + 1);

        $.notify({
            icon: "pe-7s-gift",
            message: "Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for every web developer."

        },{
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            }
        });
    }

}


function categoriasCheckbox() {
    setTimeout(function () {
        $('.button-checkbox').each(function () {
            // Settings
            var $widget = $(this),
                $button = $widget.find('button'),
                $checkbox = $widget.find('input:checkbox'),
                color = $button.data('color'),
                settings = {
                    on: {
                        icon: 'glyphicon glyphicon-check'
                    },
                    off: {
                        icon: 'glyphicon glyphicon-unchecked'
                    }
                };

            // Event Handlers
            $button.on('click', function () {
                $checkbox.prop('checked', !$checkbox.is(':checked'));
                $checkbox.triggerHandler('change');
                updateDisplay();
            });
            $checkbox.on('change', function () {
                updateDisplay();
            });

            // Actions
            function updateDisplay() {
                var isChecked = $checkbox.is(':checked');

                // Set the button's state
                $button.data('state', (isChecked) ? "on" : "off");

                // Set the button's icon
                $button.find('.state-icon')
                    .removeClass()
                    .addClass('state-icon ' + settings[$button.data('state')].icon);

                // Update the button's color
                if (isChecked) {
                    $button
                        .removeClass('btn-default')
                        .addClass('btn-' + color + ' active');
                }
                else {
                    $button
                        .removeClass('btn-' + color + ' active')
                        .addClass('btn-default');
                }
            }

            // Initialization
            function init() {

                updateDisplay();

                // Inject the icon if applicable
                if ($button.find('.state-icon').length == 0) {
                    $button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i> ');
                }
            }
            init();
        });
    },1000)
}

$(document).ready(function(){
    $('#modalAddNovoLugar').on('hidden.bs.modal', function(){
        $('#formAddNovoLugar').trigger("reset");
        $('.button-checkbox').html("<button type='button' id='btnPrivado' class='btn btn-warning' data-color='warning'><span id='textPrivado'>Público</span></button><input type='checkbox' class='hidden' name='privado' value='0'/>");
        $('#input-images').fileinput('reset');
        trazerCategorias();
        categoriasCheckbox();
    });
});

