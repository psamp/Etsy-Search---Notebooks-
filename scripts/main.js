$(document).ready( function() {

// GENERATE SIDEBAR CATOGORIES

var sidebar = items.results.map ( function (item) { return item.taxonomy_path;});

var sidebarItems = [];
sidebar.forEach(function (list) {
    list.forEach(function (item){
     if (sidebarItems.indexOf(item) === -1){
    sidebarItems.push(item);
    }
  });
});


var sidebarUl = $("#sidebarCats");
sidebarItems.forEach( function (sbItem) {
  sidebarUl.append("<li><a href='#'>" + sbItem + "</a></li>");
});


// ITEMS

// variables

var $itemData = $(".items");
var itemImage, itemPrice, itemTitle, itemSeller, itemHolder;

// do this for each item

items.results.forEach( function(etsy) {
  
  // item variables

  itemImage ="<img src='" + etsy.Images[0].url_170x135 +"''>";
  itemTitle = "<p class ='title'>" + etsy.title + "</p>";
  itemSeller = "<p class='seller'>" + etsy.Shop.shop_name + "</p>";
  itemPrice = "<p class='price'>" + "$" + etsy.price + " USD" +"</p>";
  itemListLink = etsy.listing_id;
  itemSellerLink = etsy.Shop.shop_name;

  // link image and title to item listing, link seller, add price, and put it all in a <li>

  itemHolder = "<li class='itemData'>" + "<a href ='https://www.etsy.com/listing/" + itemListLink + "'>" +itemImage + "</a>" + "<div class = 'itemText'>" + "<a class='title' href ='https://www.etsy.com/listing/" + itemListLink + "'>" + itemTitle + "</a>" + "<a href='" + "https://www.etsy.com/shop/" + itemSellerLink + "'>" + itemSeller + "</a>" + itemPrice + "</div>" + "</li>";
  
  // append to html

  $itemData.append(itemHolder);
  });

  // CSS CHANGES

});
