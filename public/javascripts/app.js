$(document ).ready(function() {
    var promise, fprogress;
    $('#id1').click(function() {
        var progress=0;
        promise = $.Deferred()  //constructor
            .always(function() {console.log('Always');
            }).fail(function() {console.log('Fail');
            }).done(function() {console.log('Done');
            }).progress(function(data) {
                console.log('Progress',data, promise.state());
            });

        fprogress=setInterval(function() {
            promise.notify('data');
            $('#pr1').width(++progress);
        },100);

    });
    $('#id2').click(function(){
        promise.reject();
        clearInterval(fprogress);
        console.log(promise.state());
    });
    $('#id3').click(function(){
        promise.resolve();
        clearInterval(fprogress);
        console.log(promise.state());
    });


    $('#id4').click(function(){
        $.get( "/api/people", function( data ) {
            $('tbody').empty('tr');
            for (var i in data) {
                $('<tr><td>' + data[i].fn+ '</td><td>'
                + data[i].ln+ '</td></tr>').
                  appendTo('#tableData');
            }
        });
        $( document).ajaxComplete(function() {
            $( "#id1" ).text( "Triggered ajaxComplete handler." );
        });
    });

    $('#id5').click(function(){
        var data={};
        data.fn=$('#idfn').val();
        data.ln=$('#idln').val();

        $.post('/api/add',data,function(data){
            console.log('success');
        },"json");
    });


    });