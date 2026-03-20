import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Grad<span className="text-accent">2</span>Office
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering the next generation of global leaders. Bridging the gap
              between academic knowledge and real-world professional success.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/programs" className="hover:text-accent transition-colors">Programs</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About Smitha</Link></li>
              <li><Link href="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="mailto:grad2office@gmail.com" className="hover:text-accent transition-colors">
                  grad2office@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/grad2office"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  @grad2office on Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          &copy; 2026 Grad2Office. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
