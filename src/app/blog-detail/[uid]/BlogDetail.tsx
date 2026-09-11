import React from "react";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/prismic";
import { PrismicRichText } from "@prismicio/react";

import { notFound } from "next/navigation";

type BlogDetailProps = {
  uid: string;
};

const BlogDetail = async ({ uid }: BlogDetailProps) => {
  const client = createClient();

  // Current blog
  const blog: any = await client.getByUID("blog", uid).catch(() => null);

  if (!blog) {
    notFound();
  }

  // All blogs for Related Blogs
  const allBlogs: any = await client.getAllByType("blog", {
    orderings: {
      field: "my.blog.publication_date",
      direction: "desc",
    },
  });

  // Current blog ko Related Blogs se remove karo
  const relatedBlogs = allBlogs
    .filter((item: any) => item.id !== blog.id)
    .slice(0, 4);


  return (
      <>

     <section className="blog-banner-section">
        <div className="banner-container">
            {/* <!-- Breadcrumb Navigation --> */}
            <nav className="breadcrumb-nav">
                     <Link href="/blog" className="breadcrumb-link">Resources</Link>
                <span className="breadcrumb-separator"><i className="ri-arrow-right-s-line"></i></span>
                <span className="breadcrumb-current">{blog.data.title}</span>
            </nav>
            {/* <!-- Banner Box with Overlay Content --> */}
            <div className="banner-card">
                {/* <Image src={blog?.data?.banner_image.url}   alt={blog.data.title} className="banner-img" /> */}

                   {blog.data.featured_image?.url && (
              <Image
                src={blog.data.featured_image.url}
                alt={
                  blog.data.featured_image.alt ||
                  blog.data.title ||
                  "Blog"
                }
                fill
                className="banner-img"
                priority
              />
            )}
                <div className="banner-overlay"></div>
                {/* <!-- Top Badges/Tags -->
                <div className="banner-tags">
                    <!--  <span className="tag-badge">Science</span>
        <span className="tag-badge">Industry</span> --> */}
                </div>
                {/* <!-- Bottom Title --> */}
                <h1 className="banner-title">{blog.data.title}</h1>
            </div>
        {/* </div> */}
    </section>

      <section className="blog-content-section">
    <div className="content-container">
        {/* <!-- Main Layout Wrapper (2 Columns) --> */}
        <div className="blog-layout-wrapper">
            
            {/* <!-- Left Column: Main Blog Article --> */}
            <article className="blog-main-content">
                {/* <p className="lead-text">
                    When designing a product that will be used for industrial applications, the material you select must be able to withstand high levels of environmental stress, such as extreme temperatures, dust, debris, chemicals and friction. Due to their high versatility, durability and recyclability, thermoplastics are a popular material choice for a wide variety of applications
                </p> */}

                  {/* Description */}
                  {/* {blog.data.description && (
                      <p className="lead-text">
                        {blog.data.description}
                      </p>
                    )} */}


                {/* <h2>Why Thermoplastics?</h2>
                <p>
                    Thermoplastics are commonly chosen as industrial materials because their waste is reusable. Unlike other materials that have waste that must be discarded after the injection molding process, the waste from thermoplastics can actually be reused and reformed into other items. Manufacturers like this characteristic because it reduces the cost of materials, especially when having to create multiple iterations of a component. This characteristic is also what makes thermoplastics a great material to use to create prototypes.
                    <br/><br/>
                    Another characteristic that makes thermoplastics popular for a wide array of uses is the strength and stress resistance they possess. Thermoplastics are capable of being used for thin-wall applications without compromising on high tensile strength, offering manufacturers the best of both worlds. Additionally, thermoplastics can be easily customized since they are very receptive to surface finishing. 
                </p>

                <h3>Common Applications of Thermoplastics:</h3>

                <p className="app-item">
                    <strong>1. Substitute for Glass:</strong> Acrylic, also known as polymethyl methacrylate, Lucite, Plexiglas or Perspex, is a type of thermoplastic that is commonly used as a substitute for glass. This popular material can be found in both consumer and industrial applications. Acrylic is most commonly used in aquariums, airplane windows, boating windows and visors, helmet visors and even as lenses on the exterior lights of automobiles. Acrylic works well as a glass substitute since it can be made to be transparent but offers a lot more durability and strength than traditional glass. Due to its look and durability, acrylic is also commonly used to create signage. 
                </p>

                <p className="app-item">
                    <strong>2. Substitute for Silk:</strong> In products that may require silk, nylon is a popular type of thermoplastic that can fill this need. Nylon is a useful material in both consumer and industrial products and applications. Nylon fibers are commonly used to produce rope, carpets, fabrics and even strings for musical instruments. As a replacement for silk, nylon can be found in products from women’s stockings all the way to parachutes. When in its bulk form, nylon can be used in more industrial applications, such as for mechanical parts including gear wheels, power tool casings and machine screws. Nylon’s characteristics enable it to be used in the production of heat-resistant composite materials. 
                </p>

                <p className="app-item">
                    <strong>3. Industrial Parts:</strong> Ultra-high molecular weight polyethylene, or UHMWPE, is a type of thermoplastic that is a part of the polyethylene family of materials. The density and molecular structure of UHMWPE makes it resistant to chemicals as well as durable. These characteristics make this type of thermoplastic great for manufacturing moving machine parts, bearings, gears and even bulletproof vests. Polypropylene, another type of thermoplastic, can also be used for other industrial applications, such as piping systems, car batteries, insulation for electrical cables, plastic moldings, and to create filters for liquids and gasses.
                </p>

                <p className="app-item">
                    <strong>4. Medical Equipment:</strong> Another use for UHMWPE is in the medical industry to create artificial joints. Polypropylene, another type of thermoplastic, is also used in this industry to produce heat-resistant medical equipment and to repair hernias. Acrylic, another versatile thermoplastic, is also sometimes used in the medical field as well, such as in bone cement or to replace eye lenses.
                </p>

                <p className="app-item">
                    <strong>5. Packaging:</strong> Due to their characteristics and versatility, thermoplastics are frequently used as packaging material. High-density polyethylene, or HDPE, is also a part of the polyethylene family of materials, however, this type of polyethylene is better suited to making packaging like food tubs, milk jugs and water pipes. Medium-density polyethylene (MDPE) on the other hand, is less dense and therefore preferred in the making of packaging sacks and films as well as industrial fittings and gas pipes. The least-dense form of polyethylene is low-density polyethylene. This type of thermoplastic is the most flexible out of this family of materials and can be used to create sheets, sacks and squeeze bottles commonly used in packaging.
                    <br/><br/>
                    Another type of thermoplastic that is commonly used for packaging is polypropylene, which is frequently used to create storage boxes. In its expanded form, polystyrene foam is also used in packaging in the form of insulation and packing materials, such as foam and packing peanuts.
                </p>

                <p className="app-item">
                    <strong>6. Non-Stick Cookware:</strong> Known as Teflon, the brand name for polytetrafluoroethylene, this type of thermoplastic is most used as a coating for non-stick cookware. Due to its characteristics, this thermoplastic can be used to reduce wear, prevent sticking and protect components from reactive chemicals
                </p>

                <p className="app-item">
                    <strong>7. Fabric & Fibers:</strong> Like nylon that is used as a substitute for silk, other thermoplastics can be used to create fabrics and fibers as well. Polypropylene can be used to manufacture ropes and carpets, while polyvinyl chloride is commonly used to create upholstery, jackets and coats.
                </p>

                <p className="app-item">
                    <strong>8. Household Goods:</strong> Thermoplastics can be found even in everyday household goods. Polypropylene, for example, is frequently used to create everyday items such as diapers, sanitary pads, stationary folders and reusable plastic containers.
                    <br/><br/>
                    Another thermoplastic that is found in everyday household goods is polystyrene, which is used in everything from smoke detector housings to DVD cases, plastic model cars and even disposable cutlery. Styrofoam is another form of polystyrene officially called extruded polystyrene foam and is used to create cups ideal for hot beverages.
                </p>

                <p className="app-item">
                    <strong>9. Construction:</strong> PVC, or polyvinyl chloride, is a popular type of thermoplastic easily found in the construction industry. This material is lightweight, but durable, making it ideal for various applications like vinyl siding, drainpipes, gutters and more
                </p>

                <p>
                    At PhlexTek, we understand the importance of materials that can keep up with your industrial demands. Durable and dependable materials that are easy to work with are critical for industrial applications. We offer a variety of thermoplastics to fit your needs. Whether you need something that’s durable, transparent, inflammable, or flexible, we can help you get the type of thermoplastic that’s right for you.
                </p>

                <p>Our adventures are crafted to inspire and ignite your wanderlust, providing a glimpse into the diverse wonders our world has to offer.</p> */}


                  <div className="blog-rich-content">
                    <PrismicRichText
                      field={blog.data.content}
                    />
          </div>
            </article>

            {/* <!-- Right Column: Sticky Sidebar Container --> */}
            <aside className="blog-sidebar">
                {/* Card 1: What We Handle */}
                <div className="sidebar-card handles-card">
                    <h3 className="sidebar-title">What We Handle ?</h3>

            { blog?.data?.sidebar_links_list.map((item: any,index: number)=>(
              <>
                        <ul className="sidebar-links-list" key={index}>
                                                                                                                                        <li><Link href="#"><span>{item.title}</span>     <img src="/images/right-arrow-resource.svg"/></Link></li>
                                                                                                                                  
                    </ul>
              </>
            ))    }   
            
    
                </div>

                {/* Card 2: Contact Support Banner */}
                <div className="sidebar-card help-banner-card">
                    <div className="banner-body">
                        <h3 className="banner-title">{blog?.data?.contact_title}</h3>
                        <a href="mailto:support@yourdomain.com" className="banner-email">{blog?.data?.email}</a>
                    </div>
                    <a href="tel:2145550180" className="banner-phone-bar">
                       <img src="/images/call-icon-res.svg"/>
                        <span>{blog?.data?.number}</span>
                    </a>
                </div>
            </aside>

        </div>
    </div>

    {/* <!-- Background Watermark Logo Image Tag --> */}
    <img src="/images/bg-logo.png" alt="" className="bg-watermark-logo" />
  </section>
      
      </>
  )
}

