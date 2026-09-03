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
    .filter((item) => item.id !== blog.id)
    .slice(0, 4);

  return (
    <>
      {/* =========================
          BLOG BANNER
      ========================== */}
      <section className="blog-banner-section">
        <div className="banner-container">

          {/* Breadcrumb */}
          <nav className="breadcrumb-nav">
            <Link href="/blog" className="breadcrumb-link">
              Blogs
            </Link>

            <span className="breadcrumb-separator">
              <i className="ri-arrow-right-s-line"></i>
            </span>

            <span className="breadcrumb-current">
              {blog.data.title}
            </span>
          </nav>

          {/* Banner */}
          <div className="banner-card">

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

            {/* Category */}
            {blog.data.category && (
              <div className="banner-tags">
                <span className="tag-badge">
                  {blog.data.category}
                </span>
              </div>
            )}

            {/* Title */}
            <h1 className="banner-title">
              {blog.data.title}
            </h1>

          </div>
        </div>
      </section>


      {/* =========================
          BLOG CONTENT
      ========================== */}
      <section className="blog-content-section">

        <div className="content-container">

          {/* Author / Date */}
          <div className="author-meta">

            {blog.data.author_image?.url && (
              <Image
                src={blog.data.author_image.url}
                alt={
                  blog.data.author_name ||
                  "Author"
                }
                width={40}
                height={40}
              />
            )}

            {blog.data.author_name && (
              <span>
                By {blog.data.author_name}
              </span>
            )}

            {blog.data.publication_date && (
              <>
                <span>•</span>

                <span>
                  {new Date(
                    blog.data.publication_date
                  ).toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </>
            )}

          </div>


          {/* Description */}
          {blog.data.description && (
            <p className="lead-text">
              {blog.data.description}
            </p>
          )}


          {/* Prismic Blog Content */}
          <div className="blog-rich-content">
            <PrismicRichText
              field={blog.data.content}
            />
          </div>

        </div>


        {/* Background Watermark */}
        <img
          src="/images/bg-logo.png"
          alt=""
          className="bg-watermark-logo"
        />

      </section>


      {/* =========================
          RELATED BLOGS
      ========================== */}
      {relatedBlogs.length > 0 && (
        <section className="related-blogs-section">

          <div className="related-container">

            <div className="related-header">

              <h2 className="section-title">
                Related Blogs
              </h2>

              <div className="slider-arrows">

                <button
                  type="button"
                  className="slick-prev-custom"
                >
                  <i className="ri-arrow-left-s-line"></i>
                </button>

                <button
                  type="button"
                  className="slick-next-custom"
                >
                  <i className="ri-arrow-right-s-line"></i>
                </button>

              </div>

            </div>


            {/* Related Blog Cards */}
            <div className="related-blog-slider">

              {relatedBlogs.map((relatedBlog: any) => (

                <div
                  className="blog-card-item"
                  key={relatedBlog.id}
                >

                  <div className="blog-card">

                    {/* Image */}
                    <div className="card-img-box">

                      <a
                        href={`/blog-detail/${relatedBlog.uid}`}
                      >

                        {relatedBlog.data.featured_image?.url && (
                          <Image
                            src={
                              relatedBlog.data.featured_image.url
                            }
                            alt={
                              relatedBlog.data.featured_image.alt ||
                              relatedBlog.data.title ||
                              "Blog"
                            }
                            width={800}
                            height={500}
                          />
                        )}

                      </a>

                    </div>


                    {/* Card Content */}
                    <div className="card-content">

                      {/* Author */}
                      <div className="author-meta">

                        {relatedBlog.data.author_image?.url && (
                          <Image
                            src={
                              relatedBlog.data.author_image.url
                            }
                            alt={
                              relatedBlog.data.author_name ||
                              "Author"
                            }
                            width={22}
                            height={22}
                          />
                        )}

                        <span>
                          By {relatedBlog.data.author_name}
                        </span>

                        <span>•</span>

                        <span>
                          {relatedBlog.data.publication_date
                            ? new Date(
                              relatedBlog.data.publication_date
                            ).toLocaleDateString("en-US", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })
                            : ""}
                        </span>

                      </div>


                      {/* Title */}
                      <h3 className="card-title">

                        <a
                          href={`/blog-detail/${relatedBlog.uid}`}
                        >
                          {relatedBlog.data.title}
                        </a>

                      </h3>


                      {/* Description */}
                      <p className="card-desc">
                        {relatedBlog.data.description}
                      </p>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>
      )}

    </>
  );
};

export default BlogDetail;