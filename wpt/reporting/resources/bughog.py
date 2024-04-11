import json
import requests

def main(request, response):
    body = json.loads(request.body)
    if isinstance(body, dict):
        url = body["container_address"]
        requests.post(url, json = body)
        return [(b"Content-Type", b"text/plain")], b"Recorded report " + request.body
    
    response.status = 400
    return (400, [], u"no json")