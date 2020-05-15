#!/bin/sh
while :
do
  echo "Please type something in (^C to quit)"
  node sc.js
  echo "You typed: $INPUT_STRING"
done