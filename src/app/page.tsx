"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="mediumLargeSizeMediumTitles"
        background="noise"
        cardStyle="outline"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        { name: "Menu", id: "menu" },
        { name: "Merch", id: "merch" },
        { name: "Our Story", id: "about" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Flower Pot Cafe"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{ variant: "radial-gradient" }}
      title="The Flower Pot Cafe and Bakery"
      description="Safe haven for the old, young, and black sheep of the family. Community of artists, dreamers, and outcasts in the heart of La Jolla."
      leftCarouselItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/breakfast-composition_23-2148104748.jpg", imageAlt: "Cafe interior" },
        { imageSrc: "http://img.b2bpic.net/free-photo/brown-coffee-beans-wood-bowl_74190-6654.jpg", imageAlt: "Barista making coffee" },
        { imageSrc: "http://img.b2bpic.net/free-photo/high-angle-doughnut-with-basked-apples_23-2148368242.jpg", imageAlt: "Cafe exterior" },
        { imageSrc: "http://img.b2bpic.net/free-photo/freshly-baked-croissant-cake-stand-counter-coffee-shop_23-2148027949.jpg", imageAlt: "Pastries display" },
        { imageSrc: "http://img.b2bpic.net/free-photo/many-hot-freshly-baked-coffee-beans-fall-from-best-professional-large-coffee-roaster_346278-554.jpg", imageAlt: "Coffee beans" },
        { imageSrc: "http://img.b2bpic.net/free-photo/this-is-my-new-profile-social-network_329181-2899.jpg", imageAlt: "Happy customers" },
      ]}
      rightCarouselItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/blonde-young-woman-choosing-pastry-from-display-cabinet-bakery_23-2148028034.jpg", imageAlt: "Fresh bakery" },
        { imageSrc: "http://img.b2bpic.net/free-photo/beautiful-women-laughing-together-medium-shot_23-2148422483.jpg", imageAlt: "Community atmosphere" },
        { imageSrc: "http://img.b2bpic.net/free-photo/dark-bread-tied-with-rustic-thread-blue-table_114579-14598.jpg", imageAlt: "Cafe cozy vibes" },
        { imageSrc: "http://img.b2bpic.net/free-photo/energy-taste-natural-grained-brown_1172-476.jpg", imageAlt: "Roasting coffee" },
        { imageSrc: "http://img.b2bpic.net/free-photo/close-up-friends-sitting-together_23-2149128359.jpg", imageAlt: "La Jolla location" },
        { imageSrc: "http://img.b2bpic.net/free-photo/bunch-red-beans-wooden-box-with-burlap_114579-39044.jpg", imageAlt: "Fresh batch roast" },
      ]}
      buttons={[{ text: "Order Online", href: "#" }]}
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/cute-elegant-calm-happy-woman-green-summer-dress-sits-with-coffee-cafe-enjoying-morning_343596-3669.jpg", alt: "Customer 1" },
        { src: "http://img.b2bpic.net/free-photo/dreamy-beautiful-woman-student-sitting-cafe-with-books-magazines-smiling-holding-phone-thinking_176420-12422.jpg", alt: "Customer 2" },
        { src: "http://img.b2bpic.net/free-photo/girl-drawing-cup-coffee-notebook_158595-662.jpg", alt: "Customer 3" },
        { src: "http://img.b2bpic.net/free-photo/coffee-break_1098-14791.jpg", alt: "Customer 4" },
        { src: "http://img.b2bpic.net/free-photo/young-woman-sitting-indoor-urban-cafe_158595-668.jpg", alt: "Customer 5" },
      ]}
      avatarText="Join our community"
      marqueeItems={[
        { type: "image", src: "http://img.b2bpic.net/free-photo/close-up-coffee-cup-with-heart-shape-latte-art-wood-table_23-2147908344.jpg", alt: "Latte art" },
        { type: "image", src: "http://img.b2bpic.net/free-photo/hot-chocolate_74190-7656.jpg", alt: "Hot chocolate" },
        { type: "image", src: "http://img.b2bpic.net/free-photo/close-up-latte-art_23-2151942585.jpg", alt: "Barista detail" },
        { type: "image", src: "http://img.b2bpic.net/free-photo/hot-chocolate_74190-6907.jpg", alt: "Coffee cup" },
        { type: "image", src: "http://img.b2bpic.net/free-photo/hot-coffee-cup-with-nice-latte-art-decoration-old-wooden-texture-table_1150-6392.jpg", alt: "Wooden table coffee" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Cafe, Community and Coffee Roasters"
      buttons={[{ text: "Our Story", href: "#about" }]}
    />
  </div>

  <div id="product" data-section="product">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="split-description"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        { id: "p1", name: "Signature Blend Coffee", price: "$18", imageSrc: "http://img.b2bpic.net/free-photo/barista-preparing-beverage_23-2149458072.jpg" },
        { id: "p2", name: "Flower Pot Mug", price: "$15", imageSrc: "http://img.b2bpic.net/free-photo/composition-delicious-picnic-goodies-blanket_23-2148921070.jpg" },
        { id: "p3", name: "Artisan Bakery Box", price: "$25", imageSrc: "http://img.b2bpic.net/free-photo/closeup-freshly-baked-croissants-bakery-blurred-background_169016-25377.jpg" },
        { id: "p4", name: "Organic Whole Beans", price: "$20", imageSrc: "http://img.b2bpic.net/free-photo/caffeine-working-coffee-cup-table_1122-2430.jpg" },
        { id: "p5", name: "Branded Tote Bag", price: "$12", imageSrc: "http://img.b2bpic.net/free-photo/group-friends-drinking-coffee_23-2148395304.jpg" },
        { id: "p6", name: "Local Honey Jar", price: "$10", imageSrc: "http://img.b2bpic.net/free-photo/italian-villa-terrace-with-scenic-view-outdoor-seating_23-2151986078.jpg" },
      ]}
      title="Shop Merchandise & Coffee"
      description="Show your Flower Pot Cafe and Bakery pride off to the world! Small batch, organic, roasted in-house."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", title: "Great Vibe", quote: "The absolute best spot in La Jolla for a morning coffee.", name: "Sarah J.", role: "Local", imageSrc: "http://img.b2bpic.net/free-photo/girl-drawing-cup-coffee-notebook_158595-664.jpg" },
        { id: "2", title: "Amazing Roasts", quote: "I buy their beans every week. Can't get enough of it.", name: "Michael R.", role: "Coffee Enthusiast", imageSrc: "http://img.b2bpic.net/free-photo/young-smiling-pretty-positive-woman-drinking-her-favorite-morning-coffee-have-nice-natural-make-up-perfect-skin_291049-325.jpg" },
        { id: "3", title: "Feels like Home", quote: "A truly inclusive space for everyone in the community.", name: "Emily K.", role: "Artist", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-man-with-chain-necklace_23-2149409803.jpg" },
        { id: "4", title: "Fresh & Organic", quote: "The pastries are always fresh and the staff is so kind.", name: "David W.", role: "Regular", imageSrc: "http://img.b2bpic.net/free-photo/close-up-people-holding-hands_23-2148894595.jpg" },
        { id: "5", title: "Top Tier Cafe", quote: "Finally, a cafe that cares about quality and community equally.", name: "Alice T.", role: "Architect", imageSrc: "http://img.b2bpic.net/free-photo/crop-mother-daughter-using-smartphone-breakfast_23-2147788237.jpg" },
      ]}
      title="What people are saying"
      description="Hear from our wonderful community members about their experiences."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{ variant: "plain" }}
      tag="Visit Us"
      title="Find Us in La Jolla"
      description="7530 Fay Avenue, La Jolla, CA 92037. Open daily 6:30am - 6:30pm."
      buttons={[{ text: "(858) 454-5453", href: "tel:8584545453" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Flower Pot Cafe"
      columns={[
        { title: "Explore", items: [{ label: "News", href: "#" }, { label: "Jobs", href: "#" }, { label: "Order Online", href: "#" }] },
        { title: "Contact", items: [{ label: "Email", href: "mailto:hello@flowerpotcafe.org" }, { label: "Phone", href: "tel:8584545453" }, { label: "Address", href: "#" }] },
        { title: "Follow", items: [{ label: "Instagram", href: "https://instagram.com" }, { label: "Facebook", href: "https://facebook.com" }] },
      ]}
      copyrightText="© 2025 Flower Pot Cafe & Bakery"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}