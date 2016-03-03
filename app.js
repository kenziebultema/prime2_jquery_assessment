var counter = 0;

$(document).ready(function(){
    $('.container').append('<button class="generate">Generate</button>');
    $('.container').append('<p class="count">Count: ' + counter + '</p>');


    $('.container').on('click', '.generate', appendDom);
    $('.container').on('click', '.delete', deleteRow);
    $('.container').on('click', '.change', changeRow);
});

function deleteRow(){
    $(this).parent().remove();
}

function changeRow(){
    $(this).parent().toggleClass('active');
}

function appendDom(){
    counter++;
    $('.count').text('');
    $('.count').append('Count: ' + counter);

    $('.container').append('<p class="normal"></p>');
    var $el = $('.container').children().last();

    $el.append('<button class="delete">Delete</button>');
    $el.append('<button class="change">Change</button>');
}

console.log('connected');
