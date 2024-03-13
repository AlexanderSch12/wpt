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

var errors = [];

window.onerror = function(error, url, line) {
    errors.push({error:error, url:url, line:line});
};

// function init_babel()
// {
//     var scripts;

//     Babel.registerPreset("env-plus", {
//         presets: [[Babel.availablePresets["env"], {
//             "targets":
//             {
//               "chrome": 5
//             },
//             "useBuiltIns": "entry"
//           }]]
//       });

//     scripts = document.getElementsByTagName("script");
//     for(var i = 0; i < scripts.length ; i++)
//     {
//         var script = scripts[i];
//         var splits = script.src.split("/");
//         if(splits[splits.length - 1] === "babel.min.js" || splits[splits.length - 1] === "testharnessreport.js" || splits[splits.length - 1] === "testharness_babel.js" )
//         {
//             script.className = "babel_ignore";
//         }
//         if(script.className !== "babel_ignore")
//         {

//             console.log("SET ATTRIBUTE");
//             script.setAttribute("type","text/babel");
//             script.setAttribute("data-presets", "env-plus");

//         }
//     }

//     document.addEventListener("DOMContentLoaded", function() 
//     {
//         console.log("DOM_LOADED");
//     });

// }

var xhr;
var response_data;
var results;

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
}

function get_test_results(tests, status) 
{
    // If 1 test fails, the requested test fails
    var result = true;
    results = [];
    for(var i = 0 ; i < tests.length ; i++)
    {
        test_result = tests[i].format_status();
        results.push(test_result);
        if(test_result != 'Pass')
        {
            result = false;
        }
    }
    if(results.length == 0)
    {
        result = "No results received"
    }
    send_test_results(result, false);
}

function send_test_results(result, error) 
{
    const base_url = location.protocol + "//" + location.host;
    const endpoint = base_url + "/reporting/resources/bughog.py";

    if(error)
    {
        result = "error"
        errors.push(result);
    }
    response_data.wpt_result = result;
    response_data.results = results;
    response_data.errors = errors;
    var response_json = JSON.stringify(response_data);
    xhr.open("POST", endpoint, true);
    xhr.send(response_json);
}

// init_babel();
init_message();

try{
    add_completion_callback(get_test_results);
} catch(e)
{
    send_test_results(e, true);
}


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
