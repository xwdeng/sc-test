#!/bin/sh
while :
do
  echo "Please type something in (^C to quit)"
  node sc.js
	git add .
	git commit -m 'update'
	git push https://'xwdeng%40hotmail.com':'ww666619'@github.com/xwdeng/sc-test.git

  sleep 60
done
