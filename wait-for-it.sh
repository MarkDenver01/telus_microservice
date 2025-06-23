#!/bin/sh
host=$(echo $1 | cut -d: -f1)
port=$(echo $1 | cut -d: -f2)
shift 2

until nc -z "$host" "$port"; do
  echo "Waiting for $host:$port..."
  sleep 3
done

exec "$@"