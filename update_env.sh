#!/bin/bash
IP_ADDRESS=$(ipconfig getifaddr en0)

sed -i '' "s|http://\[ADRESSE IP DU PC\]:8080|http://$IP_ADDRESS:8080|g" /Users/alexandreguedes/Desktop/mobile/MMIPlatform_mobile/.env

echo "L'adresse IP $IP_ADDRESS a été intégrée dans le fichier .env"