function navbar() {
    return `
    <!-- ============ navbar ========= -->
    <div class="top-nav-bar">
        <div class="search-box">
          <div class="search-logo">
            <img src="https://css.banggood.in/web/src/img/header-new-logo@2x.png"  class="nav_logo" />
            <input type="text" class="form-control" placeholder="Search" />
            <span class="input-group-text">
              <div style="color: white"><i class="fa-solid fa-magnifying-glass"></i></div>
            </span>
          </div>
          <div class="menu-bar">
            <ul>
              <li><a href="#">Ship to</a></li>
              <li><a href="#"><i class="fa-solid fa-user-plus"></i></a></li>
              <li><a href="#"><i class="fa-solid fa-cart-plus"></i></a></li>
            </ul>
          </div>
        </div>
  
        <div class="category">
          <p>CATEGORIES</p>
          <h6>FLASH DEALS</h6>
          <h6>CLEARANCE SALE</h6>
          <h6>TOP SELLERS</h6>
        </div>
      </div>
  
    `
}

export default  navbar;