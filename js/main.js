$(document).ready(function() {

    $('.promocode').magnificPopup({
        type: 'inline',
        focus: '#text',
        preloader: false
    });

    $(function () {
        $('.btn-popup').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#username',
            modal: true
        });
        $(document).on('click', '.popup-modal-dismiss', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    });


    $(".header__button-menu").click(function(e){
        e.preventDefault();
        $("#menu").toggleClass("show");
    });
    $("#menu a").click(function(event){
        if($(this).next('ul').length){
            $(this).next().toggle('fast');
            $(this).children('i:last-child').toggleClass('fa-caret-down fa-caret-left');
        }
    });



    $('.select-styler').styler();

    function selectIcon() {
      $('.select-icon').styler({
        onFormStyled: function() {
          $('.select-icon .jq-selectbox__dropdown li').each(function(){
            var text = $(this).text(),
                icon = $(this).data('icon'),
                textCont = $(this);
            selectIconItem(textCont,icon,text);
          });

          $('div.select-icon').each(function(){
            var select = $(this),
                textCont = select.find('.jq-selectbox__select-text'),
                icon = select.find('option:selected').data('icon'),
                text = select.find('option:selected').text();
                selectIconItem(textCont,icon,text);
          });
        },
        onSelectClosed: function() {
          var textCont = $(this).find('.jq-selectbox__select-text'),
              icon = $(this).find('option:selected').data('icon'),
              text = $(this).find('option:selected').text();
          selectIconItem(textCont,icon,text);
        }
      });
    }

    function selectCoin() {
      $('.select-coin').styler({
        onFormStyled: function(){
          $('.select-coin .jq-selectbox__dropdown li').each(function(){
            var coin = $(this).data('coin'),
                icon = $(this).data('icon'),
                num = $(this).data('num'),
                textCont = $(this);
            selectCoinItem(textCont,num,icon,coin);
          });

          $('div.select-coin').each(function(){
            var select = $(this),
                textCont = select.find('.jq-selectbox__select-text'),
                coin = select.find('option:selected').data('coin'),
                icon = select.find('option:selected').data('icon'),
                num = select.find('option:selected').data('num');
                selectCoinItem(textCont,num,icon,coin);
          });
        },
        onSelectClosed: function() {
          var textCont = $(this).find('.jq-selectbox__select-text'),
              coin = $(this).find('option:selected').data('coin'),
              icon = $(this).find('option:selected').data('icon'),
              num = $(this).find('option:selected').data('num');
          selectCoinItem(textCont,num,icon,coin);
        }
      });
    }

    function selectCoinItem(textCont,num,icon,coin) {
      textCont.html("<div class='flex-wrap'><div class='col-auto select-coin__num'>"+num+"</div><div class='col-auto ml-auto'><svg class='icon icon--"+icon+"'><use xlink:href='img/svg-sprite.svg#"+icon+"'></use></svg><span class='select-coin__name'>"+coin+"</span></div></div>");
    }
    function selectIconItem(textCont,icon,text) {
      textCont.html("<img src='img/cript-icon/"+icon+".svg'>"+text)
    }

    selectCoin();
    selectIcon()

    

});

$(document).on('click','.menu-substrate',function(){
    $(".header__button-menu").click();
});





function createSimpleSwitcher(items, activeItem, activeItemChangedCallback) {
    var switcherElement = document.createElement('div');
    switcherElement.classList.add('switcher');

    var intervalElements = items.map(function (item) {
        var itemEl = document.createElement('button');
        itemEl.innerText = item;
        itemEl.classList.add('switcher-item');
        itemEl.classList.toggle('switcher-active-item', item === activeItem);
        itemEl.addEventListener('click', function () {
            onItemClicked(item);
        });
        switcherElement.appendChild(itemEl);
        return itemEl;
    });

    function onItemClicked(item) {
        if (item === activeItem) {
            return;
        }

        intervalElements.forEach(function (element, index) {
            element.classList.toggle('switcher-active-item', items[index] === item);
        });

        activeItem = item;

        activeItemChangedCallback(item);
    }

    return switcherElement;
}

