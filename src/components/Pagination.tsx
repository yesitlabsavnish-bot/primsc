"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (totalPages <= 1) return null; // Hide pagination if only 1 page

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  // Generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="bl-pagination">
      {currentPage > 1 ? (
        <Link href={createPageURL(currentPage - 1)} className="bl-page-nav">
          &larr; Previous
        </Link>
      ) : (
        <span className="bl-page-nav" style={{ opacity: 0.5, cursor: 'not-allowed' }}>
          &larr; Previous
        </span>
      )}

      <div className="bl-page-list">
        {pageNumbers.map((page, index) => {
          if (page === '...') {
            return (
              <span key={index} className="bl-page-dots">
                ....
              </span>
            );
          }

          return (
            <Link
              key={index}
              href={createPageURL(page)}
              className={`bl-page-item ${currentPage === page ? 'active' : ''}`}
            >
              {page}
            </Link>
          );
        })}
      </div>

      {currentPage < totalPages ? (
        <Link href={createPageURL(currentPage + 1)} className="bl-page-nav">
          Next &rarr;
        </Link>
      ) : (
        <span className="bl-page-nav" style={{ opacity: 0.5, cursor: 'not-allowed' }}>
          Next &rarr;
        </span>
      )}
    </div>
  );
};

export default Pagination;
