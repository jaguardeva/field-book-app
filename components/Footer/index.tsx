import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white mt-16">
      <div className="max-w-[1240px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                width={100}
                height={100}
                loading="eager"
                src="/logo/logo.png"
                alt="logo sewarna"
              />

              <div>
                <h2 className="text-lg font-bold text-zinc-900">
                  Sewarna Sport
                </h2>

                <p className="text-sm text-zinc-500">Booking lapangan mudah</p>
              </div>
            </div>

            <p className="text-sm text-zinc-600 leading-relaxed mt-4">
              Platform booking lapangan badminton, futsal, tenis, dan padel
              dengan proses cepat dan harga terbaik.
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="font-semibold text-zinc-900 mb-4">Navigasi</h3>

            <div className="flex flex-col gap-3 text-sm text-zinc-600">
              <Link href="/" className="hover:text-orange-500 transition">
                Beranda
              </Link>

              <Link
                href="/lapangan"
                className="hover:text-orange-500 transition"
              >
                Lapangan
              </Link>

              <Link href="/promo" className="hover:text-orange-500 transition">
                Promo
              </Link>

              <Link
                href="/tentang"
                className="hover:text-orange-500 transition"
              >
                Tentang Kami
              </Link>
            </div>
          </div>

          {/* Kategori */}
          <div>
            <h3 className="font-semibold text-zinc-900 mb-4">Kategori</h3>

            <div className="flex flex-col gap-3 text-sm text-zinc-600">
              <Link
                href="/kategori/badminton"
                className="hover:text-orange-500 transition"
              >
                Badminton
              </Link>

              <Link
                href="/kategori/futsal"
                className="hover:text-orange-500 transition"
              >
                Futsal
              </Link>

              <Link
                href="/kategori/padel"
                className="hover:text-orange-500 transition"
              >
                Padel
              </Link>

              <Link
                href="/kategori/tenis"
                className="hover:text-orange-500 transition"
              >
                Tenis
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-zinc-900 mb-4">Kontak</h3>

            <div className="flex flex-col gap-3 text-sm text-zinc-600">
              <p>Surabaya, Indonesia</p>
              <p>+62 812-3456-7890</p>
              <p>support@sewarna.id</p>
            </div>

            <div className="flex items-center gap-3 mt-5">
              <Link
                href="#"
                className="w-10 h-10 rounded-xl border hover:bg-orange-500 hover:text-white transition flex items-center justify-center"
              >
                IG
              </Link>

              <Link
                href="#"
                className="w-10 h-10 rounded-xl border hover:bg-orange-500 hover:text-white transition flex items-center justify-center"
              >
                FB
              </Link>

              <Link
                href="#"
                className="w-10 h-10 rounded-xl border hover:bg-orange-500 hover:text-white transition flex items-center justify-center"
              >
                WA
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t mt-10 pt-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-zinc-500">
            © 2026 Sewarna Sport. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-sm text-zinc-500">
            <Link
              href="/privacy-policy"
              className="hover:text-orange-500 transition"
            >
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-orange-500 transition">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
