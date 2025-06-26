#!/usr/bin/env bash

hostport="$1"
shift
cmd="$@"

host=$(echo "$hostport" | cut -d: -f1)
port=$(echo "$hostport" | cut -d: -f2)

echo "[-] Waiting for $host:$port..."

while ! nc -z $host $port; do
  echo "[X] $host:$port unavailable, retrying..."
  sleep 2
done

echo "[OK] $host:$port is ready, running: $cmd"
exec $cmd
