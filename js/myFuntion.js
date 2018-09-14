window.onload = onCreated();


function onCreated() {
    var product = {
        name: "Product 123",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, accusamus! Facere magnam soluta esse. Quasi minima non laboriosam ipsa nihil, delectus a blanditiis laborum corporis, quidem exercitationem, officiis autem? Provident?"
    };
    document.getElementById("productName").innerHTML = product.name;
    document.getElementById("productDetail").innerHTML = product.detail;
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1,
        fade: !0,
        asNavFor: '.slider-nav',
        autoplay: !0
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: !1,
        centerMode: !0,
        focusOnSelect: !0
    })
}

function categoryLoad() {
    var x = [{
        title: "Accommodation",
        category: ["Tourism & Recreation", "Hotel", "Popular Places", "Travel Bureaus", "Chauffeur Service", "Travel Bus", "Luggage", "Boat Rental", "Apartment"]
    }, {
        title: "Fashion",
        category: ["Apparel", "Uniforms", "Bags", "Tee-Shirts Printing", "Fashions", "Embroidery", "Textile", "Boutique", "Cloth", "Sewing Machine", "Hotel Amenities", "Optical Centre"]
    }]
}

function show_search(e) {
    $("#search_bar").toggleClass("fade_in");
    $(".sm-navbar-brand").toggleClass("d-none");
}