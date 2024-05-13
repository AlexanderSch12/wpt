/* global add_completion_callback */
/* global setup */

/*
 * This file is intended for vendors to implement code needed to integrate
 * testharness.js tests with their own test systems.
 *
 * Typically test system integration will attach callbacks when each test has
 * run, using add_result_callback(callback(test)), or when the whole test file
 * has completed, using
 * add_completion_callback(callback(tests, harness_status)).
 *
 * For more documentation about the callback functions and the
 * parameters they are called with see testharness.js
 */
var xhr;
var response_data;
var results = [];
var errors = [];


function init_message()
{
    var url = window.location.href;
    var container_ip = window.location.search.split("=")[1];
    var container_address = 'http://' + container_ip  + ':5001';
    
    response_data = new Object();
    response_data.url = url;
    response_data.method = "POST";
    response_data.container_address = container_address;

    xhr = new XMLHttpRequest();
    console.log("INIT MESSAGE");
}

init_message();

function send_test_results(result, error) 
{
    var base_url = location.protocol + "//" + location.host;
    var endpoint = base_url + "/reporting/resources/bughog.py";
    console.log("SEND TEST RESULT");
    if(error)
    {
        errors.push(result);
    }
    response_data.wpt_result = result;
    response_data.results = results;
    response_data.errors = errors;
    var response_json = JSON.stringify(response_data);
    xhr.open("POST", endpoint, true);
    xhr.send(response_json);
    
}

window.onerror = function(error, url, line,col,e) {
    errors.push({error_message:error, url:url, line:line, collom:col, error:e});
    console.log("ON ERROR");
};


function get_test_results(tests, status) 
{
    // If 1 test fails, the requested test fails
    console.log("GET TEST RESULTS");
    var result = true;
    for(var i = 0 ; i < tests.length ; i++)
    {
        test_result = tests[i].format_status();
        results.push(test_result);
        if(test_result != 'Pass')
        {
            result = false;
        }
    }
    console.log(result);
    send_test_results(result);
}


// try{
console.log("TRY");
add_completion_callback(get_test_results);
console.log("OKE");
// } catch(e)
// {
//     send_test_results(e.message, true);
//     console.log("CAUGHT");
// }

console.log("UNDER PAGE");

/* If the parent window has a testharness_properties object,
 * we use this to provide the test settings. This is used by the
 * default in-browser runner to configure the timeout and the
 * rendering of results
 */
// try {
//     if (window.opener && "testharness_properties" in window.opener) {
//         /* If we pass the testharness_properties object as-is here without
//          * JSON stringifying and reparsing it, IE fails & emits the message
//          * "Could not complete the operation due to error 80700019".
//          */
//         setup(JSON.parse(JSON.stringify(window.opener.testharness_properties)));
//     }
// } catch (e) {
// }
// vim: set expandtab shiftwidth=4 tabstop=4:
