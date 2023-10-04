const ambilData = async() => {
            const response = await fetch("https://be-palembang-28.up.railway.app/poliklinik");
            const dokters = await response.json();
            console.log(dokters);


            const h = "text/html"
            let parser = new DOMParser();

             products.forEach((product) => {
                let productStr = `
                    <div class="product_detail">
                        <div class="product_image">
                            <img src="https://source.unsplash.com/random/200x100?q=1" />
                        </div>
                        <b>${product.product_name}</b>
                        <div class="product_price">
                            <span>Rp.100.000</span>
                        </div>
                        <div class="review">
                            <span>100 Terjual (5.0)</span>
                        </div>
                    </div>
                `;
                let el = parser.parseFromString(productStr, h);
                let root = document.querySelector("div.product_container");
                root.appendChild(el.body.firstChild);
            });
        };

        ambilData();