i=1
for url in "https://cdn.discordapp.com/attachments/775797057926856754/1249306668878139494/KdTfDT2hWA5BgAABAgQIECBAgAABAgQIEBhMQAA8WEEthwABAgQIECBA4HqBuAD4fZ4C4OtrZwYECBAgQIAAAQIECBAgQIAAgd4FBMC9V9D8CRAgQIAAAQIEmhMQADdXEhMiQIAAAQIECBAgQIAAAQIECEwj8P8pRKbL8TYAgAAAABJRU5ErkJggg.png?ex=6666d300&is=66658180&hm=7dc36e4283070278f9632cc95e4cf9bc2b79e73ba58ec3ba06261a0f8e220a23&" "https://cdn.discordapp.com/attachments/775797057926856754/1249306336681005148/B0ESYi8ngYerAAAAAElFTkSuQmCC.png?ex=6666d2b1&is=66658131&hm=53d88b873e6417219ef9f7418d8d2dfbcfaf38a542937f96200192fcdce4c3b0&" "https://cdn.discordapp.com/attachments/775797057926856754/1249307334484688998/wEJIFYyv3yz6gAAAABJRU5ErkJggg.png?ex=6666d39f&is=6665821f&hm=5be2d37f4e8da5b6926c817cd67923dacff16b914262b55575f9d963998995aa&" "https://cdn.discordapp.com/attachments/775797057926856754/1249308027228524585/B1kh0TOMwbFFAAAAAElFTkSuQmCC.png?ex=6666d444&is=666582c4&hm=96b7007297554c9e944756b020f4acf84ddcbbeba8f1b11527e6bb8bf72c74ee&" "https://cdn.discordapp.com/attachments/775797057926856754/1249308813861982268/Bl0kcME1kAAAAAElFTkSuQmCC.png?ex=6666d500&is=66658380&hm=6c38378d6002d7fceca2f96edf49398f48e0c60495587cdbc78bf09cb096f9e6&" "https://cdn.discordapp.com/attachments/775797057926856754/1249309431292891286/OVERWRITE_ME.png?ex=6666d593&is=66658413&hm=d24c65e3b759e83c15eb0705b6c3f78318ec24fc9a14f9733c510e7ba00658a3&" "https://cdn.discordapp.com/attachments/775797057926856754/1249310229682851962/Abme7gkTakAAAAASUVORK5CYII.png?ex=6666d651&is=666584d1&hm=be3e942db88d06028c10b6f374a7fdd7bb2f6478763b7829e15d04ccb766187f&" "https://cdn.discordapp.com/attachments/775797057926856754/1249310741119373383/OVERWRITE_ME.png?ex=6666d6cb&is=6665854b&hm=b8e408f9910501893b392fabccebda0e4f8db9d5950bd01c6fb8d58e191a0f82&" "https://cdn.discordapp.com/attachments/775797057926856754/1249313150202019860/AgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIZBIQgDNBWoYAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQKlBQTg0hOwPwECBAgQIECAAAECBAgQIECAAAECBE4IzPM8hRBOrOBVAgQIECBAoCcBAbinaboLAQIECBAgQIAAAQIECBAgQIAAAQLDCPyE39ffwwC4KAECBAgQILAp8BdhWnzLME6DGAAAAABJRU5ErkJggg.png?ex=6666d90a&is=6665878a&hm=ed369587c1e4bbf5d715e565c410f856dda22fd7ab2b5653ddcc58761237d0c6&"
do
  curl -L $url > images/timelapse/sampleMap$i.png
  i=$((i+1))
done
