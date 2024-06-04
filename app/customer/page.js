import React from 'react'
import "./customer.css"
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'font-awesome/css/font-awesome.min.css';
import background  from '../../public/page-turner.png'
import diamour from '../../public/assets/icons/01.png';


// const services = [
//     {
//       icon: "fa-solid fa-check",
//       title: "Certification on every Purchase from The Diamour",
//       description: "Each purchase from The Diamour comes with a certification of authenticity, ensuring the highest quality and craftsmanship. Shop with confidence, knowing that your exquisite piece is genuine and crafted to perfection."
//     },
//     {
//       icon: "fa-brands fa-stack-exchange",
//       title: "100% exchange",
//       description: "Upgrade effortlessly with our 100% exchange offer! Trade in your old items for new ones and enjoy seamless transitions. Enhance your collection with the latest designs while benefiting from our hassle-free exchange policy."
//     },
//     {
//       icon: "fa-address-book",
//       title: "80% Lifetime Refund",
//       description: "Get peace of mind with our 80% Lifetime Refund Guarantee on website development services. We're committed to your satisfaction, ensuring top-quality results and support every step of the way. Your success is our priority!."
//     },
//     // {
//     //   icon: "fa-car",
//     //   title: "Back-End Development",
//     //   description: "Get peace of mind with our 80% Lifetime Refund Guarantee on website development services. We're committed to your satisfaction, ensuring top-quality results and support every step of the way. Your success is our priority!"
//     // },
//     {
//       icon: "fa-solid fa-money",
//       title: "Secured Payments",
//       description: "Ensure peace of mind with our secured payment solutions. We provide robust, encrypted transactions to protect your sensitive information, guaranteeing a safe and seamless online shopping experience. Trust us to keep your data secure."
//     },
//     {
//       icon: "fa-solid fa-truck",
//       title: "Delivery at your door steps",
//       description: "Experience seamless convenience with our exceptional delivery service. Enjoy the ease of receiving your purchases directly at your doorstep, ensuring a hassle-free and delightful shopping experience. Shop now and let us bring luxury to you."
//     },
//   ];

//   const ServiceCard = ({ icon, title, description }) => (
//     <div className="col-lg-4 col-sm-6 mb-30 pb-5 text-center">
//       <a className="card" href="#">
//         <div className="box-shadow bg-white rounded-circle mx-auto text-center icons-color" style={{ width: '90px', height: '90px', marginTop: '-45px', color: '#63E6BE' }}>
//           <i className={`fa ${icon} fa-3x head-icon`} style={{ color: '#01321F' }}></i>
//         </div>
//         <div className="card-body text-center ">
//           <h3 className="card-title pt-1" style={{color:'#01321F'}}>{title}</h3>
//           <p className="card-text text-sm pb-3" style={{color:'#01321F'}}>{description}</p>
//         </div>
//       </a>
//     </div>
//   );
  


function Page() {
  return (
   <>
{/* <section className="container pt-3 mb-3 text-center background">

        <div className="row pt-5 mt-30 justify-content-center">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section> */}



      <section className="container pt-3 mb-3">
        <div className='row justify-content-center'>
    <div className="row pt-5 mt-30">
        <div className="col-lg-4 col-sm-6 mb-30 pb-5">
            <a className="card" href="#">
            <div className=" diamour box-shadow rounded-circle  mx-auto " style={{ width: '90px', height: '90px', marginTop: '-45px' }}>
            </div>
                <div className="card-body text-center pb-1">
                    <h3 className="card-title pt-1" style={{color:'#01321F'}}>Certification on every Purchase from The Diamour</h3>
                    <p className="card-text text-sm" style={{color:'#01321F'}}>Each purchase from The Diamour comes with a certification of authenticity, ensuring the highest quality and craftsmanship. Shop with confidence, knowing that your exquisite piece is genuine and crafted to perfection.
</p>
                </div>
            </a>
        </div>
        <div className="col-lg-4 col-sm-6 mb-30 pb-5">
            <a className="card" href="#">
                <div className=" exhange box-shadow rounded-circle mx-auto " style={{width: '90px', height: '90px', marginTop: '-45px'}}></div>
                <div className="card-body text-center pb-4">
                    <h3 className="card-title pt-1 " style={{color:'#01321F'}}>100% exchange</h3>
                    <p className="card-text text-sm" style={{color:'#01321F'}}>Upgrade effortlessly with our 100% exchange offer! Trade in your old items for new ones and enjoy seamless transitions. Enhance your collection with the latest designs while benefiting from our hassle-free exchange policy.</p>
                </div>
            </a>
        </div>
        <div className="col-lg-4 col-sm-6 mb-30 pb-5">
            <a className="card" href="#">
            <div className=" refund box-shadow rounded-circle mx-auto " style={{width: '90px', height: '90px', marginTop: '-45px'}}></div>
                <div className="card-body text-center">
                    <h3 className="card-title pt-1" style={{color:'#01321F'}}>80% Lifetime Refund</h3>
                    <p className="card-text text-sm" style={{color:'#01321F'}}>Get peace of mind with our 80% Lifetime Refund Guarantee on website development services. We're committed to your satisfaction, ensuring top-quality results and support every step of the way. Your success is our priority!</p>
                </div>
            </a>
        </div>
        <div className='col-lg-2'></div>
        <div className="col-lg-4 col-sm-6 mb-30 pb-5 mt-5">
            <a className="card" href="#">
            <div className=" payment box-shadow rounded-circle mx-auto " style={{width: '90px', height: '90px', marginTop: '-45px'}}></div>
                <div className="card-body text-center">
                    <h3 className="card-title pt-1" style={{color:'#01321F'}}>Secured Payments</h3>
                    <p className="card-text text-sm" style={{color:'#01321F'}}>Ensure peace of mind with our secured payment solutions. We provide robust, encrypted transactions to protect your sensitive information, guaranteeing a safe and seamless online shopping experience. Trust us to keep your data secure.
.</p>
                </div>
            </a>
        </div>
        <div className="col-lg-4 col-sm-6 mb-30 pb-5 mt-5">
            <a className="card" href="#">
            <div className=" dilevery box-shadow rounded-circle mx-auto " style={{width: '90px', height: '90px', marginTop: '-45px'}}></div>
                <div className="card-body text-center">
                    <h3 className="card-title pt-1" style={{color:'#01321F'}}>Delivery at your door steps</h3>
                    <p className="card-text text-sm" style={{color:'#01321F'}}>Experience seamless convenience with our exceptional delivery service. Enjoy the ease of receiving your purchases directly at your doorstep, ensuring a hassle-free and delightful shopping experience. Shop now and let us bring luxury to you.</p>
                </div>
            </a>
        </div>
       
    </div>
    </div>
</section>
   </>
  )
}

export default Page