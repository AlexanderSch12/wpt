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

function send_test_results(tests, status) 
{
    // If 1 test fails, the requested test fails
    var result = true;
    for(let i = 0 ; i < tests.length ; i++)
    {
        test_result = tests[i].format_status();
        console.log(result);
        if(test_result != 'Pass')
        {
            result = false;
            break;
        }
    }

    let url = new URL(location);
    var response_data = new Object();
    response_data.url = url;
    // response_data.method = "POST";
    response_data.wpt_result = result;

    var response_json = JSON.stringify(response_data);

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() 
    { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    
    let param = new URLSearchParams(url.search);
    let container_ip = param.get('remote_ip');
    let container_address = 'http://' + container_ip + ':5001';

    xmlHttp.open("POST", container_address , true); // true for asynchronous 
    xmlHttp.send(response_json);
}

add_completion_callback(send_test_results);

/* If the parent window has a testharness_properties object,
 * we use this to provide the test settings. This is used by the
 * default in-browser runner to configure the timeout and the
 * rendering of results
 */
try {
    if (window.opener && "testharness_properties" in window.opener) {
        /* If we pass the testharness_properties object as-is here without
         * JSON stringifying and reparsing it, IE fails & emits the message
         * "Could not complete the operation due to error 80700019".
         */
        setup(JSON.parse(JSON.stringify(window.opener.testharness_properties)));
    }
} catch (e) {
}
// vim: set expandtab shiftwidth=4 tabstop=4:
