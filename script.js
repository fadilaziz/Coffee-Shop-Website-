//Scroll Record
const nav = document.querySelector('.navbar');
console.log(nav)
window.addEventListener('scroll', ()=> {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
        nav.style.borderBottom = '1px solid rgb(202, 202, 202)';
        nav.style.transition = 'border 0.2s ease-in-out';
        nav.style.height = '50px';
    } else {
        nav.style.borderBottom = '0px solid rgb(202, 202, 202)';
        nav.style.transition = 'all 0.2s ease-in-out';
        nav.style.height = '60px';
    }
});

//Sidebar
const openSideButton = document.querySelector('.acount');
const sideBar = document.querySelector('.side-bar');
const acount = document.querySelector('.acount');
const acount2 = document.querySelector('.acount2');
const sideBarContent = document.querySelector('.side-bar-content');
const logOut = document.querySelector('.side-bar-logout');
console.log(sideBarContent);

//Sidebar Open
openSideButton.addEventListener('click', ()=> {
    acount.classList.add('hidden');
    sideBar.classList.add('active');
    sideBarContent.classList.add('active');
    acount2.classList.add('active');
    logOut.classList.add('active');
})
//Sidebar Close 
const sideBarClose = document.querySelector('.side-bar-close');
sideBarClose.addEventListener('click', ()=> {
    acount.classList.remove('hidden');
    sideBar.classList.remove('active');
    sideBarContent.classList.remove('active');
    acount2.classList.remove('active');
    logOut.classList.remove('active');
})

const moreProductsButton = document.querySelector('.banyak-produk');
const moreProducts = document.querySelector('.more-products');
const moreitems = document.querySelector('.more-products-items');
const body = document.body;
let scrollPosition = 0;

function disableBodyScroll() {
    scrollPosition = window.pageYOffset;
    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.top = `-${scrollPosition}px`;
    body.style.width = '100%';
}

function enableBodyScroll() {
    body.style.removeProperty('overflow');
    body.style.removeProperty('position');
    body.style.removeProperty('top');
    body.style.removeProperty('width');
    window.scrollTo(0, scrollPosition);
}

moreProductsButton.addEventListener('click', () => {
    moreProducts.classList.add('active');
    moreitems.classList.add('active');
    disableBodyScroll();
});

const closeMoreProduct = document.querySelector('.close-more-product');

function closeModal() {
    moreitems.style.animation = 'modalDisappear 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards';
    
    // Wait for the animation to complete before removing the active class from the overlay
    setTimeout(() => {
        moreProducts.classList.remove('active');
        moreitems.classList.remove('active');
        // Reset animation for next time
        moreitems.style.animation = '';
        enableBodyScroll();
    }, 300);
}

// Close when clicking the close button
closeMoreProduct.addEventListener('click', closeModal);

// Close when clicking outside the modal
moreProducts.addEventListener('click', (e) => {
    if (e.target === moreProducts) {
        closeModal();
    }
});

// Close when pressing Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && moreProducts.classList.contains('active')) {
        closeModal();
    }
});

const ANON_public_key ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qcHJ5Z3ZtdXRvdW9udnNkdWJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgxNTczMTMsImV4cCI6MjA4MzczMzMxM30._f_sYjjRMAcV6AmJ7nje4gmO-HO1LGc4WxHyoISodVo';

function getProducts() {
    fetch('https://ojprygvmutouonvsdubt.supabase.co/rest/v1/product?select=* &order=id &limit=12', {
    headers: {
        apikey: ANON_public_key,
        Authorization: `Bearer ${ANON_public_key}`
    }
        })
        .then(res => res.json())
        .then(data => {
            const productContainer = document.querySelector('.product');
            data.forEach(product => {
                console.log(product);
                productContainer.innerHTML += `
                    <div class="product-items">
                        <div class="img-bg">
                            <div class="promo">
                                <p>20% Off</p>
                            </div>
                            <img src="img/${product.image_url}" alt="">
                        </div>
                        <h1>${product.name}</h1>
                        <div class="price-type">
                            <p>${product.type}</p>
                            <p>Rp.${product.price}</p>
                        </div>
                            <div class="product-button">
                                <button>Add to Cart</button>
                            </div>
                    </div>
                `;
            })
        })
}
getProducts();
function getMoreProducts() {
    fetch('https://ojprygvmutouonvsdubt.supabase.co/rest/v1/product?select=* &order=id', {
    headers: {
        apikey: ANON_public_key,
        Authorization: `Bearer ${ANON_public_key}`
    }
        })
        .then(res => res.json())
        .then(data => {
            const productContainer = document.querySelector('.more-menu');
            data.forEach(product => {
                console.log(product);
                productContainer.innerHTML += `
                    <div class="product-items">
                        <div class="img-bg">
                            <div class="promo">
                                <p>20% Off</p>
                            </div>
                            <img src="img/${product.image_url}" alt="">
                        </div>
                        <h1>${product.name}</h1>
                        <div class="price-type">
                            <p>${product.type}</p>
                            <p>Rp.${product.price}</p>
                        </div>
                            <div class="product-button">
                                <button>Add to Cart</button>
                            </div>
                    </div>
                `;
            })
        })
}
getMoreProducts();

