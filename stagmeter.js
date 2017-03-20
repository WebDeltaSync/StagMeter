/**
 * Created by xiaohe on 2016/12/9.
 * client functions for web-sync
 */

var test_start_time = (new Date()).getTime();
var traffic;

var test_hash_average = 0;
var test_hash_times = 0;

var socket = io.connect('http://'+window.location.hostname+':8001');

var test_handler = null;
var sync_handler = null;
var test_time = 0;
function test(){
    d = new Date();
    test_time = d.getTime() - test_start_time;
    console.info(test_time);
}
function start_test(){

    test_start_time = (new Date()).getTime();
    if(!test_handler){
        console.log('start_test');
        test_handler = setInterval(function(){ test(); }, 100);
        sync_handler = setTimeout(run,200);
    }else{
        clearInterval(test_handler);
        test_handler = null;
        sync_handler = null;
        console.log('stop_test');
    }
}

function stop_test(){
    if(test_handler){
        clearInterval(test_handler);
        test_handler = null;
        sync_handler = null;
        console.log('stop_test');
    }
}
function run(){
    //run the code you need

}