export default BlogDetail







// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { createClient } from "@/lib/prismic";
// import { PrismicRichText } from "@prismicio/react";

// import { notFound } from "next/navigation";

// type BlogDetailProps = {
//   uid: string;
// };

// const BlogDetail = async ({ uid }: BlogDetailProps) => {
//   const client = createClient();

//   // Current blog
//   const blog: any = await client.getByUID("blog", uid).catch(() => null);

//   if (!blog) {
//     notFound();
//   }

//   // All blogs for Related Blogs
//   const allBlogs: any = await client.getAllByType("blog", {
//     orderings: {
//       field: "my.blog.publication_date",
//       direction: "desc",
//     },
//   });

//   // Current blog ko Related Blogs se remove karo
//   const relatedBlogs = allBlogs
//     .filter((item: any) => item.id !== blog.id)
//     .slice(0, 4);

//   return (
//     <>
//       {/* =========================
//           BLOG BANNER
//       ========================== */}
//       <section className="blog-banner-section">
//         <div className="banner-container">

//           {/* Breadcrumb */}
//           <nav className="breadcrumb-nav">
//             <Link href="/blog" className="breadcrumb-link">
//               Blogs
//             </Link>

//             <span className="breadcrumb-separator">
//               <i className="ri-arrow-right-s-line"></i>
//             </span>

