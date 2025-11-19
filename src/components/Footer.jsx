export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2025 MyWebsite. All rights reserved.</p>
        <div className="flex gap-6 text-xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="hover:text-white transition"
          >
            <i className="fab fa-facebook"></i> {/* FontAwesome needed or replace with svg */}
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className="hover:text-white transition"
          >
            <i className="fab fa-twitter"></i>
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hover:text-white transition"
          >
            <i className="fab fa-instagram"></i>
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
