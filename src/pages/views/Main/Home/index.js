import React from 'react'
import PropTypes from 'prop-types'
import Slider from '../../../../components/Main/Slider'

const Home = ({item}) => {
    return (
        <div>
        <section className="hero">
     <div className="container">
       <div className="row">
         <div className="col-lg-3">
           <div className="hero__categories">
             <div className="hero__categories__all">
               <i className="fa fa-bars" />
               <span>All departments</span>
             </div>
             <ul>
               <li><a href="#">Fresh Meat</a></li>
               <li><a href="#">Vegetables</a></li>
               <li><a href="#">Fruit &amp; Nut Gifts</a></li>
               <li><a href="#">Fresh Berries</a></li>
               <li><a href="#">Ocean Foods</a></li>
               <li><a href="#">Butter &amp; Eggs</a></li>
               <li><a href="#">Fastfood</a></li>
               <li><a href="#">Fresh Onion</a></li>
               <li><a href="#">Papayaya &amp; Crisps</a></li>
               <li><a href="#">Oatmeal</a></li>
               <li><a href="#">Fresh Bananas</a></li>
             </ul>
           </div>
         </div>
         <div className="col-lg-9">
           <div className="hero__search">
             <div className="hero__search__form">
               <form action="#">
                 <div className="hero__search__categories">
                   All Categories
                   <span className="arrow_carrot-down" />
                 </div>
                 <input type="text" placeholder="What do yo u need?" />
                 <button type="submit" className="site-btn">SEARCH</button>
               </form>
             </div>
             <div className="hero__search__phone">
               <div className="hero__search__phone__icon">
                 <i className="fa fa-phone" />
               </div>
               <div className="hero__search__phone__text">
                 <h5>+65 11.188.888</h5>
                 <span>support 24/7 time</span>
               </div>
             </div>
           </div>
           <div className="hero__item set-bg" data-setbg="img/hero/banner.jpg">
             <div className="hero__text">
               <span>FRUIT FRESH</span>
               <h2>Vegetable <br />100% Organic</h2>
               <p>Free Pickup and Delivery Available</p>
               <a href="#" className="primary-btn">SHOP NOW</a>
             </div>
           </div>
         </div>
       </div>
     </div>
   </section>
   {/* Hero Section End */}
   {/* Categories Section Begin */}
   <section className="categories">
     <div className="container">
       <div className="row">
         <div className="categories__slider owl-carousel">
           <div className="col-lg-3">
             <div className="categories__item set-bg" data-setbg="img/categories/cat-1.jpg">
               <h5><a href="#">Fresh Fruit</a></h5>
             </div>
           </div>
           <div className="col-lg-3">
             <div className="categories__item set-bg" data-setbg="img/categories/cat-2.jpg">
               <h5><a href="#">Dried Fruit</a></h5>
             </div>
           </div>
           <div className="col-lg-3">
             <div className="categories__item set-bg" data-setbg="img/categories/cat-3.jpg">
               <h5><a href="#">Vegetables</a></h5>
             </div>
           </div>
           <div className="col-lg-3">
             <div className="categories__item set-bg" data-setbg="img/categories/cat-4.jpg">
               <h5><a href="#">drink fruits</a></h5>
             </div>
           </div>
           <div className="col-lg-3">
             <div className="categories__item set-bg" data-setbg="img/categories/cat-5.jpg">
               <h5><a href="#">drink fruits</a></h5>
             </div>
           </div>
         </div>
       </div>
     </div>
   </section>
   {/* Categories Section End */}
   {/* Featured Section Begin */}
   <section className="featured spad">
     <div className="container">
       <div className="row">
         <div className="col-lg-12">
           <div className="section-title">
             <h2>Featured Product</h2>
           </div>
           <div className="featured__controls">
             <ul>
               <li className="active" data-filter="*">All</li>
               <li data-filter=".oranges">Oranges</li>
               <li data-filter=".fresh-meat">Fresh Meat</li>
               <li data-filter=".vegetables">Vegetables</li>
               <li data-filter=".fastfood">Fastfood</li>
             </ul>
           </div>
         </div>
       </div>
       <div className="row featured__filter">
       {item.map(({ id, name, image, price }, index) => (
           <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood" key={index}>
           <div className="featured__item">
             <img src={image} alt="" width="200" />                 
             <div className="featured__item__text">
               <h6><a href="#">{name}</a></h6>
               <h5>{price}</h5>
             </div>
           </div>
         </div>
         
       ))}
       
         </div>
     </div>
   </section>
   
   </div>
    )
}

Home.propTypes = {

}

export default Home
