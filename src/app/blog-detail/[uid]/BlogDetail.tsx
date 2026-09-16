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

                {blog?.data?.sidebar_links_list.map((item: any, index: number) => (
                  <>
                    <ul className="sidebar-links-list" key={index}>
                      <li><Link href={`/blog-detail/${item.redirection || ''}`}><span>{item.title}</span>     <img src="/images/right-arrow-resource.svg" /></Link></li>

                    </ul>
                  </>
                ))}


              </div>

              {/* Card 2: Contact Support Banner */}
              <div className="sidebar-card help-banner-card">
                <div className="banner-body">
                  <h3 className="banner-title">{blog?.data?.contact_title}</h3>
                  <a href="mailto:support@yourdomain.com" className="banner-email">{blog?.data?.email}</a>
                </div>
                <a href="tel:2145550180" className="banner-phone-bar">
                  <img src="/images/call-icon-res.svg" />
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


