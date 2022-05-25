import * as React from "react";
import Script from "next/script";

const GoodreadsReadList = () => {
  return (
    <div>
      <style type="text/css" media="screen">
        {`.gr_grid_container {
          column-count: 4;
          grid-gap: 0;
        }

        .gr_grid_book_container {
          /* customize book cover container div here */
          padding: 2px;
          text-align: center;
        }`}
      </style>
      <div id="gr_grid_widget_1651799796">
        {/* <!-- Show static html as a placeholder in case js is not enabled - javascript include will override this if things work --> */}
        <div className="gr_grid_container">
          <div className="gr_grid_book_container">
            <a
              title="Battle Royale"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/57891.Battle_Royale"
            >
              <img
                alt="Battle Royale"
                border="0"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1331235272l/57891._SX98_.jpg"
              />
            </a>
          </div>
          <div className="gr_grid_book_container">
            <a
              title="Raising Steam (Discworld, #40, Moist von Lipwig #3)"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/11275323-raising-steam"
            >
              <img
                alt="Raising Steam"
                border="0"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1582860489l/11275323._SX98_.jpg"
              />
            </a>
          </div>
          <div className="gr_grid_book_container">
            <a
              title="The Final Empire (Mistborn, #1)"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/68428.The_Final_Empire"
            >
              <img
                alt="The Final Empire"
                border="0"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1617768316l/68428._SX98_.jpg"
              />
            </a>
          </div>
          <div className="gr_grid_book_container">
            <a
              title="Alcatraz Versus the Evil Librarians (Alcatraz, #1)"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/623976.Alcatraz_Versus_the_Evil_Librarians"
            >
              <img
                alt="Alcatraz Versus the Evil Librarians"
                border="0"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1332516621l/623976._SX98_.jpg"
              />
            </a>
          </div>
          <div className="gr_grid_book_container">
            <a
              title="Making Money (Discworld, #36; Moist Von Lipwig, #2)"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/116296.Making_Money"
            >
              <img
                alt="Making Money"
                border="0"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1440503111l/116296._SX98_.jpg"
              />
            </a>
          </div>
          <div className="gr_grid_book_container">
            <a
              title="The Three-Body Problem (Remembrance of Earth’s Past #1)"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/20518872-the-three-body-problem"
            >
              <img
                alt="The Three-Body Problem"
                border="0"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1415428227l/20518872._SX98_.jpg"
              />
            </a>
          </div>
          <div className="gr_grid_book_container">
            <a
              title="Going Postal (Discworld, #33; Moist von Lipwig, #1)"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/64222.Going_Postal"
            >
              <img
                alt="Going Postal"
                border="0"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388236899l/64222._SY160_.jpg"
              />
            </a>
          </div>
          <div className="gr_grid_book_container">
            <a
              title="Beach Read"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/52867387-beach-read"
            >
              <img
                alt="Beach Read"
                border="0"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1589881197l/52867387._SX98_.jpg"
              />
            </a>
          </div>
          <div className="gr_grid_book_container">
            <a
              title="Warbreaker (Warbreaker, #1)"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/1268479.Warbreaker"
            >
              <img
                alt="Warbreaker"
                border="0"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1240256182l/1268479._SX98_.jpg"
              />
            </a>
          </div>
          <div className="gr_grid_book_container">
            <a
              title="Rhythm of War (The Stormlight Archive, #4)"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/49021976-rhythm-of-war"
            >
              <img
                alt="Rhythm of War"
                border="0"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1599911216l/49021976._SX98_.jpg"
              />
            </a>
          </div>
          <div className="gr_grid_book_container">
            <a
              title="Dawnshard (The Stormlight Archive, #3.5)"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/54511226-dawnshard"
            >
              <img
                alt="Dawnshard"
                border="0"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1603931041l/54511226._SX98_.jpg"
              />
            </a>
          </div>
          <div className="gr_grid_book_container">
            <a
              title="Oathbringer (The Stormlight Archive, #3)"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/34002132-oathbringer"
            >
              <img
                alt="Oathbringer"
                border="0"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1507307833l/34002132._SX98_.jpg"
              />
            </a>
          </div>
        </div>
      </div>
      <Script
        src="https://www.goodreads.com/review/grid_widget/129465259.What%20I've%20Read%20Recently?cover_size=medium&hide_link=true&hide_title=true&num_books=12&order=d&shelf=read&sort=date_read&widget_id=1651799796"
        type="text/javascript"
        charset="utf-8"
      />
    </div>
  );
};

export default GoodreadsReadList;