//             <span className="breadcrumb-current">
//               {blog.data.title}
//             </span>
//           </nav>

//           {/* Banner */}
//           <div className="banner-card">

//             {blog.data.featured_image?.url && (
//               <Image
//                 src={blog.data.featured_image.url}
//                 alt={
//                   blog.data.featured_image.alt ||
//                   blog.data.title ||
//                   "Blog"
//                 }
//                 fill
//                 className="banner-img"
//                 priority
//               />
//             )}

//             <div className="banner-overlay"></div>

//             {/* Category */}
//             {blog.data.category && (
//               <div className="banner-tags">
//                 <span className="tag-badge">
//                   {blog.data.category}
//                 </span>
//               </div>
//             )}

//             {/* Title */}
//             <h1 className="banner-title">
//               {blog.data.title}
//             </h1>

//           </div>
//         </div>
//       </section>


//       {/* =========================
//           BLOG CONTENT
//       ========================== */}
//       <section className="blog-content-section">

//         <div className="content-container">

//           {/* Author / Date */}
//           <div className="author-meta">

//             {blog.data.author_image?.url && (
//               <Image
//                 src={blog.data.author_image.url}
//                 alt={
//                   blog.data.author_name ||
//                   "Author"
//                 }
//                 width={40}
//                 height={40}
//               />
//             )}

