import requests

data= requests.get('https://gorest.co.in/public/v1/users',  headers={'Authorization': 'Token d7c01847de4c083cb154e9a533294301e9f05f93dbae7d589e42ece63226c0a3'})
# print(data.status_code)
# print(data.text)
print(data.json()["data"])