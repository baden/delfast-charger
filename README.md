# Шо ми бажаємо отримати:

Сервер, на якому буде:
- MQTT-брокер для обміну __зарядна станція__ <-> __сервер__
- база даних (SQL,noSQL?)
- worker (NodeJS?)

QR-код генерується зі ссилки вигляду:
`url/stantion_id`


## Сервер

Сервер будемо створювати та запускати за потреби.
Для тестування, скористаємося Hetzner-cloud.
Розгортати сервер будемо за допомогою cloud-config.

Я ще не вирішив, чи задіяти Docker, чи встановлювати все безпосередньо в контейнер.

Розгортати будемо за допомогою [Hetzner CLI](https://community.hetzner.com/tutorials/howto-hcloud-cli)

```bash
brew install hcloud
```

Далі йдемо у [Консоль](https://console.hetzner.cloud), та створюємо SSH-ключ з імʼям `hcloud-provision-key` та токен.

Виконуємо:
```bash
hcloud context create delfast-charger
```

Сворюємо та запускаємо сервер:
```bash
./create-server.sh
```

Повинні отримати щось таке:
```
Server 31229155 created
IPv4: 91.107.231.166
IPv6: 2a01:4f8:c2c:b9ff::1
IPv6 Network: 2a01:4f8:c2c:b9ff::/64
```

Перевірити статус сервера можна командою

```
hcloud server list
```

Далі, для зручності, створен DNS-запис для charger.navi.cc

Підʼєднуємося:
```
ssh baden@91.107.231.166
```

Повинно пускати без пароля.

Після будь яких змін, можна пересобрати сервер командою.
```
hcloud server rebuild 
```

__Щось не вийшло__: Видалив сервер та створив новий. Після цього треба видалити ключ:

```
ssh-keygen -R "91.107.231.166"
```

## Брокер

Вибираємо з:
- mosquito
- 

## База даних

- Postgerss (SQL)
- mongodb (noSQL)

## Worker

Починаю на NodeJS, але ще треба подумати про Deno.


## Авторизація

Авторизацію робимо по відео: https://www.youtube.com/watch?v=v30DUkpgPLk



## TODO

- Треба налаштувати SSL через letsencrypt.

Перший запуст, мабудь, треба зробити вручну.

```
sudo certbot --nginx --noninteractive --test-cert --agree-tos --email baden.i.ua@gmail.com -d charger.navi.cc
```

А для подальшого використання треба якось через 
```
certbot certonly --standalone --noninteractive --agree-tos --email baden.i.ua@gmail.com -d charger.navi.cc
```