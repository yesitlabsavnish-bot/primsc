"use client";

import React from 'react';
import Pagination from "@/components/Pagination";
import Image from "next/image";
import Link from "next/link";

const Blog = ({ blogs, page, totalPages, blogData }: { blogs: any[]; page: number; totalPages: number; blogData: any }) => {

  console.log("blogdata:", blogData);
  return (
    <>
      <main>
        {/* Hero Banner */}
                  <section className="phlex-hero-banner"  style={{
              background: `#0a0a0a url('${blogData?.background_image?.url}') no-repeat center center / cover`,
            }}>
          <div className="phlex-hero-overlay"></div>

          <div className="phlex-hero-container">
            <div className="phlex-hero-content">
              <h1 className="phlex-hero-title">
                {blogData?.blog_title}
              </h1>

              {/* <h2 className="phlex-hero-subtitle">
                Precision-Cut Carbon Fiber in High-Strength and
                Intermediate-Modulus Options
              </h2> */}

              {/* <p className="phlex-hero-desc">
                {blogs[0]?.data?.description}
              </p> */}

              <p className="phlex-hero-desc">
                {blogData?.blog_descriptipon}
              </p>
            </div>

            <div 
              className="phlex-hero-scroll"
              onClick={() => {
                document.querySelector(".phlex-adv-section")?.scrollIntoView({ behavior: "smooth" });
                window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
              }}
              style={{ cursor: "pointer" }}
            >
              <span>SCROLL TO EXPLORE</span>
              <i className="ri-arrow-down-s-line phlex-hero-scroll-icon"></i>
            </div>
          </div>
        </section>

        {/* Blog List */}
        <section className="bl-list-section">
          <div className="bl-container">

            <h2 className="bl-main-title">
             Resources
            </h2>

            <div className="bl-grid">

              {blogs.map((blog: any) => (
                <div className="bl-card" key={blog.id}>

                  <Link href={`/blog-detail/${blog.uid}`}>

                    <div className="bl-img-box">
                      {blog.data.featured_image?.url && (
                        <Image
                          src={blog.data.featured_image.url}
                          alt={
                            blog.data.featured_image.alt ||
                            blog.data.title ||
                            "Blog"
                          }
                          width={800}
                          height={500}
                        />
                      )}
                    </div>

                  </Link>

                  <div className="bl-content">

                    <div className="bl-author-meta">

                      {blog.data.author_image?.url && (
                        <Image
                          src={blog.data.author_image.url}
                          alt={blog.data.author_name || "Author"}
                          className="bl-avatar"
                          width={22}
                          height={22}
                        />
                      )}

                      <span className="bl-author-name">
                        By {blog.data.author_name}
                      </span>

                      <span className="bl-dot">
                        •
                      </span>

                      <span className="bl-date">
                        {blog.data.publication_date}
                      </span>

                    </div>

                    <h3 className="bl-title">
                      <Link href={`/blog-detail/${blog.uid}`}>
                        {blog.data.title}
                      </Link>
                    </h3>

                    <p className="bl-desc">
                      {blog.data.description}
                    </p>

                  </div>

                </div>
              ))}



            </div>
            <Pagination currentPage={page} totalPages={totalPages} />

          </div>
        </section>
      </main>
    </>
  )
}

export default Blog
