"use client";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { Button } from "./ui/button";

import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="w-full overflow-hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="">
          <CarouselItem>
            <div className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] xl:h-[500px] ">
              <Image
                alt="Banner 1"
                className="w-full h-full object-cover"
                height={1080}
                src="/banner-monitor.jpg"
                style={{
                  aspectRatio: "1920/1080",
                  objectFit: "cover",
                }}
                width={1920}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center space-y-6 md:space-y-8 text-secondary-foreground/75">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight dark:text-primary text-gray-400">
                  Discover the Future of Web Development
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl max-w-[800px] line-clamp-2 dark:text-gray-500">
                  Unlock the power of our cutting-edge platform and
                  revolutionize the way you build and deploy your web
                  applications.
                </p>
                <div className="flex gap-4">
                  <Link href="/account/cart">
                    <Button
                      className="bg-gray-700 text-white"
                      variant="secondary"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative w-full h-[300px] md:h-[350px] lg:h-[400px]  xl:h-[500px] ">
              <Image
                alt="Banner 1"
                className="w-full h-full object-cover "
                height={1080}
                src="/banner-shoes.jpg"
                style={{
                  aspectRatio: "1920/1080",
                  objectFit: "cover",
                }}
                width={1920}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center space-y-6 md:space-y-8 text-secondary-foreground/75">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight dark:text-primary text-gray-400">
                  Discover the Future of Web Development
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl max-w-[800px] line-clamp-2 dark:text-gray-500">
                  Unlock the power of our cutting-edge platform and
                  revolutionize the way you build and deploy your web
                  applications.
                </p>
                <div className="flex gap-4">
                  <Link href="/account/cart">
                    <Button
                      className="bg-gray-700 text-white"
                      variant="secondary"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] xl:h-[500px] ">
              <Image
                alt="Banner 1"
                className="w-full h-full object-center object-contain"
                height={1080}
                src="/banner-computer.jpg"
                style={{
                  aspectRatio: "1920/1080",
                  objectFit: "cover",
                }}
                width={1920}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center space-y-6 md:space-y-8 text-secondary-foreground/75">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight dark:text-primary text-gray-400">
                  Discover the Future of Web Development
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl max-w-[800px] line-clamp-2 dark:text-gray-500">
                  Unlock the power of our cutting-edge platform and
                  revolutionize the way you build and deploy your web
                  applications.
                </p>
                <div className="flex gap-4">
                  <Link href="/account/cart">
                    <Button
                      className="bg-gray-700 text-white"
                      variant="secondary"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] xl:h-[500px] ">
              <Image
                alt="Banner 1"
                className="w-full h-full object-cover"
                height={1080}
                src="/banner-headphone.jpg"
                style={{
                  aspectRatio: "1920/1080",
                  objectFit: "cover",
                }}
                width={1920}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center space-y-6 md:space-y-8 text-secondary-foreground/75">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight dark:text-primary text-gray-400">
                  Discover the Future of Web Development
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl max-w-[800px] line-clamp-2 dark:text-gray-500">
                  Unlock the power of our cutting-edge platform and
                  revolutionize the way you build and deploy your web
                  applications.
                </p>
                <div className="flex gap-4">
                  <Link href="/account/cart">
                    <Button
                      className="bg-gray-700 text-white"
                      variant="secondary"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CarouselItem>
     
          <CarouselItem>
            <div className="relative w-full h-[300px] md:h-[350px] lg:h-[400px]  xl:h-[500px] ">
              <Image
                alt="Banner 1"
                className="w-full h-full object-cover "
                height={1080}
                src="/banner-watch.jpg"
                style={{
                  aspectRatio: "1920/1080",
                  objectFit: "cover",
                }}
                width={1920}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center space-y-6 md:space-y-8 text-secondary-foreground/75">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight dark:text-primary text-gray-400">
                  Discover the Future of Web Development
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl max-w-[800px] line-clamp-2 dark:text-gray-500">
                  Unlock the power of our cutting-edge platform and
                  revolutionize the way you build and deploy your web
                  applications.
                </p>
                <div className="flex gap-4">
                  <Link href="/account/cart">
                    <Button
                      className="bg-gray-700 text-white"
                      variant="secondary"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative w-full h-[300px] md:h-[350px] lg:h-[400px]  xl:h-[500px] ">
              <Image
                alt="Banner 1"
                className="w-full h-full object-cover "
                height={1080}
                src="/banner-mobile.jpg"
                style={{
                  aspectRatio: "1920/1080",
                  objectFit: "cover",
                }}
                width={1920}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center space-y-6 md:space-y-8 text-secondary-foreground/75">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight dark:text-primary text-gray-400">
                  Discover the Future of Web Development
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl max-w-[800px] line-clamp-2 dark:text-gray-500">
                  Unlock the power of our cutting-edge platform and
                  revolutionize the way you build and deploy your web
                  applications.
                </p>
                <div className="flex gap-4">
                  <Link href="/account/cart">
                    <Button
                      className="bg-gray-700 text-white"
                      variant="secondary"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CarouselItem>
   
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-0 text-primary/75 hover:text-primary transition-colors">
          <ChevronLeftIcon className="h-8 w-8" />H
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-0 text-primary/75 hover:text-primary transition-colors">
          <ChevronRightIcon className="h-8 w-8" />
        </CarouselNext>
      </Carousel>
    </section>
  );
}
