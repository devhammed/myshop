/**
 * MyShop.js
 * @author Oyedele Hammed Horlah
 * @description A simple Object that controls the cart application
 * @see https://www.github.com/devHammed/myshop
 * @since 12th October, 2017
 * @version 2.0
 */

function MyShop() {
  var self = this;
  self.cart = [];
  self.products = [
    { name: 'Product 1', price: '25', img: 'img/product.png' },
    { name: 'Product 2', price: '56', img: 'img/product.png' },
    { name: 'Product 3', price: '25', img: 'img/product.png' },
    { name: 'Product 4', price: '54', img: 'img/product.png' },
    { name: 'Product 5', price: '75', img: 'img/product.png' },
    { name: 'Product 6', price: '48', img: 'img/product.png' },
    { name: 'Product 7', price: '25', img: 'img/product.png' },
    { name: 'Product 8', price: '56', img: 'img/product.png' },
    { name: 'Product 9', price: '25', img: 'img/product.png' },
    { name: 'Product 10', price: '54', img: 'img/product.png' },
    { name: 'Product 11', price: '75', img: 'img/product.png' },
    { name: 'Product 12', price: '48', img: 'img/product.png' },
  ];
  self.cartCountEl = document.getElementById( 'cart-count' );
  self.viewCartEl = document.getElementById( 'view-cart' );
  self.closeCartEl = document.getElementById( 'close-cart' );
  self.productsEl = document.getElementById( 'products' );
  self.cartEl = document.getElementById( 'cart' );
  self.cartContainerEl = document.getElementById( 'cart-container' );
  self.totalPriceEl = document.getElementById( 'total-price' );

  self.addToCart = function( id ) {
    var product = self.products[ id ];
    if ( !product ) return;
    self.cart.push( product );
    self.renderCart();
  };

  self.removeFromCart = function( id ) {
    if ( id < 0 ) return;
    self.cart.splice( id, 1 );
    self.renderCart();
  }

  self.renderProducts = function() {
    var productsHtml = [];
    self.products.forEach( function( product, id ) {
      var productHtml = '<div class="product"><p><img src="' + product.img + '" /></p><h2>' +
        product.name + '</h2><p>$' + product.price +
        '</p><p><button class="add-to-cart" " data-id="' + id + '">Add to Cart</button></p></div>';
      productsHtml.push( productHtml );
    } );
    self.productsEl.innerHTML = productsHtml.join( '\n' );
  }

  self.renderCart = function() {
    self.cartCountEl.innerHTML = self.cart.length;
    var productsHtml = [],
      totalPrice = 0;

    if ( !self.cart.length ) {
      self.cartEl.innerHTML = 'Cart is empty, start shopping!';
      self.totalPriceEl.innerHTML = '$' + totalPrice;
      return;
    }
    self.cart.forEach( function( product, id ) {
      var productHtml = '<div class="row container border"><div class="col">' +
      '<img src = "' + product.img + '" /></div><div class="col"><h3>' +
      product.name + '</h3><p>$' + product.price + '</p></div>' +
      '<button class="remove-from-cart col" data-id="' + id + '">&times;</button></div>';
      productsHtml.push( productHtml );
      totalPrice += Number( product.price );
    } );
    self.totalPriceEl.innerHTML = '$' + totalPrice;
    self.cartEl.innerHTML = productsHtml.join( '\n' );
    self.bindRemoveEvents();
  }

  self.bindEvents = function() {
    window.addEventListener( 'DOMContentLoaded', function() {
      self.renderProducts();
      self.renderCart();
      self.viewCartEl.onclick = function( ev ) {
        ev.preventDefault();
        self.cartContainerEl.style.display = 'block';
      }
      self.closeCartEl.onclick = function( ev ) {
        ev.preventDefault();
        self.cartContainerEl.style.display = 'none';
      }
      self.bindAddEvents();
    } );
  }

  self.bindAddEvents = function() {
    var addBtns = [].slice.call( document.getElementsByClassName( 'add-to-cart' ) ) || [];
    addBtns.forEach( function( addBtn ) {
      addBtn.onclick = function() {
        self.addToCart( addBtn.getAttribute( 'data-id' ) );
      }
    } );
  }

  self.bindRemoveEvents = function() {
    var removeBtns = [].slice.call( self.cartEl.getElementsByClassName( 'remove-from-cart' ) ) || [];
    removeBtns.forEach( function( removeBtn ) {
      removeBtn.onclick = function() {
        self.removeFromCart( removeBtn.getAttribute( 'data-id' ) );
      }
    } );
  }

  self.bindEvents();
}

new MyShop();