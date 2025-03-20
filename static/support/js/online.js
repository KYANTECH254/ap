function online() {
    axios.post("/api/online", {
        adId: adId,
        supportToken: supportToken,
        online: !document.hidden
    })
    .catch((err) => err)
    .finally(() => setTimeout(online, 3000));
}

online();