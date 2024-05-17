import { PrismaClient } from "@prisma/client/edge";

const prisma = new PrismaClient();

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function main() {
  const listings = [
    {
      title: "Cozy Cottage",
      description: "A cozy cottage perfect for a weekend getaway.",
      imageSrc:
        "https://nosincontournables.com/wp-content/uploads/2020/05/Capture-d%E2%80%99%C3%A9cran-2020-05-12-%C3%A0-14.57.54.png",
      category: "Cottages",
      roomCount: getRandomInt(1, 3),
      bathroomCount: getRandomInt(1, 2),
      guestCount: getRandomInt(1, 4),
      locationValue: "Nashville, TN",
      price: 150,
    },
    {
      title: "Modern Apartment",
      description: "A modern apartment in the heart of the city.",
      imageSrc:
        "https://nosincontournables.com/wp-content/uploads/2020/05/Capture-d%E2%80%99%C3%A9cran-2020-05-12-%C3%A0-14.57.54.png",
      category: "Apartments",
      roomCount: getRandomInt(1, 3),
      bathroomCount: getRandomInt(1, 2),
      guestCount: getRandomInt(1, 4),
      locationValue: "New York, NY",
      price: 250,
    },
    {
      title: "Beach House",
      description: "A beautiful beach house with ocean views.",
      imageSrc:
        "https://nosincontournables.com/wp-content/uploads/2020/05/Capture-d%E2%80%99%C3%A9cran-2020-05-12-%C3%A0-14.57.54.png",
      category: "Beach Houses",
      roomCount: getRandomInt(2, 5),
      bathroomCount: getRandomInt(1, 3),
      guestCount: getRandomInt(2, 8),
      locationValue: "Malibu, CA",
      price: 500,
    },
    {
      title: "Mountain Cabin",
      description: "A rustic cabin in the mountains.",
      imageSrc:
        "https://nosincontournables.com/wp-content/uploads/2020/05/Capture-d%E2%80%99%C3%A9cran-2020-05-12-%C3%A0-14.57.54.png",
      category: "Cabins",
      roomCount: getRandomInt(1, 4),
      bathroomCount: getRandomInt(1, 2),
      guestCount: getRandomInt(2, 6),
      locationValue: "Aspen, CO",
      price: 300,
    },
    {
      title: "Luxury Villa",
      description: "A luxurious villa with all amenities.",
      imageSrc:
        "https://nosincontournables.com/wp-content/uploads/2020/05/Capture-d%E2%80%99%C3%A9cran-2020-05-12-%C3%A0-14.57.54.png",
      category: "Villas",
      roomCount: getRandomInt(3, 6),
      bathroomCount: getRandomInt(2, 4),
      guestCount: getRandomInt(4, 10),
      locationValue: "Beverly Hills, CA",
      price: 1000,
    },
  ];

  for (const listing of listings) {
    await prisma.listing.create({
      data: {
        ...listing,
        userId: "clwaq8kis0002nkg7lu8074sh", // Ensure this userId exists in your database
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
