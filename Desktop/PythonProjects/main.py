import requests

host = 'https://api.pokemonbattle.me:9104' # хост для покемонов

'''response = requests.post(f'{host}/pokemons', json = {
   
    "name": "artfly125",
    "photo": "https://dolnikov.ru/pokemons/albums/001.png"
}, headers = {'Content-Type' : 'application/json','trainer_token' : '96ab5fcdfd1720b980629599af4cc111'})

print(response.text)'''




response_newname = requests.post(f'{host}/pokemons', json = {
    "pokemon_id": "6096",
    "name": "artfly521",
    "photo": "https://dolnikov.ru/pokemons/albums/001.png"
}
, headers = {'Content-Type' : 'application/json','trainer_token' : '96ab5fcdfd1720b980629599af4cc111'})

print(response_newname.text)


response_pokeball = requests.post(f'{host}/trainers/add_pokeball', json = {
    "pokemon_id": "6096"
}
, headers = {'Content-Type' : 'application/json','trainer_token' : '96ab5fcdfd1720b980629599af4cc111'})

print(response_pokeball.text)