//             {blog.data.author_name && (
//               <span>
//                 By {blog.data.author_name}
//               </span>
//             )}

//             {blog.data.publication_date && (
//               <>
//                 <span>•</span>

//                 <span>
//                   {new Date(
//                     blog.data.publication_date
//                   ).toLocaleDateString("en-US", {
//                     day: "2-digit",
//                     month: "short",
//                     year: "numeric",
//                   })}
//                 </span>
//               </>
//             )}

//           </div>


//           {/* Description */}
//           {blog.data.description && (
//             <p className="lead-text">
//               {blog.data.description}
//             </p>
//           )}


//           {/* Prismic Blog Content */}
//           <div className="blog-rich-content">
//             <PrismicRichText
//               field={blog.data.content}
//             />
//           </div>

//         </div>


//         {/* Background Watermark */}
//         <img
//           src="/images/bg-logo.png"
//           alt=""
//           className="bg-watermark-logo"
//         />

//       </section>


//       {/* =========================
//           RELATED BLOGS
//       ========================== */}
//       {/* {relatedBlogs.length > 0 && (
//         <section className="related-blogs-section">

//           <div className="related-container">

//             <div className="related-header">

//               <h2 className="section-title">
//                 Related Blogs
//               </h2>

//               <div className="slider-arrows">

//                 <button
//                   type="button"
//                   className="slick-prev-custom"
//                 >
//                   <i className="ri-arrow-left-s-line"></i>
//                 </button>

//                 <button
//                   type="button"
//                   className="slick-next-custom"
//                 >
//                   <i className="ri-arrow-right-s-line"></i>
//                 </button>

//               </div>

//             </div>


            
//             <div className="related-blog-slider">

//               {relatedBlogs.map((relatedBlog: any) => (

//                 <div
//                   className="blog-card-item"
//                   key={relatedBlog.id}
//                 >

//                   <div className="blog-card">

                
//                     <div className="card-img-box">

//                       <a
//                         href={`/blog-detail/${relatedBlog.uid}`}
//                       >

//                         {relatedBlog.data.featured_image?.url && (
//                           <Image
//                             src={
//                               relatedBlog.data.featured_image.url
//                             }
//                             alt={
//                               relatedBlog.data.featured_image.alt ||
//                               relatedBlog.data.title ||
//                               "Blog"
//                             }
//                             width={800}
//                             height={500}
//                           />
//                         )}

//                       </a>

//                     </div>


//                  }
//                     <div className="card-content">

                    
//                       <div className="author-meta">

//                         {relatedBlog.data.author_image?.url && (
//                           <Image
//                             src={
//                               relatedBlog.data.author_image.url
//                             }
//                             alt={
//                               relatedBlog.data.author_name ||
//                               "Author"
//                             }
//                             width={22}
//                             height={22}
//                           />
//                         )}

//                         <span>
//                           By {relatedBlog.data.author_name}
//                         </span>

//                         <span>•</span>

//                         <span>
//                           {relatedBlog.data.publication_date
//                             ? new Date(
//                               relatedBlog.data.publication_date
//                             ).toLocaleDateString("en-US", {
//                               day: "2-digit",
//                               month: "short",
//                               year: "numeric",
//                             })
//                             : ""}
//                         </span>

//                       </div>


              
//                       <h3 className="card-title">

//                         <a
//                           href={`/blog-detail/${relatedBlog.uid}`}
//                         >
//                           {relatedBlog.data.title}
//                         </a>

//                       </h3>


                      
//                       <p className="card-desc">
//                         {relatedBlog.data.description}
//                       </p>

//                     </div>

//                   </div>

//                 </div>

//               ))}

//             </div>

//           </div>

//         </section>
//       )} */}

      

//     </>
//   );
// };

// export default BlogDetail;