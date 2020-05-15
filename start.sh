#!/bin/sh
while :
do
  echo "Please type something in (^C to quit)"
  node sc.js
	git add .
	git commit -m 'update'
	git push
  sleep 60
done