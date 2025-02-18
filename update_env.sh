#!/bin/bash

OS=$(uname)

if [[ "$OS" == "Darwin" ]]; then
    IP_ADDRESS=$(ipconfig getifaddr en0)
elif [[ "$OS" == "Linux" ]]; then
    IP_ADDRESS=$(hostname -I | awk '{print $1}')
elif [[ "$OS" == "MINGW64_NT"* || "$OS" == "MSYS_NT"* || "$OS" == "CYGWIN_NT"* ]]; then
    IP_ADDRESS=$(ipconfig | grep 'IPv4' | awk '{print $NF}' | head -n 1)
else
    echo "Système d'exploitation non supporté"
    exit 1
fi

sed -i '' "s|http://[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}:8080|http://$IP_ADDRESS:8080|g" .env

echo "L'adresse IP $IP_ADDRESS a été intégrée dans le fichier .env"