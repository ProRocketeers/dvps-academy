# Cron, systémové služby

## Cron

- Plánovač úloh
- Spouštění úloh v různých časových intervalech
- Formát `[Minuta] [Hodina] [Den_v_mesici] [Mesic] [Den_v_tydnu] [prikaz]`

```bash
# Editace globalnich zaznamu
sudo crontab -e
```

```
# Kazdy den ve 2 hodiny ráno
0 2 * * * /opt/script.sh

# Kazdou desátou minutu
*/10 * * * * /opt/script.sh

# Kazdou minutu
* * * * * /opt/script.sh
```

- Online crontab plánovač: https://crontab.guru/

## Systemd

> Work In Progress