var switcherElement = createSimpleSwitcher(['Comic Sans MS', 'Trebuchet MS', 'Serif'], 'Trebuchet MS', function (fontFamily) {
    chart.applyOptions({
        layout: {
            fontFamily: fontFamily,
        },
    });
});


var graphBlock = document.getElementById('graph');
var graphBlockWidth = graphBlock.offsetWidth;
console.log(graphBlockWidth);
var chartElement = document.createElement('div');
//graphBlock.appendChild(chartElement);

var chart = LightweightCharts.createChart(graphBlock, {
    width: graphBlockWidth,
    height: 161,
    layout: {
        fontFamily: 'Comic Sans MS',
        backgroundColor: '#1F253B',
        textColor: '#ffffff'
    },
    priceScale: {
        borderColor: 'rgba(255,255,255,0.5)',
    },
    timeScale: {
        borderColor: 'rgba(255,255,255,0.5)',
    },
    grid: {
        horzLines: {
            color: 'rgba(182,183,184,0.2)',
        },
        vertLines: {
            color: 'rgba(255,255,255,0)',
        },
    },
handleScroll: {
        mouseWheel: false,
        pressedMouseMove: false,
    },
    handleScale: {
        axisPressedMouseMove: false,
        mouseWheel: false,
        pinch: false
    }
});

document.body.appendChild(chartElement);
document.body.appendChild(switcherElement);

var areaSeries = chart.addAreaSeries({
    topColor: 'rgba(33, 150, 243, 0.56)',
    bottomColor: 'rgba(33, 150, 243, 0.04)',
    lineColor: 'rgba(33, 150, 243, 1)',
    lineWidth: 2,
});

