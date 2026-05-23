"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";

import BannerA from "@/public/banner/banner1.png";
import BannerB from "@/public/banner/banner2.png";
import BannerC from "@/public/banner/banner3.png";
import BannerD from "@/public/banner/banner4.png";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const Banner = [
  {
    title: "Banner 1",
    image: BannerA,
  },
  {
    title: "Banner 2",
    image: BannerB,
  },
  {
    title: "Banner 3",
    image: BannerC,
  },
  {
    title: "Banner 4",
    image: BannerD,
  },
];

export default function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    onSelect();

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="relative group">
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <div className="w-full overflow-hidden rounded-xl">
          <CarouselContent>
            {Banner.map((item, index) => {
              return (
                <CarouselItem key={index} className="pl-0">
                  <div className="max-h-100">
                    <Image
                      loading="eager"
                      src={item.image}
                      alt={item.title}
                      className="object-cover object-center w-full"
                    />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </div>

        <CarouselPrevious
          size={"icon-lg"}
          className="absolute transition-all duration-300 ease-in-out opacity-0 left-12 group-hover:opacity-100 group-hover:left-8"
        />
        <CarouselNext
          size={"icon-lg"}
          className="absolute transition-all duration-300 ease-in-out opacity-0 right-12 group-hover:opacity-100 group-hover:right-8"
        />
      </Carousel>

      {/* Indicator */}
      <div className="absolute bottom-5 right-15 flex items-center justify-center gap-1.5 bg-gray-900/80 px-1 py-1 rounded-full">
        {Banner.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              current === index ? "bg-orange-500 w-6" : "bg-zinc-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
