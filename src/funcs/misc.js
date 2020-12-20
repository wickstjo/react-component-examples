// WAIT FOR X SECONDS
function sleep(time) {
   return new Promise((resolve) => setTimeout(resolve, time));
}

export {
   sleep
}