areaSeries.setData([
    {
        time: '2018-10-19',
        value: 46.33
    },
    {
        time: '2018-10-22',
        value: 45.97
    },
    {
        time: '2018-10-23',
        value: 46.36
    },
    {
        time: '2018-10-24',
        value: 46.73
    },
    {
        time: '2018-10-25',
        value: 46.51
    },
    {
        time: '2018-10-26',
        value: 45.92
    },
    {
        time: '2018-10-29',
        value: 46.46
    },
    {
        time: '2018-10-30',
        value: 47.63
    },
    {
        time: '2018-10-31',
        value: 47.88
    },
    {
        time: '2018-11-01',
        value: 47.74
    },
    {
        time: '2018-11-02',
        value: 48.00
    },
    {
        time: '2018-11-05',
        value: 48.69
    },
    {
        time: '2018-11-06',
        value: 49.11
    },
    {
        time: '2018-11-07',
        value: 49.37
    },
    {
        time: '2018-11-08',
        value: 49.33
    },
    {
        time: '2018-11-09',
        value: 49.68
    },
    {
        time: '2018-11-12',
        value: 49.87
    },
    {
        time: '2018-11-13',
        value: 49.86
    },
    {
        time: '2018-11-14',
        value: 49.76
    },
    {
        time: '2018-11-15',
        value: 49.74
    },
    {
        time: '2018-11-16',
        value: 50.17
    },
    {
        time: '2018-11-19',
        value: 50.51
    },
    {
        time: '2018-11-20',
        value: 49.38
    },
    {
        time: '2018-11-21',
        value: 48.73
    },
    {
        time: '2018-11-23',
        value: 49.02
    },
    {
        time: '2018-11-26',
        value: 48.87
    },
    {
        time: '2018-11-27',
        value: 49.37
    },
    {
        time: '2018-11-28',
        value: 49.71
    },
    {
        time: '2018-11-29',
        value: 48.98
    },
    {
        time: '2018-11-30',
        value: 50.40
    },
    {
        time: '2018-12-03',
        value: 49.69
    },
    {
        time: '2018-12-04',
        value: 49.58
    },
    {
        time: '2018-12-06',
        value: 49.38
    },
    {
        time: '2018-12-07',
        value: 49.09
    },
    {
        time: '2018-12-10',
        value: 49.24
    },
    {
        time: '2018-12-11',
        value: 49.54
    },
    {
        time: '2018-12-12',
        value: 49.22
    },
    {
        time: '2018-12-13',
        value: 49.47
    },
    {
        time: '2018-12-14',
        value: 49.34
    },
    {
        time: '2018-12-17',
        value: 48.33
    },
    {
        time: '2018-12-18',
        value: 48.32
    },
    {
        time: '2018-12-19',
        value: 47.90
    },
    {
        time: '2018-12-20',
        value: 47.54
    },
    {
        time: '2018-12-21',
        value: 47.57
    },
    {
        time: '2018-12-24',
        value: 45.96
    },
    {
        time: '2018-12-26',
        value: 46.94
    },
    {
        time: '2018-12-27',
        value: 47.53
    },
    {
        time: '2018-12-28',
        value: 47.20
    },
    {
        time: '2018-12-31',
        value: 47.35
    },
    {
        time: '2019-01-02',
        value: 46.93
    },
    {
        time: '2019-01-03',
        value: 46.64
    },
    {
        time: '2019-01-04',
        value: 47.57
    },
    {
        time: '2019-01-07',
        value: 46.95
    },
    {
        time: '2019-01-08',
        value: 47.48
    },
    {
        time: '2019-01-09',
        value: 46.57
    },
    {
        time: '2019-01-10',
        value: 47.07
    },
    {
        time: '2019-01-11',
        value: 47.34
    },
    {
        time: '2019-01-14',
        value: 47.15
    },
    {
        time: '2019-01-15',
        value: 47.57
    },
    {
        time: '2019-01-16',
        value: 46.92
    },
    {
        time: '2019-01-17',
        value: 47.06
    },
    {
        time: '2019-01-18',
        value: 47.61
    },
    {
        time: '2019-01-22',
        value: 47.72
    },
    {
        time: '2019-01-23',
        value: 48.27
    },
    {
        time: '2019-01-24',
        value: 47.69
    },
    {
        time: '2019-01-25',
        value: 47.37
    },
    {
        time: '2019-01-28',
        value: 47.17
    },
    {
        time: '2019-01-29',
        value: 47.40
    },
    {
        time: '2019-01-30',
        value: 47.86
    },
    {
        time: '2019-01-31',
        value: 48.13
    },
    {
        time: '2019-02-01',
        value: 48.70
    },
    {
        time: '2019-02-04',
        value: 49.25
    },
    {
        time: '2019-02-05',
        value: 49.26
    },
    {
        time: '2019-02-06',
        value: 49.26
    },
    {
        time: '2019-02-07',
        value: 49.42
    },
    {
        time: '2019-02-08',
        value: 49.50
    },
    {
        time: '2019-02-11',
        value: 49.61
    },
    {
        time: '2019-02-12',
        value: 49.66
    },
    {
        time: '2019-02-13',
        value: 49.79
    },
    {
        time: '2019-02-14',
        value: 45.59
    },
    {
        time: '2019-02-15',
        value: 45.24
    },
    {
        time: '2019-02-19',
        value: 44.83
    },
    {
        time: '2019-02-20',
        value: 45.10
    },
    {
        time: '2019-02-21',
        value: 45.86
    },
    {
        time: '2019-02-22',
        value: 45.28
    },
    {
        time: '2019-02-25',
        value: 44.94
    },
    {
        time: '2019-02-26',
        value: 44.69
    },
    {
        time: '2019-02-27',
        value: 44.94
    },
    {
        time: '2019-02-28',
        value: 45.34
    },
    {
        time: '2019-03-01',
        value: 45.38
    },
    {
        time: '2019-03-04',
        value: 45.65
    },
    {
        time: '2019-03-05',
        value: 45.60
    },
    {
        time: '2019-03-06',
        value: 45.45
    },
    {
        time: '2019-03-07',
        value: 45.28
    },
    {
        time: '2019-03-08',
        value: 44.84
    },
    {
        time: '2019-03-11',
        value: 46.18
    },
    {
        time: '2019-03-12',
        value: 46.05
    },
    {
        time: '2019-03-13',
        value: 46.22
    },
    {
        time: '2019-03-14',
        value: 45.70
    },
    {
        time: '2019-03-15',
        value: 45.30
    },
    {
        time: '2019-03-18',
        value: 45.41
    },
    {
        time: '2019-03-19',
        value: 45.56
    },
    {
        time: '2019-03-20',
        value: 45.53
    },
    {
        time: '2019-03-21',
        value: 45.51
    },
    {
        time: '2019-03-22',
        value: 45.93
    },
    {
        time: '2019-03-25',
        value: 46.03
    },
    {
        time: '2019-03-26',
        value: 46.64
    },
    {
        time: '2019-03-27',
        value: 46.61
    },
    {
        time: '2019-03-28',
        value: 46.58
    },
    {
        time: '2019-03-29',
        value: 46.86
    },
    {
        time: '2019-04-01',
        value: 46.72
    },
    {
        time: '2019-04-02',
        value: 46.57
    },
    {
        time: '2019-04-03',
        value: 46.18
    },
    {
        time: '2019-04-04',
        value: 46.48
    },
    {
        time: '2019-04-05',
        value: 46.47
    },
    {
        time: '2019-04-08',
        value: 46.55
    },
    {
        time: '2019-04-09',
        value: 46.67
    },
    {
        time: '2019-04-10',
        value: 46.64
    },
    {
        time: '2019-04-11',
        value: 46.71
    },
    {
        time: '2019-04-12',
        value: 46.74
    },
    {
        time: '2019-04-15',
        value: 47.00
    },
    {
        time: '2019-04-16',
        value: 46.95
    },
    {
        time: '2019-04-17',
        value: 47.28
    },
    {
        time: '2019-04-18',
        value: 47.48
    },
    {
        time: '2019-04-22',
        value: 47.40
    },
    {
        time: '2019-04-23',
        value: 48.21
    },
    {
        time: '2019-04-24',
        value: 47.98
    },
    {
        time: '2019-04-25',
        value: 47.84
    },
    {
        time: '2019-04-26',
        value: 48.26
    },
    {
        time: '2019-04-29',
        value: 48.42
    },
    {
        time: '2019-04-30',
        value: 49.06
    },
    {
        time: '2019-05-01',
        value: 48.59
    },
    {
        time: '2019-05-02',
        value: 48.39
    },
    {
        time: '2019-05-03',
        value: 48.72
    },
    {
        time: '2019-05-06',
        value: 48.47
    },
    {
        time: '2019-05-07',
        value: 48.00
    },
    {
        time: '2019-05-08',
        value: 47.85
    },
    {
        time: '2019-05-09',
        value: 47.40
    },
    {
        time: '2019-05-10',
        value: 48.19
    },
    {
        time: '2019-05-13',
        value: 48.05
    },
    {
        time: '2019-05-14',
        value: 48.69
    },
    {
        time: '2019-05-15',
        value: 49.18
    },
    {
        time: '2019-05-16',
        value: 49.58
    },
    {
        time: '2019-05-17',
        value: 49.20
    },
    {
        time: '2019-05-20',
        value: 48.85
    },
    {
        time: '2019-05-21',
        value: 48.60
    },
    {
        time: '2019-05-22',
        value: 49.65
    },
    {
        time: '2019-05-23',
        value: 49.85
    },
    {
        time: '2019-05-24',
        value: 49.61
    },
    {
        time: '2019-05-28',
        value: 49.24
    },
]);

$('.data_slider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 300,
    draggable: false,
    slidesToShow: 1,
    prevArrow: $('.data_slider_box a.arrow-prev'),
    nextArrow: $('.data_slider_box a.arrow-next')
});

$(function () {
    $('.btn_sell').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});