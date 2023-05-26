function showLog(total) {
  for (let i = 0; i < total; i++) {
    console.log(i);
  }
}

addEventListener("message", function (ev) {
  const data = ev.data;
  showLog(data);

  // mengirimkan pesan ke main thread
  postMessage("Done");
});
