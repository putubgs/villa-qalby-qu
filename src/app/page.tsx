import Image from "next/image";
import Link from "next/link";
import {
  Coffee,
  MapPin,
  MessageCircle,
  Mountain,
  Trees,
  Wifi,
  Music,
  Star,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] w-full">
          <Image
            src="/villa-hero-img.jpeg"
            alt="Villa Galby Qu exterior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
                Villa Galby Qu
              </h1>
              <p className="text-lg md:text-xl">
                Pengalaman menginap unik dengan pemandangan Gunung Rinjani
              </p>
            </div>
          </div>
        </section>

        {/* Room Types Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Pilihan Kamar
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {/* Standard Room */}
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="relative mb-4 h-64 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/standard-room.jpeg"
                    alt="Kamar standar"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="mb-2 text-2xl font-semibold">Kamar Standar</h3>
                <p className="mb-4 text-muted-foreground">
                  Cocok untuk pasangan atau solo traveler
                </p>
                <p className="mb-4 text-xl font-bold">Rp 350.000 / malam</p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="https://maps.app.goo.gl/b7VrYBZDnHwpYCtq6"
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                  >
                    <MapPin className="h-4 w-4" />
                    Lihat Lokasi
                  </Link>
                  <Link
                    href="https://wa.me/6281805277709"
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-medium text-white hover:bg-green-700"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Pesan via WhatsApp
                  </Link>
                </div>
              </div>

              {/* Family Room with updated image */}
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="relative mb-4 h-64 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/family-room.jpeg"
                    alt="Kamar keluarga dengan pemandangan gunung"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="mb-2 text-2xl font-semibold">Kamar Keluarga</h3>
                <p className="mb-4 text-muted-foreground">
                  Akomodasi luas untuk keluarga dengan pemandangan gunung
                </p>
                <p className="mb-4 text-xl font-bold">Rp 1.500.000 / malam</p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="https://maps.app.goo.gl/b7VrYBZDnHwpYCtq6"
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                  >
                    <MapPin className="h-4 w-4" />
                    Lihat Lokasi
                  </Link>
                  <Link
                    href="https://wa.me/6281805277709"
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-medium text-white hover:bg-green-700"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Pesan via WhatsApp
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coffee Shop Section */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">Hana Caffe</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <Image
                  src="/hana-coffee.jpeg"
                  alt="Hana Caffe"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-2xl font-semibold">Nikmati Kopi & Musik</h3>
                <p className="text-muted-foreground">
                  Hana Caffe menawarkan pengalaman kopi yang unik dengan suasana
                  modern. Nikmati berbagai menu kopi pilihan sambil menikmati
                  live music dan karaoke.
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <Coffee className="h-5 w-5" />
                    <span>Kopi Premium</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Music className="h-5 w-5" />
                    <span>Live Music</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Fasilitas Villa
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Mountain className="mb-4 h-12 w-12" />
                <h3 className="mb-2 text-xl font-semibold">
                  Pemandangan Gunung
                </h3>
                <p className="text-muted-foreground">
                  Nikmati pemandangan gunung yang memukau dari kamar Anda
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Trees className="mb-4 h-12 w-12" />
                <h3 className="mb-2 text-xl font-semibold">Taman Asri</h3>
                <p className="text-muted-foreground">
                  Taman yang indah dengan jalur pejalan kaki
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Wifi className="mb-4 h-12 w-12" />
                <h3 className="mb-2 text-xl font-semibold">WiFi Gratis</h3>
                <p className="text-muted-foreground">
                  Koneksi internet cepat di seluruh area
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Testimoni Tamu
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-card p-6 shadow-sm">
                <div className="mb-4 flex text-yellow-400">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <p className="mb-4">
                  Pemiliknya ramah, tempatnya bagus, sejuk, cocok untuk
                  keluarga, teman, berlibur
                </p>
                <p className="font-semibold">Gentar Aylep Yandana</p>
              </div>
              <div className="rounded-lg bg-card p-6 shadow-sm">
                <div className="mb-4 flex text-yellow-400">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <p className="mb-4">
                  Tempat sangat nyaman untuk liburan bersama keluarga,
                  pemandangannya sangat bagus
                </p>
                <p className="font-semibold">Sulis Tiono</p>
              </div>
              <div className="rounded-lg bg-card p-6 shadow-sm">
                <div className="mb-4 flex text-yellow-400">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <p className="mb-4">
                  Tempat yang indah dan sangat nyaman. Orangnya juga sangat
                  ramah
                </p>
                <p className="font-semibold">Azwar Anas</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
